package sdxjm.utils.web;

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.net.URLEncoder;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import sdxjm.utils.StringUtil;

public class CookieHelper {
	
	
	/** Admin User cookie key*/
	private final static String ADMIN_USER = "_au_";
	
	private final static int DEFAULT_COOKIE_EXPIRES = 86400;
	
	public static final String UTF8 = "UTF-8";
    public static final String GBK = "GBK";
	
	//自动登录保存的cookie
	public static void setManager(String tel,HttpServletResponse resp){
		Cookie info;
		try {
			info = new Cookie(ADMIN_USER, URLEncoder.encode(tel, UTF8));
			info.setMaxAge(DEFAULT_COOKIE_EXPIRES);
			info.setPath("/");
			resp.addCookie(info);
		} catch (Exception e) {
			info = new Cookie(ADMIN_USER, null);
		}
		
	}

	public static String getManager(HttpServletRequest request) {
		Cookie cookie = getCookie(request, ADMIN_USER);
		//System.out.println(cookie.getValue()+"**********"+request.getRequestURI());
		try {
			return cookie == null ? null : URLDecoder.decode(cookie.getValue(), UTF8);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			return null;
		}
	}
	
	public static void delManager(HttpServletResponse resp) {
		Cookie cookie = new Cookie(ADMIN_USER, null);
		cookie.setMaxAge(0);
		cookie.setPath("/");
		resp.addCookie(cookie);
	}
	
	public static Cookie getCookie(HttpServletRequest request, String key) {
        if(StringUtil.isTrimEmpty(key)){
            return null;
        }

        Cookie[] cookies = request.getCookies();
        if(cookies != null && cookies.length > 0){
            for(Cookie cookie : cookies){
                if(key.equals(cookie.getName())){
                    return cookie;
                }
            }
        }

        return null;
    }

	
	/*// 自动登录保存EXAMPLE_FLAG的cookie 
	public static void setExampleFlag(HttpServletResponse response, String flag) {
		CookieInfo info = new CookieInfo(EXAMPLE_FLAG, flag,
				YtConfigurations.customerCookieExpires());
		info.setCookieDomain(DOMAIN_NAME);

		// 设置需要验证的cookie
		AuthUtil.setAuthCookie(response, info);
	}

	// 非自动登录保存的cookie
	public static void setUserEmailByDefault(HttpServletResponse response,
			String email) {
		CookieInfo info = new CookieInfo(USER_EMAIL, email,
				YtConfigurations.customerDefaultCookieExpires());
		info.setCookieDomain(DOMAIN_NAME);

		// 设置需要验证的cookie
		AuthUtil.setAuthCookie(response, info);
	}

	// 非自动登录保存EXAMPLE_FLAG的cookie
	public static void setExampleFlagByDefault(HttpServletResponse response,
			String flag) {
		CookieInfo info = new CookieInfo(EXAMPLE_FLAG, flag,
				YtConfigurations.customerDefaultCookieExpires());
		info.setCookieDomain(DOMAIN_NAME);

		// 设置需要验证的cookie
		AuthUtil.setAuthCookie(response, info);
	}
	
	//获取账户cookie
	public static String getCustomer(HttpServletRequest request){
		String email = AuthUtil.getAuthCookie(request, USER_EMAIL);
		return email;
	}

	// 获取EXAMPLE_FLAG的cookie
	public static String getExampleFlag(HttpServletRequest request) {
		String email = AuthUtil.getAuthCookie(request, EXAMPLE_FLAG);
		return email;
	}

	// 清除EXAMPLE_FLAG的cookie
	public static void deleteExampleFlag(HttpServletResponse response) {
		CookieInfo info = new CookieInfo(EXAMPLE_FLAG, null);
		info.setCookieDomain(DOMAIN_NAME);
		AuthUtil.deleteAuthCookie(response, info);
	}
	//清除账户cookie
	public static void deleteCustomer(HttpServletResponse response){
		CookieInfo info = new CookieInfo(USER_EMAIL, null);
		info.setCookieDomain(DOMAIN_NAME);
		AuthUtil.deleteAuthCookie(response, info);
	}
	//保存appId
	public static void setAppId(HttpServletResponse response, String appId){
		CookieInfo info = new CookieInfo("appIdcookie", appId);
		info.setCookieDomain(DOMAIN_NAME);
		
		//设置需要验证的cookie
		AuthUtil.setAuthCookie(response, info);
	}
	
	// 保存activityId
	public static void setActivityId(HttpServletResponse response,
			String activityId) {
		CookieInfo info = new CookieInfo("activityIdcookie", activityId);
		info.setCookieDomain(DOMAIN_NAME);

		// 设置需要验证的cookie
		AuthUtil.setAuthCookie(response, info);
	}

	// 保存managerId
	public static void setManagerId(HttpServletResponse response,
			String managerId) {
		CookieInfo info = new CookieInfo(ADMIN_USER, managerId);
		info.setCookieDomain(DOMAIN_NAME);

		// 设置需要验证的cookie
		AuthUtil.setAuthCookie(response, info);
	}
	
	//获取管理员cookie
		public static String getManager(HttpServletRequest request){
			String manager = AuthUtil.getAuthCookie(request, ADMIN_USER);
			return manager;
		}
	
	 // 清除管理员cookie
	 
	public static void deleteAdminCookies(HttpServletResponse response) {
		CookieInfo info = new CookieInfo(ADMIN_USER, null);
		info.setCookieDomain(DOMAIN_NAME);
		AuthUtil.deleteAuthCookie(response, info);
	}
	
	//设置来源途径cookie
	public static void setChannel(HttpServletResponse response,
			String channel) {
		CookieInfo info = new CookieInfo(SOURCE_CHANNEL, channel);
		info.setCookieDomain(DOMAIN_NAME);

		// 设置需要验证的cookie
		AuthUtil.setAuthCookie(response, info);
	}
	
	//获取来源途径cookie
	public static String getChannel(HttpServletRequest request){
		String channel = AuthUtil.getAuthCookie(request, SOURCE_CHANNEL);
		return channel;
	}
	//删除来源途径cookie
	public static void deleteChannel(HttpServletResponse response) {
		CookieInfo info = new CookieInfo(SOURCE_CHANNEL, null);
		info.setCookieDomain(DOMAIN_NAME);
		AuthUtil.deleteAuthCookie(response, info);
	}*/
}
