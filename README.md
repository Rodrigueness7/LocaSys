Locasys é um backend para controle de equipamento alugados, contendo cadastros dos equipamentos, usuário, perfil, setor, empresa e fornecedor.

Antes de Rodar, crie o usuário adminstrador do sistema, dá seguinte forma:

cd config

touch user.json

.nano user.json

dentro dele coloque os campos  abaixo, Exemplo:

 {
 
  "idUser": 0,
  
  "firstName": " Nome administrador",
  
  "lastName": "Sobrenome do adminstrador", 

  "cpf": CPF do adminstrador, 
  
  "username": "Usuário do administrador ",
  
  "password": "Senha do Adminstrador",
  
  "email": Email do adminstrador,
  
  "idSector": 1, é padrão 
  
  "idProfile": 1, é padrão
  
  "deletionDate": null, é padrão
  
  "createdAt": "Data atual no formato: YYYY-MM-DD",  
  
  "updatedAt": "Data atual no formato: YYYY-MM-DD"
}



Depois de ter feito isso, vá para raiz do repositório e digite seguinte comando:

node index, assim que roda o comando irá aparecer mensagem abaixo:

Server is running in port:3001

Runs as tables: S/Y, insira uma dessas teclas e aperte enter, pois irá criar o banco com as tabelas

Observação: aperte as teclas só quando for a implantação do sistema, pois banco e as tabelas já estarão criadas.




 
