import express from 'express';
const app = express();

app.use(express.json());
let articlesInfo = [{
    name: 'learn-react',
    upvotes: 0,
},
{
    name: 'learn-node',
    upvotes: 0,
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
    const articleName = req.params.name;
    const  { name } = req.params;
   const article =  articlesInfo.find(a=> a.name === name);
   if(article){
   article.upvotes  += 1;
   res.send( `The ${name} article now has ${article.upvotes} upvotes`);
   } 
});  

app.listen(8000, () => console.log('Server is listening on port 8000'));