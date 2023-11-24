# Título do projeto

Esse projeto trata-se de uma api para efetuar um CRUD de usuários.

## 🚀 Começando

Primeiro faça o fork desse repositório, e em seguida o pull para a sua máquina.


### 📋 Pré-requisitos

Seu computador precisa estar com o node.js instalado.

### 🔧 Instalação

Para funcionar corretamente a aplicação precisa de uma série de bibliotecas que já estão pré-instaladas, para essas bibliotecas sejam instaladas localmente na sua máquina, execute o seguinte comando no terminal:

```
npm install
```

e em seguida será precido configurar o banco de dados, através das variáveis de ambientes presentes no aquivo ```.env.example```. Cria-se um arquivo com o nome ``.env`` e preenche cada variável com os dados do seu banco de dados, sendo essas variáveis:

```
DB_PORT= //porta do banco de dados
DB_HOST= //host do banco de dados
DB_USER= //usuário do banco de dados
DB_PASS= //senha do banco de dados
DB_DATABASE= //nome do banco de dados

SERVER_PORT= //porta que o servidor irá escutar quando em execução
```
<i>observações: <br>
- O banco de dados padrão cadastrado é o postgres, para alteração do mesmo troque o valor da variável ``type:`` np arquivo './src/data-source.ts'.
- Se não for informada uma porta para o servidor através da variável de ambiente ```SERVER_PORT``` o servidor será iniciado na porta 3000.
</i>

Após concectado ao banco de dados, primeiro criaremos as migrations, que são geradas a partir das entidades criadas. Para que as migrations sejam geradas, execute em seu terminal:

```
npm run migration:generate
```
e em seguida

```
npm run migration:run
```

Dessa forma, seu banco de dados estará configurado e pronto para ser usado.



## ⚙️ Executando os testes

Alguns testes unitários foram feitos para essa aplicação e são acessadas através do comando 

```
npm run test
```


## 📦 Endpoints
Para que os endpoints possam ser acessados através de um aplicatico que faz requisições e repostas no modelo http como o postman ou o insomnia, inicie o servidor usando o script ```npm run dev``` no seu terminal.

foram criados quatro endpoints, cada um representando uma das tarefas do CRUD (create, read, update e delete). que serão mostrado a seguir.

### Cadastrar usuário

#### `POST /usuario`

Primeiramente começamos com o endpoint de criar usuário, acessado através de um método POST deve ser enviado também um json no corpo da requisição como mostra o exemplo a seguir:
```javascript
{
    "name": "Paulo",
    "email": "Paulo3@teste.com",
    "cpf": "09609044455",
    "adress":"baixa",
    "age": "28",
    "sex": "Masc",
    "profession":"desenvolvedor"
}
```
Apenas os campos `name, email e cpf` são obrigatórios, sendo que e-mail e cpf devem ser únicos, o sistema não permitirá o cadastro de duas pessoas com o mesmo e-mail ou cpf.

### Visualizar usuário(s)

#### `GET /usuario?id`

Esse endpoint mostra os usuários cadastrados no nosso banco de dados e também nos permite filtrar esses resultado para um usuário específico através do seu id. Quando o paramêtro do tipo query é informado o sistema retornará apenas o usuário cadastrado com o id informado na requisição, em casos onde não seja passado nenhum parâmetro o retorno será de um array com todos os usuários cadastrados.

### Atualizar usuário

#### `PUT /usuario/:id`

A atualização do usuário é feita atavés desse endpoint, sendo necessário informar o id do usuário que será atualizado por meio do parâmetro de rota e as informações atualizadas desse usuário através do corpo da requisição seguindo o mesmo exemplo mostrado no endpoint de criar usuário.

```javascript
{
    "name": "Paulo",
    "email": "Paulo3@teste.com",
    "cpf": "09609044455",
    "adress":"baixa",
    "age": "28",
    "sex": "Masc",
    "profession":"desenvolvedor"
}
```
<i>Observação: São aplicadas as mesmas validações do endpoint cadastro de usuário, entre elas, não pode ser enviado um e-mail ou cpf que já esteja cadastrado no banco de dados.</i>
## 🛠️ Construído com

Mencione as ferramentas que você usou para criar seu projeto

- Typescript;
- Node;
- TypeORM;
- Postman;
- Postgres.

### Apagar usuário

#### `DELETE /usuario/:id`

Um usuário pode ser apagado desde que acessada essa rota e seja enviado via parâmetros de rota o seu id, caso o usuário exista, o mesmo será apagado do banco de dados.

<i>Obervação: Muito cuidado ao usar o recurso para apagar o usuário, um a vez que for executado seus dados não poderam mais serem recuperados</i>

## 🖇️ Colaborando

Contribuições a serem feitas podem ser enviadas para o meu e-mail: pauloricardooalves@gmail.com

