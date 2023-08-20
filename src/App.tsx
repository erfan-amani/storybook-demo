import { useState, useEffect } from "react";
import Filters from "./stories/Filters";
import Input from "./stories/Input";
import TodoList from "./stories/TodoList";
import { Todo } from "./types/Todo";

function App() {
  const [data, setData] = useState<Todo[]>([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const data = await (
        await fetch("https://jsonplaceholder.typicode.com/todos")
      ).json();

      setData(data);
    };

    fetchTodos();
  }, []);

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="p-6 h-[80%] w-[500px] bg-indigo-100 rounded-xl">
        <div className="flex flex-col gap-8 items-center justify-center h-full [&>*]:w-full">
          <Filters />

          <TodoList data={data} />

          <div>
            <Input button="Add" placeholder="Add task here!" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
