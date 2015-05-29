package sdxjm.domain;

import java.util.Date;
import java.util.List;

import sdxjm.domain.po.QueryParams;
import sdxjm.utils.StringUtil;

public class College extends QueryParams {
	/** Id */
	private int id;
	/** 学校Id */
	private int schoolId;
	/** 名字 */
	private String name;
	/** 专业 */
	private List<Major> majors;
	/** 添加时间 */
	private Date addTime;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getSchoolId() {
		return schoolId;
	}

	public void setSchoolId(int schoolId) {
		this.schoolId = schoolId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public List<Major> getMajors() {
		return majors;
	}

	public void setMajors(List<Major> majors) {
		this.majors = majors;
	}

	public Date getAddTime() {
		return addTime;
	}

	public void setAddTime(Date addTime) {
		this.addTime = addTime;
	}

	public String verify() {
		// 判断参数是否为空
		if (StringUtil.isEmpty(this.name)) {
			return "error.school.cNameError";
		}
		return "success";
	}

}
