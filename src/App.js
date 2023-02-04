import React from 'react';
import { ReactComponent as IconGithub } from './assets/icons/github.svg';
import "./App.css";

class App extends React.Component {
  render = () => {
    return (
      <div className="card">
        <div className="header">
          <div className="logo">
            <a href=".">VEZORO</a>
          </div>
          <div className="social">
            <a href="https://github.com/vezoro" title="GitHub" target="_blank" rel="noopener noreferrer">
              <IconGithub className="icon" />
            </a>
          </div>
        </div>
        <div className="content">
          <div className="title-holder">
            <h1>Get ready for the change.</h1>
            <p>Website coming soon. Please check back to know more. Shoot us an email if you're curious.</p>
          </div>
          <a href="mailto:contact@vezoro.co.uk">
            <div className="cta">Send us an email</div>
          </a>
        </div>
        <div className="footer">
          <span>Copyright <a className="underlined" href="https://github.com/vezoro" target="_blank" rel="noopener noreferrer">Vezoro</a> 2023 </span>
        </div>
      </div>
    );
  }
}

export default App;