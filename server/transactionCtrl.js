module.exports = {
  create: async (req, res) => {
    let { amount, description } = req.body;
    console.log("user", req.session.user);
    let { user_id } = req.session.user;
    const db = req.app.get("db");

    let [newTransaction] = await db.transaction.create([
      user_id,
      amount,
      description,
    ]);
    return res.status(200).send(newTransaction);
  },
  list: async (req, res) => {
    console.log("list", req.session.user);
    let { user_id } = req.session.user;
    const db = req.app.get("db");

    let transactions = await db.transaction.list([user_id]);
    return res.status(200).send(transactions);
  },
  delete: async (req, res) => {
    const {id} = req.params
    const db = req.app.get('db')

    await db.transaction.delete([id])
    return res.status(200).send('item deleted')
  }
  
};
