import axiosClient from './axiosClient';

const coniApi = {
  getAll: (params) => {
    const url = `/markets`;
    return axiosClient.get(url, {
      params,
    });
  },
};

export default coniApi;
