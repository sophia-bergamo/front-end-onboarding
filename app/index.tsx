import { ApolloClient, ApolloProvider, InMemoryCache, useMutation } from '@apollo/client';
import HomeScreen from './modules/home';

const client = new ApolloClient({
  uri: 'https://template-onboarding-node-sjz6wnaoia-uc.a.run.app/graphql',
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <HomeScreen />
    </ApolloProvider>
  );
}
