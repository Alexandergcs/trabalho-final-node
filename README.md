
# Trabalho Final: Desenvolvimento de API REST com Node.js e Fastify

Este projeto é uma API RESTful para gerenciar vídeos, utilizando Node.js e o framework Fastify. Ele suporta operações CRUD para gerenciar os vídeos em um banco de dados, com suporte para PostgreSQL e uma alternativa em memória.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução para JavaScript no servidor.
- **Fastify**: Framework web rápido e eficiente.
- **PostgreSQL**: Banco de dados relacional.
- **dotenv**: Gerenciamento de variáveis de ambiente.
- **Jest**: Framework para testes.

## Funcionalidades

- **POST /videos**: Criação de novos vídeos.
- **GET /videos**: Listagem de vídeos, com suporte a busca por título.
- **PUT /videos/:id**: Atualização de um vídeo existente.
- **DELETE /videos/:id**: Exclusão de um vídeo.

## Pré-requisitos

- Node.js (versão 16 ou superior)
- PostgreSQL configurado e em execução
- Um arquivo `.env` configurado corretamente com as seguintes variáveis:
  ```
  PGHOST=<endereco_do_banco>
  PGDATABASE=<nome_do_banco>
  PGUSER=<usuario>
  PGPASSWORD=<senha>
  SSLMODE=<disable|prefer|require>
  ```

## Instalação Local (Opcional)

1. Clone o repositório para sua máquina local:
   ```bash
   git clone https://github.com/Alexandergcs/trabalho-final-node.git
   ```

2. Navegue até o diretório do projeto:
   ```bash
   cd trabalho-final-node
   ```

3. Instale as dependências necessárias:
   ```bash
   npm install
   ```

4. Configure as variáveis de ambiente conforme o arquivo `.env.example`.

5. Crie as tabelas no banco de dados:
   ```bash
   node create-table.js
   ```

6. Inicie o servidor localmente:
   ```bash
   npm start
   ```

   O servidor estará disponível em `http://localhost:3333` se rodado localmente.


## Implantação no Render

### Configuração:
1. Faça login no [Render](https://render.com).
2. Conecte o repositório do projeto ao Render.
3. Configure as variáveis de ambiente no painel do Render, seguindo o modelo `.env.example`.
4. Após o build, a URL pública será gerada automaticamente.

### Execução:
A API estará acessível em um endereço no formato:
```
https://trabalho-final-node.onrender.com
```

## Scripts Disponíveis

- **`npm start`**: Inicia o servidor.
- **`npm run dev`**: Inicia o servidor no modo de desenvolvimento com reinicialização automática.
- **`npm test`**: Executa os testes utilizando Jest.

## Estrutura de Arquivos

- `server.js`: Configuração do servidor e rotas principais.
- `database-postgres.js`: Implementação do banco de dados utilizando PostgreSQL.
- `database-memory.js`: Implementação alternativa com banco de dados em memória.
- `create-table.js`: Script para criação das tabelas no PostgreSQL.
- `video-api.test.js`: Arquivo de testes utilizando Jest.

## Testes

Os testes foram desenvolvidos utilizando **Jest** e cobrem as principais operações do sistema:
- Criação de vídeos
- Listagem de vídeos
- Atualização de vídeos
- Exclusão de vídeos

Execute os testes com:
```bash
npm test
```

## Licença

Este projeto está licenciado sob a Licença MIT.
