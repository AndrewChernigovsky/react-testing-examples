import React from "react";
import task11 from './../assets/task11.png';

export function Task11() {
	const [show, setShow] = React.useState('no-active');


	var i = 10;
	var array = [];

	while (i--) {
		// console.log(array);
		array.push(function () {
			console.log(i);
			return i + i;
		})
	}
	console.log([array[0](), array[1]()]);


	function onClick() {
		setShow('active');
	}


	return <>
		<div className="wrapper-preview">
			<img src={task11} alt="" />
			<div className="wrapper">
				<h2>Задача со звездочкой</h2>
				<h3>Что будет выведено в консоли после выполнения фрагмента кода?</h3>
				<div className="w">
					<p className="text"> Здесь присутствует замыкание переменной <b>i</b> и также постфиксный декремент, мы пушим в массив анонимные функции, которые складывают счетчики <b>i + i</b>. Так как у нас замыкание и счетчик уменьшается от 10 до 0, у нас происходит заполнение массива функциями до момента, пока счетчик не станет -1, так как используется постфикс. Далее в консоли мы вызываем первые две функции из массива и у них одинаковое значение счетчика равное -1.</p>
					<div className={"close " + show}></div>
				</div>
				<button type="button" onClick={onClick}>Посмотреть Ответ: </button><span className={show + ' ' + 'answer'}> [-2, -2] </span>
			</div>
		</div >
	</>

}

