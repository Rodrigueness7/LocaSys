# Locasys

Esse sistema foi criado para controlar equipamento alugados, facilitando a buscar do equipamentos, a localização e com quem se encontra.

## Front-end do projeto

A interface web deste sistema está disponível no repostório abaixo:

- Front-end-Locasys: https://github.com/Rodrigueness7/Front-end-LocaSys

## Tecnologias
- Node.js.
- Express.js.
- MariaDB.
- JWT.
- Sequelize.

## Funcionalidade

### Segurança
- Autenticação JWT.
- Rotas protegidas.
  
### Filial
- Cadastro de filiais.
- Atualização de filiais.
- Exclusão de filiais.
- Relatório de filiais.

### Setor
- Cadastro de setores.
- Atualização de setores.
- Exclusão de setores.
- Relatório de setores.

### Usuário
- Cadastro de usuários.
- Atualização de usuários.
- Exclusão de usuários.
- Relatório de usuários.

### Equipamentos
- Cadastro de equipamentos.
- Atualização de equipamentos.
- Exclusão de equipamentos.
- Relatório de equipamentos.

### Tipo de Equipamento
- Cadastro de tipo de equipamento
- Atualização de tipo de equipamento.
- Exclusão de tipo de equipamento.

### Perfil
- Cadastro de perfil.
- Atualização de perfil.
- Exclusão de perfil.

### Fornecedor
- Cadastro de fornecedor.
- Atualização de fornecedor.
- Exclusão de fornecedor.
- Relatório de fornecedor.

### Logs
- Logs de movimentação do usuários.

### Histórico de Equipamentos.
- Histórico de equipamento.

### Arquivo
- Importa arquivo xlsx.
- Deleta arquivo xlsx.

### Relatórios Comparativo de Equipamentos
- Comparativo de equipamentos.
- Valores de equipamentos iguais.
- Divergência de equipamentos.
- Divergência de equipamentos local.
- Divergência de equipamentos alugados.
  
  
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



