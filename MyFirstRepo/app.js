const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(`
    <!DOCTYPE html>
    <html lang="vi">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Thông Tin Thành Viên</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                background-color: #f4f4f4;
                text-align: center;
                margin: 0;
                padding: 0;
            }
            .container {
                width: 80%;
                margin: 50px auto;
                background: white;
                padding: 20px;
                border-radius: 10px;
                box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
            }
            h2 {
                color: #333;
            }
            table {
                width: 100%;
                border-collapse: collapse;
                margin-top: 20px;
            }
            th, td {
                padding: 10px;
                border: 1px solid #ddd;
                text-align: left;
            }
            th {
                background-color: #007BFF;
                color: white;
            }
            tr:nth-child(even) {
                background-color: #f9f9f9;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h2>Danh Sách Thành Viên</h2>
            <table>
                <thead>
                    <tr>
                        <th>Họ và Tên</th>
                        <th>Vai Trò</th>
						<th>Quê quán</td>
						<th>SĐT</td>						
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Lê Vũ Hoàng Lan</td>
                        <td>Thành viên 1</td>
						<td>Hậu Giang</td>
						<td>0944048051</td>
                        <td>email@example.com</td>
                    </tr>
                    <tr>
                        <td>Trần Thu Hiền</td>
                        <td>Thành viên 2</td>
						<td>Sóc Trăng</td>
						<td>0399297197</td>
                        <td>email@example.com</td>
                    </tr>
                    <tr>
                        <td>Nguyễn Diệp Gia Bảo</td>
                        <td>Thành viên 3</td>
						<td>Đồng Tháp</td>
						<td>0123456789</td>
                        <td>email@example.com</td>
                    </tr>
                    <tr>
                        <td>Nguyễn Văn Vũ</td>
                        <td>Thành viên 4</td>
						<td>Đồng Tháp</td>
						<td>0123456789</td>
                        <td>email@example.com</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </body>
    </html>
    `);
});

server.listen(port, () => {
    console.log(`Server running at port ` + port);
});
