import React from 'react';

import { Button, Section } from '../../core';
import { SearchForm } from './components/SearchForm';

import styles from './Search.module.scss'

const Search: React.FC = () => {
  return (
    <Section theme='dark'>
      <div className={styles.searchWrapper}>
        <div className={styles.titleSection}>
          <h2 className={styles.title}>Pet Finder</h2>
          <p className={styles.description}>Пошук ваших улюбленців!</p>
        </div>
        <SearchForm />
        <div className={styles.frontButtons}>
          <Button type='submit' theme='primary' uppercase>Створити оголошення</Button>
          <Button type='submit' theme='primary' uppercase>Хочу нашийник</Button>
        </div>
      </div>
    </Section>
  );
};

export { Search };
