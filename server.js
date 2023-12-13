const express = require('express')
const path = require('path')

const app = express();
const router = express.Router()
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

router.get('/', async (req, res) => {
    res.render(path.join(__dirname, 'views', 'ejs', 'index.ejs'), { path: '/' });
});

router.get('/service', async (req, res) => {
    res.render(path.join(__dirname, 'views', 'ejs', 'service.ejs'), { path: '/service' });
});

router.get('/about', async (req, res) => {
    res.render(path.join(__dirname, 'views', 'ejs', 'about.ejs'), { path: '/about' });
});

router.get('/portfolio', async (req, res) => {
    res.render(path.join(__dirname, 'views', 'ejs', 'portfolio.ejs'), { path: '/portfolio' });
});

router.get('/team', async (req, res) => {
    res.render(path.join(__dirname, 'views', 'ejs', 'team.ejs'), { path: '/team' });
});

router.get('/pricing', async (req, res) => {
    res.render(path.join(__dirname, 'views', 'ejs', 'pricing.ejs'), { path: '/pricing' });
});

router.get('/contact', async (req, res) => {
    res.render(path.join(__dirname, 'views', 'ejs', 'contact.ejs'), { path: '/contact' });
});

router.get('/blog', async (req, res) => {
    res.render(path.join(__dirname, 'views', 'ejs', 'blog.ejs'), { path: '/blog' });
});

router.get('/single-post', async (req, res) => {
    res.render(path.join(__dirname, 'views', 'ejs', 'single-post.ejs'), { path: 'single-post' });
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