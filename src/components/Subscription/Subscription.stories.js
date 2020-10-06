import React from 'react';
import { Primary } from '../TestButton/TestButton.stories';
import { Large } from '../TestInput/TestInput.stories';

export default {
    title: 'form/Subscription',
    args: {
        children: 'Button',
    },
};

export const PrimarySubscription = args => (
    <>
        <Large />
        <Primary {...args} />
    </>
);
