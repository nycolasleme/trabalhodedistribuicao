🌐 CRUD de Produtos - Arquitetura Distribuída
Este projeto foi desenvolvido como requisito avaliativo para a disciplina de Sistemas Distribuídos e Redes, tendo como objetivo prático a criação de uma arquitetura real multi-servidores com componentes totalmente desacoplados e comunicando-se através da rede local.

A solução consiste em um sistema CRUD de gerenciamento de produtos implementado sob a Opção B (Intermediária) do escopo do projeto, separando as camadas de apresentação, processamento e persistência.

🏗️ Arquitetura do Sistema
O sistema foi modelado para mitigar o acoplamento, permitindo escalabilidade independente e isolamento de falhas. A distribuição dos serviços na rede local ocorre da seguinte forma:

Servidor 1 (Frontend): Interface do usuário construída em HTML5/CSS3 moderno, servida de forma independente na porta 3000. Responsável por realizar requisições assíncronas (fetch API) para a camada de negócio.

Servidor 2 (Backend API): Serviço RESTful desenvolvido em Node.js + Express rodando na porta 5000. Atua como o cérebro da aplicação, expondo endpoints HTTP e gerenciando as regras de negócio com suporte a CORS habilitado.

Servidor 3 (Persistência/Banco de Dados): Camada de dados simulada via persistência em arquivo estruturado JSON (dados.json), garantindo o isolamento da manipulação de estados do sistema.

⚡ Conceitos de Sistemas Distribuídos Aplicados
Desacoplamento (Decoupling): A camada visual não possui dependência direta do banco de dados, comunicando-se exclusivamente via chamadas de rede à API.

Isolamento e Tolerância a Falhas: Caso o servidor de processamento (Porta 5000) fique indisponível, o servidor de apresentação (Porta 3000) permanece ativo e trata o erro de rede visualmente sem derrubar a aplicação.

Comunicação via Protocolos de Rede: Toda a comunicação entre os nós da arquitetura é baseada na pilha de protocolos TCP/IP, utilizando o protocolo de aplicação HTTP/REST
