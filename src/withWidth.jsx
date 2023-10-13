import { useEffect, useState } from "react";

const withWidth = Component => {
  return props => {
    const [width, setWidth] = useState(window.innerWidth);

    const updateWidth = () => {
      setWidth(window.innerWidth);
    };

    useEffect(() => {
      window.addEventListener("resize", updateWidth);

      return () => window.removeEventListener("resize", updateWidth);
    }, []);

    return <Component {...props} width={width} />;
  };
};

export default withWidth;
