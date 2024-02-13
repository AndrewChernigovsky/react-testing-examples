import React from "react";
import task10 from './../assets/task10.png';

export function Task10() {
	const [show, setShow] = React.useState('no-active');

	function onClick() {
		setShow('active');
	}


	return <>
		<div className="wrapper-preview">
			<img src={task10} alt="" />
			<div className="wrapper">
				<h2>Задача №10 / 10</h2>
				<h3>Какая ошибка в этом коде?</h3>
				<div className="w">
					<p className="text"> В данном примере, мы имеем ошибку, связанную с переменной <b>X</b>, дело в том, что первая переменная с таким же именем, объявленая в глобальной области видимости.  Если бы мы убрали из функции кодовое слово let с новым переназначением перменной, то код был бы корректным и вывел нам 2, но особенность переменной <b>let</b> в том, что если она находится в блочной области видимости при условии, что есть еще такая же переменная в глобальной области видимости, то блочная становится единственной к которой будет идти обращение внутри функции. Поэтому инкрементирование <b>x++</b> будет вызывать ошибку, так как переменная объявляется и инициализируется после него.</p>
					<div className={"close " + show}></div>
				</div>
				<button type="button" onClick={onClick}>Посмотреть Ответ: </button><span className={show + ' ' + 'answer'}> Uncaught ReferenceError:Cannot access `x2` before initialization </span>
			</div>
		</div >
	</>

}

