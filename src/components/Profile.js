import React from "react";
import { connect } from "react-redux";
import { logOff } from "../redux/actions";

import { body } from "../style/styles";

function Profile({ loginName, logOff }) {
  const logout = () => {
    localStorage.auth = false;
    localStorage.login = "";
    logOff();
  };

  return (
    <div style={body}>
      <p>
        Вы авторизованы под логином{" "}
        <span style={{ fontWeight: "700" }}>{loginName}</span>
      </p>
      <button onClick={logout} className="btn btn-danger">
        Выйти
      </button>
    </div>
  );
}

const mapDispatchToProps = {
  logOff,
};

const mapStateToProps = (state) => {
  return {
    loginName: state.auth.login,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
