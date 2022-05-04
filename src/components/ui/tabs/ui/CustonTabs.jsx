import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TabContent from './TabContent';

export default function CustomTabs({ listTabs }) {
  const tabs = [...listTabs];
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const changeTabHandle = (_, tab) => {
    setActiveTab(tab);
  }
  return (
    <Box sx={{ width: '100%', height: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={activeTab} onChange={changeTabHandle}>
          {tabs.length > 0 ? tabs.map(tab => <Tab key={tab.id} label={tab.label} id={`tab-${tab.id}`} />) : <></>}
        </Tabs>
      </Box>
      {tabs.length > 0 ? tabs.map(tab => <TabContent key={tab.id} selected={activeTab} currentIndex={tab.id}>
        {tab.content}
      </TabContent>) : <></>}
    </Box>
  )
}
