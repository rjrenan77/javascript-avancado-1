class Negociacao{

	constructor(data, quantidade, valor){
		this._data = new Date(data.getTime());//programação defensiva, retorno um outro objeto para que o interno não seja manipulado
		this._quantidade = quantidade;
		this._valor = valor;

		Object.freeze(this); //congela o objeto instaciado para ficar sem permissao de acesso 
	}

	get volume() {
		return this._quantidade * this._valor;
	}

	get data() {
		return new Date(this._data.getTime()); //programação defensiva, retorno um outro objeto para que o interno não seja manipulado
	}

	get quantidade() {
		return this._quantidade;
	}

	get valor() {
		return this._valor;
	}

}

/**Notas:  get valor faz com que o método seja acessada como se fosse uma propriedade (ex. n1.quantidade)*/