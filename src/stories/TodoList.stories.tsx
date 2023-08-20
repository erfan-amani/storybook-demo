import type { Meta, StoryObj } from "@storybook/react";
import TodoList from "./TodoList";

const meta: Meta<typeof TodoList> = {
  component: TodoList,
  render: (args, { loaded: { todo } }) => <TodoList {...args} data={todo} />,
  decorators: [
    (Story) => (
      <div className="w-[400px] h-[80vh] mx-auto">
        <Story />
      </div>
    ),
  ],
  loaders: [
    async () => ({
      todo: await (
        await fetch("https://jsonplaceholder.typicode.com/todos")
      ).json(),
    }),
  ],
};

export default meta;

type Story = StoryObj<typeof TodoList>;

export const List: Story = {
  args: {},
};
