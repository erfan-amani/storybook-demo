import type { Meta, StoryObj } from "@storybook/react";
import Input from "./Input";

const meta: Meta<typeof Input> = {
  component: Input,
  decorators: [
    (Story) => (
      <div className="w-[400px]">
        <Story />
      </div>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof Input>;

export const Small: Story = {
  args: {
    button: "",
    placeholder: "Type here!",
    disabled: false,
  },
};
