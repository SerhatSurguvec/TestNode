# TestNode
NodeJs - ExpressJs - MongoDB Test Repo / Tutorial Build

This repo is used in Heroku. 
Mongodb which is connected to this app is located in MongoLab.

Please Checkout app.js and bin/www for more info.

Routes are :   
    {base}/users -> lists users  
    {base}/posts/:UserId -> lists posts associated to the userId  

Database has 2 collections :
  - users ( _id , name )
  - posts ( _id , content , ObjectId() )
  
