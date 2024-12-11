import { Task } from "../../models/Task";
import Button from "../Button";
import styles from "./TaskItem.module.css";

interface TaskItemProps {
  task: Task;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  onEdit: (task: Task) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onToggle, onDelete, onEdit }) => {
  return (
    <li className={styles.taskItem}>
      <input
        type="checkbox"
        checked={task.isCompleted}
        onChange={() => onToggle(task.id)}
        className={styles.checkbox}
      />
      <span
        className={`${styles.taskTitle} ${task.isCompleted ? styles.completed : ""}`}
      >
        {task.title}
      </span>
      <Button onClick={() => onEdit(task)}>Editar</Button>
      <Button onClick={() => onDelete(task.id)}>Deletar</Button>
    </li>
  );
};

export default TaskItem;