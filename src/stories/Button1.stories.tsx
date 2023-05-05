import type {Meta, StoryObj} from '@storybook/react';
import Button1, {ButtonType} from '../components/Button1';

const meta = {
  title: 'Button1',
  component: Button1,
} satisfies Meta<typeof Button1>;

const Template = (args: any) => <Button1 {...args}>Hello</Button1>

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => <Template {...args} />,
  args: {
    buttonType: ButtonType.ROUNDED,
  },
};
