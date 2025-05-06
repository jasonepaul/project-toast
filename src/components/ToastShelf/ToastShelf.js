import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import { ToastContext } from '../ToastProvider';

function ToastShelf() {
  console.log('toast shelf render');
  const { toasts } = React.useContext(ToastContext);

  return (
    <ol
      className={styles.wrapper}
      role='region'
      aria-live='polite'
      aria-label='Notification'
    >
      {toasts?.map((toast) => (
        <li key={toast.key} className={styles.toastWrapper}>
          <Toast variant={toast.variant} id={toast.key}>
            {toast.message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default React.memo(ToastShelf);
