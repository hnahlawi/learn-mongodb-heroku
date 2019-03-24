const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb://hadi:ahAH1011@ds221416.mlab.com:21416/heroku_lpk74b29";
const client = new MongoClient(encodeURI(uri), { useNewUrlParser: true });

var bodyParser = require('body-parser');


const express = require('express')
const port = process.env.PORT || 3000	


var app = express()
app.use(bodyParser.json())

// render the index page
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/learning-index.html')
})

 app.use(bodyParser.urlencoded({
     extended: true
 }))


app.get()


app.post('/', function(req, res){ 
		 client.connect(err => {
  		if (err) {
			console.log("Can't insert Student", err)
		} else {
			console.log("Connected") // ops has the documents added
			
		}
  const collection = client.db("heroku_lpk74b29").collection("Student");
  
  //const name = document.getElementById("studentName")
  //const year = document.getElementById("studentYear")
  var name = req.body.nameInput; //mytext is the name of your input box
  var year = parseInt(req.body.yearInput)
  collection.insertOne({
		//_id: 7,
		name: name,
		year: year
	}, (error, result) => {
		if (error) {
			console.log("Can't insert Student", error)
		} else {
			console.log(result.ops) // ops has the documents added
			console.log(result.ops[0]._id.getTimestamp())
		}
		
	})
	client.close()

 })

});




app.listen(port, () => {
	console.log(`Listening on port ${port}...`)
}) 
