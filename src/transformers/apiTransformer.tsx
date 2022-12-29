import { CatInfo } from "../constants"

export const transformPopuRes = (catInfo: CatInfo) => {
  const { data } = catInfo;

  return {
    values: data.map((catInfo) => (catInfo.value)),
    years: data.map((catInfo) => (catInfo.year))
  };
}
