import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './theme';

import Main from './Main';
import Cover from './Cover';

export default function ProfilePage() {
    return (
        <ChakraProvider theme={theme}>
            <>
                <Cover />
                <Main />
            </>
        </ChakraProvider>
    )
}
