import React from "react";
import { Spin } from "antd";

const Loader = () => {
  return (
    <div
      style={{
        // width: "100%",
        // display: "flex",
        // alignItems: "center",
        // justifyContent: "center",
        // marginTop: "50vh",
        position: "absolute",
        // position: "sticky",
        top: "50%",
        left: "50%",
      }}
    >
      <Spin size="large" />
    </div>
  );
};

export default Loader;
