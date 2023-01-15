import { API_URI_ALL_PREF, API_URI_POPULATION, URI_OPTION } from "../constants"
import { AllPrefRes, PrefPopuRes } from "../constants/apiModal";
import { transformPopuRes } from "../transformers/apiTransformer";

export const getAllPrefectures = async () => {
  let res = await fetch(API_URI_ALL_PREF, URI_OPTION);
  const message = '都道府県情報が取りません';

  if (!res.ok) {
    throw new Error(message);
  }

  let data: AllPrefRes = await res.json();

  if (data.statusCode === '400' ||
      data.statusCode === '403' ||
      data.statusCode === '404') {
    return {
      message: message,
      statusCode: data.statusCode
    }
  }

  return { data: data.result };
}

export const getPrefPopulation = async (prefCode: number) => {
  const uri = `${API_URI_POPULATION}${prefCode}`;
  let res = await fetch(uri, URI_OPTION);

  const message = '府県情報が取りません';
  if (!res.ok) {
    throw new Error(message);
  }

  let data: PrefPopuRes = await res.json();

  const popuData = transformPopuRes(data.result?.data[0]!)

  return { ...popuData, prefCode }
}
