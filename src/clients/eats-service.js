const EatsService = {
  BASE_HOST: 'http://localhost:3030',
  
  async createOrder(value) {
    value = Number(value);
    const query = isNaN(value) ? '' : `?totalValue=${value}`;
    const res = await fetch(`${this.BASE_HOST}/create-order${query}`, { method: 'POST' });
    const { ID } = await res.json();
    return ID;
  },
  
  async getStatus(workflowId) {
    const res = await fetch(`${this.BASE_HOST}/get-status?workflowId=${workflowId}`);
    return res.json();
  },
  
  async orderReceived(workflowId) {
    const res = await fetch(`${this.BASE_HOST}/order-received?workflowId=${workflowId}`, { method: 'POST' });
    return res.json();
  },
};

export default EatsService;
