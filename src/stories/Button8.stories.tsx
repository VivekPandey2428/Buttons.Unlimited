import type {Meta, StoryObj} from '@storybook/react';
import Button8 from '../components/Button8';
import {ButtonType} from '../components/Button1';

const meta = {
  title: 'Button8',
  component: Button8,
} satisfies Meta<typeof Button8>;

const Template = (args: any) => <Button8 {...args}>Button8</Button8>

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => <Template {...args}/>,
  args: {
    buttonType: ButtonType.SQUARED
  }
};
