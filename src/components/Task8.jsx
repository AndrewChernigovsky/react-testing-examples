import React from "react";
import task8 from './../assets/task8.png';

export function Task8() {
	const [show, setShow] = React.useState('no-active');


	function onClick() {
		setShow('active');
	}


	return <>
		<div className="wrapper-preview">
			<img src={task8} alt="" />
			<div className="wrapper">
				<h2>Задача №8 / 10</h2>
				<h3>Какая ошибка в этом коде?</h3>
				<div className="w">
					<p className="text"> В данном примере, мы создаем компонент <b>MyComponent</b> в котором мы создаем стейт <b>useState</b> data, setData является постоянной переменной и функцией, которая возвращает новое значение для  <b>data</b></p>
					<div className={"close " + show}></div><p className="text">Основная проблема здесь в том, что мы в хук эффекта передаем в зависимость объект <b>data</b> и это нас выведет в бесконечный рендеринг, так как он установил после <b>mount</b> дату, сделал запрос на апи, и компонент обновился, далее он считал это и снова сделал запрос и снова обновил данные, компонент снова отрендерился и т д.</p>
				</div>
				<button type="button" onClick={onClick}>Посмотреть Ответ: </button><span className={show + ' ' + 'answer'}>вместо data в массиве зависимосте хука <b>useEffect</b> нужно передать пустой массив []</span>
			</div>
		</div>
	</>

}

