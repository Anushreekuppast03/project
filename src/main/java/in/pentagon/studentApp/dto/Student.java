package in.pentagon.studentApp.dto;

//pojo class
public class Student {
	//instance variable
private  int id;
private String sname;
private long phone;
private  String mail;
private String branch;
private String loc;
private String password;
private String date;
//getters & setters
public int getId() {
	return id;
}
public void setId(int id) {
	this.id = id;
}
public String getSname() {
	return sname;
}
public void setSname(String sname) {
	this.sname = sname;
}
public long getPhone() {
	return phone;
}
public void setPhone(long phone) {
	this.phone = phone;
}
public String getMail() {
	return mail;
}
public void setMail(String mail) {
	this.mail = mail;
}
public String getBranch() {
	return branch;
}
public void setBranch(String branch) {
	this.branch = branch;
}
public String getLoc() {
	return loc;
}
public void setLoc(String loc) {
	this.loc = loc;
}
public String getPassword() {
	return password;
}
public void setPassword(String password) {
	this.password = password;
}
public String getDate() {
	return date;
}
public void setDate(String date) {
	this.date = date;
}

@Override
public String toString() {
 return "Student [id=" + id + ", name=" + sname + ", phone=" + phone + ", mail=" + mail +
", branch=" + branch
 + ", loc=" + loc + "]";
}
}


