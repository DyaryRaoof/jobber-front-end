import { getCategories } from '../redux/categories/categories';
import backend from './backend';

export const fetchCategories = async (dispatch) => {
  try {
    const response = await backend.get('categories');
    dispatch(getCategories(response.data));
    localStorage.setItem('categories', JSON.stringify(response.data));
    return response;
  } catch (err) {
    return err.response;
  }
};
