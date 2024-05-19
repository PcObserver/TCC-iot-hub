export interface DeviceData {
  id: string
  display_name: string
  parent_brand: string
  updated_at: string
  created_at: string
  positive_reviews_count: string
  actions_count: string
}

export type AddDeviceData = {
  display_name: string
  prefix: string
  parent_brand: string
  description: string
}

export interface BrandData {
  id: string
  display_name: string
  prefix: string
  updated_at: string
  created_at: string
  devices_count: string
  positive_reviews_count: string
}

export interface ActionData {
  id: string
  name: string
  payload: object
  updated_at: string
  created_at: string
  positive_reviews_count: string
}

export type AddActionData = {
  name: string
  method: string
  protocol: string
  payload: string
  device: string
}



export type searchParamsType = { [key: string]: string | string[] | undefined }
