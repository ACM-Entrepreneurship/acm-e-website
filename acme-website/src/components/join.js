import "./join.css";

function Join() {
    return (
      <>
     
        <div className="projects">
          <h1 id="paragraph_header">How to Join</h1>
        </div>
    
        <div>
          <section>
            <div className="container">
                <div className="join_cards">
                    <div className="join_card">
                        <h1>Weekly Meetings</h1>
                        <h2>Tuesdays at 6:30 PM</h2>
                        <h2>CS Building</h2>
                        <h2>Room 221</h2>
                    </div>
                </div>
            </div> 
          </section>
        </div>

        <div>
          <section>
            <div className="container">
                <div className="join_cards">
                    <div className="join_card">
                        <h1>Discord</h1>
                        <h2>Join our Discord for updates and discussions</h2>
                        <button className="join-btn">ACM-E Discord</button>
                    </div>
                </div>
            </div> 
          </section>
        </div>
      </>
    );
}

export default Join;