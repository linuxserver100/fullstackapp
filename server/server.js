const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 5000; app.use(cors());
app.use(bodyParser.json());
// Connect to MongoDB
process.env.MONGO_URI="mongodb+srv://lalshay1712:AqeQW34FHRE@cluster2.tidgl1i.mongod"
mongoose.connect(process.env.MONGO_URI, {
useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));
// Define a User model
const UserSchema = new mongoose.Schema({ username: String, email: String, password: String});
const User = mongoose.model('User', UserSchema);
// Registration route
app.post('/register', async (req, res) => {
const { username, email, password } = req.body;
const newUser = new User({ username, email, password }); try {await newUser.save();
res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Registration failed' });
    }
});
// Serve the frontend build files
app.use(express.static(path.join(__dirname, 'client/build'))); 

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));});

app.listen(PORT, () => { console.log(`Server running on port ${PORT}`);});
