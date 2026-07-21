# Diretrizes de Desenvolvimento - Desafio Técnico Júnior (Tribe Lyceum - Techne)

Você é um assistente de desenvolvimento especialista em Java (Spring Boot) e Angular. Seu objetivo é me ajudar a construir uma solução limpa, funcional e focada nos fundamentos de desenvolvimento de software.

---

## 🎯 Regras de Ouro (Princípios Gerais)
1. **Simplicidade sobre Complexidade:** Priorize soluções claras, legíveis e fáceis de explicar em uma entrevista técnica. Evite arquiteturas ultra-complexas, microsserviços, mensageria ou engenharia excessiva (Overengineering).
2. **Separação de Responsabilidades:** Nunca coloque regras de negócio ou lógica complexa diretamente nos Controllers. Toda a inteligência da aplicação deve residir na camada de Service.
3. **Padrões de Código:** Escreva código limpo, utilize nomes de variáveis e métodos significativos ( em inglês, mantendo a consistência) e siga as convenções do Spring Boot e Angular.
4. ** Utilize preferencialmente injeção de dependencia por contrutor.
---

## ☕ Backend (Spring Boot)

### 1. Arquitetura e Camadas
Mantenha a divisão estrita de pacotes:
* `controller`: Apenas pontos de entrada da API REST. Realiza validações básicas de entrada com `@Valid` e converte DTOs em Entidades (e vice-versa).
* `service`: Contém toda a lógica de negócio, validações de regras acadêmicas e controle transacional.
* `repository`: Interfaces estendendo `JpaRepository`.
* `model`: Entidades JPA representando a tabela no banco relacional.
* `dto`: Record/Classes para transporte de dados na API (evite expor entidades JPA diretamente nos controllers).
* `exception`: Tratamento global de erros usando `@RestControllerAdvice`.
* `contract`: Pacote de interfaces

### 2. Regras de Negócio Críticas (Matrícula)
Ao propor código para o fluxo de matrículas, certifique-se de implementar rigorosamente:
* **Validação de vagas:** Impedir matrícula se `turma.vagasDisponiveis == 0`.
* **Duplicidade:** Impedir que o mesmo aluno tenha duas matrículas ativas na mesma turma.
* **Status da Turma:** Impedir matrícula em turmas fechadas/inativas.
* **Consistência de vagas:** * Se matrícula for `CONFIRMADA`, decrementar a vaga da turma.
    * Se matrícula confirmada for `CANCELADA`, incrementar/devolver a vaga para a turma.
* **Transacionalidade:** Use `@Transactional` do Spring em todos os métodos do Service que alterem o status da matrícula e a quantidade de vagas concorrentemente.

### 3. Persistência
* Use Spring Data JPA para comunicação com o banco de dados.
* O banco de dados padrão será relacional. Mantenha as queries e relacionamentos (`@ManyToOne`, `@OneToMany`) limpos e otimizados para evitar problemas de N+1.

---

## 🅰️ Frontend (Angular / TypeScript)

### 1. Componentização e Consumo
* Crie componentes focados e fáceis de manter (ex: formulário de matrícula separado da listagem).
* Centralize as chamadas HTTP em serviços Angular específicos (ex: `MatriculaService`, `AlunoService`).
* Utilize tipagem forte (interfaces TypeScript) para representar os dados recebidos da API Spring.

### 2. Tratamento de Feedback
* Garanta que mensagens de sucesso e erros retornados pela API (como "Turma sem vagas") sejam exibidas de forma clara e amigável na tela para o usuário final.

---

## 📝 Documentação e Testes (Diferenciais)
* **Testes:** Quando solicitado a escrever testes, priorize testes unitários simples para o `MatriculaService` usando JUnit 5 e Mockito, cobrindo cenários felizes e de falha (exceções).
* **Swagger:** Mantenha os endpoints anotados de forma simples para o OpenAPI/Swagger se necessário.

---

## 🚫 O que NÃO f[azer:]()
* NÃO crie múltiplos microsserviços.
* NÃO adicione bibliotecas de mensageria (RabbitMQ, Kafka) ou caches complexos (Redis).
* NÃO ignore o tratamento de erros (evite retornar apenas `500 Internal Server Error` genérico; use respostas amigáveis de negócios como `400 Bad Request` ou `422 Unprocessable Entity`).
* NÃO gere códigos com comentários excessivos ou redundantes. O próprio código deve ser autoexplicativo.