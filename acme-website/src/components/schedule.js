import { useState } from "react";
import "./schedule.css";

function Schedule() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <>
    <div id="events" className="projects">
       <h1 id="paragraph_header">Events</h1>
    </div>
    <div className="schedule-container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          General Meeting
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Gems Genesis
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Podcast
        </button>
        <button
          className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(4)}
        >
          Speaker
        </button>
      </div>

      <div className="schedule-content-tabs">
        <div
          className={toggleState === 1 ? "schedule-content  active-schedule-content" : "schedule-content"}
        >
          
          <h2>Date: Tuesday, March 21st 2023</h2>
          <h2>Location: Computer Science Room 221</h2>
        </div>

        <div
          className={toggleState === 2 ? "schedule-content  active-schedule-content" : "schedule-content"}
        >
        
          <h2>Date: Saturday, March 25th 2023</h2>
          <h2>Location: Leach Theater</h2>
        </div>

        <div
          className={toggleState === 3 ? "schedule-content  active-schedule-content" : "schedule-content"}
        >
          
          <h2>Guest: Elon Musk</h2>
          <h2>Date: Monday, March 27th 2023</h2>
          <h2>Location: Leach Theater</h2>
        </div>

        <div
          className={toggleState === 4 ? "schedule-content  active-schedule-content" : "schedule-content"}
        >
          
          <h2>Guest: Bill Gates</h2>
          <h2>Date: Tuesday, March 28th 2023</h2>
          <h2>Location: CS 210</h2>
        </div>

      </div>
    </div>
    </>
  );
}

export default Schedule;