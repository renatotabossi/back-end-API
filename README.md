# USE CASE

- Importar de API para MongoDB
- Ator Principal: Integracao.
- pre requisito: Acesso aos endpoint da API.
- resultado final: Informacoes salvas no MongoDB, logica CRUD criada e testada (Jest)

Cenario principal:
 - Testar endpoint da API usando Postman.
 - Desenvolver arquivo de criacao de servidor e rotas no Node, testar portas e logica.
 - Desenvolver arquivo que percorre as API (usando MAP e promise.all) e coleta as informacoes necessarias.
     - Desenvolver Model para salvar as informacoes de maneira uniforme no DB  
     - Desenvolver o Save das informacoes para o MongoDB.
     - Testar o save no MongoDB.
 - Desenvolver a logica CRUD para que as informacoes salvas no DB possam ser criadas, alteradas, lidas ou deletadas.
 - Testar o CRUD de maneira minuciosa.
 
 Fluxos alternativos:
 - endpoint nao funciona no postman.
     - Checar se estao sendo escritos de maneira correta.
      - Se estiverem, checar os endpoints com quem os forneceu, testar variacoes logicas do endpoint (v1 inves de v2, /json, etc).
      
 - Logica que percorre a API nao esta funcionando (infos incorretas ou faltando).
     - Checar se os endpoints estao sendo propriamente escritos nas variaves.
     - Checar se o Model esta recebendo as informacoes corretos e se os campos tem os tipos e as variaveis corretas.
     - Checar se o pedido esta sendo feito de maneira async ou usando o .then de maneira correta.
     
 - Infos nao estao sendo salvas no DB.
     - Checar se a porta do Mongo esta correta.
     - Checar se o Db esta ligado (localhost).
     - Checar se a logica de save esta sendo feita de maneira correta.

 - Alguma rota do CRUD nao funciona.
     - Checar a logica feita.
     - Checar se as rotas estao sendo propriamente passadas na logica e no teste.


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
