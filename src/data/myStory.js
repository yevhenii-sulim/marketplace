export const myStory = [
  {
    _id: '6645c5183fc9f80364c650d4',
    state: { worked: 'Виконано' }, // {"waited":"Очікується відправка"},// {"cancelled":"Скасовано"},
    title: 'Щось там',
    createDate: '2024-04-19T06:00:12.130Z',
    price: 300,
    discount: true,
    discountPrice: 600,
    img: 'https://i.ibb.co/fxByr8M/1716364689883-81591549.png',
    number: 125,
    category: { en: 'gift', uk: 'Подарункові товари' },
    subCategory: { en: 'souvenirs', uk: 'Сувеніри' },
    firstName: 'John',
    lastName: 'Doe',
    tel: '+380 056 789 85 53',
    email: 'johndoe@gmail.com',
    town: 'Kiev',
    wayDelivery: 'Відділення N1 (до 10 кг): вул. Соборна, 6',
    postOffice: 'Пункт приймання видачі (до 30 кг): вул. Квітнева, 15А',
    street: 'вул. Хрещатик',
    building: '35',
    floor: '1',
    apartment: '5',
    pay: '200',
    // фільтри які були створені при замовленні
  },
  /*
  {
    _id: '6645d115682e8d5dff4f4879',
    state: { waited: 'Очікується відправка' },
    title: 'Щось там ',
    createDate: '2024-05-19T06:00:12.130Z',
    price: 200,
    discount: true,
    discountPrice: 400,
    img: 'https://i.ibb.co/Ks1Bwsz/1715851540853-920322007.png',
    number: 327,
    category: { en: 'gift', uk: 'Подарункові товари' },
    subCategory: { en: 'souvenirs', uk: 'Сувеніри' },
    firstName: 'John',
    lastName: 'Doe',
    tel: '+380 056 789 85 53',
    email: 'johndoe@gmail.com',
    town: 'Kiev',
    wayDelivery: 'Відділення N1 (до 10 кг): вул. Соборна, 6',
    postOffice: 'Пункт приймання видачі (до 30 кг): вул. Квітнева, 15А',
    street: 'вул. Хрещатик',
    building: '35',
    floor: '1',
    apartment: '5',
    pay: '200',
  },
  */
  {
    _id: '6649956c52e5e7c430fd10d3',
    state: { cancelled: 'Скасовано' },
    title: 'Щось там',
    createDate: '2024-03-19T06:00:12.130Z',
    price: 100,
    discount: true,
    discountPrice: 500,
    img: 'https://i.ibb.co/0r29qQK/1716098407004-348578334.png',
    number: 40,
    category: { en: 'gift', uk: 'Подарункові товари' },
    subCategory: { en: 'souvenirs', uk: 'Сувеніри' },
    firstName: 'John',
    lastName: 'Doe',
    tel: '+380 056 789 85 53',
    email: 'johndoe@gmail.com',
    town: 'Kiev',
    wayDelivery: 'Відділення N1 (до 10 кг): вул. Соборна, 6',
    postOffice: 'Пункт приймання видачі (до 30 кг): вул. Квітнева, 15А',
    street: 'вул. Хрещатик',
    building: '35',
    floor: '1',
    apartment: '5',
    pay: '200',
  },
];

const generateRandomId = () => {
  const chars =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < 12; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
};

export const addNewProduct = (id, productData, contactData) => {
  myStory.push({
    _id: id + '-' + generateRandomId(),
    ...productData,
    state: { waited: 'Очікується відправка' },
    ...contactData
  });
}

export const clearAllProducts = () => {
  myStory.length = 0;
  console.log('Products:');
  console.log(myStory);
}