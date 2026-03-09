const express = require('express');
const app = express();
const path = require('path');

app.use('/files', express.static(path.join(__dirname, 'files')));

app.get('/live/version', (req, res) => {
  res.json({
    "status": "success",
    "notice": {
      "title": "ADMIN LÊ DUY CHÀO CON TRAI",
      "content": "Chào mừng con vào Sever của bố Lê Duy! Hack ít thôi kẻo bay acc nhé.",
      "show_type": 1
    },
    "mod_config": {
      "antenna": "active",
      "headshot": "99%",
      "blue_skin": "enabled"
    },
    "patch_url": "https://server-bo-le-duy.onrender.com"
  });
});

app.listen(process.env.PORT || 3000, () => console.log("Server Bố Duy Live!"));
