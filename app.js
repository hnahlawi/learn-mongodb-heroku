const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb://hadi:ahAH1011@ds221416.mlab.com:21416/heroku_lpk74b29";
const client = new MongoClient(encodeURI(uri), { useNewUrlParser: true });


const express = require('express')
const port = process.env.PORT || 3000	


var app = express()

// render the index page
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/learning-index.html')
})

app.get('/myform', function(req, res){ 
    var name = req.query.nameInput; //mytext is the name of your input box
    var year = parseInt(req.query.yearInput)



  client.connect(err => {
  		if (err) {
			console.log("Can't insert Student", err)
		} else {
			console.log("Connected") // ops has the documents added
			
		}
  const collection = client.db("heroku_lpk74b29").collection("Student");
  
  //const name = document.getElementById("studentName")
  //const year = document.getElementById("studentYear")
  collection.insertOne({
		//_id: 7,
		name: name,
		year: year
	}, (error, result) => {
		
	})

  client.close();
})

});




app.listen(port, () => {
	console.log(`Listening on port ${port}...`)
}) 
