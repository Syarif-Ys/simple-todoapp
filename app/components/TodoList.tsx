import { ITask } from "@/types/tasks";
import React from "react";

interface TodoListProps {
  tasks: ITask[];
}

const TodoList: React.FC<TodoListProps> = ({ tasks }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>Name</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      {tasks.map(task => (
        <tr key={task.id}>
        <td>{task.text}</td>
        <td>Blue</td>
      </tr>
      ))}
    </tbody>
  </table>
</div>
  )
}

export default TodoList