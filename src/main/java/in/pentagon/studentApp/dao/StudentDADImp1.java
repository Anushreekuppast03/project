package in.pentagon.studentApp.dao;

import in.pentagon.studentApp.dto.Student;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import in.pentagon.studentApp.Connection.Connector;
import in.pentagon.studentApp.dto.Student;



public class StudentDADImp1 implements StudentDAD {

	private Connection con;
	public StudentDADImp1() {
	 this.con=Connector.requestConnection();
	}
	@Override
	public boolean insertStudent(Student s) {
	 PreparedStatement ps=null;
	 String query="INSERT INTO STUDENT1 VALUES (0,?,?,?,?,?,?,sysdate())";
	 int res=0;
	 try {
	 ps=con.prepareStatement(query);
	 ps.setString(1,s.getSname());
	 ps.setLong(2, s.getPhone());
	 ps.setString(3, s.getMail());
	 ps.setString(4, s.getBranch());
	 ps.setString(5,  s.getLoc());
	 ps.setString(6, s.getPassword());
	 res=ps.executeUpdate();
	 } catch (SQLException e) {
	 // TODO Auto-generated catch block
	 e.printStackTrace();
	 }
	 if(res>0) {
	 return true;
	 }
	 else {
	 return false;
	 }
	}
	@Override
	public boolean updateStudent(Student s) {
	 PreparedStatement ps=null;
	 String query = "UPDATE STUDENT1 SET Sname=?, PHONE=?, MAIL=?, BRANCH=?, LOC=?, PASSWORD=?, DATE=SYSDATE() WHERE ID=?";

	 int res=0;
	 try {
	 ps=con.prepareStatement(query);
	 ps.setString(1, s.getSname());
	 ps.setLong(2,s.getPhone());
	 ps.setString(3, s.getMail());
	 ps.setString(4, s.getBranch());
	 ps.setString(5, s.getLoc());
	 ps.setString(6, s.getPassword());
	 ps.setInt(7, s.getId());
	 res=ps.executeUpdate();
	 } catch (SQLException e) {
	 // TODO Auto-generated catch block
	 e.printStackTrace();
	 }
	 if(res>0) {
	 return true;
	 }
	 else {
	 return false;
	 }
	}
	@Override
	public boolean deleteStudent(int id) {
	 PreparedStatement ps=null;
	 String query="DELETE FROM STUDENT1 WHERE ID=? AND ID!=1";
	 int res=0;
	 try {
	 ps=con.prepareStatement(query);
	 ps.setInt(1,id);
	 res=ps.executeUpdate();
	 } catch (SQLException e) {
	 // TODO Auto-generated catch block
	 e.printStackTrace();
	 }
	 if(res>0) {
		 return true;
	 }else {
	 return false;
	 }
	}
	@Override
	public Student getStudent(String mail, String password) {
	 PreparedStatement ps=null;
	 String query="SELECT * FROM STUDENT1 WHERE MAIL=? AND PASSWORD=?";
	 Student s=null;
	 try {
	 ps=con.prepareStatement(query);
	 ps.setString(1,mail);
	 ps.setString(2, password);
	 ResultSet rs=ps.executeQuery();
	 while(rs.next()) {
	 s=new Student();
	 //int id=rs.getInt("id");
	 //s.setId(id);
	 s.setId(rs.getInt("id"));
	 s.setSname(rs.getString("Sname"));
	 s.setPhone(rs.getLong("phone"));
	 s.setMail(rs.getString("mail"));
	 s.setBranch(rs.getString("branch"));
	 s.setLoc(rs.getString("location"));
	 s.setPassword(rs.getString("password"));
	 s.setDate(rs.getString("date"));
	 }

	 } catch (SQLException e) {
	 // TODO Auto-generated catch block
	 e.printStackTrace();
	 }
	 return s;
	}

	
	//@Override
	public Student getStudent(long phone, String mail) {
	 PreparedStatement ps=null;
	 String query="SELECT * FROM STUDENT1 WHERE PHONE=? AND MAIL=?";
	 Student s=null;
	 try {
	 ps=con.prepareStatement(query);
	 ps.setLong(1,phone);
	 ps.setString(2, mail);
	 ResultSet rs=ps.executeQuery();
	 while(rs.next()) {
	 s=new Student();
	 //int id=rs.getInt("id");
	 //s.setId(id);
	 s.setId(rs.getInt("id"));
	 s.setSname(rs.getString("Sname"));
	 s.setPhone(rs.getLong("phone"));
	 s.setMail(rs.getString("mail"));
	 s.setBranch(rs.getString("branch"));
	 s.setLoc(rs.getString("loc"));
	 s.setPassword(rs.getString("password"));
	 s.setDate(rs.getString("date"));
	 }

	 } catch (SQLException e) {
	 // TODO Auto-generated catch block
	 e.printStackTrace();
	 }
	 return s;
	}
	@Override
	public ArrayList<Student> getStudent() {
		// TODO Auto-generated method stub
		PreparedStatement ps=null;
		 ArrayList<Student> studentsList=new ArrayList<Student>();
		 Student s=null;
		 String query="SELECT * FROM STUDENT WHERE ID!=1";
		 try {
			 ps=con.prepareStatement(query);
			 ResultSet rs=ps.executeQuery();
			 while(rs.next()) {
			 s=new Student();
			 s.setId(rs.getInt("id"));
			 s.setSname(rs.getString("name"));
			 s.setPhone(rs.getLong("phone"));
			 s.setMail(rs.getString("mail"));
			 s.setBranch(rs.getString("branch"));
			 s.setLoc(rs.getString("location"));
			 s.setPassword(rs.getString("password"));
			 s.setDate(rs.getString("date"));
			 studentsList.add(s);
			 }

			 } catch (SQLException e) {
			 // TODO Auto-generated catch block
			 e.printStackTrace();
			 }
			 return studentsList;
			}
	@Override
	
	
		public ArrayList<Student> getStudent(String Sname){
	    ArrayList<Student> students = new ArrayList<>();
	    PreparedStatement ps = null;
	    String query = "SELECT * FROM STUDENT1 WHERE Sname = ?"; // Make sure this column name matches the DB
	    
	    try {
	        ps = con.prepareStatement(query);
	        ps.setString(1, Sname);
	        ResultSet rs = ps.executeQuery();
	        
	        while (rs.next()) {
	            Student s = new Student(); // ✅ Create new object for each row
	            s.setId(rs.getInt("id"));
	            s.setSname(rs.getString("Sname")); // ✅ Confirm DB column is "name"
	            s.setPhone(rs.getLong("phone"));
	            s.setMail(rs.getString("mail"));
	            s.setBranch(rs.getString("branch"));
	            s.setLoc(rs.getString("location")); // ✅ Confirm column is "location"
	            s.setPassword(rs.getString("password"));
	            s.setDate(rs.getString("date"));
	            
	            students.add(s); // ✅ Add to list
	        }
	    } catch (SQLException e) {
	        e.printStackTrace();
	    }
	    
	    return students;
	}


	
}