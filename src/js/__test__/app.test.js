// app.test.js data-driven test
import Validator from '../app';

describe('Validator', () => {
  const testCases = [
    { phoneNumber: '+79270000000', expectedResult: '+79270000000' },// РФ
    { phoneNumber: '89270000000', expectedResult: '+79270000000' },
    { phoneNumber: '+7 927 000 00 00', expectedResult: '+79270000000' },
    { phoneNumber: '+7 (927) 000-00-00', expectedResult:'+79270000000' },
    { phoneNumber: 'phoneNumber', expectedResult: `Phone number error!` },
    { phoneNumber: '+7 phoneNumber 1', expectedResult: `Phone number error!` },
    { phoneNumber: '+860000000000', expectedResult: '+860000000000' },// Китай
    { phoneNumber: '+86 000 000 0000', expectedResult: '+860000000000' },
    { phoneNumber: '+1 (555) 123-4567', expectedResult: '+15551234567' },// США
    { phoneNumber: '+44 20 7946 0958', expectedResult: '+442079460958' },// Великобритания
    // можно добавить еще тестовые случаи, при необходимости
  ];

  testCases.forEach(({ phoneNumber, expectedResult }) => {
    test(`phoneNumber: ${phoneNumber} should return ${expectedResult}`, () => {
      const validator = Validator.validatePhone(phoneNumber);

      expect(validator).toBe(expectedResult);
    });
  });
});