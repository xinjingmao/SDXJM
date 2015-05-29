package sdxjm.domain.vo;

import java.util.List;

import sdxjm.domain.School;
import sdxjm.domain.Student;
import sdxjm.domain.po.QueryParams;

/**
 * 返回给页面的统计信息
 */

public class QuerySummary {
	int total;
	QueryParams params;
	List<Student> stuList;
	List<School> schList;

	public QuerySummary(int total, QueryParams params) {
		super();
		this.total = total;
		this.params = params;
	}

	public List<School> getSchList() {
		return schList;
	}

	public void setSchList(List<School> schList) {
		this.schList = schList;
	}

	public List<Student> getStuList() {
		return stuList;
	}

	public void setStuList(List<Student> stuList) {
		this.stuList = stuList;
	}

	public void setParams(QueryParams params) {
		this.params = params;
	}

	/**
	 * 返回导航信息条
	 * 
	 * @return
	 */
	public Navigator getNavigator() {
		return new Navigator(total, params.getPageSize(), params.getPageNo());
	}

	/**
	 * 返回导航条的json字符串
	 * 
	 * @return
	 */
	public String getNavigatorJsonString() {
		return getNavigator().getHtmlJson();
	}

	public int getTotal() {
		return total;
	}

	public void setTotal(int total) {
		this.total = total;
	}

	public QueryParams getParams() {
		return params;
	}

}
