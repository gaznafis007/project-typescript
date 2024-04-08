interface ITask {
    taskName: string,
    taskDescription:string,
    taskUrgency: "immediate" | "urgent" | "necessary" | "not important"
  }
  type Tasks =ITask[]
const MyTasks = ({tasks}:{tasks: Tasks | null}) => {
  return (
    <div>
        <h2 className="text-4xl font-bold text-purple-400">
            My tasks
        </h2>
        {
            tasks?.length && <h2 className="text-3xl text-blue-400">Hello</h2>
        }
    </div>
  )
}

export default MyTasks