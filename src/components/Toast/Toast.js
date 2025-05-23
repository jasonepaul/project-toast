import React from 'react';
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from 'react-feather';
import VisuallyHidden from '../VisuallyHidden';
import styles from './Toast.module.css';
import { ToastContext } from '../ToastProvider';

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ variant, id, children }) {
  const Icon = ICONS_BY_VARIANT[variant];
  console.log('toast render');
  const { handleRemoveToast } = React.useContext(ToastContext);

  return (
    <div className={`${styles.toast} ${styles[variant]}`}>
      <div className={styles.iconContainer}>
        <Icon size={24} />
      </div>
      <p className={styles.content}>
        <VisuallyHidden>{variant}</VisuallyHidden>
        {children}
      </p>
      <button
        onClick={() => handleRemoveToast(id)}
        className={styles.closeButton}
        aria-label='Dismiss message'
        aria-live='off'
      >
        <X size={24} />
      </button>
    </div>
  );
}

export default React.memo(Toast);
