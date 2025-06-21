import { useState } from 'react';
import './App.css';
import Side from './Components/Side';
import MainPanel from './Components/MainPanel';

function App() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  return (
    <div className="container">
      <Side isSidebarVisible={isSidebarVisible} setIsSidebarVisible={setIsSidebarVisible}/>
      <MainPanel isSidebarVisible={isSidebarVisible}/>
    </div>
  );
}

export default App;