export const initialState = {
  poster: false,
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
  },
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
