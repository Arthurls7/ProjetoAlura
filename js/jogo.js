var criaJogo = function (sprite) {

    var palavraSecreta = undefined;
    var lacunas = [];
    var etapa = 0;

    var setPalavraSecreta = function (palavra) {
        palavraSecreta = palavra;
    };

    var getLacunas = function () {
        /* try {
            for (let i = 0; i < palavraSecreta.length; i++)
                arrayPalavra.push("");
        } catch (error) {
            console.log("chamou antes de definir");
        } */

        lacunas = Array(palavraSecreta.length).fill('')
    };

    var getEtapa = function () {
        //Primeira etapa espera a palavra
        //Segunda etapa ta no jogo
        if (palavraSecreta === undefined) etapa = 1;
        else etapa = 2;
    };

    return {
        setPalavraSecreta: setPalavraSecreta,
        getLacunas: getLacunas,
        getEtapa: getEtapa
    };
};