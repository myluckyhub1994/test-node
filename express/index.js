const express = require('express');
const app = express();

app.get("", (req, resp) => { 

    resp.send(`<h1>Welcome, this is Homepage</h1>
    <a href="/about">Go to About page</a>`);
});

app.get("/about", (req, resp) => {
    resp.send(`
   <input type="text" placeholder="User Name" />
   <button>Click Me</button>
   <a href="/">Go to Homepage</a>
   `);
});

app.get("/help", (req, resp) => {
    resp.send([
        {
            name: 'puneet',
            email: 'luckydx4@gmail.com'
        },
        {
            name: 'Samitht',
            email: 'lucdcdx4@gmail.com'
        }
    ]);
});


app.listen(5000);