package in.pentagon.studentApp.Servlets;





import java.io.IOException;
import java.io.PrintWriter;

import in.pentagon.studentApp.dao.StudentDAD;
import in.pentagon.studentApp.dao.StudentDADImp1;
import in.pentagon.studentApp.dto.Student;

import jakarta.servlet.RequestDispatcher;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@WebServlet("/signup")

public class Signup extends HttpServlet {
	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws
	ServletException, IOException {
	 //Creation of POJO class object


		Student s = new Student();
		StudentDAD sdao=new StudentDADImp1();
		PrintWriter out=resp.getWriter();

		 //collecting the data from the UI
		 //String name=req.getParameter("name");
		 //s.setName(name);
		 s.setSname(req.getParameter("name"));

		 //String phone=req.getParameter("phone");
		 //long phone_no=Long.parseLong(phone);
		 //s.setPhone(phone_no);

		 s.setPhone(Long.parseLong(req.getParameter("phone")));
		 s.setMail(req.getParameter("mail"));
		 s.setBranch(req.getParameter("branch"));
		 s.setLoc(req.getParameter("loc"));
		 if(req.getParameter("password").equals(req.getParameter("confirm"))) {
		 s.setPassword(req.getParameter("password"));
		 boolean res=sdao.insertStudent(s);
		 if(res) {
		 //out.println("<h1>Data saved successfully</h1>");
		 req.setAttribute("success", "Account created successfully");//package
		 RequestDispatcher
		  rd=req.getRequestDispatcher("login.jsp");//destination
		 rd.forward(req, resp);//delivery guy
		 }
		 else {
		 req.setAttribute("error","Failed to create an account!");
		 RequestDispatcher rd=req.getRequestDispatcher("signup.jsp");
		 rd.forward(req, resp);
		 }
		 }
		 else {
		 req.setAttribute("error","Password mismatch!");
		 RequestDispatcher rd=req.getRequestDispatcher("signup.jsp");
		 rd.forward(req, resp);
		 }
		}
		}