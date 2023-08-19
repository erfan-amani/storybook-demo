import { TrashIcon, CheckIcon } from "@heroicons/react/24/outline";

interface TodoItemsType {
  size: "small" | "medium" | "large";
  title: string;
  done: boolean;
}

const TodoItems = ({ size, title, done }: TodoItemsType) => {
  return (
    <div className="flex items-center justify-between gap-2 py-3 px-4 shadow-sm border rounded-2xl">
      <div className="flex items-center gap-2">
        <button className="h-4 w-4 rounded-md border border-gray-800 flex items-center justify-center">
          {done && <CheckIcon className="w-6 h-6" />}
        </button>

        <p>{title}</p>
      </div>

      <button>
        <TrashIcon className="w-6 h-6" />
      </button>
    </div>
  );
};

export default TodoItems;
