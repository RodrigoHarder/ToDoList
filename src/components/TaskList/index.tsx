import { Task } from "../../models/Task";
import TaskItem from "../TaskItem";
import styles from "./TaskList.module.css"

interface TaskListProps {
  tasks: Task[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  onEdit: (task: Task) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onToggle, onDelete, onEdit }) => {
  return (
    <ul className={styles.taskList}>
      { tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggle={onToggle}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))
      }
    </ul>
  );
};

export default TaskList;
