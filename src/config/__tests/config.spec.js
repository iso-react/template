beforeEach(() => {
  jest.resetModules();
});

describe('config', () => {
  it('config should load from window.__CONFIG__ in browser', () => {
    process.env.BROWSER = true;
    window.__CONFIG__ = {test: true};
    const config = require('~/config').default;
    expect(config).toStrictEqual(window.__CONFIG__);
  });
  it('config should load from shared config file on server', () => {
    delete process.env.BROWSER;
    const fromFile = require('~/config/shared');
    jest.resetModules();
    const config = require('~/config');
    expect(config).toStrictEqual(fromFile);
  });
});
