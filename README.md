# API-NodeExpressMongo

## This is the first article I will be bringing for your guys related to the development of applications based on Node.js, Express and MongoDB. The article consists of building a REST API application, its description and using good programming practices.

---

Toolkit: MongoDB | Express.js | Node.js

### Requirements ###

* **[Node.js 6.9.5](http://nodejs.org/en/)** :white_check_mark:
* **[Express.js 4.15.2](http://expressjs.com/)** :white_check_mark:
* **[MongoDB 3.4.4](https://www.mongodb.com/)** :white_check_mark:

### Installation ###

**Obs.: The following instructions were tested on Ubuntu distribution.**

1. After 'git clone' command, run the following commands to install dependencies:
  - user@user:~/path_to_cloned_folder$ **npm install**
  - **Manually install the dependencies that may have not been installed by the above command.** :white_check_mark:

2. Start MongoDB
  - user@user:~/shell$ **mongod**

3. Start application
  - use@user:~/path_to_cloned_folder **npm start**
  - Access the browser http://localhost:4000/api/item
  
  ## API Routes ##

### Items ###
|   Action                                  | Required          | Method    | URL
| ------------------------------------------|-------------------|-----------|-----------------------------------------------------
|   List all items                        |                   |  `GET`   | /api/item
|   Search for a item with a specific ID  |                   |  `GET`    | /api/item/:id
|   Create a new item                     |                   |  `POST`   | /api/item
|   Update the item with ID               |                   |  `PUT`   | /api/item/:id
|   Remove item with ID                   |                   |  `DELETE`   | /api/item/:id

## Contributors

* Thiago Luiz Pereira Nunes ([ThiagoLuizNunes](https://github.com/ThiagoLuizNunes)) thiago.luiz@lavid.ufpb.br

>Created By **[ThiagoLuizNunes](https://www.linkedin.com/in/thiago-luiz-507483112/)** 2017.

---
