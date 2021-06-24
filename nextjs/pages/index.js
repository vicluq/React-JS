import React, { useEffect } from "react";
import Router, { useRouter } from "next/router";

import Layout from "../components/Layout/Layout";

function RootDir(props) {
  // useEffect(() => {
  //   Router.replace("/posts", {
  //     query: {},
  //     auth: {
  //       token: "2fsdkdvdniaif",
  //     },
  //   });
  // }, []);

  return (
    <Layout path="/">
      <div className="Home-Page">
        <h1>this is my home page</h1>
      </div>
    </Layout>
  );
}

export default RootDir;
