package in.pentagon.studentApp.dao;

import java.util.ArrayList;

import in.pentagon.studentApp.dto.Student;

public interface StudentDAD {
public boolean insertStudent(Student s);
public boolean updateStudent(Student s);
public boolean deleteStudent(int id);
public Student getStudent(String mail,String password);
public Student getStudent(long phone,String mail);
public ArrayList<Student> getStudent();
public ArrayList<Student> getStudent(String Sname);
}

