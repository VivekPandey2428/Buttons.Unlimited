import type {Meta, StoryObj} from '@storybook/react';
import Button5 from '../components/Button5';
import {ButtonType} from '../components/Button1';

const meta = {
  title: 'Button5',
  component: Button5,
} satisfies Meta<typeof Button5>;

const Template = (args: any) => <Button5 {...args}>Button5</Button5>

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    render: (args) => <Template {...args}/>,
    args: {
      buttonType: ButtonType.ROUNDED
    }
};
