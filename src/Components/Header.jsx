import "../App.css";
const whatsApp = "https://wa.me/573005239992";

function Header() {
  return (
    <div id="header">
      <ul>
        <a href="#profileInfo">
          <li>Profile</li>
        </a>
        <a href="#Projects">
          <li>Projects</li>
        </a>
        <a href={whatsApp}>
          <li>Contact Me</li>
        </a>
      </ul>
    </div>
  );
}
export default Header;
