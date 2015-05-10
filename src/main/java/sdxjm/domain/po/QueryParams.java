package sdxjm.domain.po;

/**
 * 请求参数基类, 主要包装pageNo, start, len
 * @author tgf(Mar 26, 2011)
 *
 */
public class QueryParams {	
	private int pageNo;
	private int pageSize;
	private int start;
	private int len;
	/** 总记录数 */
	private int total;
	/** 执行请求的路径*/
	private String requestPath = "";
	
	public QueryParams(){}
	
	public QueryParams(int pageNo, int pageSize){
		this.pageNo = pageNo;
		this.pageSize = pageSize;
	}
	public void setStartLen(int start, int len){
		this.start = start;
		this.len = len;
	}	
	
	/**
	 * 开始页=(pageNo-1)*len
	 * @return
	 */
	public int getStart() {
		if(start <= 0){
			start = (getPageNo() - 1) * getPageSize();
		}
		return start;
	}
	
	/**
	 * 默认1
	 * @return
	 */
	public int getPageNo() {
		if(pageNo < 1){
			pageNo = 1;
		}
		return pageNo;
	}
	/**
	 * 默认10条
	 * @return
	 */
	public int getLen() {
		if(len <= 0){
			//get from page size
			len = getPageSize();
		}		
		return len;
	}
	
	/**
	 * 默认10条
	 * @return
	 */
	public int getPageSize() {
		if(pageSize <= 0){
			pageSize = 10;
		}
		return pageSize;
	}
	
	public void setPageNo(int pageNo) {
		this.pageNo = pageNo;
	}
	
	public void setStart(int start) {
		this.start = start;
	}
	
	public void setLen(int len) {
		this.len = len;
	}	
	public void setPageSize(int pageSize) {		
		this.pageSize = pageSize;
	}
	public String getRequestPath() {
		return requestPath;
	}
	public void setRequestPath(String requestPath) {
		this.requestPath = requestPath;
	}
	public int getTotal() {
		return total;
	}
	public void setTotal(int total) {
		this.total = total;
	}
}
