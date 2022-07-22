# USE CASE

- Importar de API para MongoDB
- Ator Principal: Integracao.
- pre requisito: Acesso aos endpoint da API e a listagem dos paises.
- resultado final: Informacoes salvas no MongoDB

Cenario principal:
 - Testar endpoint da API usando Postman.
 - Desenvolver arquivo que percorre as API dos paises e coleta as informacoes necessarias.
   - Usar MAP para percorrer diversos endpoints de maneira sequencial.
   - Usar promise.all para devolver as promecas e salvar os item de uma so vez no DB.
 - Desenvolver Model para salvar as informacoes de maneira uniforme no DB.
   - Desenvolver schema de mongo para parsear as informacoes para o banco.
 - Desenvolver o Save das informacoes para o MongoDB.
 - Testar o save no MongoDB.
 
 Fluxos alternativos:
 1 - endpoint nao funciona no postman.
     - Checar se estao sendo escritos de maneira correta.
      - testar variacoes logicas do endpoint (v1 inves de v2, /json, etc).
      - Checar os endpoints com quem os forneceu
      
 2 - Logica que percorre a API nao esta funcionando (infos incorretas ou faltando).
     - Checar se os endpoints estao sendo propriamente escritos nas variaves.
     - Checar se o Model esta recebendo as informacoes corretos e se os campos tem os tipos e as variaveis corretas.
     - Checar se o pedido esta sendo feito de maneira async ou usando o .then de maneira correta.
     - Caso um ou mais endpoints deem problema, passar para o proximo endpoint e continuar a varredura e tentar salvar o que retornou corretamente (devolver erro para os endpoints que deram problema).
     - Caso todos os endpoints deem problema voltar para o caso 1 e testar as solucoes dele.
     
 3 - Infos nao estao sendo salvas no DB.
     - Checar se a porta do Mongo esta correta.
     - Checar se o Db esta ligado (localhost).
     - Checar se a logica de save esta sendo feita de maneira correta.
     - Caso apenas algumas informacoes estiverem sendo salvas.
       - Voltar ao passo 2 para checar se as informacoes estao vindo corretamente dos endpoints.
       - Caso estejam vindo corretamente, checar se o parser esta funcionando.
     - Caso nenhuma informacao esteja sendo salva, checas os primeiros passos, caso contrario checar conexao.


# Universities API and REst application 
 
Project using an open API. 
It is possible to populate the localhost database using the "npm run seeds" command. 
Create, read (all or one by id), patch and delete are implemented and fully working.
Testing done using Jest (npm run test) and Route.rest (testing like postman).
 
--- 
## Requirements 
 
For development, you will only need Node.js and a node global package, NPM, installed in your environment.
 
### Node 

- #### Node installation on Windows 
 
 Just go on [official Node.js website](https://nodejs.org/) and download the installer. 
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)). 
 
- #### Node installation on Ubuntu 
 
 You can install nodejs and npm easily with apt install, just run the following commands. 
 
     $ sudo apt install nodejs 
     $ sudo apt install npm 
 
- #### Other Operating Systems 
 You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/). 
 
If the installation was successful, you should be able to run the following command. 
 
   $ node --version 
   v8.11.3 
 
   $ npm --version 
   6.1.0 
 
If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy. 
 
   $ npm install npm -g 
 
 
--- 
 ## Install 
 
   $ git clone https://github.com/renatotabossi/back-end-API
   $ cd back-end-API
   $ npm install 

## App using MongoDB on LOCALHOST
  
## Running the project 
 
 $ npm run devStart 

## Seeding the DB

$ npm run seeds

## Testing with JEST

$ npm run test
