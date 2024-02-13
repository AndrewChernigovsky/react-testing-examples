import React from "react";
import task9 from './../assets/task9.png';

export function Task9() {
	const [show, setShow] = React.useState('no-active');




	// let counter = 0;

	// const recursion = () => {
	// 	if (counter < 200000) {
	// 		counter++;
	// 		recursion();
	// 		console.log(counter);
	// 	}
	// }
	// recursion();


	function onClick() {
		setShow('active');
	}


	return <>
		<div className="wrapper-preview">
			<img src={task9} alt="" />
			<div className="wrapper">
				<h2>Задача №9 / 10</h2>
				<h3>Каким будет результат выполнения?</h3>
				<div className="w">
					<p className="text"> В данном примере, мы создаем постоянную перменную <b>recursion</b> в которую мы записываем стрелочную функцию, где есть условие для счетчика ( пока переменная <b>counter</b> меньше 200000) повышайся на единицу, снова вызови функцию <b>recursion</b> и снова повышай счетик на + 1 и т д. До тех пор пока счетчик не станет больше или равен 200000</p>
					<div className={"close " + show}></div>
				</div>
				<button type="button" onClick={onClick}>Посмотреть Ответ: </button><span className={show + ' ' + 'answer'}>Uncaught RangeError: Maximum call stack size exceeded</span>
			</div>
		</div>
	</>

}

