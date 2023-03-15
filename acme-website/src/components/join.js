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
                        <h2 className="join-h2">Weekly Meetings</h2>
                        <div className="join-p-div">
                         <p className="join-p">Tuesdays at 6:30 PM</p>
                         <p className="join-p">CS Building</p>
                         <p className="join-p">Room 221</p>
                        </div>
                    </div>

                    <div className="join_card">
                        <h2 className="join-h2">Discord</h2>
                        <div className="join-p-div">
                         <p className="join-p">Join our Discord for updates and discussions!</p>
                         <a href="#" className="join-btn">Our Discord</a>
                        </div>
                    </div>
                    
                    <div className="join_card">
                        <h2 className="join-h2">Interest Form</h2>
                        <div className="join-p-div">
                         <p className="join-p">Fill out the interest form!</p>
                         <a href="#" className="join-btn">Interest Form</a>
                        </div>
                    </div>
                </div>
            </div> 
          </section>
        </div>
      </>
    );
}

export default Join;