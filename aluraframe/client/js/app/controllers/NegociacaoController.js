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

		let helper = new DateHelper();
		
		//cria uma negociacao com os seus parametros
		let negociacao = new Negociacao (helper.textoParaData(this._inputData.value), this._inputQuantidade.value,this._inputValor.value);

		console.log(helper.dataParaTexto(negociacao.data));
		
		
	}

}