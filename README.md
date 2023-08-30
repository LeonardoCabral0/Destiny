# Iniciando a aplicação React

## Comandos para iniciar a aplicação React
### `npm install`

Instalar todos os pacotes referentes ao fronte end do site

### `npm start`

Inciar o aplicativo React
**Necessário que a aplicação esteja rodando na porta 3000

# Iniciando a Web API

Entre na pasta "WebAPI-SqlSever/WebAPI"

Dentro da "WebAPI-SqlSever/WebAPI/appsettings.json" você pode cofigurar uma string de conexão diferente da padrão do projeto com um nome diferente de banco de dados, caso queira.

# Abra um terminal dentro da pasta

## Execute o comando `dotnet ef migrations add CriandoDB`
Esse comando vai criar uma migration.

## Execute o comando `dotnet ef database update`
Esse comando vai realizar a migration.

## Execute o comando `dotnet run`

Veja se a aplicação iniciou na porta "44397", caso não tenha iniciado você terá que mudar manualmente a porta que a aplicação react fará as requesições , dentro do diretório src/PageBuscar/PageBuscar.js na função "requestAllPost" e src/FormCadastrar/FormCadastrar.js na função "requestAddPost"

# Utilizando a aplicação

A página seguiu o layout estabelecido basta clicar em "Cadastrar" colocar as informações do formulário e clicar no botão "Cadastrar" que a publicação ja será adicionada na pagina principal.

## Página principal
Possui um campo de busca com a opção de como as postagens vão ser ordenadas.
