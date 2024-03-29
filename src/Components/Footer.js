import LinkedinIcon from "../assets/linkedin.png";
import GithubIcon from "../assets/github.png";
import InstagramIcon from "../assets/instagram.png";

export default function Footer() {
  return (
    <div id="footer" className="footer">
      <h5>Skills:</h5>
      <div className="container">
        <ul>
          <li>HTML</li>
          <li>CSS </li>
          <li>JS</li>
          <li>React</li>
          <li>Bootstrap</li>
          <li>SCSS</li>
          <li>PHP</li>
          <li>WordPress</li>
        </ul>
      </div>
      <div className="container icons">
        <ul>
          <li>
            <a href="https://www.instagram.com/i_viktorr">
              <img src={InstagramIcon} alt="social-icon" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/viktor-ivanovski-a47b8426a/">
              <img src={LinkedinIcon} alt="social-icon" />
            </a>
          </li>
          <li>
            <a href="https://github.com/ivanovski-viktor">
              <img src={GithubIcon} alt="social-icon" />
            </a>
          </li>
        </ul>
      </div>
      <div className="container">
        <p>Located in Skopje - Macedonia</p>
      </div>
      <p>E-Mail: ivanovski.viktor@uklo.edu.mk</p>
    </div>
  );
}
