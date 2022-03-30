import axiosClient from './axiosClient';

const coniApi = {
  getAll: (rate) => {
    const url = `/markets?vs_currency=${rate}&order=market_cap_desc&per_page=30&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d`;
    return axiosClient.get(url);
  },
};

export default coniApi;
