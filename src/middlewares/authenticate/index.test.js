import { authenticate } from './index';

describe('Test middleware authenticate', () => {

  beforeAll(() => {
  });

  test('Should have id 1', () => {
    const requestMock = {
      header: jest.fn().mockReturnValue(1)
    }
    const responserMock = {
      sendStatus: jest.fn()
    }
    const next = jest.fn();
    authenticate(requestMock, responserMock, next);
    expect(requestMock.header).toBeCalled();
    expect(requestMock.header).toBeCalledWith('user_id');
    expect(responserMock.sendStatus).not.toBeCalled();
    expect(next).toBeCalled();
  });

  test('Should fail if user is not the one with id 1', () => {
    const requestMock = {
      header: jest.fn().mockReturnValue(2)
    }
    const responserMock = {
      sendStatus: jest.fn()
    }
    const next = jest.fn();
    authenticate(requestMock, responserMock, next);
    expect(requestMock.header).toBeCalled();
    expect(requestMock.header).toBeCalledWith('user_id');
    expect(responserMock.sendStatus).toBeCalled();
    expect(responserMock.sendStatus).toBeCalledWith(403);
    expect(next).not.toBeCalled();
  });

});
