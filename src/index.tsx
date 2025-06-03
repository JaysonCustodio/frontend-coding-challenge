import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import GlobalStyle from './GlobalStyle';
import { store } from './store';
import Container from './components/Container';
import H4 from './components/H4';
import TournamentList from './tournament/List';
import Filter from './tournament/Filter';
import Create from './tournament/Create';

const App = () => {
  return (
    <Container>
      <H4>FACEIT Tournaments</H4>
      <div className='filter-create'>
        <Filter />
        <Create />
      </div>
      <TournamentList />
    </Container>
  );
};

const container = document.getElementById('root');
if (!container) {
  throw new Error('No container found');
}
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>
);
