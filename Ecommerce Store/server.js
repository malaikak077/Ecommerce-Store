const express = require('express')
const mongoose = require("mongoose");
const cookieParser = require('cookie-parser'); 
const FaceMakeup = require("./Models/FaceMakeup");
const Order = require("./Models/Orders");
const session = require("express-session");

mongoose.connect("mongodb://localhost:27017/SemesterProject").then(() => {
        console.log('Connected to MongoDB');
    })

const app = express()
const port = 3000
app.use(session({ secret: "Its  a secret" }));
app.use(express.static("public"));
app.use(cookieParser()); 
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require("./middlewares/sMiddleware"));
app.use("/", require("./routes/site/auth"));

app.get('/index.html', async (req, res) => {
  const products = await FaceMakeup.find().limit(4);
  res.render("index",{products})
})


// app.get('/faceMakeup.html', async (req, res) => {
//     let products = await FaceMakeup.find();
//     res.render("FaceMakeup",{products});
//   })

  
app.get('/Face/:productId', async (req, res) => {
    const products = await FaceMakeup.find().limit(4); 
    try {
      const productId = req.params.productId;
      const prod = await FaceMakeup.findById(productId); 
      if (!prod) {
        return res.status(404).send('Product not found');
      }
      res.render('dynamic', { prod,products });
    } catch (error) {
      console.error('Error fetching product:', error);
      res.status(500).send('Internal Server Error');
    }
  });

  app.get("/FaceMakeup.html/:page?", async (req, res) => {
    let page = Number(req.params.page) ? Number(req.params.page) : 1;
    let pageSize = 8;
    let products = await FaceMakeup.find()
      .skip(pageSize * (page - 1))
      .limit(pageSize);
    let total = await FaceMakeup.countDocuments();
    let totalPages = Math.ceil(total / pageSize);
    res.render("FaceMakeup", {
      products,
      total,
      page,
      pageSize,
      totalPages,
    });
  });
  


  app.get('/CheckOut/:productId', async (req, res) => {
    try {
    const productId = req.params.productId;
    const prod = await FaceMakeup.findById(productId); 
    if (!prod) {
      return res.status(404).send('Product not found');
    }
    res.render('CheckOut', { prod });
  } catch (error) {
    console.error('Error fetching product:', error);
    res.status(500).send('Internal Server Error');
  }
  });
  app.post('/CheckOut/:productId', async (req, res) => {
    const { email, fname, lname, address, city, PostalCode, phone, items, totalAmount } = req.body;
    const itemsArray = JSON.parse(items);

    const newOrder = new Order({
        email,
        fname,
        lname,
        address,
        city,
        PostalCode: parseInt(PostalCode),
        phone: parseInt(phone),
        items: itemsArray,
        totalAmount: parseFloat(totalAmount)
    });

    try {
        await newOrder.save();
        res.redirect('/index.html');
    } catch (err) {
        res.status(500).send(err.message);
    }
});


  app.get('/Check/Cart', async (req, res) => {
  
    res.render('CheckOutCart');
  

  });
  app.post("/Check/Cart", async (req, res) => {
    const { email, fname, lname, address, city, PostalCode, phone, items, totalAmount } = req.body;
    const itemsArray = JSON.parse(items);

    const newOrder = new Order({
        email,
        fname,
        lname,
        address,
        city,
        PostalCode: PostalCode,
        phone,
        items: itemsArray,
        totalAmount: Number(totalAmount)
    });
    await newOrder.save();
    return res.redirect("/index.html");
  
  });
 


app.get('/EyeMakeup.html', (req, res) => {
    res.render("EyeMakeup")
})
app.get('/LipMakeup.html', (req, res) => {
    res.render("LipMakeup")
})
app.get('/Accesories.html', (req, res) => {
    res.render("Accesories")
})
app.get('/ContactUs.html', (req, res) => {
    res.render("ContactUs")
})
app.get('/FAQs.html', (req, res) => {
    res.render("FAQs")
})









app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})