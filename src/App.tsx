import { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { Task, Priority } from "./models/Task";
import TaskPriority from "./components/TaskPriority";
import styles from "./App.module.css";

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskToEdit, setTaskToEdit] = useState<Task | null>(null);

  const addTask = (task: Task) => {
    if (taskToEdit) {
      setTasks((prev) =>
        prev.map((t) => (t.id === task.id ? task : t))
      );
      setTaskToEdit(null);
    } else {
      setTasks([...tasks, task]);
    }
  };

  const toggleTaskCompletion = (id: number) => {
    setTasks(tasks.map((task) =>
      task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
    ));
  };

  const deleteTask = (id: number) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const editTask = (task: Task) => {
    setTaskToEdit(task);
  };

  const tasksByPriority = {
    [Priority.Baixa]: tasks.filter((task) => task.priority === Priority.Baixa),
    [Priority.Media]: tasks.filter((task) => task.priority === Priority.Media),
    [Priority.Alta]: tasks.filter((task) => task.priority === Priority.Alta),
  };

  return (
    <div className={styles.listaDeTarefas}>
      <h1>Gerenciador de Tarefas</h1>
      <TaskForm onAdd={addTask} taskToEdit={taskToEdit} />
      {Object.entries(tasksByPriority).map(([priority, tasks]) =>
        tasks.length > 0 ? (
          <div key={priority}>
            <TaskPriority priority={priority as Priority}/>
            <TaskList
              tasks={tasks}
              onToggle={toggleTaskCompletion}
              onDelete={deleteTask}
              onEdit={editTask}
            />
          </div>
        ) : null
      )}
    </div>
  );
};

export default App;

