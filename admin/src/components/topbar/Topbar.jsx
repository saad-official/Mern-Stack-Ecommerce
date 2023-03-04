import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/userRedux";
import { Link } from "react-router-dom";
export default function Topbar() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.currentUser);
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">lamaadmin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <Link to='/login'>
          <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" onClick={(e) =>{dispatch(logout())}} />
          </Link>

          {/* <Link to="/signup" className="btn btn-primary">Sign up</Link> */}

        </div>
      </div>
    </div>
  );
}
