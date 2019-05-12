const env = process.env.APP_ENV;

beforeEach(() => {
  jest.resetModules();
});

afterEach(() => {
  process.env.APP_ENV = env;
});

describe('Server config', () => {
  it('should load development by default', () => {
    delete process.env.APP_ENV;
    const defaultConfig = require('~/config/server').default;
    jest.resetModules();
    process.env.APP_ENV = 'development';
    const devConfig = require('~/config/server').default;
    expect(defaultConfig).toStrictEqual(devConfig);
  });
  it('should load development', () => {
    process.env.APP_ENV = 'development';
    const config = require('~/config/server').default;
    expect(config).not.toEqual({});
  });
  it('should load production', () => {
    process.env.APP_ENV = 'production';
    const config = require('~/config/server').default;
    expect(config).not.toEqual({});
  });
  it('should load empty for non-existant config', () => {
    global.console.info = jest.fn();
    process.env.APP_ENV = 'fake';
    const config = require('~/config/server').default;
    expect(config).toEqual({});
    expect(global.console.info).toHaveBeenCalledTimes(2);
    global.console.info.mockRestore();
  });
  it('should throw error if loaded in browser', () => {
    expect.assertions(2);
    global.console.warn = jest.fn();
    process.env.BROWSER = true;
    process.env.APP_ENV = 'development';
    try {
      require('~/config/server').default;
    } catch (err) {
      expect(err).toBeDefined();
    }

    expect(global.console.warn).toHaveBeenCalledTimes(1);
    global.console.warn.mockRestore();
  });
});
