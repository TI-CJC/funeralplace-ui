function showIframe(iframeId) {
    // Esconde todos os iframes
    var iframes = document.querySelectorAll('.main-iframe');
    iframes.forEach(function(iframe) {
        iframe.classList.remove('active');
    });

    // Mostra o iframe correspondente
    document.getElementById(iframeId).classList.add('active');
    event.target.classList.add('active');

    //testes
    
}

function getQueryParameter(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
    var results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
} 

document.addEventListener("DOMContentLoaded", function() {
    var iframeId = getQueryParameter('iframe');
    if (iframeId) {
        var iframes = document.getElementsByClassName('main-iframe');
        for (var i = 0; i < iframes.length; i++) {
            iframes[i].classList.remove('active');
        }
        var activeIframe = document.getElementById(iframeId);
        if (activeIframe) {
            activeIframe.classList.add('active');
        } else {
            // Tratar o caso em que o parâmetro de URL não corresponde a nenhum iframe
            console.error('Iframe não encontrado: ' + iframeId);
        }
    } else {
        // Carregar iframe padrão caso nenhum parâmetro seja passado
        document.getElementById('iframe1').classList.add('active');
    }
});