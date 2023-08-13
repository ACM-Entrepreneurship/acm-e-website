import "./schedule.css";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function Schedule() {
  return (
    <>
    <div id="events" className="projects">
      <h1 id="paragraph_header">Events</h1>
    </div>

    <div className="center-tabs">
    <Tabs
      defaultActiveKey="profile"
      id="fill-tab-example"
      className="mb-3 custom-tabs"
      fill
    >
      <Tab eventKey="home" title="General Meeting" className="title-txt">
        <h1>Date: To be decided</h1>
        <h1>Location: To be decided</h1>
      </Tab>
      <Tab eventKey="profile" title="Gems Genesis" className="title-txt">
        <h1>Date: To be decided</h1>
        <h1>Location: Leach Theater</h1>
      </Tab>
      <Tab eventKey="longer-tab" title="Podcast" className="title-txt">
        <h1>Date: Saturdays at 1 PM (CDT)</h1>
        <h1>Location: ACM-E's YouTube channel</h1>
      </Tab>
      <Tab eventKey="contact" title="Workshop" className="title-txt">
        <h1>Date: To be decided</h1>
        <h1>Location: To be decided</h1>
      </Tab>
    </Tabs>
    </div>

    <div className="calendar-container">

      <iframe 
        src="https://embed.styledcalendar.com/#wwIokEobM16ymcnilyks" 
        title="Styled Calendar" 
        className="styled-calendar-container desktop-calendar" 
        style={{ width: "80vh", height: "80vh", border: "none" }}
        data-cy="calendar-embed-iframe"
      ></iframe>
      <script async type="module" src="https://embed.styledcalendar.com/assets/parent-window.js"></script>

      <iframe
        src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FChicago&showTitle=0&showPrint=0&src=ZW50cmVwcmVuZXVyc2hpcGFjbUBnbWFpbC5jb20&color=%23039BE5"
        style={{ border: "solid 1px #777" }}
        className="calendar-iframe mobile-calendar"
        frameBorder="0"
        scrolling="no"
        title="Calendar"
      ></iframe>

    </div>
    </>
  );
}

export default Schedule;