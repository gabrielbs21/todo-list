import { useTasks } from "../../hooks/useTasks";
import { Task } from "../Task";
import clipboardImage from "./../../assets/Clipboard.png";
import styles from "./styles.module.scss";

export function TaskList() {
  const { tasks, deleteTask, completeTask } = useTasks();

  const completedTasks = tasks.filter((task) => task.completed).length;

  return (
    <div className={styles.taskListWrapper}>
      <header>
        <div className={styles.createdTasks}>
          <strong>Tarefas criadas</strong> <span>{tasks.length}</span>
        </div>

        <div className={styles.completedTasks}>
          <strong>Concluídas</strong>{" "}
          <span>
            {completedTasks === 0 ? 0 : `${completedTasks} de ${tasks.length}`}
          </span>
        </div>
      </header>

      <main>
        {tasks.length === 0 ? (
          <div className={styles.empty}>
            <img src={clipboardImage} alt="Clipboard image" />
            <div className={styles.emptyText}>
              <strong>Você ainda não tem tarefas cadastradas</strong>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
          </div>
        ) : (
          <div className={styles.taskList}>
            {tasks.map(({ id, content, completed }) => (
              <Task
                key={id}
                id={id}
                content={content}
                completed={completed}
                handleDelete={deleteTask}
                handleCompleted={completeTask}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
