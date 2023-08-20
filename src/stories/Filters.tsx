import Button from "./Button";

type FiltersProp = {
  active?: "all" | "completed" | "uncompleted";
};

const Filters = ({ active = "all" }: FiltersProp) => {
  return (
    <div className="flex gap-2 items-center justify-center">
      <Button title="All" isActive={active === "all"} />
      <Button title="Completed" isActive={active === "completed"} />
      <Button title="Uncompleted" isActive={active === "uncompleted"} />
    </div>
  );
};

export default Filters;
