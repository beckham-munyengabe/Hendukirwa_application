const express = require('express');
const cors = require('cors');
const app = express();
const mysql = require('mysql');
const multer = require('multer');
const path = require('path');   
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    port: 3306,
    password: '',
    database: 'hendukirwa'
});
db.connect((err) => {
    if (err) {
        console.error('Error connecting to database:', err);
        return;
    }
    else {
        console.log('Connected to database');
    }
})

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });



// Create
app.post('/register', upload.single('seller_image'), (req, res) => {
    try{
    const { seller_fname, seller_lname,password,email,phonenumber,address,seller_image} = req.body;
    const fileName = req.file.filename;
    const sql = 'INSERT INTO sellers (seller_fname, seller_lname,password,email,phonenumber,address,seller_image) VALUES (?,?,?,?,?,?,?)';
    const values = [seller_fname, seller_lname,password,email,phonenumber,address,fileName];
    db.query(sql, values, (err) => {
           if (err) return res.status(500).json(err);
            res.status(200).json({ message: "Seller registered and image saved to folder!" });
    })
    }catch(err){
    res.status(500).send("Make sure you selected a file in Postman!");
    }
});




//Login Route
// --- ADD THIS TO YOUR BACKEND FILE ---

// LOGIN ROUTE
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    
    const sql = 'SELECT * FROM sellers WHERE email = ? AND password = ?';
    db.query(sql, [email, password], (err, results) => {
        if (err) return res.status(500).json({ message: "Database error" });
        
        if (results.length > 0) {
            // User found
            res.status(200).json({ 
                message: "Login successful", 
                user: results[0] 
            });
        } else {
            // User not found or wrong password
            res.status(401).json({ message: "Invalid email or password" });
        }
    });
});


//Insert Product
app.post('/addproduct', (req, res) => {
    const { product_name, product_description, product_quantity, product_price, product_quantity_sold, product_remaining_quantity, seller_id} = req.body;
    const sql = 'INSERT INTO products (product_name, product_description, product_quantity, product_price, product_quantity_sold, product_remaining_quantity, seller_id) VALUES (?,?,?,?,?,?,?)';
    const values = [product_name, product_description, product_quantity, product_price, product_quantity_sold, product_remaining_quantity, seller_id];
    db.query(sql, values, (err) => {
        if (err) return res.status(500).json(err);
        res.status(200).json({ message: "Product added successfully!" });
    });
});


//Insert On Image
app.post("/image", upload.single('image_url'), (req, res) => {
    const { product_id } = req.body;
    const fileName = req.file.filename;
    const sql = 'INSERT INTO images (product_id, image_url) VALUES (?,?)';
    const values = [product_id, fileName];
    db.query(sql, values, (err) => {
        if (err) return res.status(500).json(err);
        res.status(200).json({ message: "Image added successfully!" });
    });
});

//select an image
app.get("/images", (req,res)=>{
    const sql = "SELECT * FROM images";
    db.query(sql, (err, results) => {
        if (err) return res.status(500).json(err);
        res.status(200).json(results);
    });
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
//SELECT 
// app.get('/sellers', (req, res) => {
//     const sql = 'SELECT * FROM sellers';
//     db.query(sql, (err, results) => {
//         if (err) return res.status(500).json(err);
//         res.status(200).json(results);
//     })
// });
