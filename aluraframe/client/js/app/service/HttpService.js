class HttpService{

	get(url){
		return new Promise((resolve,reject) => {

			let xhr =  new XMLHttpRequest();

			xhr.open('GET', url);

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

					resolve(JSON.parse(xhr.responseText)); //transformando JSON em array
					
					

					

					console.log('feito!');
				}else{
					console.log('Não foi possível obter as negociações do servidor da semana retrasada!');
					console.log(xhr.responseText);

					reject(xhr.responseText);
					
				}
			}

		};

		xhr.send();


	});

		
	}
}

