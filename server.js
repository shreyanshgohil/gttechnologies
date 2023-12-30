const express = require("express");
const path = require("path");
const { PrismaClient } = require('@prisma/client')
const port = 3001;
const app = express();
const router = express.Router();
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
require('dotenv').config()



const Prisma = new PrismaClient();

// Database Connection
Prisma
    .$connect()
    .then(() => {
        console.log('Database connected successfully');
    })
    .catch((error) => {
        console.log('Database connection error:', error);
    });

router.get("/", async (req, res) => {
    res.render(path.join(__dirname, "views", "ejs", "index.ejs"), { path: "/" });
});

router.get("/service", async (req, res) => {
    res.render(path.join(__dirname, "views", "ejs", "service.ejs"), {
        path: "/service",
    });
});

router.get("/about", async (req, res) => {
    res.render(path.join(__dirname, "views", "ejs", "about.ejs"), {
        path: "/about",
    });
});

router.get("/portfolio", async (req, res) => {
    res.render(path.join(__dirname, "views", "ejs", "portfolio.ejs"), {
        path: "/portfolio",
    });
});

router.get("/team", async (req, res) => {
    res.render(path.join(__dirname, "views", "ejs", "team.ejs"), {
        path: "/team",
    });
});

router.get("/pricing", async (req, res) => {
    res.render(path.join(__dirname, "views", "ejs", "pricing.ejs"), {
        path: "/pricing",
    });
});

router.get("/contact", async (req, res) => {
    res.render(path.join(__dirname, "views", "ejs", "contact.ejs"), {
        path: "/contact",
    });
});

router.get("/blog", async (req, res) => {
    res.render(path.join(__dirname, "views", "ejs", "blog.ejs"), {
        path: "/blog",
    });
});

router.get("/single-post", async (req, res) => {
    res.render(path.join(__dirname, "views", "ejs", "single-post.ejs"), {
        path: "single-post",
    });
});

router.get("*", async (req, res) => {
    res.render(path.join(__dirname, "views", "ejs", "404.ejs"));
});

router.post('/api/contact', async (req, res) => {
    const response = await Prisma.user.create({
        data: {
            name: "Shreyansh"
        }
    })
    console.log(response, "eeee")
})

app.use(router);


app.listen(port, () => {
    console.log("Server started at port " + port);
});
