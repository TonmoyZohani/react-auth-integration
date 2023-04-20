import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";

const Home = () => {
  const user = useContext(AuthContext);

  return <>This is the Home Page {user.displayName}</>;
};

export default Home;
