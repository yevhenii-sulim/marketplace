import EnterArea from 'components/EnterArea/EnterArea';
import { useState } from 'react';

export default function Header() {
  const [hide, setHide] = useState(false);
  function onClose(bool) {
    setHide(bool);
    console.log(hide);
  }
  return (
    <div>
      <button type="button" onClick={() => setHide(true)}>
        Створити оголошення
      </button>
      {hide && <EnterArea onClose={onClose} />}
    </div>
  );
}
