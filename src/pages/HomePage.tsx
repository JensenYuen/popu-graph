import React, { useMemo, useState } from 'react';
import { CheckBox, Graph, Overlay, Toast } from '../components';
import { getAllPrefectures, getPrefPopulation } from '../controllers/apiController';
import { PrefInfo } from '../constants/apiModal'
import '../stylesheets/homepage.scss';
import '../stylesheets/global.scss';

export interface graphData {
  prefCode: number;
  prefName: string;
  values: number[];
  years: number[];
}

const HomePage = () => {
  const [prefectures, setprefectures] = useState<PrefInfo[]>([]);
  const [prefCodes, setPrefCodes] = useState<number[]>([]);
  const [prefInfos, setPrefInfos] = useState<graphData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useMemo(() => {
    setIsLoading(true);

    if (prefCodes.length === 0) {
      setPrefInfos([]);
      setIsLoading(false);
    } else {
      const prefInforRes = prefCodes.map((prefCode) => {
        const prefInfo = prefInfos.find((prefInfo) => (prefInfo.prefCode === prefCode));

        if (!prefInfo) {
          const data = getPrefPopulation(prefCode);
          return data;
        }

        return prefInfo;
      })

      Promise.all(prefInforRes).then((prefInforRes) => {
        const prefInfos = prefInforRes.map((prefInfo) => {
          const prefName = prefectures.find((pref) => (pref.prefCode === prefInfo.prefCode))?.prefName!
          return({
            ...prefInfo,
            prefName
          })
        });

        setPrefInfos(prefInfos)
        setIsLoading(false);
      })
    }
  },[prefCodes])

  useMemo(async () => {
    setIsLoading(true);
    const data = await getAllPrefectures();
    if (data.data) {
      setprefectures(data.data!)
    } else {
      setErrorMessage(data.message!)
    }

    setIsLoading(false);
  },[])

  const getPref = (prefCode: number) => {
    const isPresent = prefCodes.find(code => code === prefCode);

    if (isPresent) {
      const tempCode = prefCodes.filter(code => code !== prefCode);

      setPrefCodes(tempCode);
    } else {
      setPrefCodes([...prefCodes, prefCode]);
    }
  }

  const renderCheckboxes = () => {
    const checkboxes = prefectures.map((prefecture) => {
      return (
        <CheckBox
          key={prefecture.prefName}
          prefecture={prefecture}
          getPref={getPref}
        />
      );
    })
    return checkboxes
  }

  return (
    <main>
      {isLoading && <Overlay />}
      {errorMessage && <Toast type='error' message={errorMessage}/>}
      <h1 style={{
        background:'#7a7a7a',
        textAlign:'center',
        margin: 0,
        fontWeight: 'normal',
        color:'snow'}}>
          日本府県人口</h1>
      <div className='container'>
        <div className='content'>
          <fieldset className='fieldset'>
            <legend>都道府県</legend>
            <div className='checkbox-grid'>
              {prefectures && renderCheckboxes()}
            </div>
          </fieldset>
          <div className='graph'>
            <Graph
              prefInfos={prefInfos}/>
          </div>
        </div>
      </div>
    </main>
  );
}

export default HomePage;
