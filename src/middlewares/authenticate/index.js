export default (request, response, next) => {
  const userId = request.header('user_id');
  if(userId !== '1') {
    return response.sendStatus(403);
  }
  next();
};
