import React, { useState } from 'react';

function AddTransaction() {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  return (
    <div>
      <h3>Add New Transaction</h3>
      <form>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            placeholder="Enter text..."
            value={text}
            onChange={e => setText(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            placeholder="Enter a mount.."
            value={amount}
            onChange={e => setAmount(e.target.value)}
          />
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </div>
  );
}

export default AddTransaction;
