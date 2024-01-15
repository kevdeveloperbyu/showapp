import React from 'react'

import { ApolloClient, InMemoryCache, ApolloProvider as ApoProvider } from '@apollo/client';

type ApolloProviderProps = {
    children: React.ReactNode
}

const client = new ApolloClient({
    uri: 'https://twoshowbe.onrender.com/',
    cache: new InMemoryCache(),
});


const ApolloProvider = ({ children }: ApolloProviderProps) => {
    return (
        <ApoProvider client={client}>
            {children}
        </ApoProvider>
    )
}

export default ApolloProvider