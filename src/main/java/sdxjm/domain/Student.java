package sdxjm.domain;


import java.util.Date;

import sdxjm.domain.po.QueryParams;
import sdxjm.utils.RegexConstants;
import sdxjm.utils.StringUtil;

public class Student extends QueryParams{
	/** 学生Id */
	private int id;
	/** 学校 */
	private String school;
	/** 名字 */
	private String name;
	/** 性别 */
	private int sex;
	/** 学院 */
	private String college;
	/** 专业 */
	private String major;
	/** 入学年份 */
	private String grade;
	/** 班级 */
	private String classes;
	/** 职位 */
	private String position;
	/** 省 */
	private String province;
	/** 市 */
	private String city;
	/** 区 */
	private String area;
	/** 手机号码 */
	private String tel;
	/** 录入人Id */
	private int agentId;
	/** qq */
	private String qqNum;
	/** 添加时间 */
	private Date addTime;
	/** 备注信息 */
	private String remark;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getSchool() {
		return school;
	}
	public void setSchool(String school) {
		this.school = school;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getSex() {
		return sex;
	}
	public void setSex(int sex) {
		this.sex = sex;
	}
	public String getCollege() {
		return college;
	}
	public void setCollege(String college) {
		this.college = college;
	}
	public String getMajor() {
		return major;
	}
	public void setMajor(String major) {
		this.major = major;
	}
	public String getGrade() {
		return grade;
	}
	public void setGrade(String grade) {
		this.grade = grade;
	}
	public String getClasses() {
		return classes;
	}
	public void setClasses(String classes) {
		this.classes = classes;
	}
	public String getPosition() {
		return position;
	}
	public void setPosition(String position) {
		this.position = position;
	}
	public String getProvince() {
		return province;
	}
	public void setProvince(String province) {
		this.province = province;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getArea() {
		return area;
	}
	public void setArea(String area) {
		this.area = area;
	}
	public String getTel() {
		return tel;
	}
	public void setTel(String tel) {
		this.tel = tel;
	}
	public int getAgentId() {
		return agentId;
	}
	public void setAgentId(int agentId) {
		this.agentId = agentId;
	}
	public String getQqNum() {
		return qqNum;
	}
	public void setQqNum(String qqNum) {
		this.qqNum = qqNum;
	}
	public Date getAddTime() {
		return addTime;
	}
	public void setAddTime(Date addTime) {
		this.addTime = addTime;
	}
	public String getRemark() {
		return remark;
	}
	public void setRemark(String remark) {
		this.remark = remark;
	}
	
	public String verify(){
		//判断参数是否为空
		if(StringUtil.isEmpty(this.name)){
			return "error.student.nameError";
		}
		if(StringUtil.isEmpty(this.tel)){
			return "error.student.telError";
		}
		if(StringUtil.isEmpty1(this.qqNum)){
			return "error.student.qqNumError";
		}
		if(StringUtil.isEmpty1(this.province)){
			return "error.student.provinceError";
		}
		if(StringUtil.isEmpty1(this.city)){
			return "error.student.cityError";
		}
		if(StringUtil.isEmpty1(this.area)){
			return "error.student.areaError";
		}
		if(StringUtil.isEmpty1(this.school)){
			return "error.student.schoolError";
		}
		if(StringUtil.isEmpty1(this.college)){
			return "error.student.collegeError";
		}
		if(StringUtil.isEmpty1(this.major)){
			return "error.student.majorError";
		}
		if(StringUtil.isEmpty1(this.grade)){
			return "error.student.gradeError";
		}
		if(StringUtil.isEmpty1(this.classes)){
			return "error.student.classesError";
		}
		if(StringUtil.isEmpty1(this.position)){
			return "error.student.positionError";
		}
		//判断参数格式
		if(!this.tel.matches(RegexConstants.CELLPHONE_PATTEN)){
			return "error.student.telFormat";
		}
		if(!this.qqNum.matches(RegexConstants.QQ_PATTERN)){
			return "error.student.qqFormat";
		}
		
		return "success";
	}
	@Override
	public String toString() {
		return "Student [id=" + id + ", school=" + school + ", name=" + name
				+ ", sex=" + sex + ", college=" + college + ", major=" + major
				+ ", grade=" + grade + ", classes=" + classes + ", position="
				+ position + ", province=" + province + ", city=" + city
				+ ", area=" + area + ", tel=" + tel + ", agentId=" + agentId
				+ ", qqNum=" + qqNum + ", addTime=" + addTime + ", remark="
				+ remark + "]";
	}
	
	
}
