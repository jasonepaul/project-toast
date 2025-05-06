import React from 'react';

function useKeyPressed(key, callback) {
  React.useEffect(() => {
    function handleKeyDown(event) {
      if (event.code === key) {
        callback(event); // just in case our callback accepts an event
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [key, callback]);
}

export default useKeyPressed;
