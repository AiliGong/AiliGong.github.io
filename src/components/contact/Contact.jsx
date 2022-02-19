import "./contact.scss";

export default function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>

      <div className="right">
        <h2>Contact</h2>
        <ul>
          <li>
            <h4>Email</h4>
            <span>aili.elly.gong@gmail.com</span>
          </li>
          <li>
            <h4>Mibole</h4>
            <span>+61 451 933 511</span>
          </li>

          <li>
            <h4>LinkedIn</h4>
            <span>http://www.linkedin.com/in/aili-gong</span>
          </li>
          <li>
            <h4>GitHub</h4>
            <span>http://github.com/AiliGong</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
