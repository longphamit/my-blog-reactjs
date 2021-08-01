export const loginAction = (values) => ({
  type: 'LOGIN',
  payload: {
    email: values.email,
    password: values.password,
  },
});
export const logoutAction = () => ({
  type: 'LOGOUT',
});
