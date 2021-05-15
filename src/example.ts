// 1. Работа с простыми типами
// Напиши тип функции, конкатенирующей две строки
// concat('Hello ', 'World') // -> Hello World;

type TypeFn = (first: string, second: string) => string;


// 2.Работа с интерфейсами
// Напиши интерфейс для описания следующих данных
// const MyHometask = {
// 	howIDoIt: "I Do It Wel",
// 	simeArray: ["string one", "string two", 42],
// 	withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],
// }

type SimeArray = (string | number)[];

interface MyHomeTaskInterface {
  howIDoIt: string,
	simeArray: SimeArray,
	withData: ({
    howIDoIt: string,
    simeArray: SimeArray,
  })[],
}


// 3. Типизация функций, используя Generic
// В уроке про Generics мы написали интерфейс массива MyArray...
// Добавь типизацию для метода reduce
// interface MyArray<T> {
// 	[N: number]: T;
//
// 	reduce();
// }

interface MyArray<T> {
	[N: number]: T;

	reduce<U>(fn: (acc: U, currVal: T, currIndex: number, array: T[]) => U, initialVal: U): U;
}
