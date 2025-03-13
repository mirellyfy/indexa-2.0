![Descricao da sua imagem](./thumbnail.png)

# Indexa

Uma aplicação para manipulação de contatos de uma agenda.

## 🔨 Funcionalidades do projeto

O App lista os contatos, exibindo nome e telefone, de acordo com a letra inicial e possui um filtro interativo. Também é possível adicionar um novo contato.

Neste curso, será desenvolvida a tela de perfil, com detalhes do contato.
Também serão implementadas as funcionalidades de edição e exclusão de contatos utilizando o HttpClient do angular.

## ✔️ Técnicas e tecnologias utilizadas

As técnicas e tecnologias utilizadas pra isso são:

- `Comunicação HTTP com Angular`: utilização do HttpClient para realizar operações CRUD (Create, Read, Update, Delete), aproveitando os métodos HTTP GET, POST, PUT e DELETE para interagir com uma API;
- `Observables`: exploração do uso de Observables para uma comunicação eficiente com a API, permitindo a manipulação de respostas assíncronas de forma eficaz;
- `Obtenção de parâmetros de rota`: utilização do ActivatedRoute para obter parâmetros de rota e personalizar a exibição de detalhes de acordo com o contexto;
- `Configuração do JSON Server`: configuração de uma API fake utilizando o JSON Server para simular o backend e testar as operações CRUD sem a necessidade de uma API real.

## 📁 Link do Figma

Você pode [acessar o figma do projeto aqui](https://www.figma.com/file/uXjoavDEvDjyE8LsXgliGx/Indexa-%7C-Angular---Primeiros-Passos?type=design&node-id=320-7053&mode=design&t=5Kgod8QnM11BiTCA-0).

## 🛠️ Abrir e rodar o projeto

Você vai precisar do NodeJS, versão 18 ou maior.

Após baixar o projeto, você precisa instalar as dependências utilizando o comando:

```bash
npm install
```

Depois, para executar o projeto em modo desenvolvimento:

```bash
ng serve
```

Depois, acesse [http://localhost:4200/](url) no seu navegador.
