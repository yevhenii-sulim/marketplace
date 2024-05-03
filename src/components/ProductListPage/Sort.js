import { SortProduct, SortText } from './ProductListPage.styled';

export default function Sort({ value, hendleSort }) {
  return (
    <SortProduct>
      <SortText>Сортування:</SortText>
      <select
        name="sort"
        value={value}
        onChange={evt => hendleSort(evt.target.value)}
      >
        <option className="option" value="new">
          Спочатку нові
        </option>
        <option value="cheep">Найдешевші</option>
        <option value="expensive">Найдорожчі</option>
      </select>
    </SortProduct>
  );
}
