import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({ toasts, handleRemoveToast }) {
  console.log('toast shelf render');

  return (
    <ol className={styles.wrapper}>
      {toasts?.map((toast) => (
        <li key={toast.key} className={styles.toastWrapper}>
          <Toast
            variant={toast.variant}
            handleRemoveToast={handleRemoveToast}
            id={toast.key}
          >
            {toast.message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
