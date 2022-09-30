import countries from "../index";

describe('getCountry', () => {
    it("should get basic data on the country canada", async () => {
    const data = await countries.getCountry('canada');
    expect(data).toEqual({
        capital: 'Ottawa',
        region: 'Americas',
        numericCode: '124'
    });
    });
});

/** Add test for getRegionCountries function here */
describe('getRegionCountries', () => {
it("should get basic data on the regin country", async () => {
    const data = await countries.getRegionCountries('eu');
    expect(data[1]).toEqual(
      'Austria'
     );
  });
});

describe('getRegionCapitals', () => {
it("should get capitals of NAFTA countries", async () => {
  const data = await countries.getRegionCapitals('nafta');
  expect(data).toEqual([
    'Ottawa', 'Mexico City', 'Washington, D.C.'
  ]);
});
});