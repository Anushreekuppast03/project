package in.pentagon.studentApp.Connection;

import java.sql.Connection;
import java.sql.DriverManager;

import java.sql.SQLException;

public class Connector {
public static Connection requestConnection() {
	Connection con=null;
	
	String url="jdbc:mysql://localhost:3306/clg";
	String user="root";
	String password="Anu@2003";
	try {
	    Class.forName("com.mysql.cj.jdbc.Driver");
	    con = DriverManager.getConnection(url, user, password);
	} 

	catch (ClassNotFoundException | SQLException e) {
	    e.printStackTrace();
	}

return con;
}}
