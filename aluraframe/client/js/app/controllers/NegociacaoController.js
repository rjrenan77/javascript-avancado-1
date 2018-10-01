class NegociacaoController{

	constructor(){

		let $ = document.querySelector.bind(document); //criando um alias

		this._inputData = $("#data");
		this._inputQuantidade = $("#quantidade");
		this._inputValor = $("#valor");

		
		this._listaNegociacoes = new Bind(new ListaNegociacoes(), new NegociacoesView($("#negociacoesView")),'adiciona','esvazia');
		this._mensagem = new Bind(new Mensagem(), new MensagemView($("#mensagemView"))  ,'texto');
		
		Object.freeze(this);
	}

	apaga(){
		this._listaNegociacoes.esvazia();
		

		this._mensagem.texto = "Negociações apagadas com sucesso";
		this._mensagemView.update(this._mensagem);
	}

	adiciona(event){
	
		event.preventDefault(); //cancela a submissao dos dados do formulario para capturar esses dados
		this._listaNegociacoes.adiciona(this._criaNegociacao());
		this._mensagem.texto = 'Negociação adicionada com sucesso!';
		this._limpaFormulario();
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

	importaNegociacoes(){

		
		let xhr =  new XMLHttpRequest();

		xhr.open('GET', 'negociacoes/semana');

		/*configurações*/
		xhr.onreadystatechange = () => {
			
			/*
			0: requisição ainda não iniciada

			1: conexão com o servidor estabelecida

			2: requisição recebida

			3: processando requisição

			4: requisição está concluída e a resposta está pronta
			*/

			if(xhr.readyState == 4){
				if(xhr.status == 200){
					console.log('obtendo as negociações do servidor...');
					console.log(xhr.responseText);

					JSON.parse(xhr.responseText) //transformando JSON em array
					.map((objeto)=>new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)) // cada objeto retornado do json eu converto em um array de negociacao
					.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao)); //percorro cada item e adiciono na lista de Negociacoes

					this._mensagem.texto = 'Negociações importadas com sucesso!';

					console.log('feito!');
				}else{
					console.log('Não foi possível obter as negociações do servidor!');
					console.log(xhr.responseText);
					this._mensagem.texto = "Não foi possível obter as negociações.";
				}
			}

		};

		xhr.send();
	
	}

}