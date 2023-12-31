const { MongoClient } = require('mongodb');
const fs = require('fs');
const http = require('http'); 
const path = require('path');

const uri = "mongodb+srv://jyothiravali007:Ravali%4012345@cluster0.e6yfrtx.mongodb.net/?retryWrites=true&w=majority";

const dbName = 'TopStories';

const collectionName = 'Stories';

const client = new MongoClient(uri);

async function fetchStories() {
    
    try {
        await client.connect();
        console.log("Connected to MongoDB!")

        const database = client.db(dbName); 
        const collection = database.collection(collectionName); 
        const stories = await collection.find({}).toArray();

        
        console.log("Fetch successful!");
        return stories;

    } finally {
        await client.close();
        console.log("Disconnected MongoDB!");
    }
}
const server = http.createServer(async (req, res) => {
    
    if (req.url === '/') {
        
        fs.readFile(path.join(__dirname, 'index.html'),
                    (err, content) => {
                                    
                                    if (err) throw err;
                                    res.writeHead(200, { 'Content-Type': 'text/html' });
                                    res.end(content);
                        }
              );
     }

    else if (req.url==='/api')
    {
        try {
            const stories = await fetchStories();
            res.writeHead(200, {'Content-Type': 'application/json','Access-Control-Allow-Origin':'*'})
            res.end(JSON.stringify(stories, null, 2));
        } catch (error) {
            console.error(error);
            res.writeHead(500, { 'Content-Type': 'text/html' });
            res.end("Internal Server Error");
        }
    }

    else{
        res.end("<h1> 404 nothing is here</h1>");
    }

});

server.listen(8143,()=> console.log(`Great our server is running on port 8143`));
