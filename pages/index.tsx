import React, { useEffect } from "react";
import { useRouter } from 'next/router'
import Button from "../components/base/forms/Button";

const HomePage = () => {
  const router = useRouter();

  return (
    <div className="container">
      <Button>Click me!</Button>
      <p>Good morning</p>
    </div>
  )
};

HomePage.displayName = "HomePage";
// Do server rendered actions such as fetching data here
// HomePage.getInitialProps = async({ Component, ctx }) => {};

export default HomePage;
