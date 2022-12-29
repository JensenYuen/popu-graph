export const API_URI_ALL_PREF = 'https://opendata.resas-portal.go.jp/api/v1/prefectures'

export const API_URI_POPULATION = 'https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?cityCode=-&prefCode='

export const API_KEY = process.env.REACT_APP_RESAS_API_KEY;

export const URI_OPTION = {
  'method': 'GET',
  'headers': {
    'X-API-KEY': API_KEY!
  }
}
