// Sample customer details
const customers = [
  { id: '123', name: 'John Doe', roomNumber: '101', phoneNumber: '123-456-7890' },
  { id: '456', name: 'Jane Smith', roomNumber: '202', phoneNumber: '987-654-3210' }
];

const loginForm = document.getElementById('loginForm');
const customerDetails = document.getElementById('customerDetails');
const roomNumber = document.getElementById('roomNumber');
const phoneNumber = document.getElementById('phoneNumber');

loginForm.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const customerId = document.getElementById('customerId').value;
  const customerName = document.getElementById('customerName').value;

  const customer = customers.find(c => c.id === customerId && c.name === customerName);

  if (customer) {
    roomNumber.textContent = `Room Number: ${customer.roomNumber}`;
    phoneNumber.textContent = `Phone Number: ${customer.phoneNumber}`;
    customerDetails.classList.remove('hidden');
  } else {
    alert('Invalid Customer ID or Name');
  }
});
