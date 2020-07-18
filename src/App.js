import React, { useState, useEffect } from "react";
import "./styles.css";
import ExpencceForm from "./ExpenceForm";
import ExpenceList from "./ExpenceList";
import Alert from "./Alert";

export default function App() {
  const [id, setId] = useState(0);
  const [edit, setEdit] = useState(false);
  const InitialItem = localStorage.getItem("expence")
    ? JSON.parse(localStorage.getItem("expence"))
    : [];

  const [expence, setExpence] = useState(InitialItem);

  useEffect(() => {
    localStorage.setItem("expence", JSON.stringify(expence));
    console.log("added");
  }, [expence]);

  const [charge, setCharge] = useState("");
  const [amount, setAmount] = useState("");
  const [alert, setAlert] = useState({ show: false, type: "", text: "" });

  const handleCharge = e => {
    setCharge(e.target.value);
  };
  const handleAmount = e => {
    setAmount(e.target.value);
  };
  const handleClearAll = e => {
    setExpence([]);
    handleAlert({ type: "danger", text: "All Item Deleted" });
  };
  const handleDelete = id => {
    const deleteItem = expence.filter(item => item.id !== id);
    setExpence(deleteItem);
    handleAlert({ type: "danger", text: "Item Deleted" });

    // console.log(id);
  };

  const handleEdit = id => {
    // setEdit(true);
    let EditItem = expence.find(item => item.id === id);
    let { amount, charge } = EditItem;
    setAmount(EditItem.amount);
    setCharge(EditItem.charge);
    setEdit(true);
    setId(id);
  };

  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text });
    setTimeout(() => {
      setAlert({ show: false });
    }, 3000);
  };
  const handleSubmit = e => {
    e.preventDefault();

    if (charge !== "" && amount > 0) {
      if (edit) {
        const tempExpence = expence.map(item => {
          return item.id === id ? { ...item, charge, amount } : item;
        });
        setExpence(tempExpence);
        setEdit(false);
        handleAlert({ type: "success", text: "Item Edited" });
      } else {
        const singleExpence = {
          id: Math.random(),
          charge,
          amount
        };
        setExpence([...expence, singleExpence]);
        handleAlert({ type: "success", text: "Item Added" });
      }
      setCharge("");
      setAmount("");
    } else {
      handleAlert({
        type: "danger",
        text: "Amount cant be empty and should be greater than zero"
      });
    }
  };
  return (
    <div>
      {alert.show && <Alert type={alert.type} text={alert.text} />}
      <ExpencceForm
        expence={expence}
        charge={charge}
        amount={amount}
        handleAmount={handleAmount}
        handleCharge={handleCharge}
        handleSubmit={handleSubmit}
        edit={edit}
      />
      <ExpenceList
        expence={expence}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        handleClearAll={handleClearAll}
      />

      <h2>
        total ={" "}
        {expence.reduce((total, current) => {
          return (total += parseInt(current.amount));
        }, 0)}
      </h2>
    </div>
  );
}
