const salutations = guest => 'hello{guest}!';
describe('salutations', () => {
    it('says hola to the guest', () => {
    expect(salutations('world')).toBe('hola!');
    });
});