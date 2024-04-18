import React from 'react'


const Resume = () => {
  return (
    <div className="w3-content w3-margin-top" style={{ maxWidth: "1400px" }}>
      <div className="w3-row-padding">
        <div className="w3-third">
          <div className="w3-white w3-text-grey w3-card-4">
            <div className="w3-display-container">
              <img src="/w3images/avatar_hat.jpg" style={{ width: "100%" }} alt="Avatar" />
              <div className="w3-display-bottomleft w3-container w3-text-black">
                <h2>Jane Doe</h2>
              </div>
            </div>
            <div className="w3-container">
              <p><i className="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i>Designer</p>
              <p><i className="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i>London, UK</p>
              <p><i className="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i>ex@mail.com</p>
              <p><i className="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i>1224435534</p>
              <hr />
              <p className="w3-large"><b><i className="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"></i>Skills</b></p>
              <p>Adobe Photoshop</p>
              <div className="w3-light-grey w3-round-xlarge w3-small">
                <div className="w3-container w3-center w3-round-xlarge w3-teal" style={{ width: "90%" }}>90%</div>
              </div>
              {/* Rest of the skills... */}
            </div>
          </div>
        </div>
        {/* Right Column and other content... */}
      </div>
      <footer className="w3-container w3-teal w3-center w3-margin-top">
        <p>Find me on social media.</p>
        <i className="fa fa-facebook-official w3-hover-opacity"></i>
        {/* Other social media icons... */}
        <p>Powered by <a href="https://www.w3schools.com/w3css/default.asp" target="_blank">w3.css</a></p>
      </footer>
    </div>
  );
};
  

export default Resume