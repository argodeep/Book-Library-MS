import React from "react";
import Logo from "../../../assets/logo.svg";

function Loader() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: 'column',
          width: '100%',
          height: 'calc(100vh - 76px)'
        }}
      >
        <img src={Logo} alt="logo" style={{ height: 144 }} />
        <p style={{textAlign: 'center'}}>Loading...</p>
      </div>
    );
}

export default Loader;
