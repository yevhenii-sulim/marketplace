export const navigationList = [
  {
    id: 0,
    linkList: 'all',
    nameList: 'Всі оголошення',
    img: '/marketplace/images/catalog/all.png',
  },
  {
    id: 1,
    linkList: 'gift',
    nameList: 'Подарункові товари',
    img: '/marketplace/images/catalog/gift.png',
    subCategoris: [
      { id: 1, link: 'souvenirs', nameList: 'Сувеніри', img: '#' },
      { id: 2, link: 'gift_sets', nameList: 'Подарункові набори', img: '#' },
      { id: 3, link: 'festive_theme', nameList: 'Святкова тематика', img: '#' },
    ],
  },
  {
    id: 2,
    linkList: 'embroidery',
    nameList: 'Вишивка',
    img: '/marketplace/images/catalog/embroidery.png',
    subCategoris: [
      { id: 1, link: 'shirts', nameList: 'Сорочки', img: '#' },
      { id: 2, link: 'dress', nameList: 'Плаття', img: '#' },
      { id: 3, link: 'blouses', nameList: 'Блузки', img: '#' },
    ],
  },
  {
    id: 3,
    linkList: 'accessories',
    nameList: 'Аксесуари',
    img: '/marketplace/images/catalog/accessories.png',
    subCategoris: [
      { id: 1, link: 'handbags', nameList: 'Сумки', img: '#' },
      { id: 2, link: 'belts', nameList: 'Пояси', img: '#' },
      { id: 3, link: 'purse', nameList: 'Портмоне', img: '#' },
      { id: 4, link: 'handkerchiefs', nameList: 'Хустки', img: '#' },
      { id: 5, link: 'glass', nameList: 'Окуляри', img: '#' },
    ],
  },
  {
    id: 4,
    linkList: 'eco',
    nameList: 'Еко хендмейд взуття',
    img: '/marketplace/images/catalog/eco.png',
    subCategoris: [
      { id: 1, link: 'winter', nameList: 'Зимове', img: '#' },
      { id: 2, link: 'summer', nameList: 'Літнє', img: '#' },
    ],
  },
  {
    id: 5,
    linkList: 'makeup',
    nameList: 'Натуральна косметика',
    img: '/marketplace/images/catalog/makeup.png',
    subCategoris: [
      { id: 1, link: 'soap', nameList: 'Мило', img: '#' },
      { id: 2, link: 'perfumery', nameList: 'Парфюмерія', img: '#' },
    ],
  },
  {
    id: 6,
    linkList: 'recycled_materials',
    nameList: 'Товари з перероблених матеріалів',
    img: '/marketplace/images/catalog/recycled.png',
    subCategoris: [
      {
        id: 1,
        link: 'recycled_denim',
        nameList: 'Перероблений денім',
        img: '#',
      },
      {
        id: 2,
        link: 'second_hand',
        nameList: 'revived second hand',
        img: '#',
      },
    ],
  },
  {
    id: 7,
    linkList: 'for_free',
    nameList: 'Подарую/віддам',
    img: '/marketplace/images/catalog/for-free.png',
  },
];
