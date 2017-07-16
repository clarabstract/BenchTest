export default function setTransactionsProblem (problem) {
  return {
    type: 'SET_TRANSACTION_PROBLEM',
    payload: problem,
    error: true,
  };
}