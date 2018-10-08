class NegociacaoService{

	constructor(){
		this._http = new HttpService();
	}

	obterNegociacoesDaSemana(){

		return new Promise((resolve, reject) => {

			this._http.get('negociacoes/semana')
			.then(negociacoes=>{
				resolve(negociacoes.map((objeto)=>new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor))); // cada objeto retornado do json eu converto em um array de negociacao
			}).catch(erro => {
				console.log(erro);
				reject('Não foi possivel obter as negociacoes da semana')
			});

		});

					
	}

	obterNegociacoesDaSemanaRetrasada(){

		return new Promise((resolve, reject) => {

			this._http.get('negociacoes/retrasada')
			.then(negociacoes=>{
				resolve(negociacoes.map((objeto)=>new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor))); // cada objeto retornado do json eu converto em um array de negociacao
			}).catch(erro => {
				console.log(erro);
				reject('Não foi possivel obter as negociacoes da semana retrasada')
			});

		});

	}

	obterNegociacoesDaSemanaAnterior(){
		return new Promise((resolve, reject) => {

			this._http.get('negociacoes/anterior')
			.then(negociacoes=>{
				resolve(negociacoes.map((objeto)=>new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor))); // cada objeto retornado do json eu converto em um array de negociacao
			}).catch(erro => {
				console.log(erro);
				reject('Não foi possivel obter as negociacoes da semana anterior')
			});

		});

	}
}