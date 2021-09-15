const PaymentService = {
  BASE_HOST: 'http://localhost:3001/payments',
  
  async submitPayment() {
    const res = await fetch(this.BASE_HOST);
    return res.json();
  }
};

export default PaymentService;
