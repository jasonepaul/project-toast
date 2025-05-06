import React from 'react';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  React.useEffect(() => {
    function handleKeyDown(event) {
      if (event.code === 'Escape') {
        setToasts([]);
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleAddToast = React.useCallback(
    (message, variant) => {
      const newToast = { message, variant, key: crypto.randomUUID() };
      const updatedToasts = [...toasts, newToast];
      setToasts(updatedToasts);
    },
    [toasts]
  );

  const handleRemoveToast = React.useCallback(
    (key) => {
      const filteredToasts = toasts.filter((toast) => toast.key !== key);
      setToasts(filteredToasts);
    },
    [toasts]
  );

  const toastValues = React.useMemo(() => {
    return {
      toasts,
      setToasts,
      handleAddToast,
      handleRemoveToast,
    };
  }, [toasts, handleAddToast, handleRemoveToast]);

  return (
    <ToastContext.Provider value={toastValues}>
      {children}
    </ToastContext.Provider>
  );
}

export default React.memo(ToastProvider);
