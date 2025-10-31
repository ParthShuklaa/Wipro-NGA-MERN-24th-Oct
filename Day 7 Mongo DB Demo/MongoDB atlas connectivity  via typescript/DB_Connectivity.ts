// here we will be connecting to MongoDB Atlas using TypeScript following the official MongoDB Node.js driver documentation via following steps 
// Step 1: Install the MongoDB Node.js driver
// Run the following command to install the MongoDB Node.js driver using npm
// npm install mongodb and npm install --save-dev @types/mongodb
// Step 2: Import the MongoDB client in your TypeScript file
// Importing MongoClient from mongodb package
// Step 3: Create a MongoDB client and connect to the database
// Replace <username>, <password>, and <cluster-url> with your MongoDB Atlas credentials and cluster information
//Perform CRUD operations as needed
// Step 4: Close the connection when done 

import { MongoClient } from "mongodb";

//const uri: string = "mongodb+srv://admin:<Ashu@2002>@eduprodb.0gv9y9n.mongodb.net/?appName=EduProDb"; //connection string to connect to MongoDB Atlas

//New Connection string 
const uri: string = "mongodb+srv://admin:Ashu%402002@eduprodb.0gv9y9n.mongodb.net/"
//Local DB which is MongoDB compass connection string can also be used for connecting DB
//mongodb://localhost:27017
//  const uri: string = "mongodb://localhost:27017";

async function run() {
    const client: MongoClient = new MongoClient(uri); //creating a new MongoClient instance 
    try {
        await client.connect(); //connecting to the MongoDB Atlas cluster or mongoDb compass via local host 
        console.log("Connected successfully to MongoDB Atlas");
        const database = client.db("demoDB"); //specifying the database name
        const collection = database.collection("demoCollection"); //specifying the collection name
        // Example CRUD operation: Insert a document
        const doc = { name: "John Doe", age: 30, occupation: "Developer" };
        const result = await collection.insertOne(doc);
        console.log(`Document inserted with _id: ${result.insertedId}`);
    } catch (error) {
        console.error("Error connecting to MongoDB Atlas:", error);
    }
    finally {
        await client.close(); //closing the connection
        console.log("Connection to MongoDB Atlas closed");
    }
}

run().catch(console.dir); //running the async function and catching any unhandled errors
// This TypeScript code connects to a MongoDB Atlas database, inserts a document into a specified collection, and then closes the connection.   
// Make sure to replace the placeholder values in the connection string with your actual MongoDB Atlas credentials before running the code.