import type {Meta, StoryObj} from '@storybook/react';
import Button11 from '../components/Button11';
import {ButtonType} from '../components/Button1';

const meta = {
  title: 'Button11',
  component: Button11,
} satisfies Meta<typeof Button11>;

const Template = (args: any) => <Button11 {...args}>Button11</Button11>

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => <Template {...args}/>,
  args: {
    buttonType: ButtonType.SQUARED,
  }
};
