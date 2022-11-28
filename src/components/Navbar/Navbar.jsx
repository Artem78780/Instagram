import UserBadge from "../UserBadge/UserBadge";
import "./style.css";

function Navbar({nickName, avatarUrl, id}) {
  return (
    <div className="navbarRoot">
      <div className="navbarWrapper">
        <span>Instagram</span>
        <UserBadge 
          nickName={nickName} 
          avatarUrl={avatarUrl} 
          id={id}
        />
      </div>
    </div>
  );
}
export default Navbar;
