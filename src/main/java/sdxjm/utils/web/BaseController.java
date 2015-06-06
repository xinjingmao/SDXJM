package sdxjm.utils.web;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileInputStream;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.ModelAndView;

/**
 * 项目基础controller extends SpringBaseController
 * 
 * @author tgf
 * 
 */
public class BaseController {
	/** 项目相关的定制logger */
	// protected final static YtLogger ytLogger = new
	// YtLogger(BaseController.class);

	/**
	 * 默认逻辑错误返回的文件
	 * 
	 * @param e
	 * @return
	 */
	@ExceptionHandler(Throwable.class)
	protected String handleException(Throwable e, HttpServletRequest request,
			HttpServletResponse response) {
		response.setStatus(HttpServletResponse.SC_SERVICE_UNAVAILABLE);
		// ytLogger.handlerRequestError(request, e);
		return "error/50x";
	}

	/**
	 * 装载参数
	 * 
	 * @param instance
	 * @param request
	 */
	/*
	 * protected void fillParams(Object instance, HttpServletRequest request) {
	 * HttpContext context = getHttpContextUtil(request, null);
	 * context.fillParameters(instance); }
	 */

	/**
	 * 组合ServiceResult and spring view
	 * 
	 * @param result
	 * @param viewName
	 * @return
	 */
	protected ModelAndView getResultModelAndView(ServiceResult result,
			String viewName) {
		ModelAndView mv = new ModelAndView(viewName);
		mv.addObject("result", result);
		return mv;
	}

	protected ModelAndView managerModelAndView(HttpServletRequest request) {
		ModelAndView mv = new ModelAndView();
		mv.addObject("tel", CookieHelper.getManager(request));
		return mv;
	}

	/**
	 * 从cookie中返回合法管理员(名字), 不存在则返回null
	 * 
	 * @param request
	 * @return
	 */
	protected String getValidManager(HttpServletRequest request) {
		return CookieHelper.getManager(request);
	}

	// 文件下载 主要方法
	public static void download(HttpServletRequest request,
			HttpServletResponse response, String storeName)
			throws Exception {

		request.setCharacterEncoding("UTF-8");
		BufferedInputStream bis = null;
		BufferedOutputStream bos = null;

		// 获取项目根目录
		String ctxPath = request.getSession().getServletContext()
				.getRealPath("");

		// 获取下载文件露肩
		String downLoadPath = ctxPath + File.separator + "template"
				+ File.separator + storeName;

		// 获取文件的长度
		long fileLength = new File(downLoadPath).length();

		// 设置文件输出类型
		response.setContentType("application/octet-stream;charset=utf-8");
		response.setHeader("Content-disposition", "attachment; filename="
				+ new String(storeName.getBytes("utf-8"), "ISO8859-1"));
		// 设置输出长度
		response.setHeader("Content-Length", String.valueOf(fileLength));
		// 获取输入流
		bis = new BufferedInputStream(new FileInputStream(downLoadPath));
		// 输出流
		bos = new BufferedOutputStream(response.getOutputStream());
		byte[] buff = new byte[2048];
		int bytesRead;
		while (-1 != (bytesRead = bis.read(buff, 0, buff.length))) {
			bos.write(buff, 0, bytesRead);
		}
		// 关闭流
		bis.close();
		bos.close();
	}
}
