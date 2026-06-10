// import { Link } from "react-router-dom";
// import heroImg from "../assets/hero.png";
import mock_pfp from "/mock_pfp.png";
import "./UserProfileInfo.css";

const UserProfileInfo = ({ username, description }) => {
  return (
    <>
      <div className="main-div-user-profile">
        <div className="user-profile-container">
          <img src={mock_pfp} className="img-container-user-profile"></img>
          <div className="text-container-user-profile">
            <h2>{username}</h2>
            <hr color="#222225"></hr>
            <div>{description}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfileInfo;
