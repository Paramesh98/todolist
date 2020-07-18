import React from "react";

export const ExpenceItem = ({ expences, handleEdit, handleDelete }) => {
  const { id, amount, charge } = expences;
  return (
    <>
      <tr>
        <td>{charge}</td>
        <td>{amount}</td>
        <td>
          <button onClick={() => handleEdit(id)}>Edit</button>
        </td>
        <td>
          <button onClick={() => handleDelete(id)}>Delete</button>
        </td>
      </tr>
    </>
  );
};
