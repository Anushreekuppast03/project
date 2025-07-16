<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>reset Password</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f4f8;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

        form {
            background-color: #ffffff;
            padding: 30px;
            border-radius: 12px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            width: 320px;
        }

        div {
            display: flex;
            flex-direction: column;
        }

        label {
            margin-top: 12px;
            margin-bottom: 5px;
            font-weight: bold;
        }

        input[type="text"],
        input[type="email"],
        input[type="password"] {
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 6px;
            margin-bottom: 10px;
            font-size: 14px;
        }

        input[type="submit"] {
            padding: 10px;
            margin-top: 10px;
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 6px;
            cursor: pointer;
            font-size: 14px;
        }

        input[type="submit"]:hover {
            background-color: #0056b3;
        }

        input[name="back"] {
            background-color: #6c757d;
        }

        input[name="back"]:hover {
            background-color: #495057;
        }
    </style>
</head>
<body>
    <form action="reset" method="post">
        <div>
            <label for="phone">Enter Phone Number:</label>
            <input type="text" name="phone" id="phone">

            <label for="email">Enter Mail ID:</label>
            <input type="email" name="email" id="email">

            <label for="pass">Password:</label>
            <input type="password" name="pass" id="pass">

            <label for="conf">Confirm Password:</label>
            <input type="password" name="conf" id="conf">

            <input type="submit" name="submit" value="Submit">
             <a href="login.jsp">back</a>
        </div>
    </form>
</body>
</html>
