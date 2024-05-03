'use client';
import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { deleteCookie, getCookie, setCookie } from 'cookies-next';

import { api } from "@/services/api";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export type SignInData = {
  email: string;
  password: string;
}

type AuthContextType = {
  signIn: (data: SignInData) => Promise<void>
  signOut: () => Promise<void>
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }: { children: ReactNode }) {
  const router = useRouter()


  // @Abc123456
  async function signIn(data: SignInData) {
    await api.post('/api/users/log_in/', data, {
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(response => {
      const { access: sessionToken, refresh: refreshToken } = response.data ?? {}

      const oneYearInMilliseconds = 365 * 24 * 60 * 60 * 1000;
      const expires = new Date(Date.now() + oneYearInMilliseconds);

      setCookie('sessionToken', sessionToken, { expires });
      setCookie('refreshToken', refreshToken, { expires });
      api.defaults.headers.authorization = `Bearer ${sessionToken}`;

      router.push('/dashboard')
    }).catch(() => {
      toast.error('Erro ao tentar login. Verifique as credenciais usadas')
    })
  }

  async function signOut() {
    const refreshToken = getCookie('refreshToken')

    await api.post('/api/users/log_out/', { refresh: refreshToken }, {
      headers: {
        'Content-Type': 'application/json',
      }
    })

    deleteCookie('sessionToken');
    deleteCookie('refreshToken');

    router.push('/')
  }

  return (
    <AuthContext.Provider value={{ signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuthContext(): AuthContextType {
  const context = useContext(AuthContext);

  return context;
}