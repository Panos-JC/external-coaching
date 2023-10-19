import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const withWidth = Component => {
  return props => {
    const [width, setWidth] = useState(window.innerWidth);
    const route = useLocation();

    const updateWidth = () => {
      setWidth(window.innerWidth);
    };

    useEffect(() => {
      window.addEventListener("resize", updateWidth);

      return () => window.removeEventListener("resize", updateWidth);
    }, []);

    return <Component {...props} width={width} route={route} />;
  };
};

export default withWidth;
