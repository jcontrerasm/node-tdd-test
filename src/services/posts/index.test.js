import posts from './index';

describe('Unit Test services Posts', () => {

  let axiosMock = {};
  const BASE_URL = 'https://jsonplaceholder.typicode.com';
  const usersMock = [
    { id: 1 },
    { id: 2 }
  ];

  beforeAll(() => {
    axiosMock = {
      get: jest.fn().mockResolvedValue({ data: usersMock }),
      post: jest.fn().mockResolvedValue({ data: { id: 1000 } }),
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('Method POST', () => {
    test('Should create post', async () => {
      const postMock = {
        userId: 1,
        title: "Título",
        body: "Cuerpo del post"
      };
      const requestMock = {
        body: postMock
      };
      const responseMock = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn()
      }
      await posts(axiosMock).POST(requestMock, responseMock);
      const urlGet = `${BASE_URL}/users`;
      const urlPost = `${BASE_URL}/posts`;
      expect(axiosMock.get).toBeCalledWith(urlGet);
      expect(axiosMock.post).toBeCalledWith(urlPost, postMock);
      expect(responseMock.status).toBeCalledWith(201);
      expect(responseMock.send).toBeCalledWith({ id: 1000 });
    });

    test('Should not create post', async () => {
      const postMock = {
        userId: 20,
        title: "Título",
        body: "Cuerpo del post"
      };
      const requestMock = {
        body: postMock
      };
      const responseMock = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn(),
        sendStatus: jest.fn().mockReturnThis()
      }
      await posts(axiosMock).POST(requestMock, responseMock);
      const urlGet = `${BASE_URL}/users`;
      expect(axiosMock.get).toBeCalledWith(urlGet);
      expect(axiosMock.post).not.toBeCalled();
      expect(responseMock.status).not.toBeCalled();
      expect(responseMock.send).not.toBeCalled();
      expect(responseMock.sendStatus).toBeCalledWith(400);
    });
  });

});
