import type {Meta, StoryObj} from '@storybook/react';
import Button6 from '../components/Button6';
import {ButtonType} from '../components/Button1';

const meta = {
  title: 'Button6',
  component: Button6,
} satisfies Meta<typeof Button6>;

const Template = (args: any) => <Button6 {...args}>Button5</Button6>

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => <Template {...args}/>,
  args: {
    buttonType: ButtonType.ROUNDED
  }
};
