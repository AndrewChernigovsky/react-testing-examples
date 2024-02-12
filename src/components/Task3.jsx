import React from "react";
import task3 from './../assets/task3.png';

export function Task3() {
	const [show, setShow] = React.useState('no-active');
	const [count, setCount] = React.useState(0);

	function onClick() {
		setShow('active'); handleClick();
	}

	function handleClick() {
		setCount(count + 1);
		setCount(count + 1);
	}

	return <>
		<div className="wrapper-preview">
			<img src={task3} alt="" />
			<div className="wrapper">
				<h2>Задача №3 / 10</h2>
				<h3>Чему будет равен count?</h3>
				<div className="w">

					<p className="text">У нас компонент счетчик, в нем мы создаем стейт для хранения состояний переменной count <b>useState</b>, изначально значение 0, далее у нас функция handleClick() которая меняет значение переменной count - setCoint(count + 1), в последних версиях реакта, вызов хука стейта сгруппируется в один вызов, поэтому будет не 2, а 1 </p>
					<div className={"close " + show}></div>
				</div>
				<button type="button" onClick={onClick}>Посмотреть Ответ: </button><span className={show + ' ' + 'answer'}>{count}</span>
			</div>
		</div>

	</>
}