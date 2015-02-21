# TestNode
#### NodeJs - ExpressJs - MongoDB Test Repo / Tutorial Build

This repo is used in Heroku.  <br/> 
Mongodb which is connected to this app is located in MongoLab.

Please Checkout app.js and bin/www for more info.

Routes are :   
 &nbsp;&nbsp;&nbsp;&nbsp;{base}/users  
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; lists users  
 &nbsp;&nbsp;&nbsp;&nbsp;{base}/posts/:UserId  
 &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; lists posts associated with userId (HTTP GET) 
 &nbsp;&nbsp;&nbsp;&nbsp;{base}/beacon/:MacAddress  
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; returns beacon with associated with MacAddress (HTTP GET)  
 &nbsp;&nbsp;&nbsp;&nbsp;{base}/beacon/list  
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; lists beacons  
 &nbsp;&nbsp;&nbsp;&nbsp;{base}/beacon/add  
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Adds a new beacon , Header must be "application/json"  

Example JSON
```json
	
	{
	    "mac_address" : "Mac Address",
	    "name" : "Beacon Name",
	    "info" : "Information associated with Beacon"
	}

```

Database has 2 collections :
  - users ( _id , name )
  - posts ( _id , content , ObjectId() )
  - beacon ( _id , mac_address , name , info )


  By Serhat Surguvec
  
