import './Side.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Side = (props) => {
  return (
    <div className={props.isSidebarVisible ? "side-area" : "side-area hidden"}>
      <div style={{display: "flex", width: "100%"}}>
        <button
          className="sidebar-toggle-button"
          onClick={() => props.setIsSidebarVisible(prev => !prev)}>
          {props.isSidebarVisible ? (
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
  );
};

export default Side;