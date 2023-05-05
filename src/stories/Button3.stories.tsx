import type {Meta, StoryObj} from '@storybook/react';
import Button3 from '../components/Button3';
import {ButtonType} from '../components/Button1';

const meta = {
  title: 'Button3',
  component: Button3,
} satisfies Meta<typeof Button3>;

const Template = (args: any) => <Button3 {...args}>Button3</Button3>

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => <Template {...args} />,
  args: {
    buttonType: ButtonType.ROUNDED,
  },
};
