import React, { useReducer, useState } from "react";
import { Button, Form, Container, Row, Col, ListGroup, Dropdown } from "react-bootstrap";

function listReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return { ...state, items: [...state.items, action.item] };
    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.id),
      };
    case "EDIT_ITEM":
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.id ? { ...item, name: action.name } : item
        ),
      };
    default:
      return state;
  }
}

const initialState = {
  items: [],
};

function ItemList() {
  const [state, dispatch] = useReducer(listReducer, initialState);
  const [newItemName, setNewItemName] = useState("");
  const [editItemId, setEditItemId] = useState(null);
  const [editItemName, setEditItemName] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortType, setSortType] = useState("created");

  // Thêm item mới
  const handleAddItem = () => {
    if (newItemName.trim()) {
      const newItem = { id: Date.now(), name: newItemName, createdAt: Date.now() };
      dispatch({ type: "ADD_ITEM", item: newItem });
      setNewItemName("");
    }
  };

  // Xóa item
  const handleRemoveItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", id });
  };

  // Bắt đầu chỉnh sửa item
  const startEditing = (item) => {
    setEditItemId(item.id);
    setEditItemName(item.name);
  };

  // Lưu chỉnh sửa item
  const saveEdit = (id) => {
    if (editItemName.trim()) {
      dispatch({ type: "EDIT_ITEM", id, name: editItemName });
      setEditItemId(null);
      setEditItemName("");
    }
  };

  // Lọc và sắp xếp danh sách item
  const filteredAndSortedItems = state.items
    .filter((item) => item.name.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => {
      if (sortType === "alphabetical") {
        return a.name.localeCompare(b.name);
      }
      return b.createdAt - a.createdAt; // Mới nhất trước
    });

  return (
    <Container className="mt-4">
      <Row>
        <Col md={8} className="mx-auto">
          <h2 className="text-center mb-4">Quản lý danh sách</h2>
          <Form>
            <Form.Group controlId="formItem" className="mb-3">
              <Form.Label>Thêm Item:</Form.Label>
              <Form.Control
                type="text"
                value={newItemName}
                onChange={(e) => setNewItemName(e.target.value)}
                placeholder="Nhập tên item"
              />
            </Form.Group>
            <Button variant="primary" onClick={handleAddItem} className="mb-3">
              Thêm Item
            </Button>
          </Form>

          <Form.Group controlId="formSearch" className="mb-3">
            <Form.Label>Tìm kiếm:</Form.Label>
            <Form.Control
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm kiếm item"
            />
          </Form.Group>

          <Dropdown className="mb-3">
            <Dropdown.Toggle variant="secondary" id="dropdown-sort">
              Sắp xếp: {sortType === "alphabetical" ? "Theo chữ cái" : "Theo thời gian"}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => setSortType("created")}>
                Theo thời gian
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setSortType("alphabetical")}>
                Theo chữ cái
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <h3 className="mt-4">Danh sách Item:</h3>
          <ListGroup>
            {filteredAndSortedItems.length === 0 ? (
              <p>Không có item nào.</p>
            ) : (
              filteredAndSortedItems.map((item) => (
                <ListGroup.Item
                  key={item.id}
                  className="d-flex justify-content-between align-items-center"
                >
                  {editItemId === item.id ? (
                    <Form.Control
                      type="text"
                      value={editItemName}
                      onChange={(e) => setEditItemName(e.target.value)}
                    />
                  ) : (
                    <span>{item.name}</span>
                  )}
                  <div>
                    {editItemId === item.id ? (
                      <Button
                        variant="success"
                        size="sm"
                        onClick={() => saveEdit(item.id)}
                        className="me-2"
                      >
                        Lưu
                      </Button>
                    ) : (
                      <Button
                        variant="warning"
                        size="sm"
                        onClick={() => startEditing(item)}
                        className="me-2"
                      >
                        Sửa
                      </Button>
                    )}
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => handleRemoveItem(item.id)}
                    >
                      Xóa
                    </Button>
                  </div>
                </ListGroup.Item>
              ))
            )}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default ItemList;
