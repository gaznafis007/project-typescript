interface ITask {
    taskName: string,
    taskDescription:string,
    taskUrgency: "immediate" | "urgent" | "necessary" | "not important",
    taskId: number
  }


const TaskCard = ({task, handleTaskCompleted, handleDeleteTask}: {task : ITask, handleTaskCompleted:(taskId:number)=>void, handleDeleteTask:(taskId:number)=>void}) => {
  return (
    <div className="p-4 my-2 shadow-md rounded-md">
                    <h1 className="font-semibold text-xl">{task.taskName}</h1>
                    <p className="font-thin my-4 text-left">
                      <span className="font-semibold text-gray-700">Task Description:{' '}</span>
                      {task.taskDescription}
                    </p>
                    <p className="my-2 text-left font-semibold ">Task Priority: <span className={`capitalize ${
                        task.taskUrgency === "immediate" ?"text-red-700"  :
                         task.taskUrgency === "urgent" ?"text-violet-700" : 
                         task.taskUrgency === "necessary" ?"text-green-700" : "text-gray-800"
                      }
                      `}>{task.taskUrgency}</span></p>
                    <div className="flex gap-2 md:flex-row flex-col">
                      <button onClick={()=>handleTaskCompleted(task.taskId)} className="bg-green-500 text-xl text-white px-4 py-2 rounded-md">Task Completed</button>
                      <button onClick={()=>handleDeleteTask(task.taskId)} className="bg-red-500 text-xl text-white px-4 py-2 rounded-md">Delete Task</button>
                    </div>
                  </div>
  )
}

export default TaskCard