import type { Meta, StoryObj } from "@storybook/react";
import Filters from "./Filters";

const meta: Meta<typeof Filters> = {
  component: Filters,
};
export default meta;

type Story = StoryObj<typeof Filters>;

export const Small: Story = {};
