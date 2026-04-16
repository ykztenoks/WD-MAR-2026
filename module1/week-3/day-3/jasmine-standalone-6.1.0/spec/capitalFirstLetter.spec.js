describe("Capitalize First Letter", () => {
  it("Should a funtion", () => {
    expect(typeof capitalizeFirstLetter).toBe("function");
  });
  it("should uppercase the fist letter if given a name", () => {
    expect(capitalizeFirstLetter("ragnar")).toBe("Ragnar");
    expect(capitalizeFirstLetter("daisy")).toBe("Daisy");
    expect(capitalizeFirstLetter("leila")).toBe("Leila");
    expect(capitalizeFirstLetter("bamboo")).toBe("Bamboo");
  });

  it("should lowercase the rest of the name if all caps", () => {
    expect(capitalizeFirstLetter("BOBBY")).toBe("Bobby");
    expect(capitalizeFirstLetter("HOUSTON")).toBe("Houston");
  });

  it("should return the string, Not Valid if given a number", () => {
    expect(capitalizeFirstLetter(88)).toBe("Not Valid");
  });
  it("Should return Not Valid if given no arguments", () => {
    expect(capitalizeFirstLetter()).toBe("Not Valid");
  });
});
