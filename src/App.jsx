import { useState, useRef, useEffect, useCallback } from 'react';
import './App.css';
import Side from './Side';

function App() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  // const [histories, setHistories] = useState(new Map());
  // const [historyKey, setHistoryKey] = useState(0);
  // const currentKeyNumber = useRef(0);

  useEffect(() => {
  }, []);

  return (
    <div className="container">
      <div className={isSidebarVisible ? "side-area" : "side-area hidden"}>
        <div style={{display: "flex", width: "100%"}}>
          <button
            className="sidebar-toggle-button"
            onClick={() => setIsSidebarVisible(prev => !prev)}>
            {isSidebarVisible ? (
              <>
                <FaChevronLeft/>
              </>
            ) : (
              <>
                <FaChevronRight/>
              </>
            )}
          </button>
        </div>
      </div>
      <div className="tab-area">
      </div>
    </div>
  );
}

export default App;