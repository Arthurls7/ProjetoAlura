var criaJogo = function (sprite) {

    var palavraSecreta = undefined;
    var lacunas = [];
    var etapa = 0;

    var setPalavraSecreta = function (palavra) {
        palavraSecreta = palavra;
        lacunas = Array(palavraSecreta.length).fill('');
        //Metodo para encher array manualmente
        /* try {
            for (let i = 0; i < palavraSecreta.length; i++)
                arrayPalavra.push("");
        } catch (error) {
            console.log("chamou antes de definir");
        } */

    };

    var getLacunas = function () {
        console.log(lacunas);
    };

    var getEtapa = function () {
        //Primeira etapa espera a palavra
        //Segunda etapa ta no jogo
        if (palavraSecreta === undefined) etapa = 1;
        else etapa = 2;
        console.log(etapa);
    };

    var processaChute = function (chute) {
        let arrayPalavra = palavraSecreta.split("");
        let acerto = false;

        arrayPalavra.forEach((element, index) => {
            if (element.toLowerCase() === chute.toLowerCase()) {
                lacunas[index] = chute;
                acerto = true;
                console.log('acertou chute');
            }
        });

        if (acerto === false) {
            console.log('errou o chute');
            sprite.nextFrame();
        }
    }

    var ganhou = function () {
        if (lacunas.includes("")) return false;
        else return true;
    }

    var perdeu = function () {
        return sprite.isFinished();
    }

    var ganhouOuPerdeu = function () {
        return ganhou() || perdeu();
    }

    var reinicia = function () {
        sprite.reset();
        palavraSecreta = undefined;
        lacunas = [];
        etapa = 0;
    }

    return {
        setPalavraSecreta: setPalavraSecreta,
        getLacunas: getLacunas,
        getEtapa: getEtapa,
        processaChute: processaChute,
        ganhou: ganhou,
        perdeu: perdeu,
        ganhouOuPerdeu: ganhouOuPerdeu,
        reinicia: reinicia
    };
};