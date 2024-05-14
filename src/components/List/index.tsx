import DeviceItem from './DeviceItem'
import BrandItem from './BrandItem'
import ActionItem from './ActionItem'
import { ReactNode } from 'react'

interface ListProps {
  children: ReactNode
}

export default function List({ children }: ListProps) {
  return (
    <div className="container mt-4 flex flex-col gap-4">
      {children}
    </div>
  )
}

export {
  DeviceItem,
  BrandItem,
  ActionItem
}