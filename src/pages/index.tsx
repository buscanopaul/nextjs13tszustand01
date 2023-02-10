import useStore from "@/store/useStore";
import { useState } from "react";

const Todo: React.FC = (): JSX.Element => {
  const todos = useStore((state) => state.todos);
  const [todo, setTodo] = useState<string>("");
  const addTodo = useStore((state) => state.addTodo);

  const handleAdd = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    addTodo(todo);
    setTodo("");
  };

  return (
    <div>
      <h1>TODO LIST</h1>
      <input
        type="text"
        onChange={(e) => setTodo(e.currentTarget.value)}
        value={todo}
      />
      <button onClick={handleAdd}>add</button>
      {todos?.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
};

export default Todo;
