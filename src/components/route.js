import React, { useEffect, useState } from "react";

const Route = ({ path, children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popState", onLocationChange);

    return () => {
      window.removeEventListener("popState");
    };
  }, []);

  return currentPath === path ? children : null;
};

export default Route;
