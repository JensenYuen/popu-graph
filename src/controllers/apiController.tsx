import { API_URI_ALL_PREF, API_URI_POPULATION, URI_OPTION } from "../constants"
import { AllPrefRes, PrefPopuRes } from "../constants/apiModal";
import { transformPopuRes } from "../transformers/apiTransformer";

export const getAllPrefectures = async () => {
  let res = await fetch(API_URI_ALL_PREF, URI_OPTION);

  let data: AllPrefRes = await res.json();

  if (!res.ok) {
    const message = `都道府県情報が取りません: ${res.status}`;
    throw new Error(message);
  }

  return { data: data.result };
}

export const getPrefPopulation = async (prefCode: number) => {
  const uri = `${API_URI_POPULATION}${prefCode}`;

  let res = await fetch(uri, URI_OPTION);

  let data: PrefPopuRes = await res.json();
  if (!res.ok) {
    const message = `府県情報が取りません: ${res.status}`;
    throw new Error(message);
  }
  const popuData = transformPopuRes(data.result?.data[0]!)

  return { ...popuData, prefCode }
}
