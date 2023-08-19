import type { Meta, StoryObj } from "@storybook/react";
import TodoItem from "./TodoItem";

const meta: Meta<typeof TodoItem> = {
  component: TodoItem,
};
export default meta;

type Story = StoryObj<typeof TodoItem>;

export const Small: Story = {
  args: {
    title: "Todo title",
    done: false,
  },
};
