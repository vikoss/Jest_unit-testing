describe('String', ()=> {
  const text = 'Hello Test';
  test('Contains', () => {
    expect(text).toMatch(/Test/);
  });
  test('Not match', () => {
    expect(text).not.toMatch(/test/);
  });
  test('Length', () => {
    expect(text).toHaveLength(10);
  });
});