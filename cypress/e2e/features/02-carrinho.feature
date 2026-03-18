Feature: Carrinho

  Scenario: Buscar produto e adicionar ao carrinho
    Given que acesso a página inicial
    When busco por um produto
    And adiciono o produto buscado ao carrinho
    Then o produto deve aparecer no carrinho