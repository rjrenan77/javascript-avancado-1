class NegociacaoController{

	constructor(){

		let $ = document.querySelector.bind(document); //criando um alias

		this._inputData = $("#data");
		this._inputQuantidade = $("#quantidade");
		this._inputValor = $("#valor");
		Object.freeze(this);
	}

	adiciona(event){
		event.preventDefault(); //cancela a submissao dos dados do formulario para capturar esses dados

		//arrow function: a flecha pode retirar a palavra reservada function. Pode emitir o bloco {} se tiver uma unica instrução. Pode tirar o ; tbm
		let data = new Date(...this._inputData.value.split('-').map((item, indice) =>  item - indice % 2));

		/*código equivalente*/
		// let data = new Date(...this._inputData.value.split('-').map(function(item, indice)  { 
			
		// 	return item - indice % 2;
		// }));
		///console.log(data);

		let negociacao = new Negociacao (data, this._inputQuantidade.value,this._inputValor.value);
		console.log(negociacao);

		let diaMesAno = negociacao.data.getDate() + "/" + (negociacao.data.getMonth()+1) + "/" + negociacao.data.getFullYear();
		console.log(diaMesAno);

		
	}

}