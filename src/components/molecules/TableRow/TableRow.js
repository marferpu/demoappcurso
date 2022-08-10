import clsx from "clsx";
import { useSyncExternalStore } from "react";
import styles from "./TableRow.module.css";

export default function ({ name, color, action }) {
  return (
    <div className={styles.row}>
      <div className={clsx(styles.column, styles.name)}>{name}</div>
      <div className={clsx(styles.column, styles.color)}>{color}</div>
      <div className={clsx(styles.column, styles.actions)}>{action}</div>
    </div>
  );
}