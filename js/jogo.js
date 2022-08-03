let criaJogo = function (sprite) {

    let palavraSecreta = undefined;
    let lacunas = [];
    let etapa = 0;

    let setPalavraSecreta = function (palavra) {
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

    let getLacunas = function () {
        console.log(lacunas);
    };

    let getLacunaX = function(x) {
        return lacunas[x];
    }

    let getEtapa = function () {
        //Primeira etapa espera a palavra
        //Segunda etapa ta no jogo
        return palavraSecreta === undefined ? 1 : 2;
    };

    let processaChute = function (chute) {
        let arrayPalavra = palavraSecreta.split("");
        let acertos = 0;

        arrayPalavra.forEach((element, index) => {
            if (element.toLowerCase() === chute.toLowerCase()) {
                lacunas[index] = chute;
                acertos++;
            }
        });

        if(acertos == 0) {
            sprite.nextFrame();
            return false;
        }

        return true;
    }

    let ganhou = function () {
        if (lacunas.includes("")) return false;
        else return true;
    }

    let perdeu = function () {
        return sprite.isFinished();
    }

    let ganhouOuPerdeu = function () {
        return ganhou() || perdeu();
    }

    let reinicia = function () {
        sprite.reset();
        palavraSecreta = undefined;
        lacunas = [];
        etapa = 0;
    }

    function getPalavraSecreta(){
        return palavraSecreta;
    } 

    return {
        setPalavraSecreta: setPalavraSecreta,
        getLacunas: getLacunas,
        getLacunaX: getLacunaX,
        getEtapa: getEtapa,
        processaChute: processaChute,
        ganhou: ganhou,
        perdeu: perdeu,
        ganhouOuPerdeu: ganhouOuPerdeu,
        reinicia: reinicia,
        getPalavraSecreta: getPalavraSecreta
    };
};