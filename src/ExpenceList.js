import React from "react";
import { ExpenceItem } from "./ExpenceItem";

export default function ExpenceList({
  expence,
  handleEdit,
  handleDelete,
  handleClearAll
}) {
  return (
    <div>
      {" "}
      <table>
        <tbody>
          {expence.map(item => (
            <ExpenceItem
              key={item.id}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
              expences={item}
            />
          ))}
        </tbody>
      </table>
      <div>
        {expence.length > 0 && (
          <button onClick={handleClearAll}>Clear All</button>
        )}
      </div>
    </div>
  );
}
