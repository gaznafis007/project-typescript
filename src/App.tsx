
import { useState } from 'react'
import './App.css'
import AddTask from './Components/AddTask/AddTask'
import MyTasks from './Components/MyTasks/MyTasks'

interface ITask {
  taskName: string,
  taskDescription:string,
  taskUrgency: "immediate" | "urgent" | "necessary" | "not important",
  taskId: number
}
type Tasks =ITask[]
function App() {
  const [tasks, setTasks] = useState<Tasks | null>([])

  return (
    <>
      <div>
        <MyTasks tasks={tasks} setTasks={setTasks}/>
        <AddTask setTasks={setTasks} tasks={tasks} />
      </div>
    </>
  )
}

export default App
