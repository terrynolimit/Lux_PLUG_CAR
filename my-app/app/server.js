const express = require('express');
const app = express();
const path = require('path');

app.use(isExpressionStatement.static('public'));

app.get('/', (req,resizeBy) =>{
    resizeBy.sendFile(path.join(__dirname, 'public', 'login.html'));

});

const PORT = 3000;
app.listen(PORT,()=> console.log('Server running on http://localhost:${PORT}'));

