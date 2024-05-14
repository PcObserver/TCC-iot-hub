export interface DeviceData {
  id: string
  display_name: string
  parent_brand: string
  updated_at: string
  created_at: string
}

export interface BrandData {
  id: string
  display_name: string
  prefix: string
  updated_at: string
  created_at: string
}

export interface ActionData {
  id: string
  name: string
  payload: object
  updated_at: string
  created_at: string
}

