const divs = document.querySelectorAll('.selecoes');
divs.forEach(div => {
    div.addEventListener('click', () => {
        // Verificar se a div está selecionada ou não
        if (!div.classList.contains('selecionada')) {
            // Desmarcar todas as outras divs
            divs.forEach(div2 => {
                if (div2.classList.contains('selecionada')) {
                    div2.classList.remove('selecionada');
                    var b = div2.querySelector('img').src
                    b = b.replace('_SEL','_UN');
                    div2.querySelector('img').src = b;
                    // div2.querySelector('img').src.replace('_SEL','_UN');
                }
            });
            
            // Marcar esta div como selecionada e alterar a imagem
            div.classList.add('selecionada');
            var a = div.querySelector('img').src
            a = a.replace('_UN','_SEL');
            div.querySelector('img').src = a;
            //div.querySelector('img').src = 'IMG/AUTO_SEL.png';
        }
    });
});