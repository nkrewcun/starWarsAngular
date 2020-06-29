describe('Fonctionne petite calculette !', () => {
  it('Test addition', () => {
    const a = 3;
    const b = 3;
    expect(a + b).toEqual(6);
  }),

    it('Test multiplication', () => {
      const a = 3;
      const b = 3;
      expect(a * b).toEqual(9);
    });
});
