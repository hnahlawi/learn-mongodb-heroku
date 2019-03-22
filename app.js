const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://hnahlawi:ahAH1011@hadicluster-cr6gy.mongodb.net/test?retryWrites=tru";
const client = new MongoClient(uri, { useNewUrlParser: true });


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
  const collection = client.db("StudentAPI").collection("Students");
  
  //const name = document.getElementById("studentName")
  //const year = document.getElementById("studentYear")
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

  client.close();
})

});




app.listen(port, () => {
	console.log(`Listening on port ${port}...`)
}) 
