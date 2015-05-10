package sdxjm.controller.admin;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import sdxjm.domain.Student;
import sdxjm.domain.vo.QuerySummary;
import sdxjm.service.admin.IStudentService;
import sdxjm.utils.JsonUtil;

@Controller
@RequestMapping("/stu")
public class StuMgrController {
	@Autowired
	@Qualifier("studentService")
	private IStudentService stuService;
	@RequestMapping("/index")
	public ModelAndView index(){
		return new ModelAndView("/admin/index");
	}
	
	@RequestMapping("/add")
	@ResponseBody
	public String add(Student s){
		//stuService.addStudent(s);
		System.out.println(s.toString());
		return JsonUtil.toJsonText(stuService.addStudent(s));
	}
	
	@RequestMapping("/all")
	public ModelAndView getAllUser(Student s){
		System.out.println(s.getPageSize());
		ModelAndView mv = new ModelAndView("/admin/stulist");
		QuerySummary qs = stuService.getAllStudentByPage(s);
		mv.addObject("summary", qs);
		return mv;
	}
}
