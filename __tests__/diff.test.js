import fs from 'fs';
import genDiff from '../src';

test('genDiff_json', () => {
  const expected = fs.readFileSync('__tests__/__fixtures__/expected').toString();

  expect(genDiff('__tests__/__fixtures__/before.json', '__tests__/__fixtures__/after.json')).toBe(expected);
});
