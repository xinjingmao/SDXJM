package sdxjm.domain.vo;


/**
 * 导航条参数
 * @author tgf(May 12, 2011)
 *
 */
public class Navigator {	
	/** 总记录数*/
	private int acount;
	/** 每页长度*/
	private int len;
	/** 当前页*/
	private int page;
	/** 链接url*/
	private String url = "";
	
	public Navigator(){}
	public Navigator(int acount, int len, int page){
		this.acount = acount;
		this.len = len;
		this.page = page;
	}
	
	/**
	 * 生成html
	 * @return
	 */
	public String getHtmlJson(){
		StringBuilder sb = new StringBuilder();
		sb.append("{\"acount\":\"").append(acount)
			.append("\",\"len\":\"").append(len)
			.append("\",\"page\":\"").append(page)
			.append("\",\"url\":\"").append(url).append("\"}");
		return sb.toString();
	}
	
	public int getAcount() {
		return acount;
	}
	public void setAcount(int acount) {
		this.acount = acount;
	}
	public int getLen() {
		return len;
	}
	public void setLen(int len) {
		this.len = len;
	}
	public int getPage() {
		return page;
	}
	public void setPage(int page) {
		this.page = page;
	}
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}	
}
