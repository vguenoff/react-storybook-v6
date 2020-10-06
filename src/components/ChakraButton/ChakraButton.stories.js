import React from 'react';
import { Button } from '@chakra-ui/core';
// import { action, actions } from '@storybook/addon-essentials';

export default {
    title: 'Chakra/Button',
    component: Button,
    argTypes: {
        variantColor: { control: 'text' },
        // onClick: { action: 'clicked' },
    },
    // parameters: { actions: { argTypesRegex: '^on.*' } },
    parameters: {
        actions: {
            handles: ['mouseover', 'click .btn'],
        },
    },
};

// export const Success = () => <Button variantColor="green">Success</Button>;
// export const Danger = () => <Button variantColor="red">Danger</Button>;
const Template = args => <Button className="btn" {...args} />;

export const Success = Template.bind({});
Success.args = {
    variantColor: 'green',
    children: 'Success',
};

export const Danger = Template.bind({});
Danger.args = {
    variantColor: 'red',
    children: 'Danger',
};

export const Log = Template.bind({});
Log.args = {
    variantColor: 'blue',
    children: 'Log',
    onClick: () => console.log('Button clicked'),
};

export const Knobs = Template.bind({});
Knobs.args = {
    variantColor: 'blue',
    children: 'Button Label',
    disabled: false,
};
