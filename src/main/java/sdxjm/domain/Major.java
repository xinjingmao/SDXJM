package sdxjm.domain;

import java.util.Date;

import sdxjm.domain.po.QueryParams;
import sdxjm.utils.StringUtil;

public class Major extends QueryParams {
	/** Id */
	private int id;
	/** 学院Id */
	private int collegeId;
	/** 名字 */
	private String name;
	/** 添加时间 */
	private Date addTime;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getCollegeId() {
		return collegeId;
	}

	public void setCollegeId(int collegeId) {
		this.collegeId = collegeId;
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
			return "error.school.mNameError";
		}
		return "success";
	}

}
