import React from 'react';
import { Primary } from '../TestButton/TestButton.stories';
import { Large } from '../TestInput/TestInput.stories';

export default {
    title: 'form/Subscription',
};

export const PrimarySubscription = () => (
    <>
        <Large />
        <Primary />
    </>
);
