import Header from "../Header/Header"
import TaskCard from "../TaskCard/TaskCard"

interface ITask {
    taskName: string,
    taskDescription:string,
    taskUrgency: "immediate" | "urgent" | "necessary" | "not important",
    taskId: number
  }
  type Tasks =ITask[]

const MyTasks = ({tasks, setTasks}:{tasks: Tasks | null, setTasks: React.Dispatch<React.SetStateAction<Tasks | null>>}) => {
  const handleTaskCompleted = (taskId:number) =>{
    const newTasks = tasks?.filter(task=>task.taskId !== taskId)
    if(newTasks){
      window.alert("Congratulation! You completed the task.")
      setTasks(newTasks)
    }
  }
  const handleDeleteTask = (taskId:number)=>{
    const consent = window.confirm(`Are your sure you want to delete This Task? TaskId: ${taskId}`)
    if(consent){
      const newTasks = tasks?.filter(task=>task.taskId !== taskId);
      if(newTasks){
        setTasks(newTasks)
      }
    }
  }
  return (
    <div>
        <Header>My Tasks</Header>
        {
            tasks?.length && 
            <div className="grid grid-cols-3 gap-4">
              {
              tasks.map(task=>{
                return <>
                  
                    <TaskCard task={task} handleTaskCompleted={handleTaskCompleted} handleDeleteTask={handleDeleteTask}></TaskCard>
                </>
              })
              }
              </div>
              || <p className="text-3xl text-center">No task remaining</p>
            
        }
    </div>
  )
}

export default MyTasks