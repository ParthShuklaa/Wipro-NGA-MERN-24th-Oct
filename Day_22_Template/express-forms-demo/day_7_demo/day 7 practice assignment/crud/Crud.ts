// import mongodb module
import { MongoClient , ObjectId} from "mongodb";
// connection string to connect to MongoDB server
const uri: string = "mongodb://localhost:27017/BookVerseDB";

interface Rating {
  user: string;
  score: number;
  comment: string;
}

interface Book {
  _id?: ObjectId;
  title: string;
  genre: string;
  publicationYear: number;
  authorId: ObjectId;
  ratings: Rating[];
}
async function run() {
    // creating a new MongoClient instance
    const client: MongoClient = new MongoClient(uri);
    try {
        // connecting to the MongoDB server
        await client.connect();
        console.log("Connected successfully to MongoDB server");
        // specifying the database name
      const database = client.db("BookVerseDB");
        // specifying the collection name
        const authorcollection = database.collection("Authors");
        const usercollection = database.collection("Users");
        //  specifying the Books collection with Book interface
        const bookcollection = database.collection<Book>("Books");
        // Example CRUD operation: Insert a document into Authors collection

        //  creating author document
        const authorDoc = { name: "dac",nationality:"Indian",birthyear:1970 };
        const authorresult = await authorcollection.insertOne(authorDoc);
        console.log(`Author document inserted with _id: ${authorresult.insertedId}`);

    //  insert book document
    const bookDoc ={
    title: "globbi",
    genre: "Science Fiction",
    publicationYear: 1949,
    authorId: authorresult.insertedId,  
    ratings: [
      { "user": "yash", "score": 8, "comment": "Brilliant allegory." }
    ]
  };
  const bookresult = await bookcollection.insertOne(bookDoc);
  console.log(`Book document inserted with _id: ${bookresult.insertedId}`);

  // read operation

  const scific =await bookcollection.find({genre:"Science Fiction"}).toArray();
    console.log("Science Fiction Books:",scific);

    const findallauthors =await authorcollection.find({}).toArray();
    console.log("All Authors:",findallauthors);

    //  update operation
    const updateauthor = await authorcollection.updateOne(
        {name:"dac"},
        {$set:{birthyear:2001}}
    );
    console.log('author updated:',updateauthor.modifiedCount);

    const updatebook = await bookcollection.updateOne(
        {title:"1984"},
        {$set:{title:"crimes of the future"}}
    );
    console.log('book updated:',updatebook.modifiedCount);

    const updaterating = await bookcollection.updateOne(
        {title:"crimes of the future"},
        {$push:{
            ratings:{
                user:"harshu",
                score:9,
                comment:"mind bending"
            },
        },
    }
    );
    console.log('rating updated:',updaterating.modifiedCount);

    // delete operation

    const deluser =await usercollection.deleteOne({name:"dac"});
    console.log('user deleted:',deluser.deletedCount);
} catch (error) {
        console.error("Error connecting to MongoDB server:", error);
    }
    finally {
        // closing the connection
        await client.close();
        console.log("Connection to MongoDB server closed");
    }
}
run().catch(console.dir);
