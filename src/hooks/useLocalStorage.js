import { useState } from 'react';

function useLocalStorage (initialValue) {
  const [value, setValue] = useState(initialValue);

  function handleClick(e) {
    setValue(e.target.value);
  }

  return {
    value,
    onClick: handleClick,
  };
}

export default useLocalStorage;
