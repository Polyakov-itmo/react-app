import React, { useState } from "react";
import { connect } from "react-redux";

import { Authorization, showError, hideError } from "../redux/actions";
import { formStyle } from "../style/styles";
import { admin } from "../data";

function Login({ Authorization, showError, error }) {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const enterHandler = ({ error }) => {
    if (login === admin.login && password === admin.password) {
      localStorage.login = login;
      localStorage.auth = true;
      Authorization(login);
    } else {
      showError();
    }
    setLogin("");
    setPassword("");
  };

  return (
    <div style={formStyle}>
      <div className="mb-3 row">
        <label className="col-sm-2 col-form-label">login</label>
        <div className="col-sm-10">
          <input
            onChange={(e) => {
              setLogin(e.target.value);
            }}
            value={login}
            type="login"
            className="form-control"
            id="inputPassword"
          />
        </div>
      </div>
      <div className="mb-3 row">
        <label className="col-sm-2 col-form-label">Password</label>
        <div className="col-sm-10">
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
            type="password"
            className="form-control"
            id="inputPassword"
          />
        </div>
      </div>
      <button className="btn btn-primary" onClick={enterHandler}>
        Enter
      </button>

      {error && (
        <div
          style={{ marginTop: "20px" }}
          class="alert alert-warning"
          role="alert"
        >
          Данные введены неверно.
        </div>
      )}
    </div>
  );
}

const mapDispatchToProps = {
  Authorization,
  showError,
};

const mapStateToProps = (state) => {
  return {
    error: state.auth.error,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
