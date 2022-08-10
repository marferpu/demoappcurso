import styles from "./DataTable.module.css";
import TableRow from "../../molecules/TableRow/TableRow";
import Button from "../../atoms/Button/Button";

export default function ({ users, onDelete }) {
  //
  return (
    <div className={styles.table}>
      <TableRow name="Nombre" color="Color" action="Accion" />
      {users.map((u, i) => {
        return (
          <TableRow
            name={u.name}
            color={u.color}
            action={<Button onClick={() => onDelete(u.id)} text="Delete" />}
          />
        );
      })}
    </div>
  );
}

