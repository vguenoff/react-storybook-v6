import React from 'react';
import TestButton from './TestButton';

export default {
    title: 'Form/Control/TestButton',
    component: TestButton,
};

export const Primary = () => <TestButton variant="primary">Primary</TestButton>;
export const Secondary = () => (
    <TestButton variant="secondary">Secondary</TestButton>
);
export const Success = () => <TestButton variant="success">Success</TestButton>;
export const Danger = () => <TestButton variant="danger">Danger</TestButton>;
