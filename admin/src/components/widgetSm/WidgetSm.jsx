import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import { useState } from "react";
import { useEffect } from "react";
import { userRequest } from "../../requestMethods";

export default function WidgetSm() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await userRequest.get("users/?new=true");
        setUsers(res.data);
      }
      catch (error)
      {
        console.log(error);
       }
    };
    getUsers()
  }, []);

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {users.slice(0, 5).map((user)=> (
           <li className="widgetSmListItem" key={user._id}>
           <img
             src={users.img  || "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"}
             alt=""
             className="widgetSmImg"
           />
           <div className="widgetSmUser">
              <span className="widgetSmUsername">{user.username}</span>

           </div>
           <button className="widgetSmButton">
             <Visibility className="widgetSmIcon" />
             Display
           </button>
         </li>
           
        ))}
      
      </ul>
    </div>
  );
}
