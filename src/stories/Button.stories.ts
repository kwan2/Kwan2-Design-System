import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../components/button/Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    active: {
      control: "boolean",
      description: "활성 상태 여부 (밑줄 표시)",
    },
    children: {
      control: "text",
      description: "버튼 내부 텍스트",
    },
  },
  args: {
    children: "Button",
    active: false,
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "기본 버튼",
    active: false,
  },
};

export const Active: Story = {
  args: {
    children: "활성 버튼",
    active: true,
  },
};
