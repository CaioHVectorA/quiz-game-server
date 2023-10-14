# Documentação das Rotas do Jogo de Quiz

## Rota Base: `/user`

### `POST /login`

**Descrição:** Rota responsável por permitir que os jogadores façam login no sistema do jogo de quiz.

**Parâmetros:**
- **Body da Solicitação** (JSON):
  - `username` (string): O nome de usuário do jogador.
  - `password` (string): A senha do jogador.

**Respostas:**
- **200 OK**: O jogador fez login com sucesso e recebe um token de autenticação válido.
- **401 Unauthorized**: As credenciais fornecidas são inválidas ou não correspondem a nenhum jogador no sistema.

### `POST /`

**Descrição:** Rota responsável por criar um novo jogador no sistema do jogo de quiz.

**Parâmetros:**
- **Body da Solicitação** (JSON):
  - `username` (string): O nome de usuário desejado pelo jogador.
  - `password` (string): A senha escolhida pelo jogador.

**Respostas:**
- **201 Created**: O jogador foi criado com sucesso.
- **400 Bad Request**: Houve um erro nos dados de registro fornecidos pelo jogador.
- **409 Conflict**: Já existe um jogador com o mesmo nome de usuário no sistema.

### `GET /:id`

**Descrição:** Rota responsável por recuperar informações do jogador com base no ID fornecido. Isso permite que os jogadores acessem seus próprios perfis e informações.

**Parâmetros:**
- **URL**:
  - `id` (string): O ID do jogador.

**Respostas:**
- **200 OK**: As informações do jogador foram recuperadas com sucesso.
- **404 Not Found**: Não foi encontrado nenhum jogador com o ID especificado.

### `GET /`

**Descrição:** Rota responsável por recuperar o ranking dos jogadores no jogo de quiz. Isso permite que os jogadores vejam sua classificação em relação a outros jogadores.

**Parâmetros:**
- Nenhum parâmetro adicional é necessário.

**Respostas:**
- **200 OK**: A classificação dos jogadores foi recuperada com sucesso.
- **404 Not Found**: Não foi encontrado nenhum jogador ou classificação.

### `PUT /pontuation/:id`
**Descrição:** Rota responsável por mudar a pontuação do jogador. 

**Parâmetros:**
- O parámetro id(do usuário) é adicionado em sua URL.

**Body:**
- O body deve incluir um objeto com a propriedade type ("MATH" | "NATURE" | "SOCIAL" | "OTHERS") e a quantity(número relativo ao aumento dos pontos)

**Respostas:**
- **200 OK**: O Jogador teve sua pontuação mudada.
- **404**: O jogador ou sua pontuação não foram achadas.

## Rota Base: `/questions`

### `GET /`

**Descrição:** Esta rota é responsável por recuperar todas as perguntas disponíveis no jogo de quiz.

**Parâmetros:**
- Nenhum parâmetro é necessário.

**Respostas:**
- **200 OK**: As perguntas foram recuperadas com sucesso.
- **500 Internal Server Error**: Ocorreu um erro no servidor ao recuperar as perguntas.

### `GET /:type`

**Descrição:** Esta rota é responsável por recuperar todas as perguntas de um tipo específico no jogo de quiz.

**Parâmetros:**
- `type` (string): O tipo de pergunta desejado. Deve ser especificado como parte da URL (por exemplo, `/questions/SOCIAL` para perguntas de Ciências Sociais).

**Respostas:**
- **200 OK**: As perguntas do tipo especificado foram recuperadas com sucesso.
- **400 Bad Request**: O tipo de pergunta especificado não é válido.
- **500 Internal Server Error**: Ocorreu um erro no servidor ao recuperar as perguntas.

## Exemplo de Uso

### Recuperar Todas as Perguntas

**Solicitação:**

## `GET /`

**Descrição:** Esta rota é responsável por recuperar todas as perguntas disponíveis no jogo de quiz.

**Parâmetros:**
- Nenhum parâmetro é necessário.

**Respostas:**
- **200 OK**: As perguntas foram entregues com sucesso.
### `GET /:type`

**Descrição:** Esta rota é responsável por recuperar todas as perguntas de um tipo específico no jogo de quiz.

**Parâmetros:**
- `type` (string): O tipo de pergunta desejado. Deve ser especificado como parte da URL (por exemplo, `/questions/SOCIAL` para perguntas de Ciências Sociais).

**Respostas:**
- **200 OK**: As perguntas do tipo especificado foram entregues com sucesso.
- **400 Bad Request**: O tipo de pergunta especificado não é válido.