import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/AdminDashboard.css';

const AdminDashboard = ({ products, updateProduct, deleteProduct, addProduct }) => {
  const [isEditing, setIsEditing] = useState(null);
  const [editedProduct, setEditedProduct] = useState({});
  const [newProduct, setNewProduct] = useState({ id: '', name: '', description: '', price: '', currentPrice: '', image: '' });
  const [previewImage, setPreviewImage] = useState(null); // Để xem trước ảnh

  const handleEdit = (product) => {
    setIsEditing(product.id);
    setEditedProduct({ ...product });
  };

  const handleSave = () => {
    updateProduct(editedProduct);
    setIsEditing(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct({ ...editedProduct, [name]: value });
  };

  const handleNewProductChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image' && files && files[0]) {
      setNewProduct({ ...newProduct, [name]: files[0].name }); // Lấy tên file
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result); // Hiển thị xem trước
      };
      reader.readAsDataURL(files[0]);
    } else {
      setNewProduct({ ...newProduct, [name]: value });
    }
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    addProduct(newProduct);
    setNewProduct({ id: '', name: '', description: '', price: '', currentPrice: '', image: '' });
    setPreviewImage(null); // Reset xem trước
  };

  return (
    <div className="admin-dashboard">
      <h2>Quản lý Sản phẩm</h2>
      
      {/* Form thêm sản phẩm */}
      <div className="add-product">
        <h3>Thêm Sản phẩm mới</h3>
        <form onSubmit={handleAddProduct}>
          <input
            type="text"
            name="name"
            value={newProduct.name}
            onChange={handleNewProductChange}
            placeholder="Tên sản phẩm"
            required
          />
          <input
            type="text"
            name="description"
            value={newProduct.description}
            onChange={handleNewProductChange}
            placeholder="Mô tả"
            required
          />
          <input
            type="text"
            name="price"
            value={newProduct.price}
            onChange={handleNewProductChange}
            placeholder="Giá gốc"
            required
          />
          <input
            type="text"
            name="currentPrice"
            value={newProduct.currentPrice}
            onChange={handleNewProductChange}
            placeholder="Giá hiện tại"
            required
          />
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleNewProductChange}
            required
          />
          {previewImage && <img src={previewImage} alt="Preview" className="preview-image" />}
          <button type="submit">Thêm sản phẩm</button>
        </form>
      </div>

      {/* Danh sách sản phẩm */}
      <div className="product-table">
        <h3>Danh sách Sản phẩm</h3>
        <table>
          <thead>
            <tr>
              <th>Tên</th>
              <th>Mô tả</th>
              <th>Giá gốc</th>
              <th>Giá hiện tại</th>
              <th>Hình ảnh</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>
                  {isEditing === product.id ? (
                    <input
                      type="text"
                      name="name"
                      value={editedProduct.name}
                      onChange={handleChange}
                    />
                  ) : (
                    product.name
                  )}
                </td>
                <td>
                  {isEditing === product.id ? (
                    <input
                      type="text"
                      name="description"
                      value={editedProduct.description}
                      onChange={handleChange}
                    />
                  ) : (
                    product.description
                  )}
                </td>
                <td>
                  {isEditing === product.id ? (
                    <input
                      type="text"
                      name="price"
                      value={editedProduct.price}
                      onChange={handleChange}
                    />
                  ) : (
                    product.price
                  )}
                </td>
                <td>
                  {isEditing === product.id ? (
                    <input
                      type="text"
                      name="currentPrice"
                      value={editedProduct.currentPrice}
                      onChange={handleChange}
                    />
                  ) : (
                    product.currentPrice
                  )}
                </td>
                <td>
                  {isEditing === product.id ? (
                    <input
                      type="text"
                      name="image"
                      value={editedProduct.image}
                      onChange={handleChange}
                    />
                  ) : (
                    product.image
                  )}
                </td>
                <td>
                  {isEditing === product.id ? (
                    <button onClick={handleSave}>Lưu</button>
                  ) : (
                    <button onClick={() => handleEdit(product)}>Sửa</button>
                  )}
                  <button onClick={() => deleteProduct(product.id)}>Xóa</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;