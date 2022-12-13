# Desafio Unicad FullStack

O desafio consiste em desenvolver um sistema que será a versão mais simples possível de um sistema de entregas de mercadorias a clientes. Ele deve possuir um cadastro de entrega, visualização de entregas cadastradas e o percurso no mapa.

## Tempo do projeto

O desenvolvedor tem o tempo de dois dias para realizar o teste e tentar avançar o máximo possível.

## Prints de tela:

Ao entrar no projeto, o usuário verá a tela de home, em uma versão bem simplificada de começo:

<p align="center">
    <img src="public/images/Home.png" width="500">
</p>

Ao selecionar no menu a opção de cadastro de entregas, o usuário se depara com um formulário, onde deverá preencher as informações corretamente:

<p align="center">
    <img src="public/images/DeliveryRegister.png" width="500">
</p>

Preenchimento automático com cep:

<p align="center">
    <img src="public/images/Cep.png" width="500">
</p>

Desenvolvi validações para todos os campos nos quais setei como obrigatórios, sendo assim, todos os campos com (\*) irão receber uma mensagem definida de acordo com o que o dev definir, não precisando ser necessáriamente 'campo obrigatório':

<p align="center">
    <img src="public/images/ValidationsExample.png" width="500">
</p>

Exemplo da validação com texto definido no front pelo dev para o campo cep:

<p align="center">
    <img src="public/images/CepValidation.png" width="500">
</p>

Demonstração do cadastro em funcionamento com redux:

Formulário com valores inseridos:

<p align="center">
    <img src="public/images/FormWithValues.png" width="500">
</p>

Formulário após clicar em 'Incluir':

<p align="center">
    <img src="public/images/DeliverySubmited.png" width="500">
</p>

Redux em funcionamento:

<p align="center">
    <img src="public/images/redux.png" width="500">
</p>

Visualizando cadastros:

<p align="center">
    <img src="public/images/VisualizeDeliveries.png" width="500">
</p>

Ao expandir cada cadastro, informações mais detalhadas irão surgir, junto ao mapa do google maps referenciando o endereço cadastrado:

<p align="center">
    <img src="public/images/MapsExample.png" width="500">
</p>

### Variáveis de ambiente

Para que o projeto funcione, é necessário configurar as váriáveis de ambiente, que no caso deste projeto, seria a chave para a API do Google.

É necessário que o dev crie um arquivo .env.local e dentro dele coloque a variável com a chave da API:

<p align="center">
    <img src="public/images/envExample.png" width="500">
</p>

### Funcionalidades

- [x] Menu com troca de páginas dinâmica
- [x] Implementação do Redux Toolkit
- [x] Página inicial
- [x] Página para cadastro de novas entregas
- [x] Página para visualizar cadastros
- [x] Utilização de Semantic Ui React
- [x] Criação de componentes
- [x] Utilização de variáveis de ambiente
- [x] Integração com API busca Cep
- [x] Integração com API do Google Maps
- [x] Integração com API do Google Geocode
- [x] Integração com backend desenvolvido por mim
