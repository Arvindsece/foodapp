"use client";
import React, { useEffect, useState } from "react";

const AdminPage = () => {
  const [foods, setFoods] = useState([]);
  const [editIdx, setEditIdx] = useState(null);
  const [editFood, setEditFood] = useState({});

  useEffect(() => {
    const storedFoods = JSON.parse(localStorage.getItem("foods") || "[]");
    setFoods(storedFoods);
  }, []);

  const handleDelete = (idx) => {
    const updated = foods.filter((_, i) => i !== idx);
    setFoods(updated);
    localStorage.setItem("foods", JSON.stringify(updated));
  };

  const handleEdit = (idx) => {
    setEditIdx(idx);
    setEditFood({ ...foods[idx] });
  };

  const handleEditChange = (e) => {
    setEditFood({ ...editFood, [e.target.name]: e.target.value });
  };

  const handleEditSave = () => {
    const updated = foods.map((item, idx) =>
      idx === editIdx ? { ...editFood, price: Number(editFood.price), rating: Number(editFood.rating) } : item
    );
    setFoods(updated);
    localStorage.setItem("foods", JSON.stringify(updated));
    setEditIdx(null);
    setEditFood({});
  };

  return (
    <div className="admin-container">
      <h2 className="admin-title">Admin: Manage Foods</h2>
      <div className="admin-table-wrapper">
        <table className="admin-table">
          <thead>
            <tr className="admin-table-header-row">
              <th className="admin-table-header">Image</th>
              <th className="admin-table-header">Name</th>
              <th className="admin-table-header">Categories</th>
              <th className="admin-table-header">Price</th>
              <th className="admin-table-header">Rating</th>
              <th className="admin-table-header">Delivery</th>
              <th className="admin-table-header">Actions</th>
            </tr>
          </thead>
          <tbody>
            {foods.map((food, idx) => (
              <tr key={idx}>
                <td className="admin-table-cell">
                  <img src={food.imageURL} alt={food.name} className="admin-food-image" />
                </td>
                <td className="admin-table-cell">
                  {editIdx === idx ? (
                    <input name="name" value={editFood.name} onChange={handleEditChange} className="admin-input" />
                  ) : (
                    food.name
                  )}
                </td>
                <td className="admin-table-cell">
                  {editIdx === idx ? (
                    <input name="categories" value={editFood.categories} onChange={handleEditChange} className="admin-input" />
                  ) : (
                    food.categories
                  )}
                </td>
                <td className="admin-table-cell">
                  {editIdx === idx ? (
                    <input name="price" type="number" value={editFood.price} onChange={handleEditChange} className="admin-input" />
                  ) : (
                    food.price
                  )}
                </td>
                <td className="admin-table-cell">
                  {editIdx === idx ? (
                    <input name="rating" type="number" step="0.1" value={editFood.rating} onChange={handleEditChange} className="admin-input" />
                  ) : (
                    food.rating
                  )}
                </td>
                <td className="admin-table-cell">
                  {editIdx === idx ? (
                    <input name="deliveryDuration" value={editFood.deliveryDuration} onChange={handleEditChange} className="admin-input" />
                  ) : (
                    food.deliveryDuration
                  )}
                </td>
                <td className="admin-table-cell">
                  {editIdx === idx ? (
                    <>
                      <button onClick={handleEditSave} className="admin-btn admin-btn-save">Save</button>
                      <button onClick={() => setEditIdx(null)} className="admin-btn admin-btn-cancel">Cancel</button>
                    </>
                  ) : (
                    <>
                      <button onClick={() => handleEdit(idx)} className="admin-btn admin-btn-edit">Edit</button>
                      <button onClick={() => handleDelete(idx)} className="admin-btn admin-btn-delete">Delete</button>
                    </>
                  )}
                </td>
              </tr>
            ))}
            {foods.length === 0 && (
              <tr>
                <td colSpan={7} className="admin-table-empty">No food items found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPage;
