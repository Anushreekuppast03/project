package in.pentagon.studentApp.model;

import java.util.Scanner;

public class Index {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int choice = 0 ;

        System.out.println("Welcome to Student App");

        do {
            System.out.println("\n===== Menu =====");
            System.out.println("1. Sign Up");
            System.out.println("2. Login");
            System.out.println("3. Forgot Password");
            System.out.println("4. Exit");
            System.out.print("Enter your choice: ");
            choice = sc.nextInt();

            switch (choice) {
                case 1:
                    SignUp.signUp();
                    break;
                case 2:
                    Login.login(); 
                    break;
                case 3: 
                	Password.Forgot();
                break;
                case 4:
                    System.out.println("Application closed.THANK YOU");
                    break;
                default:
                    System.out.println("Invalid choice! Try again.");
                    break;
            }
        } while (choice != 4);

        sc.close();
    }
}
