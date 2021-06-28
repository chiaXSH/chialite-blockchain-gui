const chialite = require("../../util/chialite");

describe("chialite", () => {
  it("converts number mojo to chialite", () => {
    const result = chialite.mojo_to_chialite(1000000);

    expect(result).toBe(0.000001);
  });
  it("converts string mojo to chialite", () => {
    const result = chialite.mojo_to_chialite("1000000");

    expect(result).toBe(0.000001);
  });
  it("converts number mojo to chialite string", () => {
    const result = chialite.mojo_to_chialite_string(1000000);

    expect(result).toBe("0.000001");
  });
  it("converts string mojo to chialite string", () => {
    const result = chialite.mojo_to_chialite_string("1000000");

    expect(result).toBe("0.000001");
  });
  it("converts number chialite to mojo", () => {
    const result = chialite.chialite_to_mojo(0.000001);

    expect(result).toBe(1000000);
  });
  it("converts string chialite to mojo", () => {
    const result = chialite.chialite_to_mojo("0.000001");

    expect(result).toBe(1000000);
  });
  it("converts number mojo to colouredcoin", () => {
    const result = chialite.mojo_to_colouredcoin(1000000);

    expect(result).toBe(1000);
  });
  it("converts string mojo to colouredcoin", () => {
    const result = chialite.mojo_to_colouredcoin("1000000");

    expect(result).toBe(1000);
  });
  it("converts number mojo to colouredcoin string", () => {
    const result = chialite.mojo_to_colouredcoin_string(1000000);

    expect(result).toBe("1,000");
  });
  it("converts string mojo to colouredcoin string", () => {
    const result = chialite.mojo_to_colouredcoin_string("1000000");

    expect(result).toBe("1,000");
  });
  it("converts number colouredcoin to mojo", () => {
    const result = chialite.colouredcoin_to_mojo(1000);

    expect(result).toBe(1000000);
  });
  it("converts string colouredcoin to mojo", () => {
    const result = chialite.colouredcoin_to_mojo("1000");

    expect(result).toBe(1000000);
  });
});
