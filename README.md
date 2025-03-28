# Esperto Backend

O **Esperto Backend** é um serviço que permite procurar citações em documentos PDF através de palavras-chave. Este serviço é parte do projeto **Esperto**, que visa ajudar estudantes a encontrar referências em trabalhos acadêmicos.

## Como usar

1. **Instalação**:
   - Clone o repositório:
     ```bash
     git clone https://github.com/SEU_USUARIO/esperto-backend.git
     ```
   - Instale as dependências:
     ```bash
     npm install
     ```

2. **Rodando o servidor**:
   - Inicie o servidor:
     ```bash
     npm start
     ```
   - O servidor estará rodando na porta **3001**.

3. **Usando a API**:
   - A API expõe uma rota POST em `/search`.
   - Envie um arquivo PDF e uma palavra-chave no corpo da requisição para procurar as citações.
   - Exemplo de requisição com **Postman**:
     - **URL**: `http://localhost:3001/search`
     - **Body**: `form-data`
       - **pdf**: [Seu arquivo PDF]
       - **query**: [Palavra-chave]

## Contribuições

Sinta-se à vontade para fazer um fork e contribuir com melhorias. Se você encontrar algum bug ou tiver sugestões, abra uma **issue**.

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).
