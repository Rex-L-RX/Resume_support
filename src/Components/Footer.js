import React from "react";
import Fade from "react-awesome-reveal";

function Footer(props){
  if (!props.data) return null;

    const networks = props.data.social.map(function (network) {
      return (
        <li key={network.name}>
          <a href={network.url}>
            <i className={network.className}></i>
          </a>
        </li>
      );
    });

    return (
      <footer id="footer">
        <div className="row">
          <Fade bottom>
            <div className="twelve columns">
              <ul className="social-links">{networks}</ul>
              <ul className="copyright">
                <li>&copy; Copyright 2022-2024 github.com/Rex-L-RX</li>
              </ul>
            </div>
          </Fade>

          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open"></i>
            </a>
          </div>
        </div>
      </footer>
    );
}

export default Footer;
