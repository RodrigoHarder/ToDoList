import { Priority } from "../../models/Task";
import styles from "./TaskPriority.module.css";

interface TaskPriorityProps {
    priority: Priority;
}

const TaskPriority: React.FC<TaskPriorityProps> = ({ priority }) => {

    const priorityClasses: Record<Priority, string> = {
        [Priority.Baixa]: styles.low,
        [Priority.Media]: styles.medium,
        [Priority.Alta]: styles.high
    }

    return (
        <h2 className={`${priorityClasses[priority]}`}>{priority}</h2>
    )
}

export default TaskPriority;


