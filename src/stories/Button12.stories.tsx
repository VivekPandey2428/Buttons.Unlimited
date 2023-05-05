import type {Meta, StoryObj} from '@storybook/react';
import Button13 from '../components/Button13';

const meta = {
  title: 'Button13',
  component: Button13,
} satisfies Meta<typeof Button13>;

const Template = (args: any) => <Button13 {...args}>Button13</Button13>

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => <Template {...args}/>,
  args: {
    borderColor: "border-gray-600"
  }
};
