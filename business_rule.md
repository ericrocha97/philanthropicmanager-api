# Regras de negócios

- Cadastro de usuários
  - [x] Não é permitido cadastrar mais de um usuário com o mesmo username
  - [x] Não é permitido cadastrar mais de um usuário com um membro já em uso
  - [x] Não é permitido cadastrar um usuário sem username, senha ou id do membro

- Cadastro de Membro
  - [x] Não é permitido cadastrar um membro sem nome
  - [x] Não é permitido cadastrar um membro sem CID
  - [x] Não é permitido cadastrar um membro sem endereço
  - [x] Não é permitido cadastrar um membro sem CEP
  - [x] Não é permitido cadastrar um membro sem telefone
  - [x] Não é permitido cadastrar um membro sem aniversario
  - [x] Não é permitido cadastrar um membro sem nível
  - [x] Não é permitido cadastrar um membro com um CID em uso
  - [ ] Não é permitido o cadastro por usuários que não sejam administradores
  - [ ] Deve ser possível listar os membros
  - [ ] Deve ser possível alterar os membros
  - [ ] Deve ser possível desativar os membros
  
- Cadastro de Filantropia
  - [x] Não é permitido cadastrar uma filantropia sem titulo
  - [x] Não é permitido cadastrar uma filantropia sem descrição
  - [x] Não é permitido cadastrar uma filantropia sem local
  - [x] Não é permitido cadastrar uma filantropia sem data
  - [x] Não é permitido cadastrar uma filantropia sem o tipo 'philanthropy'
  - [ ] Não é permitido cadastrar uma filantropia fora do período da administração
  - [ ] O usuário precisa estar autenticado na aplicação
  - [ ] Deve ser possível alterar as filantropias
  - [ ] Deve ser possível remover as filantropias por um administrador

- Cadastro de Trabalho
  - [x] Não é permitido cadastrar uma trabalho sem titulo
  - [x] Não é permitido cadastrar uma trabalho sem descrição
  - [x] Não é permitido cadastrar uma trabalho sem membro valido
  - [x] Não é permitido cadastrar uma trabalho sem data
  - [x] Não é permitido cadastrar uma trabalho sem o tipo 'work'
  - [ ] Não é permitido cadastrar uma trabalho fora do período da administração
  - [ ] O usuário precisa estar autenticado na aplicação
  - [ ] Deve ser possível alterar os trabalhos
  - [ ] Deve ser possível remover os trabalhos por um administrador
  
- Cadastro de Lançamentos Financeiros
  - [x] Não é permitido cadastrar um lançamento sem descrição
  - [x] Não é permitido cadastrar um lançamento sem o tipo  'credit' ou 'debit'
  - [x] Não é permitido cadastrar um lançamento sem data
  - [x] Não é permitido cadastrar um lançamento sem o valor
  - [ ] Não é permitido cadastrar uma trabalho fora do período da administração
  - [ ] O usuário precisa estar autenticado na aplicação
  - [ ] Deve ser possível listar todos os lançamentos por data
  - [ ] Deve ser possível alterar os lançamentos
  - [ ] Deve ser possível remover os lançamentos por um administrador

- Cadastro de Preferencias da Entidade
  - [ ] As preferências da entidade devem ser cadastradas por um administrador
  - [x] Os períodos de administração são semestrais
  - [x] Deve ser possível definir um membro para cada cargo
  - [ ] Deve ser possível alterar qualquer membro de qualquer cargo
  - [x] Ao alterar o período de administração deve ser gravado em um novo registro
  - [ ] Deve ser possível listar as preferencias por período de administração
  - [ ] Deve ser possível definir qual o período de administração atual

- Listagem do Calendário
  - [ ] Deve incluir todos os trabalhos e filantropias do período de administração ordenados por data
  - [ ] Deve incluir todos os detalhes dos trabalhos e filantropias  
  - [ ] O usuário precisa estar autenticado na aplicação
