export interface AllPrefRes {
  description?: string,
  message?: string | null,
  statusCode?: string,
  result?: PrefInfo[],
}

export interface PrefInfo {
  prefCode: number,
  prefName: string,
}

export interface PrefPopuRes {
  description?: string,
  message?: string | null,
  statusCode?: string,
  result?: PopuInfo,
}

export interface PopuInfo {
  boundaryYear: number,
  data: CatInfo[],
}

export interface CatInfo{
  label: string,
  data: PopuData[]
}

export interface PopuData {
  year: number,
  value: number
}
