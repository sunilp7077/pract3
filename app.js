const express = require('express'); 
const path = require('path'); 
const app = express(); 
// Serve static files from the public directory 
app.use(express.static(path.join(__dirname, 'public'))); 
// Route for home page 
app.get('/', (req, res) => { 
res.sendFile(path.join(__dirname, 'public', 'index.html')); 
}); 
// Set port 
const port = process.env.PORT || 3000; 
app.listen(port, () => { 
console.log(`Server is running on http://localhost:${port}`); 
}); 