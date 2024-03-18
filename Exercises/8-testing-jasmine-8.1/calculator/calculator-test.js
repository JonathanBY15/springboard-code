
it('should calculate the monthly rate correctly', function () {
  let values = {
    amount: 10000,
    years: 30,
    rate: 8,
  }
  expect(calculateMonthlyPayment(values)).toEqual("6666.67");

  values = {
    amount: 0,
    years: 30,
    rate: 8,
  }
  expect(calculateMonthlyPayment(values)).toEqual("0.00");

});

it("should return a result with 2 decimal places", function () {
  let values = {
    amount: 100,
    years: 3,
    rate: 2,
  }
  expect(calculateMonthlyPayment(values)).toEqual("16.73");

  values = {
    amount: 0,
    years: 30,
    rate: 8,
  }
  expect(calculateMonthlyPayment(values)).toEqual("0.00");
});

it('should return a string value', function () {
  let values = {
    amount: 100,
    years: 3,
    rate: 2,
  }
  expect(calculateMonthlyPayment(values)).toBeInstanceOf(String);

  values = {
    amount: 10000,
    years: 30,
    rate: 8,
  }
  expect(calculateMonthlyPayment(values)).toBeInstanceOf(String);

  values = {
    amount: 0,
    years: 30,
    rate: 8,
  }
  expect(calculateMonthlyPayment(values)).toBeInstanceOf(String);
});
