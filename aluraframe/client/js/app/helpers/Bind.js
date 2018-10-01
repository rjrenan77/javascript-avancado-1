class Bind{

	constructor(model,view, ...props){
		let proxy = ProxyFactory.create(model,props, model => view.update(model));

		view.update(model);

		return proxy;
	}
}


//ProxyFactory.create(new ListaNegociacoes(),['adiciona', 'esvazia'], (model) =>{this._negociacoesView.update(model)});


//ProxyFactory.create(new Mensagem(), ['texto'],(model)=> this._mensagemView.update(model));