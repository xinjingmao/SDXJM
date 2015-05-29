package sdxjm.controller.admin;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import sdxjm.domain.Manager;
import sdxjm.service.admin.IManagerService;
import sdxjm.utils.JsonUtil;
import sdxjm.utils.web.BaseController;
import sdxjm.utils.web.CookieHelper;
import sdxjm.utils.web.ServiceResult;
/**
 * 与管理员相关
 *
 */
@Controller
@RequestMapping("/admin")
public class ManagerController extends BaseController{
	@Autowired
	@Qualifier("managerService")
	private IManagerService mgrService;
	
	/**
	 * 去登录页面
	 */
	@RequestMapping("/toLogin")
	public String toLogin(){
		/*ModelAndView mv = managerModelAndView(request);
		mv.setViewName("/admin/login");
		return mv;*/
		return "/admin/login";
	}
	/**
	 * 创建新的管理员账号
	 * @param request
	 * @param manager
	 * @return
	 */
	@RequestMapping("/add")
	@ResponseBody
	public String create_manager(HttpServletRequest request, HttpServletResponse response, Manager manager){		
		ServiceResult result = mgrService.addManager(manager);
		return JsonUtil.toJsonText(result);
	}	
	/**
	 * 管理员登录
	 * @param request
	 * @param manager
	 * @return
	 */
	@RequestMapping(value="/login",method=RequestMethod.POST)
	@ResponseBody
	public String login(HttpServletRequest request,HttpServletResponse resp, Manager manager){		
		ServiceResult result = mgrService.adminLogin(manager);
		if(result.isSuccess()){
			CookieHelper.setManager(manager.getTel() ,resp);
		}
		return JsonUtil.toJsonText(result);
	}	
	/**
	 * 管理员登录页面
	 */
	@RequestMapping(value="/login", method=RequestMethod.GET)
	public String toAdminLogin(){
		return "admin/login";
	}
	
	/**
	 * 管理员退出
	 */
	@RequestMapping("/logout")
	public String AdminLogout(HttpServletResponse response){
		CookieHelper.delManager(response);
		return "admin/login";
	}
	
	/**
	 * 系统管理页面
	 */
	@RequestMapping("/index")
	public ModelAndView index(HttpServletRequest request) {
		//获取管理员列表
		List<Manager> managers = mgrService.getAllManager();
		ModelAndView mv = managerModelAndView(request);
		mv.setViewName("/admin/manager");
		mv.addObject("managers", managers);
		return mv;
	}
	
	/**
	 * 系统管理员列表
	 */
	@RequestMapping("/all")
	public ModelAndView getList(HttpServletRequest request) {
		//获取管理员列表
		List<Manager> managers = mgrService.getAllManager();
		ModelAndView mv = managerModelAndView(request);
		mv.setViewName("/admin/manager_list");
		mv.addObject("managers", managers);
		return mv;
	}
	
	/**
	 * 系统管理页面
	 */
	@RequestMapping("/tochange")
	public ModelAndView tochange(HttpServletRequest request) {
		ModelAndView mv = managerModelAndView(request);
		mv.setViewName("/admin/changePwd");
		return mv;
	}
	
	/**
	 * 管理员修改密码
	 * @param request
	 * @param manager
	 * @return
	 */
	@RequestMapping("/changepwd")
	@ResponseBody
	public String changepwd(HttpServletRequest request, Manager manager){		
		ServiceResult result = mgrService.changepwd(manager);
		return JsonUtil.toJsonText(result);
	}	
	
	
	/**
	 * 删除管理员
	 */
	@RequestMapping("/del")
	@ResponseBody
	public void delManager(HttpServletRequest request,int id){
		mgrService.delManager(id);
	}
	
}
