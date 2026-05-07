# Locasys

Esse sistema foi criado para controlar equipamento alugados, facilitando a buscar do equipamentos, a localização e com quem se encontra.

## Tecnologias
- Node.js
- Express.js
- MariaDB
- JWT

## Configurações
Antes de executar o projeto, crie os seguintes arquivos:

### Arquivos necessários

Crie os seguintes arquivos antes de iniciar o projeto:

#### `.env`

Arquivo na raiz do projetos: 

```env
PORT = port_seu_server
secret_key = sua_secret
db_host = 127.0.0.1
db_name = seu_database
db_username = seu_username
db_password = sua_password_database
db_dialect = seu_dialect
db_port = port_seu_database
```

Ao iniciar o sistema pela primeira vez, um usuário administrador e criado automaticamente usando os dados do arquivo:

#### `config/user.json`

```json
{
    "idUser": 1,
    "firstName": primeiro_nome_admim,
    "lastName": segundo_nome_admin,
    "cpf": cpf_admin,
    "username": username_admin,
    "password": password_admin,
    "email": email_admin,
    "idSector": 1, - PADRÂO
    "idProfile": 1, - PADRÂO
    "deletionDate": null,
    "creationDate": "2023-11-01T00:00:00",
    "updateDate": "2023-11-01T00:00:00"  
}
```

## Instalação

```bash
git clone https://github.com/Rodrigueness7/LocaSys.git
```

Instale as dependências:

```bash
npm install
```

Inicie a aplicação: 

```bash
node index
```

Ao executar o comando pela primeira vez, o sistem perguntará se deseja criar as tabelas do banco de dados:

```bash
Runs as tables: S/Y
```
Digite: 

- `S` para criar as tabelas
- `Y` caso esteja usando teclado/layout em inglês



