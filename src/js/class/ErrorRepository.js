export class ErrorRepository {
  constructor() {
    this.errorMap = new Map([
      [1, 'Некорректная длина имени'],
      [2, 'Некорректный тип'],
      [3, 'Нельзя повысить левел умершего'],
      [4, 'Unimplemented']

    ]);
  }

  translate(code) {
    const result = this.errorMap.get(code);
    if (result === undefined) {
      return 'Unknown error'
    } else {
      return result;
    }
  }
}
