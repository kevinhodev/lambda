import { useEffect, useRef } from "react";

const usePrevious = (value) => {
  const savedValue = useRef(value);

  useEffect(() => {
    savedValue.current = value;
    console.log(value);
  }, [value]);

  return savedValue.current;
};

export default usePrevious;
