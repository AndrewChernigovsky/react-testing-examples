import React from "react";
import task2 from './../assets/task2.png';

export function Task2() {
	const [show, setShow] = React.useState('no-active');

	function onClick() {
		setShow('active');
	}

	return <>
		<div className="wrapper-preview">
			<img src={task2} alt="" />
			<div className="wrapper">
				<h2>Задача №2 / 10</h2>
				<h3>Чему будет равен ref.current?</h3>
				<div className="w">

					<p className="text">Здесь мы используем кастомный хук <b>useHook</b>, для создания рефа, которому мы присваиваем значение, полученное нашим хуком. Передаваемое свойство <b>value</b>, которое запишется в <b>ref.current</b> </p>
					<div className={"close " + show}></div>
				</div>
				<button type="button" onClick={onClick}>Посмотреть Ответ: </button>
			</div>
		</div>

	</>
}