import type {Meta, StoryObj} from '@storybook/react';
import Button9, { AnimationTypeVertical } from '../components/Button9';
import {ButtonType} from '../components/Button1';

const meta = {
  title: 'Button9',
  component: Button9,
} satisfies Meta<typeof Button9>;

const Template = (args: any) => <Button9 {...args}>Button9</Button9>

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => <Template {...args}/>,
  args: {
    buttonType: ButtonType.SQUARED,
    animationType: AnimationTypeVertical.BOTTOM
  }
};
