const express = require('express');
const axios = require('axios'); // Thư viện để đi lấy data từ Garena
const app = express();

app.get('/live/version', async (req, res) => {
    try {
        // 1. Đi lấy dữ liệu gốc từ Garena (Trung gian)
        const garenaResponse = await axios.get('https://account.d.garena.com');
        let data = garenaResponse.data;

        // 2. "Bơm" thông báo của Bố Lê Duy vào dữ liệu gốc
        data.notice = {
            "title": "ADMIN LÊ DUY",
            "content": "Chào mừng con vào Sever của bố Duy! Chơi game vui vẻ.",
            "show_type": 1
        };

        // 3. "Bơm" file Mod Tay dài & Nhẹ tâm
        data.patch_url = "https://ff-server-admin-2.onrender.com";
        data.server_url = "https://ff-server-admin-2.onrender.com";

        // 4. Trả về cho iPhone
        res.json(data);
    } catch (e) {
        res.json({"status": "error", "message": "Server Bố Duy đang bận"});
    }
});

app.listen(process.env.PORT || 3000);
