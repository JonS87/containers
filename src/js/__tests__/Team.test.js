import { Team } from '../class/Team';
import { Bowerman } from '../class/Bowerman';


test('Check adding person on Team', () => {
  const person = new Bowerman('Лучник', 'Bowerman');
  const result = new Team();
  result.add(person);

  expect(result.members.size).toBe(1);
});

test('Checking that two identical person are not added to the team', () => {
  function newPerson() {
    const person = new Bowerman('Лучник', 'Bowerman');
    const result = new Team();
    result.add(person);
    result.add(person);
  }

  expect(newPerson).toThrow(Error);
});

test('Check add several persons to the team', () => {
  const person1 = new Bowerman('Archer', 'Bowerman');
  const person2 = new Bowerman('Swordsman', 'Bowerman');
  const result = new Team();
  result.addAll(person1, person1, person2);

  expect(result.members.size).toBe(2);
});

test('Check method the toArray', () => {
  const person1 = new Bowerman('Archer', 'Bowerman');
  const person2 = new Bowerman('Swordsman', 'Bowerman');
  const resultSet = new Team();
  resultSet.addAll(person1, person1, person2);
  const resultArray = resultSet.toArray();

  expect(resultArray instanceof  Array).toBe(true);
});