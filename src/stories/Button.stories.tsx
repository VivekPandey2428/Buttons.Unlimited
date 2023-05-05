import type {Meta, StoryObj} from '@storybook/react';
import Button12 from '../components/Button12';
import {ButtonType} from '../components/Button1';

const meta = {
  title: 'Button12',
  component: Button12,
} satisfies Meta<typeof Button12>;

const Template = (args: any) => <Button12 {...args}>Button12</Button12>

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => <Template {...args}/>,
  args: {
    buttonType: ButtonType.SQUARED,
  }
};
