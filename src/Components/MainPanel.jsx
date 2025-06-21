import { useState } from 'react';
import './MainPanel.css';
import TabNavigation from './TabNavigation';
import TabPanel from './TabPanel';
import Typography from '@mui/material/Typography'
import DataTable from './DataTable'


const MainPanel = (props) => {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <main className={props.isSidebarVisible ? "main-content" : "main-content hidden"}>
      <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />

      <TabPanel value={activeTab} index={0}>
        <Typography variant="body1">概要タブの中身です。</Typography>
      </TabPanel>

      <TabPanel value={activeTab} index={1}>
        <DataTable /> {/* ← 自作のMUI表コンポーネントを呼び出し */}
      </TabPanel>

      <TabPanel value={activeTab} index={2}>
        <Typography variant="body1">レポートタブの中身です。</Typography>
      </TabPanel>

    </main>
  );

};

export default MainPanel;