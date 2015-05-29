package sdxjm.utils.web;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.ModelAndView;


/**
 * 项目基础controller extends SpringBaseController
 * @author tgf
 *
 */
public class BaseController {
	/** 项目相关的定制logger*/
	//protected final static YtLogger ytLogger = new YtLogger(BaseController.class);
	
	
	/**
	 * 默认逻辑错误返回的文件
	 * @param e
	 * @return
	 */
	@ExceptionHandler(Throwable.class)
	protected String handleException(Throwable e, 
			HttpServletRequest request, HttpServletResponse response){		
		response.setStatus(HttpServletResponse.SC_SERVICE_UNAVAILABLE);			
		//ytLogger.handlerRequestError(request, e);	
		return "error/50x";
	}
	
	/**
	 * 装载参数
	 * @param instance
	 * @param request
	 *//*
	protected void fillParams(Object instance, HttpServletRequest request) {
		HttpContext context = getHttpContextUtil(request, null);
		context.fillParameters(instance);
	}	*/
	
	/**
	 * 组合ServiceResult and spring view
	 * @param result
	 * @param viewName
	 * @return
	 */
	protected ModelAndView getResultModelAndView(ServiceResult result, String viewName){
		ModelAndView mv = new ModelAndView(viewName);
		mv.addObject("result", result);
		return mv;
	}
	
	
	protected ModelAndView managerModelAndView(HttpServletRequest request){
		ModelAndView mv = new ModelAndView();
		mv.addObject("tel", CookieHelper.getManager(request));
		return mv;
	}
	
	/**
	 * 从cookie中返回合法管理员(名字), 不存在则返回null
	 * @param request
	 * @return
	 */
	protected String getValidManager(HttpServletRequest request) {
		return CookieHelper.getManager(request);
	}
	
}
