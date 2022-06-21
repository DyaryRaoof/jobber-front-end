import backend from './backend';

export const signUpUser = async (user) => {
  try {
    const response = await backend.post('users', { user: user });
    return response;
  } catch (err) {
    return err.response;
  }
};

export const logInUser = async (user) => {
  try {
    const response = await backend.post('users/sign_in', { user: user });
    return response;
  } catch (err) {
    return err.response;
  }
};

export const logOutUser = async (user) => {
  try {
    const response = await backend.delete('users/sign_out');
    return response;
  } catch (err) {
    return err.response;
  }
};
