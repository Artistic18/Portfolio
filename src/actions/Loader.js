import { LOADING } from './actionTypes';

export const setLoading = (data) => {
  return {
    type: LOADING,
    payload: data,
  };
};
