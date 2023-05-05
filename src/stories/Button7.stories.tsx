import type {Meta, StoryObj} from '@storybook/react';
import Button7 from '../components/Button7';
import {ButtonType} from '../components/Button1';

const meta = {
  title: 'Button7',
  component: Button7,
} satisfies Meta<typeof Button7>;

const Template = (args: any) => <Button7 {...args}>Button7</Button7>

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => <Template {...args}/>,
  args: {
    buttonType: ButtonType.ROUNDED
  }
};
