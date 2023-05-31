
#insert articces via mongoshell
------------------------------------
db.articles.insertMany([{
... ...     name: 'learn-react',
... ...     upvotes: 0,
... ...     comments: []
... ... },
... ... {
... ...     name: 'learn-node',
... ...     upvotes: 0,
... ...     comments: [],
... ... }
... ... ])
{
        "acknowledged" : true,
        "insertedIds" : [
                ObjectId("6476dea2b53252a2ebdc1a7c"),
                ObjectId("6476dea2b53252a2ebdc1a7d")
        ]
}

query articles in db
----------------------
db.articles.find({}).pretty()
