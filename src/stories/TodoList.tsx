import { Todo } from "../types/Todo";
import TodoItem from "./TodoItem";

interface TodoListProps {
  data: Todo[];
}

const TodoList = ({ data }: TodoListProps) => {
  return (
    <div className="overflow-y-scroll">
      <div className="flex flex-col gap-2 flex-1">
        {data.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
