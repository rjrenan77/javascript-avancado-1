class DateHelper{

	constructor(){
		throw new Error ('DateHelper nao pode ser instanciada!');
	}

	static textoParaData(texto){
		//arrow function: a flecha pode retirar a palavra reservada function. Pode emitir o bloco {} se tiver uma unica instrução. Pode tirar o ; tbm
		return new Date(...texto.split('-').map((item, indice) =>  item - indice % 2));

		/*código equivalente*/
		// let data = new Date(...this._inputData.value.split('-').map(function(item, indice)  { 
			
		// 	return item - indice % 2;
		// }));
		///console.log(data);
	}

	static dataParaTexto(data){
	//	if(!/\d{4}-\d{2}-\d{2}/.test(data)) throw new Error ("Deve estar no formato aaaa-mm-dd");

		return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`;
		
	}


}