import express from 'express';
import cors from 'cors';
import mysql from 'mysql';
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';
import { nextTick } from 'process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const db = mysql.createConnection({
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
    } else {
        console.log('Connected to database');
    }
});

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
    try {
        const { seller_fname, seller_lname, password, email, phonenumber, address } = req.body;
        const fileName = req.file.filename;
        const sql = 'INSERT INTO sellers (seller_fname, seller_lname,password,email,phonenumber,address,seller_image) VALUES (?,?,?,?,?,?,?)';
        const values = [seller_fname, seller_lname, password, email, phonenumber, address, fileName];
        db.query(sql, values, (err) => {
            if (err) return res.status(500).json(err);
            res.status(200).json({ message: "Seller registered and image saved to folder!" });
        });
    } catch (err) {
        res.status(500).send("Make sure you selected a file in Postman!");
    }
});

// LOGIN ROUTE
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    const sql = 'SELECT * FROM sellers WHERE email = ? AND password = ?';
    db.query(sql, [email, password], (err, results) => {
        if (err) return res.status(500).json({ message: "Database error" });

        if (results.length > 0) {
            res.status(200).json({
                message: "Login successful",
                user: results[0]
            });
        } else {
            res.status(401).json({ message: "Invalid email or password" });
        }
    });
});

//SELECT Middleware From seller
app.get('/seller/:seller_id',(req,res)=>{
    const seller = req.params.seller_id
    const sql = "SELECT FROM sellers WHERE seller_id = ? "
    db.query(sql, [seller], (err,results)=>{
        if(err){
            throw err
        }
        if(results.length === 0)
            return res.status(404).json({message : "Seller Not Fund"})
        req.seller = results[0]
        next()
    })
})

// Insert Product
app.post('/addproduct', (req, res) => {
    const { product_name, product_description, product_quantity, product_price, product_quantity_sold, product_remaining_quantity, seller_id } = req.body;
    const sql = 'INSERT INTO products (product_name, product_description, product_quantity, product_price, product_quantity_sold, product_remaining_quantity, seller_id) VALUES (?,?,?,?,?,?,?)';
    const values = [product_name, product_description, product_quantity, product_price, product_quantity_sold, product_remaining_quantity, seller_id];
    db.query(sql, values, (err) => {
        if (err) return res.status(500).json(err);
        res.status(200).json({ message: "Product added successfully!" });
    });
});

// GET PRODUCTS WITH IMAGES - Join products and images tables
app.get('/products-with-images', (_req, res) => {
    const sql = `
        SELECT 
            p.product_id,
            p.product_name,
            p.product_description,
            p.product_price,
            p.product_quantity,
            p.product_quantity_sold,
            p.product_remaining_quantity,
            p.seller_id,
            i.image_id,
            i.image_url
        FROM products p
        LEFT JOIN images i ON p.product_id = i.product_id
        ORDER BY p.product_id
    `;
    
    db.query(sql, (err, results) => {
        if (err) return res.status(500).json(err);
        res.status(200).json(results);
    });
});

// Add image to images table
app.post('/addimage', upload.single('image_url'), (req, res) => {
    try {
        const { product_id } = req.body;
        const fileName = req.file.filename;
        
        const sql = 'INSERT INTO images (product_id, image_url) VALUES (?,?)';
        const values = [product_id, fileName];
        
        db.query(sql, values, (err) => {
            if (err) return res.status(500).json(err);
            res.status(200).json({ message: "Image added successfully!" });
        });
    } catch (err) {
        res.status(500).json({ error: "Make sure you selected a file!" });
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


