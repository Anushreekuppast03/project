package in.pentagon.studentApp.model;
import java.util.Scanner;
import in.pentagon.studentApp.dao.StudentDAD;
import in.pentagon.studentApp.dao.StudentDADImp1;
import in.pentagon.studentApp.dto.Student;

	public class SignUp {
	    
	    public static void signUp() {
	        StudentDAD sdao = new StudentDADImp1(); // DAO reference
	        Scanner sc = new Scanner(System.in);
	        Student s = new Student(); // DTO/POJO object

	        System.out.println("Enter the name:");
	        s.setSname(sc.next());

	        System.out.println("Enter the phone number:");
	        s.setPhone(sc.nextLong());

	        System.out.println("Enter the mail ID:");
	        s.setMail(sc.next());

	        System.out.println("Enter the branch:");
	        s.setBranch(sc.next());

	        System.out.println("Enter the location:");
	        s.setLoc(sc.next());

	        System.out.println("Set the new password:");
	        String password = sc.next();

	        System.out.println("Confirm the password:");
	        String confirmPassword = sc.next();

	        if (password.equals(confirmPassword)) {
	            s.setPassword(confirmPassword);
	            boolean status = sdao.insertStudent(s);
	            if (status) {
	                System.out.println("Data added successfully!");
	            } else {
	                System.out.println("Failed to add the data.");
	            }
	        } else {
	            System.out.println("Password mismatch!");
	        }
	    }
	}

