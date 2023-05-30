import express from 'express';
const app = express();

app.use(express.json());
let articlesInfo = [{
    name: 'learn-react',
    upvotes: 0,
    comments: []
},
{
    name: 'learn-node',
    upvotes: 0,
    comments: [],
}
]
app.get('/hello', (req, res) => {
    res.send('hello');
})
app.get('/hello/:name', (req, res) => {
    const { name } = req.params;
    res.send(`Hello  ${name}`);
})
 
app.put('/api/articles/:name/upvote', (req, res) => {
   
    const  { name } = req.params;
   const article =  articlesInfo.find(a=> a.name === name);
   if(article){
   article.upvotes  += 1;
   res.send( `The ${name} article now has ${article.upvotes} upvotes`);
   } 
});  

app.post('/api/articles/:name/comments',(req,res)=>{
    const name  = req.params;
    const {postedBy, text} =  req.body;
    
    const article  = articlesInfo.find(a => a.name === name);

    if(article){
    article.comments.push({postedBy,text});
    res.send(article.comments);
    }else{
        res.send('Article doesnot exist');
    }
});

app.listen(8000, () => console.log('Server is listening on port 8000'));