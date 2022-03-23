import { useState } from "react";

const useLocalStorage = (value, initialValue) => {
  const [storedValue] = useState(() => {
    try {
      return localStorage.getItem(value) || initialValue;
    } catch (error) {
      console.log(error);
    }
  });

  return storedValue;
};

export default useLocalStorage;
