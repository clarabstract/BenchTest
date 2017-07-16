export class FailedRequestError extends Error {
  constructor(response, text) {
    super(`${response.status} ${response.statusText}: ${text}`);
    this.response = response;
  }
}

export default class TransactionService {
  constructor (urlBase) {
    this.urlBase = urlBase;
  }

  transactionPageUrl (page) {
    return `${this.urlBase}/transactions/${page}.json`;
  }

  async fetchTransactionPage (page) {
    let response = await fetch(this.transactionPageUrl(page));
    if (!response.ok) {
      throw new FailedRequestError(response, await response.text());
    }
    return response.json();
  }
}