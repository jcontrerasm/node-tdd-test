const BASE_URL = 'https://jsonplaceholder.typicode.com';

export default (axios) => ({
  POST: async (req, res) => {
    const { data: users } = await axios.get(`${BASE_URL}/users`);
    const searchResult = users.find(user => user.id === req.body.userId);
    if (searchResult) {
      const { data } = await axios.post(`${BASE_URL}/posts`, req.body);
      res.status(201).send(data);
    } else {
      res.sendStatus(400);
    }
  }
});
