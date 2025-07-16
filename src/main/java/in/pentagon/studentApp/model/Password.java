package in.pentagon.studentApp.model;

import java.util.Scanner;

import in.pentagon.studentApp.dao.StudentDAD;
import in.pentagon.studentApp.dao.StudentDADImp1;
import in.pentagon.studentApp.dto.Student;

public class Password {
	public static void Forgot() {
		
		 StudentDAD sdao=new StudentDADImp1();
		 Scanner sc=new Scanner(System.in);
		 System.out.println("ENTER THE PHONE NUMBER");
		 long phone=sc.nextLong();
		 System.out.println("enter the mail id");
		 String mail=sc.next();
		 Student s=sdao.getStudent(phone,mail);
		 
		 if(s!=null){
			 System.out.println("set a new password");
			 String Password=sc.next();
			 System.out.println("confirm the new password");
			 String confirm=sc.next();
			 if(Password.equals(confirm)) {
				 s.setPassword(Password);
				 boolean res =sdao.updateStudent(s);
				 if(res) {
					 System.out.println("password updated");
				 }
				 else {
					 System.out.println("failed to update the pASSWORD");
				 }
				 
			 }
			 else {
				 System.out.println("password mismatch");
			 }
			 
					 
		 }else {
			 System.out.println("student not found");
		 }
}}
