import { toCapitalizeFirstLetter } from './utils';

describe('toCapitalizeFirstLetter test', () => {
  it('Должен вернуть строку с заглавной буквой', () => {
    expect(toCapitalizeFirstLetter('строка')).toBe('Строка');
    expect(toCapitalizeFirstLetter('СТРОКА')).toBe('Строка');
    expect(toCapitalizeFirstLetter('сТрОкА')).toBe('Строка');
  });
});
