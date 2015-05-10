package sdxjm.utils.web;

import java.util.ArrayList;
import java.util.List;

/**
 * verify result,indicate what's wrong
 * @author tgf(Mar 6, 2010)
 *
 */
public class VerifyResult {
	/** where invalid happen, default is true*/
	private boolean isValid = true;
	
	/** invalid result list, default is empty*/
	private List<InvalidColumn> invalidColumns = new ArrayList<InvalidColumn>();	
	
	/**
	 * when verify invalid happen, add invalidResult to the invalidResultList
	 * @param invalidColumn
	 */
	public void addInvalidColumn(InvalidColumn invalidColumn){
		invalidColumns.add(invalidColumn);
		setValid(false);
	}
	
	/**
	 * 增加不合法信息
	 * @param column 字段
	 * @param errorMessage 错误信息
	 */
	public void addInvalidColumn(String column, String errorMessage){
		addInvalidColumn(new InvalidColumn(column, errorMessage));
	}
	
	public boolean isValid() {
		return isValid;
	}
	public void setValid(boolean isValid) {
		this.isValid = isValid;
	}

	public List<InvalidColumn> getInvalidColumns() {
		return invalidColumns;
	}

	public void setInvalidColumns(List<InvalidColumn> invalidColumns) {
		this.invalidColumns = invalidColumns;
	}	
}
