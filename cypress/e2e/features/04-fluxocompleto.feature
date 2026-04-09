Feature: Compra com Login via Modal

  Cenário: Realizar checkout logando através do modal de carrinho
    Given que acesso a página inicial
    When busco por um produto
    And adiciono o produto buscado ao carrinho
    Then o produto deve aparecer no carrinho
    
    When clico em Proceed To Checkout e escolho Register ou Login no modal
    And preencho email "teste2024@teste.com.br" e senha "teste" para logar
    And adiciono o produto buscado ao carrinho
    And prossigo para o checkout final
    Then após compra realizo o checkout com sucesso