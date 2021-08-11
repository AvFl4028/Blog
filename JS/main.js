const cards = document.getElementById('cards');
const btn = document.getElementById('btn');
const txt = document.getElementById('txt');
const title = document.getElementById('title');

function validacion () {
	// body...
	if (txt.value === '') {
		txt.className = 'error';
		txt.setAttribute('placeholder','Agrega texto valido');
	} else {
		txt.className= 'cards-text';
		txt.setAttribute('placeholder','Pon tu texto');
	}
	if (title.value === '') {
		title.className = 'error';
		title.setAttribute('placeholder','Agrega un titulo valido');
	} else {
		title.className= 'cards-title';
		title.setAttribute('placeholder','Pon tu titulo');
	}
}

function createSubCards () {
	if (title.value === '') {
	}else{
		if (txt.value === '') {
		} else {
//Se agregan los div
			var agregarTexto = document.createElement('div');
			agregarTexto.setAttribute('class', 'sub-cards');
			agregarTexto.setAttribute('id','sub-cards');

			var titleCard = title.value;

//Se agrega el h2

			var titulo = document.createElement('h2')

			var contendTitle = document.createTextNode(titleCard);
			cards.appendChild(agregarTexto);
			agregarTexto.appendChild(titulo);
			titulo.appendChild(contendTitle);
			console.log('title');

			var textCard = txt.value;

			var contendText = document.createTextNode(textCard);

			var p = document.createElement('p');

			agregarTexto.appendChild(p);

			p.appendChild(contendText);

//Boton de eliminar
			var btnClear = document.getElementById('btn-clear');
			btnClear.addEventListener('click', () => {
				cards.removeChild(agregarTexto);
	})
		}
}};

btn.addEventListener('click',() => {
	validacion();
	createSubCards();
});
