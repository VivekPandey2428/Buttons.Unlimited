import type {Meta, StoryObj} from '@storybook/react';
import Button10, { AnimationTypeHorizontal } from '../components/Button10';
import {ButtonType} from '../components/Button1';

const meta = {
  title: 'Button10',
  component: Button10,
} satisfies Meta<typeof Button10>;

const Template = (args: any) => <Button10 {...args}>Button9</Button10>

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => <Template {...args}/>,
  args: {
    buttonType: ButtonType.SQUARED,
    animationType: AnimationTypeHorizontal.RIGHT
  }
};
