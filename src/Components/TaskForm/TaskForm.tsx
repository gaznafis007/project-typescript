import { FormEvent } from "react"

interface ITask {
    taskName: string,
    taskDescription:string,
    taskUrgency: "immediate" | "urgent" | "necessary" | "not important"
  }
  type Tasks =ITask[]
const TaskForm = ({setTasks, tasks}:{setTasks:React.Dispatch<React.SetStateAction<Tasks | null>>, tasks:Tasks | null}) => {
    
    const handleSubmit = (event:FormEvent)=>{
        event.preventDefault()
        const form = event.target as HTMLFormElement;
        const taskName:string = form.taskName.value
        const taskDescription:string = form.taskDescription.value
        const taskUrgency: "immediate" | "urgent" | "necessary" | "not important" = form.taskName.value
        const task = {
            taskName,
            taskDescription,
            taskUrgency
        }
        console.log(task, tasks)
        if(tasks){
        const newTasks = [...tasks, task]
        setTasks(newTasks)
        console.log(newTasks)
        }
        else{
            const newTasks = [task]
            setTasks(newTasks)
            console.log(newTasks) 
        }
        form.reset()
    }
  return (
    <form onSubmit={handleSubmit} className="mt-4 w-1/3 mx-auto shadow-md rounded-md p-4">
        <div className="flex flex-col my-4">
            <label className="text-left">Name of the Task</label>
            <input className="w-full border-2" type="text" name="taskName" />
        </div>
        <div className="flex flex-col my-4">
            <label className="text-left">Task Description</label>
            <textarea className="w-full border-2" name="taskDescription"></textarea>
        </div>
        <div className="flex flex-col my-4">
            <label className="text-left">Task Urgency</label>
            <select className="w-full border-2" name="taskUrgency" >
                <option value="Select One">Select one</option>
                <option value="immediate">Immediate</option>
                <option value="urgent">Urgent</option>
                <option value="necessary">Necessary</option>
                <option value="not important">Not Important</option>
            </select>
        </div>
        <div>
            <input type="submit" className="bg-purple-500 hover:bg-purple-600 text-white p-3 rounded-md my-4 ml-0" value="Add task" />
        </div>
    </form>
  )
}

export default TaskForm