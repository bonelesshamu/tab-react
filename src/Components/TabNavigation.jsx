import { Tabs, Tab } from '@mui/material'

const tabLabels = ['概要', 'データ一覧', 'レポート']

export default function TabNavigation({ activeTab, setActiveTab }) {
  const handleChange = (event, newValue) => {
    setActiveTab(newValue)
  }

  return (
    <Tabs
      value={activeTab}
      onChange={handleChange}
      textColor="primary"
      indicatorColor="primary"
      sx={{'& .MuiTab-root': {fontSize: '2rem'}}}
    >
      {tabLabels.map((label, idx) => (
        <Tab key={idx} label={label} sx={{'&:focus': {outline: 'none'}}}/>
      ))}
    </Tabs>
  )
}