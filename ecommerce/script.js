
const orders = [
    { orderId: 1, itemsSold: 3 },
    { orderId: 2, itemsSold: 5 },
    { orderId: 3, itemsSold: 2 },
    { orderId: 4, itemsSold: 4 }
];

function getTotalItemsSold(orders) {
    return orders.reduce((total, order) => total + order.itemsSold, 0);
}


document.getElementById('calculateButton').addEventListener('click', () => {
    const totalItemsSold = getTotalItemsSold(orders);
    document.getElementById('result').textContent = `Total items sold: ${totalItemsSold}`;
});
