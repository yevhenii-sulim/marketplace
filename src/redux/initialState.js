export const initialState = {
  openCatalog: false,
  openEnterModal: false,
  users: {
    isLoaded: false,
    token: null,
    isLoading: true,
    isRerendung: true,
    user: {
      firstName: '',
      lastName: '',
      numberPhone: '',
      email: '',
      password: '',
    },
  },
};
