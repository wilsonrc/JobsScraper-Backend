import assert from 'assert';

describe('Just initializing tests', () => {
  it('should pass', () => {
    assert.equal(true, true);
  });

  it('should sum 1+1', () => {
    assert.equal(1 + 1, 2);
  });

  it('should support promises', async () => {
    const result = await Promise.resolve(1);

    assert.ok(result);
  });
});
