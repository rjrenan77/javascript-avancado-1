class NegociacaoController{

	constructor(){

		let $ = document.querySelector.bind(document); //criando um alias

		this._inputData = $("#data");
		this._inputQuantidade = $("#quantidade");
		this._inputValor = $("#valor");
		this._listaNegociacoes = new ListaNegociacoes();
		Object.freeze(this);
	}

	adiciona(event){
		event.preventDefault(); //cancela a submissao dos dados do formulario para capturar esses dados

		//let helper = new DateHelper();
		

		this._listaNegociacoes.adiciona(this._criaNegociacao());
		this._limpaFormulario();

		console.log(this._listaNegociacoes.negociacoes);
		
		
	}

	_criaNegociacao(){
		//cria uma negociacao com os seus parametros
		return new Negociacao (DateHelper.textoParaData(this._inputData.value), this._inputQuantidade.value,this._inputValor.value);
	}

	_limpaFormulario(){
		this._inputData.value ='';
		this._inputQuantidade.value =1;
		this._inputValor.value = 0.0;

		this._inputData.focus();

	}

}