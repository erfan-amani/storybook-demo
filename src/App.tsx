import Filters from "./stories/Filters";
import Input from "./stories/Input";
import TodoItem from "./stories/TodoItem";

function App() {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="p-6 h-[80%] w-[500px] bg-indigo-100 rounded-xl">
        <div className="flex flex-col gap-8 items-center justify-center h-full [&>*]:w-full">
          <Filters />

          <div className="flex flex-col gap-2 flex-1">
            <TodoItem title="Task 1 for today" />
            <TodoItem title="Task 2 for today" done />
            <TodoItem title="Task 3 for today" />
            <TodoItem title="Task 4 for today" />
          </div>

          <div>
            <Input button="Add" placeholder="Add task here!" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
