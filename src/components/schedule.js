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
        <h1>Date: Tuesday, March 21st 2023</h1>
        <h1>Location: Computer Science Room 221</h1>
      </Tab>
      <Tab eventKey="profile" title="Gems Genesis" className="title-txt">
        <h1>Date: Saturday, March 25th 2023</h1>
        <h1>Location: Leach Theater</h1>
      </Tab>
      <Tab eventKey="longer-tab" title="Podcast" className="title-txt">
        <h1>Date: Saturdays at 1 PM (CDT)</h1>
        <h1>On ACM Entrepreneurship's YouTube channel</h1>
      </Tab>
      <Tab eventKey="contact" title="Workshop" className="title-txt">
        <h1>Date: Fridays at 7 PM (CDT)</h1>
        <h1>TJ</h1>
      </Tab>
    </Tabs>
    </div>

    <div className="calendar-container">
      <iframe
        src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FChicago&showTitle=0&showPrint=0&src=ZW50cmVwcmVuZXVyc2hpcGFjbUBnbWFpbC5jb20&color=%23039BE5"
        style={{ border: "solid 1px #777" }}
        className="calendar-iframe"
        frameBorder="0"
        scrolling="no"
        title="Calendar"
      ></iframe>
    </div>
    </>
  );
}

export default Schedule;