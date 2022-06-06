import { createContext, ReactNode, useContext, useState } from "react";

interface Task {
  id: number;
  content: string;
  completed: boolean;
}

type TaskInput = Omit<Task, "id">;

interface TasksProviderProps {
  children: ReactNode;
}

interface TasksContextData {
  tasks: Task[];
  createTask: (task: TaskInput) => void;
  deleteTask: (id: number) => void;
  completeTask: (id: number) => void;
}

const TasksContext = createContext<TasksContextData>({} as TasksContextData);

export function TasksProvider({ children }: TasksProviderProps) {
  const [tasks, setTasks] = useState<Task[]>([]);

  function createTask(taskInput: TaskInput) {
    const task = { ...taskInput, id: Date.now() };

    setTasks([...tasks, task]);
  }

  function deleteTask(id: number) {
    setTasks([...tasks.filter((task) => task.id !== id)]);
  }

  function completeTask(id: number) {
    setTasks([
      ...tasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        }

        return task;
      }),
    ]);
  }

  return (
    <TasksContext.Provider
      value={{
        tasks,
        createTask,
        deleteTask,
        completeTask,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
}

export function useTasks() {
  const context = useContext(TasksContext);

  return context;
}
