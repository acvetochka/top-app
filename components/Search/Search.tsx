'use client';

import cn from 'classnames';

import { SearchProps } from './Search.props';
import styles from './Search.module.css';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import { useState } from 'react';
import SearchIcon from '@/public/search.svg';
import { useRouter } from 'next/navigation';

export const Search = ({ className, ...props }: SearchProps): JSX.Element => {
  const [search, setSearch] = useState<string>('');
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value);

  const goToSearch = () => {
    router.push('/search');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      goToSearch();
    }
  };

  return (
    <div className={cn(styles.search, className)} {...props}>
      <Input
        className={styles.input}
        placeholder="Поиск..."
        value={search}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <Button
        appearance="primary"
        className={styles.button}
        onClick={goToSearch}
        aria-label="Искать по сайту"
      >
        <SearchIcon />
      </Button>
    </div>
  );
};
