import React from "react";
import task1 from './../assets/task1.png'

export function Task1() {
	const [count, setCount] = React.useState(0);
	const [show, setShow] = React.useState('no-active');

	function onClick() {
		setShow('active')
		setTimeout(() => {
			setCount(count + 1);
		}, 1000)
	}

	return <>
		<div className="wrapper-preview">
			<img src={task1} alt="" />
			<div className="wrapper">
				<h2>Задача №1 / 10</h2>
				<h3>Чему будет равен count?</h3>
				<div className="w">

					<p className="text">В данной задаче, ответ будет таким, потому что в стейтах мы храним значение счетчика <b>count</b> и меняем его внутри хука <b>useEffect</b>, этот хук вызывается в момент mount, когда эта фаза закончена и полностью сформировано дом-дерево, происходит вызов useEffect и он отрабатывает только 1 раз, так как в зависимостях указан пустой массив. Псевдоасинхронная функция setTimeout выполнится через 1 секунду и сменит счетчик на 1</p>
					<div className={"close " + show}></div>
				</div>
				<button type="button" onClick={onClick}>Посмотреть Ответ: </button><span className={show + ' ' + 'answer'}>{count}</span>
			</div>
		</div>

	</>
}