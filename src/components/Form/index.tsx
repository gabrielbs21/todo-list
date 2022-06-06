import { PlusCircle } from "phosphor-react";
import { FormEvent, useState } from "react";
import { useTasks } from "../../hooks/useTasks";
import styles from "./styles.module.scss";

export function Form() {
  const [content, setContent] = useState("");
  const { createTask } = useTasks();

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (content.trim() === "") return;

    createTask({
      content,
      completed: false,
    });

    setContent("");
  }

  return (
    <form onSubmit={handleSubmit} className={styles.formWrapper}>
      <input
        type="text"
        name="new-task"
        id="new-task"
        onChange={(event) => setContent(event.target.value)}
        value={content}
        placeholder="Adicione uma nova tarefa"
      />
      <button type="submit">
        Criar <PlusCircle size={16} weight="bold" />
      </button>
    </form>
  );
}
