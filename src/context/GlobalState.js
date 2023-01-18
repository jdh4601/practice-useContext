import React, { createContext, useReducer } from 'react';

const initialState = {
  transactions: [
    { id: 1, text: 'Flower', amount: -20 },
    { id: 2, text: 'Chicken', amount: -300 },
    { id: 3, text: 'Salary', amount: 400 },
  ],
};

// global state를 전역적으로 사용하기 -> createContext(initialState)
export const GlobalContext = createContext(initialState);

const AppReducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_TRANSACTION':
      return {
        ...state,
        transactions: state.transactions.filter(
          transaction => transaction.id !== action.payload
        ),
      };
    case 'ADD_TRANSACTION':
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    default:
      return state;
  }
};

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Dispatch(Actions) -> Reducer 함수로 전달
  // why this doesn't work?
  const deleteTransaction = id => {
    dispatch({
      type: 'DELETE_TRANSCATION',
      payload: id,
    });
  };
  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
