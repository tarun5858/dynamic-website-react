import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import multer from "multer";
import csv from "csvtojson";
import Blog from "./models/Blog.js";
import fs from "fs";
import jwt from "jsonwebtoken";


const app = express();
app.use(cors());
app.use(express.json());

const JWT_SECRET = "mySuperSecretKey";

// MongoDB Connection
const uri = "mongodb+srv://prehome_website_user:1ywa7PfsUW3pPWvt@lead-tracking.jysawuj.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(uri, {
  dbName: "dynamic-website-blogs",
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB Connected"))
.catch(err => console.log(err));

// ------------------- APIs -------------------

// 1) Get all blogs
app.get("/api/blogs", async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// 2) Get single blog by ID
app.get("/api/blogs/:id", async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    res.json(blog);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// 3) Add a new blog (manual form)
app.post("/api/blogs", async (req, res) => {
  try {
    const blog = new Blog(req.body);
    await blog.save();
    res.status(201).json({ message: "Blog created", blog });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// 4) Upload CSV and insert blogs
const upload = multer({ dest: "uploads/" });

// Helper: safe JSON parse
function safeParse(str) {
  try {
    return str ? JSON.parse(str) : [];
  } catch {
    return [];
  }
}

// Upload API
app.post("/api/blogs/upload-csv", upload.single("file"), async (req, res) => {
  try {
    const filePath = req.file.path;

    let jsonArray = await csv().fromFile(filePath);

    const formattedBlogs = jsonArray.map((row) => ({
      id: Number(row.id),
      title: row.title,
      description: row.description,
      date: row.date,
      likes: Number(row.likes) || 0,
      readTime: Number(row.readTime) || 0,
      imageKey: row.imageKey,
      tags: row.tags ? row.tags.split("|") : [],
      blogTags: row.blogTags ? row.blogTags.split("|") : [],
      points: row.points ? row.points.split("|") : [],
      heading: row.heading,
      subheading: row.subheading,
      introduction: row.introduction,
      detailImageKey: row.detailImageKey,
      subtitle: row.subtitle,
      subttileHead: safeParse(row.subttileHead),
      subtitle2: row.subtitle2,
      subttileHead2: safeParse(row.subttileHead2),
      imagePositions: safeParse(row.imagePositions),
      subtitle3: row.subtitle3,
      subttileHead3: safeParse(row.subttileHead3),
      subtitle4: row.subtitle4,
      subttileHead4: safeParse(row.subttileHead4),
      subtitle5: row.subtitle5,
      subttileHead5: safeParse(row.subttileHead5),
      conclusion1: row.conclusion1,
      conclusion2: row.conclusion2,
      nextSeries: row.nextSeries
    }));

    await Blog.insertMany(formattedBlogs);

    fs.unlinkSync(filePath); // cleanup
    res.json({ message: "CSV uploaded and blogs inserted!" });
  } catch (err) {
    console.error("Upload error:", err);
    res.status(500).json({ error: err.message });
  }
});




// Login API (dummy example)
app.post("/api/login", (req, res) => {
  const { username, password } = req.body;

  // Dummy check (database ke sath replace karna hai)
  if (username === "admin" && password === "admin123") {
    const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: "1h" });
    return res.json({ token });
  }

  res.status(401).json({ error: "Invalid credentials" });
});

// Middleware to protect routes
function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return res.sendStatus(401);

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

// Example protected API
app.get("/api/secure-blogs", authenticateToken, (req, res) => {
  res.json({ message: "This is protected data", user: req.user });
});




// --------------------------------------------

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
















// import express from "express";
// import cors from "cors";
// import mongoose from "mongoose";
// import Blog from "./models/Blog.js";

// const app = express();
// app.use(cors());
// app.use(express.json());

// // Connect to MongoDB
// // mongoose.connect("mongodb://127.0.0.1:27017/blogDB", {
// mongoose.connect("mongodb+srv://prehome_website_user:1ywa7PfsUW3pPWvt@lead-tracking.jysawuj.mongodb.net/dynamic-website-blogs", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
// .then(() => console.log("MongoDB Connected"))
// .catch(err => console.log(err));


// const uri = "mongodb+srv://prehome_website_user:1ywa7PfsUW3pPWvt@lead-tracking.jysawuj.mongodb.net/?retryWrites=true&w=majority";


// mongoose.connect(uri, {
//   dbName: "dynamic-website-blogs",  
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }).then(() => console.log("MongoDB Connected"))
// .catch(err => console.log(err));

// // Get all blogs
// app.get("/api/blogs", async (req, res) => {
//   try {
//     const blogs = await Blog.find();
//     res.json(blogs);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// // Get single blog by ID
// app.get("/api/blogs/:id", async (req, res) => {
//   try {
//     const blog = await Blog.findById(req.params.id);
//     if (!blog) {
//       return res.status(404).json({ message: "Blog not found" });
//     }
//     res.json(blog);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// app.listen(5000, () => {
//   console.log("Server running on port 5000");
// });
