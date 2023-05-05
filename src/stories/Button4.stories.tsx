import type {Meta, StoryObj} from '@storybook/react';
import Button4 from '../components/Button4';
import {ButtonType} from '../components/Button1';

const meta = {
  title: 'Button4',
  component: Button4,
} satisfies Meta<typeof Button4>;

const Template = (args: any) => <Button4 {...args}>Button4</Button4>

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    render: (args) => <Template {...args}/>,
    args: {
      buttonType: ButtonType.ROUNDED
    }
};
