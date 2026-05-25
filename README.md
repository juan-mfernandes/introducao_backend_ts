# Introdução ao Desenvolvimento Backend

Projeto de aprendizado de desenvolvimento backend com Node.js, Express e TypeScript.

## Aulas

### Aula 1 — Primeiro Servidor
Criação de um servidor HTTP básico com Express e TypeScript.

**Conceitos abordados:**
- Configuração de projeto Node.js com TypeScript (`ts-node`, `nodemon`)
- Criação de uma instância Express
- Definição de rotas GET e POST simples
- Uso de `Request` e `Response` tipados
- Retorno de dados JSON e códigos de status HTTP
- Middleware `express.json()` para parsing do body

**Rotas:**
| Método | Rota | Descrição |
|--------|------|-----------|
| GET | `/status` | Verifica se o servidor está online |
| GET | `/horario` | Retorna o horário atual do servidor |
| GET | `/aluno` | Retorna dados de um aluno (nome, idade, período) |
| GET | `/teste` | Rota de teste |
| POST | `/tasks` | Recebe e ecoa uma tarefa no body |

---

### Aula 2 — Métodos HTTP
Organização das rotas em arquivos separados e implementação de um CRUD de tarefas.

**Conceitos abordados:**
- Separação de rotas com `express.Router()`
- Importação e registro de routers no servidor principal
- Rota de health check (`/health`)
- Armazenamento em memória com array e controle de ID incremental
- Interface TypeScript para modelar a entidade `Task`
- Métodos HTTP: GET (lista e por ID), POST, DELETE

**Rotas (`/tasks`):**
| Método | Rota | Descrição |
|--------|------|-----------|
| GET | `/tasks` | Lista todas as tarefas |
| GET | `/tasks/:id` | Busca tarefa pelo ID |
| POST | `/tasks` | Cria uma nova tarefa |
| DELETE | `/tasks/:id` | Remove uma tarefa pelo ID |

---

### Aula 3 — Reestruturando o Código
Refatoração da estrutura do projeto, mantendo a separação de responsabilidades introduzida na aula anterior.

**Conceitos abordados:**
- Boas práticas de organização de pastas (`src/routes/`)
- Separação entre configuração do servidor (`index.ts`) e definição das rotas (`routes/tasks.ts`)
- Reaproveitamento e consolidação do código das aulas anteriores

---

## Tecnologias

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [ts-node](https://typestrong.org/ts-node/)
- [nodemon](https://nodemon.io/)

## Como executar cada aula

```bash
cd aulaX_nome_da_aula
npm install
npm run dev
```

O servidor iniciará na porta **3001**.

