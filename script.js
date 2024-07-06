// Array of order objects
const orders = [
    { id: 1, items: 58 },
    { id: 2, items: 69 },
    { id: 3, items: 40 },
    { id: 4, items: 100},
    { id: 5, items: 94 }
];

// Function to calculate total number of items
function calculateTotalItems(orders) {
    let total = 0;
    orders.forEach(order => {
        total += order.items;
    });
    return total;
}

// Get the total number of items
const totalItems = calculateTotalItems(orders);

// Display the total number of items on the page
document.getElementById('total-count').textContent = totalItems;
