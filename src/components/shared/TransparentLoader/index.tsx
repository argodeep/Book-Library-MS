import React from "react";
// import Logo from "../../../assets/logo.svg";

function TransparentLoader(props: any) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: 'column',
          width: '100%',
          height: 'calc(100vh)',
          backgroundColor: '#000000d9',
          position: 'absolute'
        }}
      >
        {/* <img src={Logo} alt="logo" style={{ height: 144 }} /> */}
      <h2 style={{textAlign: 'center', color: 'white'}}>{props.message ? props.message : 'Please Wait...'}</h2>
      </div>
    );
}

export default TransparentLoader;
