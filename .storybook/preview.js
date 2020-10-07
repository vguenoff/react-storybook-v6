import React from 'react';
import Center from '../src/components/Center/Center';
import { ThemeProvider, theme, CSSReset } from '@chakra-ui/core';
import '@storybook/addon-console';
import { addDecorator } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';
import { withA11y } from '@storybook/addon-a11y';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    options: {
        storySort: (a, b) =>
            a[1].kind === b[1].kind
                ? 0
                : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
    },
};

// decorators are a components that wrap a story

export const decorators = [
    Story => (
        <ThemeProvider theme={theme}>
            <CSSReset />
            <Center>
                <Story />
            </Center>
        </ThemeProvider>
    ),
];

addDecorator((storyFn, context) => withConsole()(storyFn)(context));
addDecorator(withA11y);
