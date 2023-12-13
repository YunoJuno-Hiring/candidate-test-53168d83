import { CharacterFilters } from '@components/CharacterFilters';
import { CharacterList } from '@components/CharacterList';
import { Layout } from '@components/Layout';
import FilterContextProvider from '@contexts/FilterContext';
import logo from '@src/logo.svg';
import React from 'react';
import styles from './App.module.scss';

export function App() {
  return (
    <div className={styles['App']}>
      <header className={styles['App-header']}>
        <img src={logo} className={styles['App-logo']} alt="logo" />
        <h1 className="App-title">Lord of the Rings Character Index</h1>
      </header>

      <section className="App-content">
        <FilterContextProvider>
          <Layout>
            <CharacterFilters />
            <CharacterList />
          </Layout>
        </FilterContextProvider>
      </section>
    </div>
  );
}
