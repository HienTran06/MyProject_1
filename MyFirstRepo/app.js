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
						<th>MSSV</th>
                        <th>Họ và Tên</th>
                        <th>Ngày sinh</th>
						<th>Quê quán</td>
						<th>Email</th>
						<th>SĐT</td>				
                        
                    </tr>
                </thead>
                <tbody>
                    <tr>
						<td>M2524009</td>
                        <td>Lê Vũ Hoàng Lan</td>
                        <td>05/10/1995</td>
						<td>Hậu Giang</td>
						<td>lanm2524009@gstuden.ctu.edu.vn</td>
						<td>0944048051</td>                        
                    </tr>
                    <tr>
						<td>M2524007</td>
                        <td>Trần Thu Hiền</td>
                        <td>03/06/1996</td>
						<td>Sóc Trăng</td>
						<td>hienm2524007@gstuden.ctu.edu.vn</td>
						<td>0399297197</td>
                        
                    </tr>
                    <tr>
						<td>M2524017</td>
                        <td>Nguyễn Diệp Gia Bảo</td>
                        <td>17/07/2001</td>
						<td>Đồng Tháp</td>
						<td>baom2524017@gstuden.ctu.edu.vn</td>
						<td>0123456789</td>                        
                    </tr>
                    <tr>
						<td>M2524028</td>
                        <td>Nguyễn Văn Vũ</td>
                        <td>10/02/2001</td>
						<td>Đồng Tháp</td>
						<td>vum2524028@gstuden.ctu.edu.vn</td>
						<td>0123456789</td>                        
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
