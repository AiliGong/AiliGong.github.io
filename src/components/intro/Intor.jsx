import "./intro.scss";
import { useEffect, useRef } from "react";
import { init } from "ityped";

export default function Intor() {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 100,
      strings: ["CS Graduate", "Job Seeker"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="image">
          <img src="assets/avatar.JPG" alt=""></img>
        </div>
      </div>

      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Aili Gong</h1>
          <h3>
            <span ref={textRef}></span>
          </h3>
        </div>

        <a href="#skills">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
