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

export type RegisterData = {
  email: string;
  password: string;
  password_confirmation: string;
}

type AuthContextType = {
  signIn: (data: SignInData) => Promise<void>
  signUp: (data: RegisterData) => Promise<void>
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

  async function signUp(data: RegisterData) {
    await api.post('/api/users/sign_up/', data, {
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(() => {
      router.push('/login')
      toast.success('Conta criada!')
    }).catch(() => {
      toast.error('Erro ao tentar cadastrar conta. Verifique as credenciais usadas')
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
    <AuthContext.Provider value={{ signIn, signOut, signUp }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuthContext(): AuthContextType {
  const context = useContext(AuthContext);

  return context;
}