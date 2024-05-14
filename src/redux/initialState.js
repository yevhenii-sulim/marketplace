export const initialState = {
  product: [],
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
