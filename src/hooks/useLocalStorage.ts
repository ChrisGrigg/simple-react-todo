import { useState, useEffect } from "react";

function getStorageValue(key: string, defaultValue: unknown) {
  const saved = localStorage.getItem(key);
  if (saved === null) {
    return defaultValue;
  }
  try {
    const initial = JSON.parse(saved);
    return initial;
  } catch (e) {
    console.error(`Error parsing storage key "${key}": `, e);
    return defaultValue;
  }
}

export const useLocalStorage = (key: string, defaultValue: unknown) => {
  const [value, setValue] = useState(() => {
    return getStorageValue(key, defaultValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};
