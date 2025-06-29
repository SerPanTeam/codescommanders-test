import React from "react";
import styles from "./Toast.module.css";

interface ToastProps {
  message: string;
}

export const Toast: React.FC<ToastProps> = ({ message }) => {
  if (!message) return null;

  return <div className={styles.toast}>{message}</div>;
};
