# API-NodeExpressMongo

[![Build Status](https://travis-ci.org/ThiagoLuizNunes/API-NodeExpressMongo.svg?branch=master)](https://travis-ci.org/ThiagoLuizNunes/API-NodeExpressMongo)
[![Code Climate](https://codeclimate.com/github/ThiagoLuizNunes/API-NodeExpressMongo/badges/gpa.svg)](https://codeclimate.com/github/ThiagoLuizNunes/API-NodeExpressMongo)
[![Test Coverage](https://codeclimate.com/github/ThiagoLuizNunes/API-NodeExpressMongo/badges/coverage.svg)](https://codeclimate.com/repos/59872c9e6fac1f0266000040/settings/test_reporter)
[![Issue Count](https://codeclimate.com/github/ThiagoLuizNunes/API-NodeExpressMongo/badges/issue_count.svg)](https://codeclimate.com/github/ThiagoLuizNunes/API-NodeExpressMongo/issues)

---
This is my first article that I will be bringing for you guys related to the development of applications based on Node.js, Express and MongoDB. The article consists of building a REST API application, its description and the use good programming practices.

Toolkit: MongoDB | Express.js | Node.js

### Requirements ###

* **[Node.js 6.9.5](http://nodejs.org/en/)** :white_check_mark:
* **[Express.js 4.15.2](http://expressjs.com/)** :white_check_mark:
* **[MongoDB 3.4.4](https://www.mongodb.com/)** :white_check_mark:

### Installation ###

**Obs.: The following instructions were tested on Ubuntu distribution.**

1. After 'git clone' command, run the following commands to install dependencies:
  - user@user:~/path_to_cloned_folder/myFolder$ **npm install**
  - **Manually install the dependencies that may have not been installed by the above command.** :white_check_mark:

2. Start MongoDB
  - user@user:~/shell$ **mongod**

3. Start application
  - use@user:~/path_to_cloned_folder/myFolder **npm start**
  - Access the browser http://localhost:4000/api/item
  
  ## API Routes ##

### Items ###
|   Action                                  | Required          | Method    | URL
| ------------------------------------------|-------------------|-----------|-----------------------------------------------------
|   List all items                        |                   |  `GET`   | /api/item
|   Search for a item with a specific ID  |                   |  `GET`    | /api/item/:id
|   Search for a item with a specifit NAME |                  |  `GET`    | /api/item/:name
|   Create a new item                     |                   |  `POST`   | /api/item
|   Update the item with ID               |                   |  `PUT`   | /api/item/:id
|   Remove item with ID                   |                   |  `DELETE`   | /api/item/:id

## Authors

* Thiago Luiz Pereira Nunes ([ThiagoLuizNunes](https://github.com/ThiagoLuizNunes)) thiago.luiz@lavid.ufpb.br

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

>Created By **[ThiagoLuizNunes](https://www.linkedin.com/in/thiago-luiz-507483112/)** 2017.

---
