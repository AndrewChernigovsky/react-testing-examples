import React from "react";
import task5 from './../assets/task5.png';

export function Task5() {
	const [show, setShow] = React.useState('no-active');
	const [count, setCount] = React.useState(0);

	function useHook() {
		console.log('Hook')

		React.useEffect(() => {
			console.log('hook useEffect');
		}, []);
	}

	function Parent() {
		useHook();
		console.log('parent');

		React.useEffect(() => {
			console.log('parent useEffect');
		}, [])

		return <></>;
	}

	Parent();


	function onClick() {
		setShow('active'); handleClick();
	}

	function handleClick() {
		setCount(count + 1);
		setCount(count + 1);
	}

	return <>
		<div className="wrapper-preview">
			<img src={task5} alt="" />
			<div className="wrapper">
				<h2>Задача №5 / 10</h2>
				<h3>В каком порядке будут выведены консоль логи?</h3>
				<div className="w">
					<p className="text">Здесь мы имеем дело с хуками, в первом кастомном хуке <b>useHook()</b> мы вызываем консоль, функция в данном случае, себя ведет синхронно и при вызове ее в фукнции <b>Parent()</b> вызывается этот лог. Далее в функции с хуком кастомным мы вызываем хук <b>useEffect</b> он отработает только после <b>mount</b> то есть когда сформируется дом дерево, во избежания ошибок.  </p>
					<div className={"close " + show}></div><p className="text">Поэтому консоль лог этот будет ждать первого рендера. Далее у нас в функции <b>Parent</b> идет вызов лога <b>'parent'</b> и он отрабатывает, далее происходит опять ситуация как с прошлым useEffect и поэтому он также откладывается до первого рендера. По итогу после первого рендера выполняется лог из первого эффекта, затем из второго., в хуки передаются завивисомости <b>[]</b> пустой массив дает вызов эффекта единожды после первого <b>mount</b></p>
				</div>
				<button type="button" onClick={onClick}>Посмотреть Ответ: </button><span className={show + ' ' + 'answer'}>Hook, parent, hook useEffect, parent useEffect</span>
			</div>
		</div>
	</>
}


