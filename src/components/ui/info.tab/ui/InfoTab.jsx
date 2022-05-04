import React from 'react';

import { translate } from '../../../constants/translate';

import '../style/style.css';

export default function InfoTab({ infoObject }) {
  const properties = Object.entries(infoObject).filter(
    ([propertyName, propertyValue]) => propertyName !== 'id' && !Array.isArray(propertyValue)
  );
  return (
    <>
      {properties.map(([key, item]) => {
        return (
          <div key={key} className='info-tab'>
            <span>
              {translate.get(key)}:
            </span>
            <span>
              {item}
            </span>
          </div>
        )
      })}
    </>
  )
}
