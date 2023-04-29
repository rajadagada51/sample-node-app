const express = require('express');
const itemsRouter = require('./routes/items');

const app = express();

app.use(express.json());

app.use('/api/items', itemsRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

