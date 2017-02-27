# DEPLOY
A aplicação foi desenvolvida utilizando: AngularJS, Jquery, Bootstrap, PHP, MySQL.

**Ferramentas Necessárias**  
Apache, MySQL e PHP (utilizado: WAMP);

**Configuração**  
Fazer upload do arquivo bluebank.sql para o MySQL;  
Copiar a pasta blueBank para sua pasta localhost (WAMP: C:/wamp/www);  
Configurar conexão com o banco de dados no arquivo bluebank/web/bd/conexao.php;  
Configurar a URL no arquivo bluebank/web/js/config/valueConfig.js;  

**Login**  
Agência: 1478  
Conta: 12345  
Senha: 1234  

ou  

Agência: 2587  
Conta: 69856  
Senha: 4321  

**-----------------------------------------------------------------**

# Blue Bank - Estamos contratando!


**Blue Bank** é uma instituição financeira fictícia cujas demandas de desenvolvimento de software têm aumentado muito nos últimos meses. Tentando manter-se sempre atualizada, busca novos desenvolvedores de software que sejam capazes de solucionar problemas de forma eficaz e elegante.

Como candidato, seu objetivo é desenvolver uma aplicação que seja capaz de demonstrar seus conhecimentos em desenvolvimento frontend e backend, ou seja, provar ser um legítimo desenvolvedor Fullstack.

Para isso será necessário criar uma aplicação que possibilite a transferência de fundos entre contas de dois correntistas.

## Informações importantes sobre o negócio
Um correntista é identificado pelo seu id, CPF, número da conta corrente e código da agência.

As transferências devem ter controle transacional para evitar débitos e créditos inválidos.

A existência da conta de destino deve ser validada, assim como a existência de fundos suficientes para o valor a ser transferido.

## Requisitos técnicos
- Interface web.
- Backend Java EE ou NodeJs.
- Utilizar OOP.
- Banco de dados relacional com ORM (Lembre-se que a legislação obriga os bancos a manter dados históricos por anos).
- Instruções para deploy e execução.
- Pequeno memorando com justificativa de decisões técnicas.

## Como destacar-se?
- Aplicar SOLID.
- Escrever testes unitários com boa cobertura.
- Arquitetar com SPA + API.
- Fazer o deploy da aplicação no seu ambiente de nuvem preferido ([IBM Bluemix](https://console.ng.bluemix.net/), AWS, Openshift, Heroku).


## Frameworks são bem vindos!
Angular, jQuery, Bootstrap, Material, ModuleJs, Sequelize, Spring, Hibernate.

## Como enviar o código para análise?
O desenvolvedor deve criar um projeto no seu Git repo preferido (GitHub, BitBucket, etc). Lembre-se que ele será analisado por desenvolvedores, então não economize nos comentários de commit.

