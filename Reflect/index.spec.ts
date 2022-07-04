describe("Reflect", () => {
  describe("Reflect.apply(target, thisArgument, argumentsList)", () => {
    it("Math.floor", () => {
      const result = Reflect.apply(Math.floor, undefined, [1.75]);

      expect(result).toBe(1);
    });
  });
});
