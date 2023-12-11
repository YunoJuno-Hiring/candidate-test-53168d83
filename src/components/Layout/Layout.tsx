import React, { ReactNode } from 'react';
import styles from './Layout.module.scss';

type LayoutProps = {
  children?: ReactNode;
};
export default function Layout({ children }: LayoutProps) {
  return <div className={styles['Layout-container']}>{children}</div>;
}
