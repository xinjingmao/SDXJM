package sdxjm.domain;

import java.util.Date;
import java.util.List;

import sdxjm.domain.po.QueryParams;
import sdxjm.utils.StringUtil;

public class School extends QueryParams {
	/** 学校Id */
	private int id;
	/** 名字 */
	private String name;
	/** 学院 */
	private List<College> colleges;
	/** 专业 */
	private List<Major> majors;
	/** 省 */
	private String province;
	/** 市 */
	private String city;
	/** 区 */
	private String area;
	/** 添加时间 */
	private Date addTime;
	/** 学校性质 */
	private int nature;
	/** 学校性质 */
	private int kind;
	/**  学校地址*/
	private String address;

	
	public School() {
		super();
	}

	public School(String name, String province, String city, String area,
			Date addTime) {
		super();
		this.name = name;
		this.province = province;
		this.city = city;
		this.area = area;
		this.addTime = addTime;
	}

	public School(String name, String province, String city, String area,
			Date addTime, int nature, int kind, String address) {
		super();
		this.name = name;
		this.province = province;
		this.city = city;
		this.area = area;
		this.addTime = addTime;
		this.nature = nature;
		this.kind = kind;
		this.address = address;
	}

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

	public String getProvince() {
		return province;
	}

	public void setProvince(String province) {
		this.province = province;
	}

	public List<College> getColleges() {
		return colleges;
	}

	public void setColleges(List<College> colleges) {
		this.colleges = colleges;
	}

	public List<Major> getMajors() {
		return majors;
	}

	public void setMajors(List<Major> majors) {
		this.majors = majors;
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

	public Date getAddTime() {
		return addTime;
	}

	public void setAddTime(Date addTime) {
		this.addTime = addTime;
	}

	
	public int getNature() {
		return nature;
	}

	public void setNature(int nature) {
		this.nature = nature;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public int getKind() {
		return kind;
	}

	public void setKind(int kind) {
		this.kind = kind;
	}

	public String verify() {
		// 判断参数是否为空
		if (StringUtil.isEmpty1(this.name)) {
			return "error.school.nameError";
		}
		if (StringUtil.isEmpty1(this.province)) {
			return "error.school.provinceError";
		}
		if (StringUtil.isEmpty1(this.city)) {
			return "error.school.cityError";
		}
		if (StringUtil.isEmpty1(this.area)) {
			return "error.school.areaError";
		}
		return "success";
	}

}
