export const initialState = {
  poster: false,
  ordering: false,
  viewAddProduct: false,
  basket: [],
  openCatalog: false,
  openFormModal: false,
  categoryProduct: { subCategory: {}, category: {} },
  error: null,
  products: {
    product: [],
    totalPage: 0,
    filters: {},
    search: [],
    prevSearch: [],
  },
  productPage: {
    product: {},
    isLoading: true,
    createCommentLoading: false,
  },
  user: {
    lastName: '',
    firstName: '',
    surname: '',
    birthName: '',
    gender: '',
    profilePictureSrc: '',
    email: '',
    phoneNumber: '',
  },
  users: {
    token: null,
    isLoading: true,
    isRending: true,
    isActivated: false,
    myUser: null,
    _id: null,
    user: {
      firstName: '',
      lastName: '',
      numberPhone: '',
      email: '',
      password: '',
    },
  },
  orderData: {
    firstName: '',
    lastName: '',
    tel: '',
    email: '',
    town: '',
    wayDelivery: '',
    postOffice: '',
    street: '',
    building: '',
    floor: '',
    apartment: '',
    pay: '',
    products: [],
  },
};
