var criaController = function (jogo) {

    var $entrada = $('#entrada');
    var $lacunas = $('.lacunas');

    var exibeLacunas = function () {
        const palavra = jogo.getPalavraSecreta();
        console.log("Palavra: ", palavra);
        let cont = 0;
        while (cont < palavra.length) {
            $lacunas.append(`<li class=\"lacuna\" id=\"pos${cont}\">${jogo.getLacunaX(cont)}</li>`);
            cont++;
        }
    };

    var atualizaLacunas = function (chute) {
        cont = 0
        while(cont < jogo.getPalavraSecreta().length){
            lacunaAtual = $(`#pos${cont}`);
            lacunaAtual.text(`${jogo.getLacunaX(cont)}`);
            cont++;
        }
    }

    var removeColunas = function () {
        cont = 0
        while(cont < jogo.getPalavraSecreta().length){
            lacunaAtual = $(`#pos${cont}`);
            lacunaAtual.remove();
            cont++;
        }
    }

    var mudaPlaceHolder = function (texto) {
        $entrada.val("");
        $entrada.attr("placeholder", texto);
    };

    var guardaPalavraSecreta = function () {
        jogo.setPalavraSecreta($entrada.val().trim());
    };

    const iniciaJogo = () => {
        if($entrada.val().includes(' ') || $entrada.val() == ""){
            mudaPlaceHolder("Apenas uma palavra");
            return;
        }

        guardaPalavraSecreta();
        exibeLacunas();
        mudaPlaceHolder("Insira uma letra");
    }

    const leChute = () => {
        if ($entrada.val().length != 1) {
            mudaPlaceHolder("Insira apenas um caracter");
            return;
        }
        
        if (jogo.processaChute($entrada.val())) {
            atualizaLacunas($entrada.val());
            mudaPlaceHolder("Bom chute!!!");
        } else {
            mudaPlaceHolder("Que pena :\\");
        }


        if(jogo.ganhouOuPerdeu()){

            if(jogo.ganhou()) mudaPlaceHolder("Parabéns!!!");
            else mudaPlaceHolder("Você perdeu :(");

            removeColunas();
            jogo.reinicia();
        }

    }

    var inicia = function () {
        $entrada.keypress(function (event) {
            if (event.which == 13) {
                switch (jogo.getEtapa()) {
                    case 1:
                        iniciaJogo();
                        break;
                    case 2:
                        leChute();
                        break;
                }
            }
        });
    }

    return {
        inicia: inicia,
        exibeLacunas: exibeLacunas,
        mudaPlaceHolder: mudaPlaceHolder,
        guardaPalavraSecreta: guardaPalavraSecreta
    };
}