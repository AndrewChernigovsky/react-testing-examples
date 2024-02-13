import React from "react";
import task6 from './../assets/task6.png';

export function Task6() {
	const [show, setShow] = React.useState('no-active');

	function onClick() {
		setShow('active');
	}

	return <>
		<div className="wrapper-preview">
			<img src={task6} alt="" />
			<div className="wrapper">
				<h2>Задача №6 / 10</h2>
				<h3>Какая ошибка в этом коде?</h3>
				<div className="w">
					<p className="text"> В данном примере, мы создаем постоянную переменную <b>data</b> в которую записываем объект со свойствами <b>value, increment</b> increment является стрелочной функцией, которая ссылается на значение <b>value</b> объекта data. </p>
					<div className={"close " + show}></div><p className="text">Однако, есть проблема, контекст не привязывается к стрелочной функции и ссылка this не найдет данного свойства у объекта data. И нам выйдет ошибка (Uncaught TypeError: Cannot read properties of undefined (reading `value`)), которая все сломает. Если же пропустить этот момент и перейти к логу, то он выведет просто свойство value и будет 1</p>
				</div>
				<button type="button" onClick={onClick}>Посмотреть Ответ: </button><span className={show + ' ' + 'answer'}>Uncaught TypeError: Cannot read properties of undefined (reading `value`)</span>
			</div>
		</div>
	</>
}


