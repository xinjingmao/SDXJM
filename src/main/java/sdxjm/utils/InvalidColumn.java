package sdxjm.utils;

/**
 * after verify the column,
 * invalid result happen
 * @author tgf(Mar 6, 2010)
 *
 */
public class InvalidColumn {	
	/** column to verify*/
	private String column;
	
	/** column initial value*/
	private String value;
	
	/** error message*/
	private String errorMessage;
	
	public InvalidColumn(){
		;
	}
	
	public InvalidColumn(String column, String errorMessage){
		this.column = column;
		this.errorMessage = errorMessage;
	}
	public InvalidColumn(String column, String errorMessage, String value){
		this.column = column;
		this.errorMessage = errorMessage;
		this.value = value;
	}
	
	public String getColumn() {
		return column;
	}
	public void setColumn(String column) {
		this.column = column;
	}
	public String getValue() {
		return value;
	}
	public void setValue(String value) {
		this.value = value;
	}
	public String getErrorMessage() {
		return errorMessage;
	}
	public void setErrorMessage(String errorMessage) {
		this.errorMessage = errorMessage;
	}
	
	
}
