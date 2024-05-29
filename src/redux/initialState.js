export const initialState = {
  products: {
    product: [],
    totalPage: 0,
  },
  basket: [],
  openCatalog: false,
  openFormModal: false,
  categoryProduct: '',
  error: null,
  productPage: {
    product: {},
    isLoading: true,
    createCommentLoading: false,
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
};
