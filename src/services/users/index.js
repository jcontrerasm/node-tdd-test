import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

const GET = async (req, res) => {
  const { data } = await axios.get(`${BASE_URL}/users`);
  res.status(200).send(data);
};

const POST = async (req, res) => {
  const { data } = await axios.post(`${BASE_URL}/users`, req.body);
  res.status(201).send(data);
};

const PUT = async (req, res) => {
  const { id } = req.params;
  await axios.put(`${BASE_URL}/users/${id}`, req.body);
  res.sendStatus(204);
};

const DELETE = async (req, res) => {
  const { id } = req.params;
  await axios.delete(`${BASE_URL}/users/${id}`);
  res.sendStatus(204);
};

export default { GET, POST, PUT, DELETE };
