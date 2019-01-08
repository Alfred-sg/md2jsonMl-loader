import { webpack } from './helpers';

describe('loader', () => {
  it('should works', async () => {
    const stats = await webpack('basic.js');
    const { modules } = stats.toJson();
    const [, test] = modules;

    console.log(test.source);

    expect(test.source).toMatchSnapshot('md');
    expect(stats.compilation.warnings).toMatchSnapshot('warnings');
    // expect(stats.compilation.errors).toMatchSnapshot('errors');
  });
});