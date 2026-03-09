const express = require('express');
const app = express();
const path = require('path');

app.use('/files', express.static(path.join(__dirname, 'files')));

app.get('/live/version', (req, res) => {
  res.json({
    "status": "success",
    "notice": {
      "title": "ADMIN LÊ DUY",
      "content": "Chào mừng con vào Sever của bố Duy!",
      "show_type": 1
    },
    "patch_url": "https://ff-server-admin-2.onrender.com"
  });
});

app.listen(process.env.PORT || 3000);
