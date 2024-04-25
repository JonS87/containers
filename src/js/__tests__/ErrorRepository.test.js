import { ErrorRepository } from '../class/ErrorRepository';


test.each([
  [1, 'Некорректная длина имени'],
  [2, 'Некорректный тип'],
  [3, 'Нельзя повысить левел умершего'],
  [4, 'Unimplemented'],
  [5, 'Unknown error'],
])(
('should check translate error code "%s" to error description "%s"'),
(code, expected) => {
  const er = new ErrorRepository();
  const result = er.translate(code);
  expect(result).toBe(expected);
});