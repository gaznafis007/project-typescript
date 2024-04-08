import Header from "../Header/Header"
import TaskForm from "../TaskForm/TaskForm"

interface ITask {
    taskName: string,
    taskDescription:string,
    taskUrgency: "immediate" | "urgent" | "necessary" | "not important",
    taskId: number
  }
  type Tasks =ITask[]
const AddTask = ({setTasks, tasks}: {setTasks:React.Dispatch<React.SetStateAction<Tasks | null>>, tasks: Tasks | null}) => {
  return (
    <div className="my-4">
        <Header>
            Add Tasks
        </Header>
        <TaskForm setTasks={setTasks} tasks={tasks}></TaskForm>
    </div>
  )
}

export default AddTask