const env = process.env.APP_ENV;

beforeEach(() => {
  jest.resetModules();
});

afterEach(() => {
  process.env.APP_ENV = env;
});

describe('Shared config', () => {
  it('should load development', () => {
    process.env.APP_ENV = 'development';
    const config = require('~/config/shared').default;
    expect(config).not.toEqual({});
  });
  it('should load production', () => {
    process.env.APP_ENV = 'production';
    const config = require('~/config/shared').default;
    expect(config).not.toEqual({});
  });
  it('should load empty for non-existant config', () => {
    global.console.info = jest.fn();
    process.env.APP_ENV = 'fake';
    const config = require('~/config/shared').default;
    expect(config).toEqual({});
    expect(global.console.info).toHaveBeenCalledTimes(1);
    global.console.info.mockRestore();
  });
});
