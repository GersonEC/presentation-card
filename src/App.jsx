import * as React from "react";
import { BiUser } from "react-icons/bi";
import { BiMap } from "react-icons/bi";
import { BiPhone } from "react-icons/bi";
import { BiLock } from "react-icons/bi";
import { BiCalendar } from "react-icons/bi";
import { BiMailSend } from "react-icons/bi";
import "./App.css";

function App() {
  const [user, setUser] = React.useState(null);
  const [targetIcon, setTargetIcon] = React.useState(null);

  //Effect that set the user profile
  React.useEffect(() => {
    const setUserFromApi = () => {
      fetch("https://randomuser.me/api/")
        .then((response) => response.json())
        .then((data) => {
          setUser(data.results[0]);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    setUserFromApi();
  }, []);

  return (
    <div className="App">
      <main className="main">
        <div className="card_header">
          <div className="image_container">
            {user && user.picture.large ? (
              <img
                className="image_profile"
                src={user && user.picture.large}
                alt={"profilo"}
                width={185}
                title={user && user.name.first}
              />
            ) : null}
          </div>
        </div>
        <div className="card_body">
          <div className="info_detail">
            {targetIcon ? (
              <p className="user_greeting">Hi, my {targetIcon} is</p>
            ) : null}
            {targetIcon && targetIcon === "name" && (
              <p className="user_target_info">
                {user.name.first} {user.name.last}
              </p>
            )}
            {targetIcon && targetIcon === "email" && (
              <p className="user_target_info">{user.email}</p>
            )}
            {targetIcon && targetIcon === "birthday" && (
              <p className="user_target_info">{user.dob.date.slice(0, 10)}</p>
            )}
            {targetIcon && targetIcon === "address" && (
              <p className="user_target_info">
                {user.location.street.number} {user.location.street.name},{" "}
                {user.location.city}
              </p>
            )}
            {targetIcon && targetIcon === "phone" && (
              <p className="user_target_info">{user.phone}</p>
            )}
            {targetIcon && targetIcon === "password" && (
              <p className="user_target_info">{user.login.password}</p>
            )}
          </div>
          <div className="icons_container">
            <div
              className="icon"
              onMouseEnter={() => setTargetIcon("name")}
              onMouseLeave={() => setTargetIcon(null)}
            >
              {" "}
              <BiUser />
            </div>
            <div
              className="icon"
              onMouseEnter={() => setTargetIcon("email")}
              onMouseLeave={() => setTargetIcon(null)}
            >
              {" "}
              <BiMailSend />{" "}
            </div>
            <div
              className="icon"
              onMouseEnter={() => setTargetIcon("birthday")}
              onMouseLeave={() => setTargetIcon(null)}
            >
              {" "}
              <BiCalendar />{" "}
            </div>
            <div
              className="icon"
              onMouseEnter={() => setTargetIcon("address")}
              onMouseLeave={() => setTargetIcon(null)}
            >
              {" "}
              <BiMap />{" "}
            </div>
            <div
              className="icon"
              onMouseEnter={() => setTargetIcon("phone")}
              onMouseLeave={() => setTargetIcon(null)}
            >
              {" "}
              <BiPhone />{" "}
            </div>
            <div
              className="icon"
              onMouseEnter={() => setTargetIcon("password")}
              onMouseLeave={() => setTargetIcon(null)}
            >
              {" "}
              <BiLock />{" "}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
