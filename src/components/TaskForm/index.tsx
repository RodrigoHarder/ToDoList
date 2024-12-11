import { useState, useEffect } from "react";
import { Task, Priority } from "../../models/Task";
import Button from "../Button";
import styles from "./TaskForm.module.css";

interface TaskFormProps {
  onAdd: (task: Task) => void;
  taskToEdit: Task | null;
}

const TaskForm: React.FC<TaskFormProps> = ({ onAdd, taskToEdit }) => {

  const [title, setTitle] = useState<string>("");
  const [priority, setPriority] = useState<Priority>(Priority.Baixa);

  useEffect(() => {
    if (taskToEdit) {
      setTitle(taskToEdit.title);
      setPriority(taskToEdit.priority);
    }
  }, [taskToEdit]);

  const submeterFormulario = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title) return;

    const newTask: Task = {
      id: taskToEdit ? taskToEdit.id : Date.now(),
      title,
      isCompleted: taskToEdit ? taskToEdit.isCompleted : false,
      priority,
    };
    onAdd(newTask);
    setTitle("");
    setPriority(Priority.Baixa);
  };

  return (
    <form  className={styles.taskForm} onSubmit={submeterFormulario}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Nova tarefa"
      />
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value as Priority)}
      >
        {Object.values(Priority).map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
      <Button type="submit" >{taskToEdit ? "Editar" : "Adicionar"}</Button>
    </form>
  );
};

export default TaskForm;
