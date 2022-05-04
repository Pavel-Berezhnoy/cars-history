import React from 'react';
import '../style/style.css';

export default function TabContent({ children, selected, currentIndex }) {
  return (
    <div
      role="tabpanel"
      hidden={selected !== currentIndex}
      className="tab-content"
    >
      {selected === currentIndex ? (
        children
      ) : <></>}
    </div>
  )
}
