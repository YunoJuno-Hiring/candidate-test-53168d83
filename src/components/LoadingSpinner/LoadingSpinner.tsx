import React from 'react';
import styles from './LoadingSpinner.module.scss';

export default function LoadingSpinner() {
  return <div data-testid="loading-spinner" className={styles['LoadingSpinner-dual-ring']}></div>;
}
