import React, { useState } from 'react';

function ProductSelection() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    { id: 1, name: 'Laptop' },
    { id: 2, name: 'Smartphone' },
    { id: 3, name: 'Headphones' },
  ];

  const handleRadioChange = (event) => {
    setSelectedProduct(event.target.value);
  };

  return (
    <div>
      <h2>Select a product that you want to buy:</h2>
      {products.map((product) => (
        <div key={product.id}>
          <input
            type="radio"
            id={product.id}
            name="product"
            value={product.name}
            onChange={handleRadioChange}
          />
          <label htmlFor={product.id}>{product.name}</label>
        </div>
      ))}

      {selectedProduct && <h3>Selected Product: {selectedProduct}</h3>}
    </div>
  );
}

export default ProductSelection;
