class ListaNegociacoes{

	constructor() {
		this._negociacoes=[];

	}

	adiciona(negociacao){
		this._negociacoes.push(negociacao);
	}

	get negociacoes(){
		//retornando apenas uma copia do array para que ninguem possa alterar
		return [].concat(this._negociacoes);
	}

}