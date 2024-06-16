export const formatDate = dateString => {
  const date = new Date(dateString);

  const newFormatDate = new Intl.DateTimeFormat('uk-UA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);

  return newFormatDate;
};
export const headphoneProduct = [
  {
    _id: '1',
    img: '#',
    title: 'назва прдукту',
    price: '700$',
    discountItem: '500$',
    date: formatDate(new Date()),
    discount: true,
    eco: true,
    visit: 20,
    producer: 'anyBody',
    subCategory: 'vacuum',
    category: 'headphone',
  },

  {
    createDate: '2024-05-16T08:29:16.458Z',
    discount: false,
    discountPrice: 0,
    img: ['https://i.ibb.co/3rF9XGS/1715803383313-20109056.png'],
    parameters: {
      brand: '-',
      eco: true,
      isUkraine: true,
    },
    price: 1550,
    subCategory: '66486d84bd0ee0adbd7bba3e',
    title: 'Шкатулка для прикрас ',
    visit: 36,
    _id: '6645c3dc3fc9f80364c650cf',
  },
  {
    id: '2',
    img: '#',
    title: 'назва прдукту',
    price: '701$',
    discountItem: '500$',
    date: formatDate(new Date()),
    discount: true,
    eco: true,
    visit: 20,
    producer: 'anyBody',
    subCategory: 'vacuum',
    category: 'laptop',
  },
  {
    id: '3',
    img: '#',
    title: 'назва прдукту',
    price: '702$',
    discountItem: '500$',

    date: formatDate(new Date()),

    discount: true,
    eco: true,
    visit: 20,
    producer: 'anyBody',
    subCategory: 'vacuum',
    category: 'headphone',
  },
  {
    id: '4',
    img: '#',
    title: 'назва прдукту',
    price: '703$',
    discountItem: '500$',

    date: formatDate(new Date()),

    discount: true,
    eco: true,
    visit: 20,
    producer: 'anyBody',
    subCategory: 'vacuum',
    category: 'headphone',
  },
  {
    id: '5',
    img: '#',
    title: 'назва прдукту',
    price: '704$',
    discountItem: '500$',

    date: formatDate(new Date()),

    discount: true,
    eco: true,
    visit: 20,
    producer: 'anyBody',
    subCategory: 'vacuum',
    category: 'headphone',
  },
  {
    id: '6',
    img: '#',
    title: 'назва прдукту',
    price: '705$',
    discountItem: '500$',

    date: formatDate(new Date()),

    discount: true,
    eco: true,
    visit: 20,
    producer: 'anyBody',
    subCategory: 'vacuum',
    category: 'headphone',
  },
  {
    id: '7',
    img: '#',
    title: 'назва прдукту',
    price: '706$',
    discountItem: '500$',

    date: formatDate(new Date()),

    discount: true,
    eco: true,
    visit: 20,
    producer: 'anyBody',
    subCategory: 'vacuum',
    category: 'headphone',
  },
  {
    id: '8',
    img: '#',
    title: 'назва прдукту',
    price: '707$',
    discountItem: '500$',

    date: formatDate(new Date()),

    discount: true,
    eco: true,
    visit: 20,
    producer: 'anyBody',
    subCategory: 'vacuum',
    category: 'headphone',
  },
];
