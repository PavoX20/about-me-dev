import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

export function Button() {
  const [text, setText] = useState("Hola mundo");
  const [typePassword, changePassowrod] = useState(false);

  const changePass = () => {
    changePassowrod(!typePassword);
  };

  const buttonChange = () => {
    if (text === "Hola mundo") {
      setText("Hello Universe");
    } else {
      setText("Hola mundo");
    }
  };

  return (
    <div className="container-fluid mx-0">
      <div className="row">
        <div className="col">
          <form>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
              <small id="emailHelp" className="form-text text-muted">
                Well never share your email with anyone else.
              </small>
            </div>

            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <i onClick={changePass} className="password-icon">
                <FontAwesomeIcon icon={typePassword ? faEyeSlash : faEye} />
              </i>
              <input
                type={typePassword ? "text" : "password"}
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              ></input>
              
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-inputform"
                id="exampleCheck1"
                onChange={changePass}
              ></input>
              <label className="form-check-label" htmlFor="exampleCheck1">
                See password
              </label>
            </div>
          </form>

          <button className="btn btn-primary" onClick={buttonChange}>
            {text}
          </button>
        </div>

        <div className="col">
          <img src="./src/img.jpg" alt="Ironhack logo" height={500}></img>
        </div>
      </div>
    </div>
  );
}
