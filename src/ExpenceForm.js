import React from "react";

export default function ExpenceForm({
  charge,
  amount,
  handleAmount,
  handleCharge,
  handleSubmit,
  edit
}) {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={charge}
        onChange={handleCharge}
        id="charge"
        name="charge"
        placeholder="Enter Charge For"
      />
      <input
        type="text"
        value={amount}
        onChange={handleAmount}
        id="amount"
        name="amount"
        placeholder="Enter Amount"
      />
      <button>{edit ? "Edit" : "Submit"}</button>
    </form>
  );
}
