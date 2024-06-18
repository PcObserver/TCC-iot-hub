# Projeto Elegos
![Imagem do Projeto](https://github.com/PcObserver/assets/blob/main/elegos_image.png)

Com o rápido avanço da tecnologia, a quantidade de dispositivos IoT vem crescendo exponencialmente. Diversos sistemas oferecem soluções para operar esses dispositivos, mas a maioria deles dá suporte apenas aos da própria marca, criando dificuldades em construir ecossistemas IoT com controle unificado. O projeto “Elegos” consiste de um controle universal de dispositivos IoT que visa unificar o gerenciamento desses dispositivos em uma única plataforma.

Utilizando um hub baseado em Raspberry Pi 3 modelo B, o sistema detecta automaticamente dispositivos na rede local e permite o envio de comandos, mesmo sem conexão com a internet. Além disso, um repositório online de comandos permite a adição e o compartilhamento de novos dispositivos de forma colaborativa, permitindo a inclusão de novos dispositivos e comandos, bem como avaliação das contribuições criadas pelos usuários pela própria comunidade utilizando um sistema de avaliação por votos positivos.

## Repositórios Associados
- [Back-end da Comunidade de Dispositivos IoT](https://github.com/PcObserver/iot-commands-hub)
- [Front-end da Comunidade de Dispositivos IoT](https://github.com/PcObserver/TCC-iot-hub)
- [Sistema do Raspberry Pi](https://github.com/PcObserver/TCC-RaspClient)

## Objetivo

Este repositório consiste na implementação do Front-end da comunidade de dispisitivos IoT, sistema web onde usuários podem cadastras marcas, comandos e dispositivos.

## Tecnologias Utilizadas

- TypeScript
- Next.js 14
- Tailwind CSS

## Configuração do Projeto

### Pré-requisitos
Antes de começar, certifique-se de que tem os seguintes softwares instalados:

- Node.js (versão 16.x ou superior)
- npm (gerenciadores de pacotes recomendados)
  
Você pode baixar e instalar o Node.js e npm a partir do [nodejs.org](https://nodejs.org/en). Alternativamente, você pode usar o [nvm](https://github.com/nvm-sh/nvm) para gerenciar as versões do Node.js.

### 1. Clonar o Repositório

Clone o repositório para sua máquina local:

```bash
git clone https://github.com/PcObserver/TCC-iot-hub/tree/main
cd TCC-iot-hub
```

### 2. Instalar Dependências

Instale as dependências do projeto usando npm:

```bash
npm install
```

### 3. Executar o Servidor de Desenvolvimento

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

A aplicação agora deve estar rodando em http://localhost:3000 🚀.
