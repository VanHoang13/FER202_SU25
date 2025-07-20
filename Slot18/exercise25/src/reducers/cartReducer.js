// src/reducers/cartReducer.js
const initialState = {
  products: [
    {
      id: '123456',
      name: 'Example Product',
      price: 9.99,
      description: 'This is an example product.',
      catalogs: ['catalog1', 'catalog2'],
    },
    {
      id: '789101',
      name: 'Luxury Watch',
      price: 199.99,
      description: 'A high-quality luxury watch.',
      catalogs: ['accessories', 'watches'],
    },
    {
      id: '112233',
      name: 'Smartphone X',
      price: 499.99,
      description: 'Latest model smartphone with advanced features.',
      catalogs: ['electronics', 'phones'],
    },
    {
      id: '445566',
      name: 'Designer Bag',
      price: 299.99,
      description: 'Stylish designer bag for all occasions.',
      catalogs: ['fashion', 'bags'],
    },
  ],
  cart: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case 'ADD_PRODUCT':
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    default:
      return state;
  }
};

export default cartReducer;