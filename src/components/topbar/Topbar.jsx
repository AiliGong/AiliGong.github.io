import "./topbar.scss";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
export default function Topbar({menuOpen, setMenuOpen}) {

  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            aili GONG
          </a>
          <div className="itemContainer">
            <PhoneInTalkIcon className="icon" />
            <span> +61 451 933 511</span>
          </div>
          <div className="itemContainer">
            <MailOutlineIcon className="icon" />
            <span> aili.elly.gong@gmail.com</span>
          </div>
        </div>

        <div className="right">
          <div className="hamburger"  onClick={()=>{
            setMenuOpen(!menuOpen)
          }}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>

          </div>
        </div>
      </div>
    </div>
  );
}
