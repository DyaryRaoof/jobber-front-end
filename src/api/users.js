import backend from './backend';

export const signUpUser = async (user) => {
  console.log(user);
  try {
    const response = await backend.post('users', { user: user });
    console.log(response);
    return response;
  } catch (err) {
    console.log(err.response);
    return err.response;
  }
};
