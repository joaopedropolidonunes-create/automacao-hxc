Feature: Login

Scenario: Login com sucesso
Given que acesso a página de login
When preencho email e senha válidos
And clico no botão de login
Then devo ser autenticado com sucesso