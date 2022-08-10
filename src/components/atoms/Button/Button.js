import styles from "./Button.module.css";

export default function ({ text, onClick }) {
  return <div className={styles.button} onClick={onClick}>{text}</div>;
}