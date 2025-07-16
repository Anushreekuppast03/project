package in.pentagon.studentApp.model;

import java.util.ArrayList;
import java.util.Scanner;

import in.pentagon.studentApp.dto.Student;
import in.pentagon.studentApp.dao.StudentDAD;
import in.pentagon.studentApp.dao.StudentDADImp1;

public class Login {
    public static void login() {
        Scanner sc = new Scanner(System.in);
        StudentDAD sdao = new StudentDADImp1();
        System.out.println("Enter the mail ID:");
        String mail = sc.next();
        System.out.println("Enter the password:");
        String password = sc.next();
        
        Student s = sdao.getStudent(mail, password);
        if (s != null) {
            System.out.println("Login successful, Welcome " + s.getSname());
            
            int choice;
            do {
                System.out.println("\n----- Menu -----");
                System.out.println("1. View your account");
                System.out.println("2. Update the Account");
                System.out.println("3. Reset Password");
                System.out.println("4. Search user");
                System.out.println("5. Back to main menu");

                if (s.getId() == 1) {
                    System.out.println("6. View All users");
                    System.out.println("7. Delete User");
                }

                System.out.print("Enter your choice: ");
                choice = sc.nextInt();

                switch (choice) {
                    case 1:
                        System.out.println(s);
                        break;
                    case 2:
                        Update.update(s); // Make sure this class exists
                        break;
                    case 3:
                        Password.Forgot(); // Make sure this class exists
                        break;
                    case 4:
                        System.out.println("Enter the user name:");
                        ArrayList<Student> studentsList = sdao.getStudent(sc.next());
                        
                        
                        for (Student s2 : studentsList) {
                            System.out.println("==========================");
                            System.out.println("Id: " + s2.getId());
                            System.out.println("Name: " + s2.getSname());
                            System.out.println("Branch: " + s2.getBranch());
                            System.out.println("==========================");
                        }
                        break;
                    case 5:
                        System.out.println("Going back to main menu...");
                        break;
                    case 6:
                        if (s.getId() == 1) {
                            ArrayList<Student> students = sdao.getStudent();
                            for (Student s1 : students) {
                                System.out.println(s1);
                            }
                        } else {
                            System.out.println("Unauthorized access.");
                        }
                        break;
                    case 7:
                        if (s.getId() == 1) {
                            System.out.println("Enter the Student ID to be deleted:");
                            boolean res = sdao.deleteStudent(sc.nextInt());
                            if (res) {
                                System.out.println("Data deleted successfully");
                            } else {
                                System.out.println("Failed to delete the data");
                            }
                        } else {
                            System.out.println("Unauthorized access.");
                        }
                        break;
                    default:
                        System.out.println("Invalid choice!");
                        break;
                }

            } while (choice != 5);
        } else {
            System.out.println("Failed to login!");
        }
    }
}
