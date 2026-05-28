# 🌐 CRUD Distributed Architecture — Opção B

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express" />
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
</p>

## 📋 Sobre o Projeto

Este projeto foi desenvolvido como requisito prático para a disciplina de **Sistemas Distribuídos e Redes**. O objetivo principal foi desestruturar um sistema monolítico clássico (CRUD) em uma **arquitetura distribuída multi-servidores (Opção B - Intermediária)**, onde as camadas de apresentação, negócio e persistência rodam de forma totalmente isolada em nós distintos da rede.

A aplicação simula um **Painel de Controle de Estoque** com comunicação assíncrona, tratamento rigoroso de CORS (Cross-Origin Resource Sharing) e tolerância a falhas local.

---

## 🏗️ Topologia da Arquitetura Distribuída

A separação dos servidores foi implementada utilizando portas lógicas distintas sobre o endereço de loopback (`localhost`), mapeando os papéis da seguinte forma:

| Componente | Papel Técnico | Endereço / Porta | Protocolo |
| :--- | :--- | :--- | :--- |
| **Servidor 1** | Apresentação (Frontend) | `http://localhost:3000` | HTTP / TCP |
| **Servidor 2** | Processamento (API REST) | `http://localhost:5000` | HTTP / REST |
| **Servidor 3** | Banco de Dados Persistente | Arquivo Isolado (`dados.json`) | I/O Local Assíncrono |

### Fluxo de Comunicação:
1. O usuário interage com o **Servidor 1** (`:3000`) através do navegador.
2. O Frontend faz requisições HTTP assíncronas via `fetch API` para os endpoints expostos pelo **Servidor 2** (`:5000`).
3. O Servidor 2 processa a regra de negócio e manipula os estados de persistência no **Servidor 3** (`dados.json`).

---

## 🧠 Conceitos de Sistemas Distribuídos Demonstrados

* **Acoplamento Fraco (Decoupling):** A interface do usuário não conhece a estrutura do banco de dados; ela apenas consome um contrato de API.
* **Isolamento de Falhas:** Caso o **Servidor 2 (API)** caia, o **Servidor 1 (Frontend)** permanece ativo e renderiza um tratamento amigável de erro de rede em tempo real (via blocos `try/catch`), provando a robustez do sistema distribuído.
* **Comunicação por Mensageria HTTP:** Utilização dos verbos normatizados `GET` (leitura) e `POST` (escrita) com payloads estruturados em formato JSON.

---

## 🚀 Como Executar a Solução

### Pré-requisitos
* Ter o [Node.js](https://nodejs.org/) instalado na máquina.

### 1. Clonar e Organizar
```bash
git clone [https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git](https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git)
cd SEU_REPOSITORIO
