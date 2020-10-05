import React from 'react';
import TestInput from './TestInput';

export default {
    title: 'Form/Control/TestInput',
    component: TestInput,
};

export const Small = () => <TestInput variant="small" value="Small" />;
export const Medium = () => <TestInput variant="medium" value="Medium" />;
export const Large = () => <TestInput variant="large" value="Large" />;

Small.storyName = 'Small Input';
