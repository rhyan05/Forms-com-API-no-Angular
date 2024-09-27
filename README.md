# Site Realizado em Angular
Este site foi desenvolvido com foco nos componentes do Angular, utilizando o sistema de formulários reativos. Alem do formualrio, ele tambem utiliza a API [buscaCEp](https://viacep.com.br), que como o nome diz, ele busca o CEP do usuario

## Requisitos Criados para a Criação:
### 1. Criação do Projeto: 
Um novo projeto Angular foi gerado utilizando o Angular CLI.
### 2. Instalação do Angular Material: 
O Angular Material foi integrado ao projeto para utilizar seus componentes estilizados.
### 3. Componente "Home": 
Este componente exibe uma breve descrição do trabalho em desenvolvimento, estilizado com Angular Material, incluindo títulos e descrições.
### 4. Componente "Sobre": 
Este componente apresenta os dados do aluno, como nome, curso e uma breve biografia, utilizando componentes de formulário e cartões do Angular Material para uma apresentação organizada.
### 5. Componente "Cadastro": 
Este componente contém um formulário construído com os componentes de formulário do Angular Material. O formulário inclui os seguintes campos:
 - Nome
 - E-mail
 - Senha
 - Confirmar Senha
 - CEP
### 6. Componente "Not Found":
Um componente que exibe uma mensagem amigável quando o usuário acessa uma rota inexistente, utilizando Angular Material para uma aparência visualmente atraente.
### 7. Configuração de Roteamento: 
As URLs do aplicativo Angular foram configuradas para corresponder aos componentes criados:
 - / para o componente Home
 - /sobre para o componente Sobre
 - /cadastro para o componente Cadastro
 Qualquer outra URL redireciona para o componente NotFound
### Temas e Componentes: 
Foram utilizados os temas e componentes do Angular Material para garantir um visual moderno e consistente.
### Estilos Personalizados:
Estilos adicionais foram aplicados para melhorar a aparência e a usabilidade da aplicação.


![Captura de tela 2024-09-14 181009](https://github.com/user-attachments/assets/f3e2402b-f747-4a2c-83be-ac3b410ca029)


![Captura de tela 2024-09-19 113425](https://github.com/user-attachments/assets/d6cca44e-b49b-4ce2-ab5c-d03e200914f4)


![Captura de tela 2024-09-19 120857](https://github.com/user-attachments/assets/c6e0a5e6-2ba0-431f-b408-2fa211fc2d38)


# Como Rodar
Segue o passo a passo para utilizar esse projeto
## Pré-requisitos: 
Instale o Node.js e o Angular.
Obs: esse projeto foi feito na versão 18.2.1. 
Uma versão mais nova que essa ou mais antiga pode fazer o projeto não funcionar como deveria.

## Download: 
Após a instalação e configuração, baixe todos os arquivos deste projeto.
Executar o Projeto:
Abra o prompt de comando (cmd).

Execute o seguinte comando para iniciar o servidor: `ng serve`
Esse comando abrirá o localhost em `http://localhost:4200/`. Para acessar, digite a letra `o` no cmd, e uma página do navegador será aberta com o projeto em execução.


