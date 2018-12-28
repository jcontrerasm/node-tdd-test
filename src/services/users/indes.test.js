import users from './index';

describe('Test services Users', () => {

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

  describe('Method GET', () => {
    test('return to user json', async () => {
      const requestMock = {};
      const responseMock = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn()
      }
      await users(axiosMock).GET(requestMock, responseMock);
      const urlGet = `${BASE_URL}/users`;
      expect(axiosMock.get.mock.calls[0]).toEqual([urlGet]);
      expect(responseMock.status.mock.calls[0]).toEqual([200]);
      expect(responseMock.send.mock.calls[0]).toEqual([{}]);
    });
  });

  describe('Method POST', () => {
    test('return to user json', async () => {
      const requestMock = {
        body: {}
      };
      const responseMock = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn()
      }
      await users(axiosMock).POST(requestMock, responseMock);
      const urlPost = `${BASE_URL}/users`;
      expect(axiosMock.post.mock.calls[0]).toEqual([urlPost, {}]);
      expect(responseMock.status.mock.calls[0]).toEqual([201]);
      expect(responseMock.send.mock.calls[0]).toEqual([{}]);
    });
  });

  describe('Method PUT', () => {
    test('return to user json', async () => {
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
      expect(axiosMock.put.mock.calls[0]).toEqual([urlPut, {}]);
      expect(responseMock.sendStatus.mock.calls[0]).toEqual([204]);
    });
  });

  describe('Method DELETE', () => {
    test('return to user json', async () => {
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
      expect(axiosMock.delete.mock.calls[0]).toEqual([urlDelete]);
      expect(responseMock.sendStatus.mock.calls[0]).toEqual([204]);
    });
  });

});
