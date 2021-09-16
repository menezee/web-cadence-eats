const EatsService = {
  BASE_HOST: 'http://localhost:3001',
  
  async submitPayment(value) {
    value = Number(value);
    const query = isNaN(value) ? '' : `?totalValue=${value}`;
    const res = await fetch(`${this.BASE_HOST}/create-order${query}`, { method: 'POST' });
    return res.json();
  }
};

export default EatsService;
