import React from "react";
import task7 from './../assets/task7.png';

export function Task7() {
	const [show, setShow] = React.useState('no-active');

	function onClick() {
		setShow('active');
	}

	return <>
		<div className="wrapper-preview">
			<img src={task7} alt="" />
			<div className="wrapper">
				<h2>Задача №7 / 10</h2>
				<h3>Какая ошибка в этом коде?</h3>
				<div className="w">
					<p className="text"> В данном примере, мы создаем компонент <b>MyComponent</b> в котором мы создаем стейт <b>useState</b> count, setCount является постоянной переменной и функцией, которая возвращает новое значение для  <b>count</b></p>
					<div className={"close " + show}></div><p className="text">Основная проблема здесь в том, что мы не можем менять напрямую <b>count</b> через инекремент, это константа. Для этого в реакте, нужно операции с константой производить без прямого контатк. Код был бы рабочим если написать его так <b>setCount(count + 1 )</b></p>
				</div>
				<button type="button" onClick={onClick}>Посмотреть Ответ: </button><span className={show + ' ' + 'answer'}>`count` is constant</span>
			</div>
		</div>
	</>
}


