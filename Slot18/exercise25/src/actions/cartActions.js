// src/actions/cartActions.js
export const addToCart = (product) => {
  return (dispatch) => {
    // Giả lập API call (asynchronous)
    setTimeout(() => {
      dispatch({
        type: 'ADD_TO_CART',
        payload: product,
      });
    }, 500);
  };
};

export const addProduct = (product) => {
  return (dispatch) => {
    // Giả lập API call
    setTimeout(() => {
      dispatch({
        type: 'ADD_PRODUCT',
        payload: { ...product, id: Math.random().toString() },
      });
    }, 500);
  };
};