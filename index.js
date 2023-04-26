// Задание №1
// Используя методы splice и push, напишите программу, которая переставляет первый элемент массива в конец исходного массива.
// Пример ввода: ["один","два","три","четыре"]
// Пример вывода: ["два","три","четыре","один"]
function splicePush(array) {
  let firstItem = array[0]
  array = array.splice(1,array.length - 1)
  array.push(firstItem)
  return array
}

// Задание №2
// Напишите программу, котоая объединяет все элементы массива в строку. Между словами должен быть знак "+".
// Пример ввода: ["один","два","три","четыре"]
// Пример вывода: "один+два+три+четыре"

// //////////////////////СЛОЖНЫЕ МЕТОДЫ МАССИВОВ /////////////////////////////////////////////

// Задание №3
// 	Напишите функцию, определяющую
// максимальное количество повторяющихся
//  элементов в массиве.
// Массив для примера:
// let task5 = [4, 5, 5, 5, 3, 5, 2, 3, 1, 3, 4];

// Задание №4
// Создайте новый массив, в который возвращается объект, составленный из значений вложенных массивов. Первые элемент массива - ключ, второй - значение.
// Используйте метод reduce()

// let data = [['a', 1], ['b', 2]];
// Вывод:
// {
//     'a': 1,
//     'b': 2
// }

// //////////////////////  LOOP /////////////////////////////////////////////

// Задание №5

// Напишите цикл, который предлагает через prompt ввести число больше 100. Если пользователь ввёл другое число – попросить ввести ещё раз, и так далее.
// Цикл должен спрашивать числа до тех пор пока пользователь не введёт число больше 100, либо не нажмёт кнопку Отмена (ESC).
// do {
//   num = prompt("Введите число больше 100?", 0);
//   return num
// } while (num <= 100 && num);

// Задание №6
// Запросите у пользователя любое число num. Напишите цикл который находит сумму всех чисел от 1 до num, введенного пользователем.
// Например: вы получили от пользователя число 2
// Вывод: 3, т.к 3 = 1 + 2
function globalSum(num) {
  let res = num
  num--
  while (num > 0) {
      res += num
      num--
  }
  return res
}
// //////////////////////ARROW FUNC /////////////////////////////////////////////

// Задание №7
// Функция принимает параметр min.
// В нем лежит число от 0 до 59.
// Функция должна возвращать в какую четверть
// часа попадает это число (в первую, вторую,
// третью или четвертую).

// Задание №8
// Реализуйте стрелочную функцию, принимающую строку и символ и возвращающую количество символов в строке.
// Например, если мы передаем «JavaScript» и «a», то должны получить 2 (в строке «JavaScript» две буквы «a»).
