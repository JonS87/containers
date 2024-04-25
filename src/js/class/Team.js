export class Team {
  constructor() {
      this.members = new Set();
  }
  
  add(person) {
    if (this.members.has(person)) {
      throw new Error('Данный персож уже был добавлен в команду');
    } else {
      this.members.add(person);
    }
  }

  addAll(...persons) {
    persons.forEach(person => {
      this.members.add(person);
    })
  }
  
  toArray() {
    return [...this.members]
  }
}