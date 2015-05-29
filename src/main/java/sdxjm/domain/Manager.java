package sdxjm.domain;

import java.util.Date;

import sdxjm.utils.RegexConstants;
import sdxjm.utils.StringUtil;

/**
 * 管理员信息
 * 
 */
public class Manager {
	/** 管理员ID */
	private int id;
	/** 手机号码即管理员账号 */
	private String tel;
	/** 管理员密码 */
	private String password;
	/** 添加时间 */
	private Date addTime;
	/** 随机数信息 */
	private int extra;
	/** 管理员新密码 */
	private String newPassword = "";
	/** 确认新密码 */
	private String confirmPassword;

	// /////////////////////////////////

	public Manager() {
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getTel() {
		return tel;
	}

	public void setTel(String tel) {
		this.tel = tel;
	}

	public int getExtra() {
		return extra;
	}

	public void setExtra(int extra) {
		this.extra = extra;
	}

	/**
	 * 返回加密后的密码
	 * 
	 * @return
	 */
	public String getPassword() {
		return password;
	}

	/**
	 * 返回加密后的密码
	 * 
	 * @return
	 */
	public String getNewPassword() {
		return newPassword;
	}

	/**
	 * 新密码不能小于6位
	 * 
	 * @return
	 */
	public boolean isValidNewPassword() {
		return StringUtil.isNotEmpty(newPassword) && newPassword.length() >= 6;
	}

	/**
	 * 两次密码是否一致
	 * 
	 * @return
	 */
	public boolean isConfirmNewPassword() {
		return newPassword.equals(confirmPassword);
	}

	public String verify() {
		// 管理员tel不能为空
		if (StringUtil.isEmpty(tel)) {
			return "error.manager.telError";
		}

		// 判断参数格式
		if (!this.tel.matches(RegexConstants.CELLPHONE_PATTEN)) {
			return "error.manager.telFormat";
		}
		return "success";
	}

	public String changePsdVerify() {
		// 管理员密码不能为空
		if (StringUtil.isEmpty(password)) {
			return "error.manager.pwdError";
		}
		// 管理员密码不能为空
		if (StringUtil.isEmpty(confirmPassword)) {
			return "error.manager.cpwdError";
		}
		// 判断参数格式
		if(password.trim().length() < 6){
			return "error.manager.passwordInvalid";
		}
		
		if(!password.equals(confirmPassword)){
			return "error.manager.confirmPasswordWrong";
		}
		return "success";
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Date getAddTime() {
		return addTime;
	}

	public void setAddTime(Date addTime) {
		this.addTime = addTime;
	}

	public void setNewPassword(String newPassword) {
		this.newPassword = newPassword;
	}

	public String getConfirmPassword() {
		return confirmPassword;
	}

	public void setConfirmPassword(String confirmPassword) {
		this.confirmPassword = confirmPassword;
	}

}
