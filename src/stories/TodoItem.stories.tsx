import type { Meta, StoryObj } from "@storybook/react";
import TodoItem from "./TodoItem";

const meta: Meta<typeof TodoItem> = {
  component: TodoItem,
  decorators: [
    (Story) => (
      <div className="w-[400px]">
        <Story />
      </div>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof TodoItem>;

export const Small: Story = {
  args: {
    title: "Todo title",
    completed: false,
  },
};
