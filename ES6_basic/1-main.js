import taskBlock from './1-block-scoped';

describe('Block scoped variables testing', () => {
  test('taskBlock(true) should return [false, true]', () => {
    expect(taskBlock(true)).toEqual([false, true]);
  });

  test('taskBlock(false) should return [false, true]', () => {
    expect(taskBlock(false)).toEqual([false, true]);
  });
});