import React from "react";
import Logo from "../../assets/404.svg";

function NotFound() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: 'column',
          width: '100%',
          height: '100vh'
        }}
      >
        <img src={Logo} alt="logo" style={{ height: 144 }} />
        <h4 style={{textAlign: 'center'}}>Page not found...</h4>
        <p style={{textAlign: 'center'}}>Go to <a href="/list">Homepage</a></p>
      </div>
    );
}

export default NotFound;
