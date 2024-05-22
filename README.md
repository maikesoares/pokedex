# Projeto-Pokédex

Aplicando conhecimentos REACT.

Para este projeto, foi utilizado a ferramenta VITE.

O intuito deste projeto é simular um teste técnico
que é um dos requisitos em um processo seletivo de frontend.

# Objetivos

O objetivo deste projeto consiste em criar uma Home (página inicial) de listagem de alguns pokemons, utilizando a api https://pokeapi.co/ e
criar uma página interna de detalhe do pokemon.

# Requisitos

- A home deve apresentar uma listagem com 10 pokemons
  iniciais.

- A home deve ter um botão "Carregar mais" abaixo dessa lista, que quando clicado deve buscar mais 10 pokemons e adicionar a listagem atual.

- Essa listagem deve mostrar a imagem e nome de cada pokemon.

- Na listagem cada pokemon deve ser clicável e ao clicar o usuáriodeve poder acessar uma página interna desse pokemon com informações detalhadas, nessa página de detalhes devem
  aparecer as seguintes informações:

  - Imagem do pokemon
  - Nome
  - Lista de movimentos do pokemon (moves)
  - Lista de habilidades do pokemon (abilities)- a lista de habilidades deve apresentar o nome e o texto
  - Descritivo da habilidade
  - Tipo do pokemon (type)

Obs: Essa home deve ter um botão para que o usuário possa
alternar de cor entre tema claro e tema escuro (light/dark).

# Requisitos Técnicos

- A aplicação deverá ser Single Page Application (SPA);
- Utilizar React.js para o desenvolvimento da aplicação;
- Utilizar Context API para criação do Theme Toggler
  (Alternador entre tema claro e escuro);
- Utilizar styled-components para estilização dos
  componentes;
- Utilizar react-router-dom para a navegação entre as
  páginas;

Confira o Layout do projeto:

<img src="./src/assets/images/projeto-pokedex.gif" alt="Projeto Pokedex">

# Tecnologias utilizadas:

- REACT
- HTML
- CSS
- JAVASCRIPT

# Instalando e executando o projeto

### 1º Clone o repositório do projeto em HTTPS ou SSH com sua SSH key

### HTTPS

    git clone https://github.com/maikesoares/pokedex.git

### SSH

    git clone git@github.com:maikesoares/pokedex.git

Em sua máquina, crie uma nova pasta e execute o git, e em seguida cole um dos links acima.

### 2º Entre no diretório do projeto na qual foi clonado

      cd pokedex

### 3º Execute o comando abaixo para instalar todas as dependências utilizadas

      npm install

### 4º Inicialize a aplicação para ver o código funcionando na web

      npm run dev
