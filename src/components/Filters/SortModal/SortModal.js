import { useEffect, useState } from 'react';
import { List, Title } from './SortModal.styled';
import { useSearchParams } from 'react-router-dom';
import { changeNameSort } from './changeNameSort';

const sortList = [
  'Рекомендовані',
  'Недавно додані',
  'Від дешевого',
  'Від дорожчого',
];
export default function SortModal() {
  const [value, setValue] = useState(false);
  const [params, setParams] = useSearchParams('');

  useEffect(() => {
    if (params.get('sortField') === 'discount') {
      setValue('Рекомендовані');
      return;
    }
    if (params.get('sortField') === 'createDate') {
      setValue('Недавно додані');
      return;
    }
    if (
      params.get('sortField') === 'price' &&
      params.get('sortOrder') === 'asc'
    ) {
      setValue('Від дешевого');
      return;
    }
    if (
      params.get('sortField') === 'price' &&
      params.get('sortOrder') === 'desc'
    ) {
      setValue('Від дорожчого');
      return;
    }
  }, [params]);

  function handleChange(evt) {
    setValue(evt.target.id);
    changeNameSort(evt.target.id, setParams, params);
  }

  return (
    <form>
      <Title>Сортувати</Title>
      <List>
        {sortList.map(item => (
          <li key={item}>
            <input
              type="radio"
              id={item}
              value={value}
              onChange={handleChange}
              checked={item === value}
            />
            <label htmlFor={item}>{item}</label>
          </li>
        ))}
      </List>
    </form>
  );
}
