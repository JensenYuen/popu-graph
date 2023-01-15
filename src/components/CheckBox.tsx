import React from "react";
import { PrefInfo } from "../constants";
import '../stylesheets/checkbox.scss'

interface props {
  prefecture: PrefInfo
  getPref: (prefCode: number) => void
}

const CheckBox = ({ prefecture, getPref }: props) => {
  const { prefCode, prefName } = prefecture

  return(
    <div className='checkbox'>
      <input type="checkbox" id={prefName} name={prefName}
        onClick={() => getPref(prefCode)}
      />
      <label htmlFor={prefName}>{prefName}</label>
    </div>
  )
}

export default CheckBox;
