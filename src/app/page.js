"use client";
import { useState } from "react";
import { AsyncpayCheckout } from "@asyncpay/checkout";

export default function Home() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");

  const handleCheckout = (e) => {
    e.preventDefault()
    AsyncpayCheckout({
      publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
      customer: {
        firstName,
        lastName,
        email,
      },
      amount,
      onSuccess: () => {
        // Run a function to process the payment
        alert("Payment successful");
      },
      onClose: () => {
        // Run a function whenever the user closes the popup regardless of the payment status
      },
    });
  };
  return (
    <section>
      <h1>A Simple Asyncpay Checkout</h1>
      <hr />
      <form onSubmit={handleCheckout}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input
            name="firstName"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            name="lastName"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor={"amount"}>Amount</label>
          <input
            type="number"
            name={"amount"}
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div>
          <button>Pay NGN {amount}</button>
        </div>
      </form>
    </section>
  );
}
