const express = require('express')
const path = require('path')

const app = express();
const router = express.Router()
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

router.get('/', async (req, res) => {
    res.render(path.join(__dirname, 'views', 'ejs', 'index.ejs'));
});

router.get('/service', async (req, res) => {
    res.render(path.join(__dirname, 'views', 'ejs', 'service.ejs'));
});

router.get('/about', async (req, res) => {
    res.render(path.join(__dirname, 'views', 'ejs', 'about.ejs'));
});

router.get('/portfolio', async (req, res) => {
    res.render(path.join(__dirname, 'views', 'ejs', 'portfolio.ejs'));
});

router.get('/team', async (req, res) => {
    res.render(path.join(__dirname, 'views', 'ejs', 'team.ejs'));
});

router.get('/pricing', async (req, res) => {
    res.render(path.join(__dirname, 'views', 'ejs', 'pricing.ejs'));
});

router.get('/contact', async (req, res) => {
    res.render(path.join(__dirname, 'views', 'ejs', 'contact.ejs'));
});


router.get('/blog', async (req, res) => {
    res.render(path.join(__dirname, 'views', 'ejs', 'blog.ejs'));
});

router.get('/single-post', async (req, res) => {
    res.render(path.join(__dirname, 'views', 'ejs', 'single-post.ejs'));
});

router.get('*', async (req, res) => {
    res.render(path.join(__dirname, 'views', 'ejs', '404.ejs'));
});

app.use(router)

// app.get('/about', async (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'about.html'));
// });


app.listen(3000, () => {
    console.log("Server started at port 5000")
})