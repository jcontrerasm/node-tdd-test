import users from './index';

describe('Unit test services Users', () => {

  let axiosMock = {};
  const BASE_URL = 'https://jsonplaceholder.typicode.com';

  beforeAll(() => {
    axiosMock = {
      get: jest.fn().mockResolvedValue({ data: {} }),
      post: jest.fn().mockResolvedValue({ data: {} }),
      put: jest.fn().mockResolvedValue({ data: {} }),
      delete: jest.fn()
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('Method GET', () => {
    test('Should get users', async () => {
      const requestMock = {};
      const responseMock = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn()
      }
      await users(axiosMock).GET(requestMock, responseMock);
      const urlGet = `${BASE_URL}/users`;
      expect(axiosMock.get).toBeCalledWith(urlGet);
      expect(responseMock.status).toBeCalledWith(200);
      expect(responseMock.send).toBeCalledWith({});
    });
  });

  describe('Method POST', () => {
    test('Should create user', async () => {
      const requestMock = {
        body: {}
      };
      const responseMock = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn()
      }
      await users(axiosMock).POST(requestMock, responseMock);
      const urlPost = `${BASE_URL}/users`;
      expect(axiosMock.post).toBeCalledWith(urlPost, {});
      expect(responseMock.status).toBeCalledWith(201);
      expect(responseMock.send).toBeCalledWith({});
    });
  });

  describe('Method PUT', () => {
    test('Should update information user', async () => {
      const requestMock = {
        body: {},
        params: {
          id: 1315
        }
      };
      const responseMock = {
        sendStatus: jest.fn().mockReturnThis(),
      }
      await users(axiosMock).PUT(requestMock, responseMock);
      const urlPut = `${BASE_URL}/users/1315`;
      expect(axiosMock.put).toBeCalledWith(urlPut, {});
      expect(responseMock.sendStatus).toBeCalledWith(204);
    });
  });

  describe('Method DELETE', () => {
    test('Should delete user', async () => {
      const requestMock = {
        body: {},
        params: {
          id: 1315
        }
      };
      const responseMock = {
        sendStatus: jest.fn().mockReturnThis(),
      }
      await users(axiosMock).DELETE(requestMock, responseMock);
      const urlDelete = `${BASE_URL}/users/1315`;
      expect(axiosMock.delete).toBeCalledWith(urlDelete);
      expect(responseMock.sendStatus).toBeCalledWith(204);
    });
  });

});
