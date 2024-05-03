export const initialState = {
  openCatalog: false,
  openFormModal: false,
  categoryProduct: '',
  users: {
    token: null,
    isLoading: true,
    isRerendung: true,
    isActivated: false,
    user: {
      firstName: '',
      lastName: '',
      numberPhone: '',
      email: '',
      password: '',
    },
  },
};
