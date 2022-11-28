import { useNavigate } from "react-router-dom";
import "./style.css";

function UserBadge({ nickName, avatarUrl, id }) {

    const navigate = useNavigate()

    function onUserBadgeClick() {
        navigate(`/${id}`)
    }

  return (
    <div className="userPageRoot" onClick={onUserBadgeClick}>
      {avatarUrl ? (
        <img
          src={avatarUrl}
          alt="logo"
          className="userAvatarLogo"
        />
      ) : (
        <div className="userAvatarPlaceholder" />
      )}
      <span className="userBadgeName">{nickName}</span>
    </div>
  );
}

export default UserBadge;
