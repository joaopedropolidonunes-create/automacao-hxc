# language: pt
Funcionalidade: Compra com Login via Modal

  Cenário: Realizar checkout logando através do modal de carrinho
    Dado que acesso a página inicial
    Quando busco por um produto
    E adiciono o produto buscado ao carrinho
    Então o produto deve aparecer no carrinho
    Quando clico em Proceed To Checkout e escolho Register ou Login no modal
    E preencho email "teste2024@teste.com.br" e senha "teste" para logar
    E adiciono o produto buscado ao carrinho
    E prossigo para o checkout final
    Então após compra realizo o checkout com sucesso