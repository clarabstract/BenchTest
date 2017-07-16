export default function storeTransactions({transactions=[], availableTransactions=0, page=1}) {
  return {
    type: 'STORE_TRANSACTIONS',
    payload: {transactions, availableTransactions, page},
  };
}