import { TrashIcon, CheckIcon } from "@heroicons/react/24/outline";
import { Todo } from "../types/Todo";

interface TodoItemType extends Todo {
  size?: "small" | "medium" | "large";
}

const TodoItem = ({ title, completed = false }: TodoItemType) => {
  return (
    <div
      className={`flex items-center justify-between gap-2 py-3 px-4 shadow-sm border rounded-2xl bg-white w-full ${
        completed ? "opacity-50" : ""
      }`}
    >
      <div className="flex items-center gap-2">
        <button className="h-4 w-4 rounded-md border border-gray-800 flex items-center justify-center">
          {completed && <CheckIcon className="w-6 h-6" />}
        </button>

        <p className={`${completed ? "line-through" : ""}`}>{title}</p>
      </div>

      <button>
        <TrashIcon className="w-6 h-6" />
      </button>
    </div>
  );
};

export default TodoItem;
