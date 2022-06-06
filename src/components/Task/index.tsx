import { Check, Trash } from "phosphor-react";
import styles from "./styles.module.scss";

interface TaskProps {
  id: number;
  content: string;
  completed: boolean;
  handleDelete: (index: number) => void;
  handleCompleted: (index: number) => void;
}

export function Task({
  id,
  content,
  completed,
  handleDelete,
  handleCompleted,
}: TaskProps) {
  return (
    <div className={styles.task}>
      <div>
        {completed ? (
          <span
            className={styles.checkboxActive}
            onClick={() => handleCompleted(id)}
          >
            <Check size={16} weight="bold" />
          </span>
        ) : (
          <span
            className={styles.checkbox}
            onClick={() => handleCompleted(id)}
          />
        )}
        <p className={completed ? styles.textCompleted : ""}>{content}</p>
      </div>
      <button onClick={() => handleDelete(id)}>
        <Trash size={16} weight="bold" />
      </button>
    </div>
  );
}
