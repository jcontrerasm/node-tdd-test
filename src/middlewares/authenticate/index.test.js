import authenticate from './index';

describe('Unit test middleware authenticate', () => {

  let responserMock;
  let next;

  beforeAll(() => {
    responserMock = {
      sendStatus: jest.fn()
    }
    next = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('Should have id 1', () => {
    const requestMock = {
      header: jest.fn().mockReturnValue('1')
    }
    authenticate(requestMock, responserMock, next);
    expect(requestMock.header).toBeCalled();
    expect(requestMock.header).toBeCalledWith('user_id');
    expect(responserMock.sendStatus).not.toBeCalled();
    expect(next).toBeCalled();
  });

  test('Should fail if user is not the one with id 1', () => {
    const requestMock = {
      header: jest.fn().mockReturnValue('2')
    }
    authenticate(requestMock, responserMock, next);
    expect(requestMock.header).toBeCalled();
    expect(requestMock.header).toBeCalledWith('user_id');
    expect(responserMock.sendStatus).toBeCalled();
    expect(responserMock.sendStatus).toBeCalledWith(403);
    expect(next).not.toBeCalled();
  });

});
