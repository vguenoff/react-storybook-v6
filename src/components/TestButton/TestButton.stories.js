import React from 'react';
import TestButton from './TestButton';
// import Center from '../Center/Center';

export default {
    title: 'Form/Control/TestButton',
    component: TestButton,
    args: {
        children: 'Button',
    },
    // decorators: [story => <Center>{story()}</Center>],
};

const Template = args => <TestButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    variant: 'primary',
};

export const LongPrimary = Template.bind({});
LongPrimary.args = {
    ...Primary.args,
    children: 'Long Primary Args',
};

export const Secondary = Template.bind({});
Secondary.args = {
    variant: 'secondary',
};

export const Success = Template.bind({});
Success.args = {
    variant: 'success',
};

export const Danger = Template.bind({});
Danger.args = {
    variant: 'danger',
};
