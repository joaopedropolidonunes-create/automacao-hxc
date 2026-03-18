Feature: API Pública

  Scenario: Validar retorno da API
    When envio um GET para API publica
    Then o retorno deve ser 200 