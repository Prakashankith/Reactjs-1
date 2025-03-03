import React from "react";
import { useEffect } from "react";
import { useState } from "react";
const withLoading = (WrappedComponent) => {
  return function withLoadingComponent(props) {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
      setLoading(true);
      const timer = setTimeout(() => {
        setLoading(false);
      }, 2000);
      return () => clearTimeout(timer);
    }, []);
    return <WrappedComponent {...props} loading={loading} />;
  };
};

const myComponent = ({ loading }) => (
  <div>{loading ? <p>Loading....</p> : <p>Data Loaded successfully</p>}</div>
);
const spider = ({ loading }) => (
  <div>{loading ? <p>Loading....</p> : <p>Data Loaded successfully</p>}</div>
);

const Monkey = withLoading(myComponent);
function HOC2() {
  return (
    <>
      <Monkey />
    </>
  );
}
export default HOC2;
