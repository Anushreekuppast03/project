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
import jakarta.servlet.http.HttpSession;

@WebServlet("/updateAccount")
public class Update extends HttpServlet{
	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		HttpSession session =req.getSession(false);
		
		Student s=(Student)session.getAttribute("student");
		StudentDAD sdao=new StudentDADImp1();
		 if(s!=null) {
			 s.setSname(req.getParameter("name"));
			 s.setPhone(Long.parseLong(req.getParameter("phone")));
			 s.setMail(req.getParameter("mail"));
			 s.setBranch(req.getParameter("branch"));
			 s.setLoc(req.getParameter("loc"));
			 boolean res=sdao.updateStudent(s);
			 if(res) {
			 req.setAttribute("success","Account updated successfully!");
			 RequestDispatcher rd=req.getRequestDispatcher("dashboard.jsp");
			 rd.forward(req, resp);
			 }
			 else {
			 req.setAttribute("error", "Failed to update!");
			 RequestDispatcher rd=req.getRequestDispatcher("updateAccount.jsp");
			 rd.forward(req, resp);
			 }
			 }
			 else {
			 req.setAttribute("error","Session expired!");
			 RequestDispatcher rd=req.getRequestDispatcher("login.jsp");
			 rd.forward(req, resp);
			 }}
		 }