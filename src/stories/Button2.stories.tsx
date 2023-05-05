import type {Meta, StoryObj} from '@storybook/react';
import Button2 from '../components/Button2';
import {ButtonType} from '../components/Button1';

const meta = {
  title: 'Button2',
  component: Button2,
} satisfies Meta<typeof Button2>;

const Template = (args: any) => <Button2 {...args}>Button2</Button2>

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => <Template {...args} />,
  args: {
    buttonType: ButtonType.ROUNDED,
  },
};
