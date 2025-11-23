db.Books.insertMany([
  {
   
    "title": "1984",
    "genre": "Dystopian",
    "publicationYear": 1949,
    "authorId": ObjectId("69079b20dda5fb3b80596092"),  
    "ratings": [
      { "user": "Alice Johnson", "score": 5, "comment": "A chilling masterpiece." }
    ]
  },
  {
   
    "title": "Animal Farm",
    "genre": "Political Satire",
    "publicationYear": 1945,
    "authorId": ObjectId("69079b20dda5fb3b80596093"),  
    "ratings": [
      { "user": "Clara Lee", "score": 5, "comment": "Brilliant allegory." }
    ]
  },
  {
   
    "title": "Harry Potter and the Sorcerer’s Stone",
    "genre": "Fantasy",
    "publicationYear": 1997,
    "authorId": ObjectId("69079b20dda5fb3b80596092"),  
    "ratings": [
      { "user": "Alice Johnson", "score": 5, "comment": "Magical and unforgettable." }
    ]
  }
]
);


// create index
db.Books.createIndex({ genre: 1 });
db.Books.createIndex({ authorId: 1 });
db.Books.createIndex({ "ratings.score": 1 });

// getindex
db.Books.getIndexes();

// after creating index
db.Books.find({ genre: "Fantasy" }).explain("executionStats");





//agreagte 
db.Books.aggregate([
  { $unwind: "$ratings" },
  {
    $group: {
      _id: "$_id",
      title: { $first: "$title" },
      avgRating: { $avg: "$ratings.score" }
    }
  }
]);


// Retrieve the top 3 highest-rated books
db.Books.aggregate([
  {
    $group: {
      _id: "$_id",
      title: { $first: "$title" },
      avgRating: { $avg: "$ratings.score" }
    }
  },
  { $sort: { avgRating: -1 } },
  { $limit: 3 }
]);

// Count the number of books published per genre
db.Books.aggregate([
  {
    $group: {
      _id: "$genre",
      totalBooks: { $sum: 1 }
    }
  },
  { $sort: { totalBooks: -1 } }
]);
// Display the total reward points (sum of all ratings) received by each author

db.Books.aggregate([

  {
    $group: {
      _id: "$authorId",
      totalPoints: { $sum: "$ratings.score" }
    }
  }
]);
