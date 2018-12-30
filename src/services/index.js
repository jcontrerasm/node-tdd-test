import handlersUsers from './users';
import handlersPosts from './posts';

const handlersCollection = {
  users: handlersUsers,
  posts: handlersPosts
};

export const {
  users,
  posts
} = handlersCollection;
