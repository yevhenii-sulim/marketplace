export const initialState = {
  openCatalog: false,
  openEnterModal: false,
  users: {
    isLoaded: false,
    token: null,
    isLoading: true,
    isRerendung: true,
    isAuth: false,
    user: {
      firstName: '',
      lastName: '',
      numberPhone: '',
      email: '',
      password: '',
    },
  },
};
