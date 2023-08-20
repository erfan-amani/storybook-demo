import { TrashIcon, CheckIcon } from "@heroicons/react/24/outline";

interface TodoItemType {
  size?: "small" | "medium" | "large";
  title: string;
  done?: boolean;
}

const TodoItem = ({ title, done = false }: TodoItemType) => {
  return (
    <div
      className={`flex items-center justify-between gap-2 py-3 px-4 shadow-sm border rounded-2xl bg-white w-full ${
        done ? "opacity-50" : ""
      }`}
    >
      <div className="flex items-center gap-2">
        <button className="h-4 w-4 rounded-md border border-gray-800 flex items-center justify-center">
          {done && <CheckIcon className="w-6 h-6" />}
        </button>

        <div className="relative">
          {done && (
            <div className="w-full h-[2px] absolute top-1/2 -translate-y-1/2 bg-gray-600" />
          )}
          <p>{title}</p>
        </div>
      </div>

      <button>
        <TrashIcon className="w-6 h-6" />
      </button>
    </div>
  );
};

export default TodoItem;
