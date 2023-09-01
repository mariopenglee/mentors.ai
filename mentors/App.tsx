/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

// Import your logo image
import logo from './assets/images/logo.png';
import background from './assets/images/background.png';
import email from './assets/icons/email.png';
import lock from './assets/icons/lock.png';
import verticalLine from './assets/icons/verticalLine.png';
import horizontalLine from './assets/icons/horizontalLine.png';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { ApolloLink } from 'apollo-link';
import { onError } from '@apollo/client/link/error';
import { useMutation } from '@apollo/client';
import { LOGIN } from './utils/mutations';
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";

// components
import Home from './pages/Home';
import Login from './pages/Login';

const httpLink = createHttpLink({
  uri: '/graphql',
});

// const errorLink = onError(({ graphQLErrors, networkError }) => {
//   if (graphQLErrors)
//     graphQLErrors.forEach(({ message, locations, path }) =>
//       console.log(
//         `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
//       )
//     );
//   if (networkError) console.log(`[Network error]: ${networkError}`);
// });

const client = new ApolloClient({
  // link: ApolloLink.from([errorLink, httpLink]),
  link: httpLink,
  cache: new InMemoryCache(),
});


function App(): JSX.Element {
  return (
    <ApolloProvider client={client}>
      <Login />
    </ApolloProvider>
  );
}

export default App;