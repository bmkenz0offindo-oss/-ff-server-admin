const express = require('express');
const app = express();
const path = require('path');

// Cho phép truy cập file .lua trong thư mục files
app.use('/files', express.static(path.join(__dirname, 'files')));

app.get('/live/version', (req, res) => {
  res.json({
    "status": "success",
    "notice": {
      "title": "ADMIN LÊ DUY CHÀO CON TRAI",
      "content": "Chào mừng con vào Sever của bố Lê Duy! Chơi game vui vẻ nhé.",
      "show_type": 1
    },
    "mod_config": {
      "antenna": "active",
      "headshot": "99%",
      "gun_blue": "enabled"
    },
    // Sếp thay link-render-cua-sep bằng link thật sau khi tạo bên Render nhé
    "patch_url": "https://link-render-cua-sep.onrender.com"
  });
});

app.listen(process.env.PORT || 3000, () => console.log("Server Bố Lê Duy Live!"));
