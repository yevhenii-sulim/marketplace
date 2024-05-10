export const initialState = {
  product: [],
  openCatalog: false,
  openFormModal: false,
  categoryProduct: '',
  error: null,
  users: {
    token: null,
    isLoading: true,
    isRerendung: true,
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
