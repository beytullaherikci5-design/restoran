const { connectToDatabase } = require('./db');

module.exports = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }
    
    const db = await connectToDatabase();
    const orders = db.collection('orders');
    
    if (req.method === 'GET') {
        const allOrders = await orders.find({}).toArray();
        return res.json(allOrders);
    }
    
    if (req.method === 'POST') {
        const order = req.body;
        order.createdAt = new Date();
        await orders.insertOne(order);
        return res.json({ success: true, order });
    }
    
    if (req.method === 'DELETE') {
        const { id } = req.query;
        await orders.deleteOne({ id: parseInt(id) });
        return res.json({ success: true });
    }
    
    return res.status(405).json({ error: 'Method not allowed' });
};
