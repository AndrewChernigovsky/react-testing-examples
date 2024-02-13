import React from "react";
import task4 from './../assets/task4.png';

export function Task4() {
	const [show, setShow] = React.useState('no-active');

	function onClick() {
		setShow('active');
	}

	return <>
		<div className="wrapper-preview">
			<img src={task4} alt="" />
			<div className="wrapper">
				<h2>Задача №4 / 10</h2>
				<h3>Будет ли отличаться результат работы функций?</h3>
				<div className="w">
					<p className="text">В данном примере, мы имеем две функции, которые в параметрах работают с id который к ним приходит во время вызова. Также этого не написано, но мы можем заметить, что тут есть переменная <b>cachedUser</b> которая при условии равным <b>не null, а object</b> вернет объект с данными о пользователе и закончит выполнение функции. Если же условие будет <b>null | undefined</b>, то сработает дальнейший код.</p>
					<div className={"close " + show}></div><p className="text"> Первая функция асинхронная и начинает с <b>async</b> и имеет <b>await</b> и в итоге мы делаем запрос через fetch и мы получаем объект юзера, и преобразуем его в форамте json, в объект JS. В случае, второй функции, происходит все точно также, кроме того что это синхронная функция, которая делает запрос и дожидается ответа, то есть асинхронная операция, нам возвращается промис с ответом, в данном случае, это объект Json, который через метод <b>json()</b> преобразуется в JS объект.</p>
				</div>
				<button type="button" onClick={onClick}>Посмотреть Ответ: </button><span className={show + ' ' + 'answer'}>Функции возвращают одно и тоже</span>
			</div>
		</div>
	</>
}


