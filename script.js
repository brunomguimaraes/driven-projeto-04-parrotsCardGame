function loadPage () {
    alert("Olá, bem-vindo ao jogo da memória do Papagaio Doido!");

    let cardsQuantity = Number(prompt("Digite a quantidade de cartas que deseja utilizar (entre 4 e 14)."));
    

    while ((cardsQuantity % 2 !== 0) || (cardsQuantity < 4) || (cardsQuantity > 14)) {

        cardsQuantity = Number(prompt("Digite a quantidade de cartas que deseja utilizar (entre 4 e 14)."));
    }

   
    


    alert('escolheu corretamente a quantidade de cartas');

}

loadPage();