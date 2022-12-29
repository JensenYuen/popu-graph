import React, { useMemo, useState } from 'react';
import '../stylesheets/homepage.css';

export interface graphData {
  prefCode: number;
  prefName: string;
  values: number[];
  years: number[];
}

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(false);


  return (
    <main>
      <div className={`overlay ${isLoading ? '': 'hidden'}`}>
        <div className='spinner' />
      </div>
      <h1 style={{ background:'#7a7a7a', textAlign:'center', margin: 0, fontWeight: 'normal'}}>日本府県人口</h1>
      <div className='container'>
        <div className='content'>
          <fieldset className='fieldset'>
            <legend>都道府県</legend>
            <div className='checkbox-grid'>
            </div>
          </fieldset>
          <div className='graph'>
          </div>
        </div>
      </div>
    </main>
  );
}

export default HomePage;
