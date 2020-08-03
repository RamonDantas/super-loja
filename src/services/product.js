import request from './request';

const getProducts = () => request.get('products');

const getProductById = (id) => request.get('products/' + id);

export { getProducts, getProductById };