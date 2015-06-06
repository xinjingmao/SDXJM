package sdxjm.controller.admin;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import sdxjm.domain.Student;
import sdxjm.domain.vo.QuerySummary;
import sdxjm.service.admin.IStudentService;
import sdxjm.utils.JsonUtil;
import sdxjm.utils.web.BaseController;

@Controller
@RequestMapping("/stu")
public class StuMgrController extends BaseController {
	@Autowired
	@Qualifier("studentService")
	private IStudentService stuService;

	@RequestMapping("/index")
	public ModelAndView index(HttpServletRequest request) {
		ModelAndView mv = managerModelAndView(request);
		mv.setViewName("/admin/index");
		return mv;
	}

	@RequestMapping("/add")
	@ResponseBody
	public String add(Student s) {
		return JsonUtil.toJsonText(stuService.addStudent(s));
	}

	@RequestMapping("/list")
	public ModelAndView stulistpage(Student s) {
		ModelAndView mv = new ModelAndView("/admin/student_list");
		// QuerySummary qs = stuService.getAllStudentByPage(s);
		// mv.addObject("summary", qs);
		return mv;
	}

	@RequestMapping("/all")
	public ModelAndView getAllUser(Student s) {
		ModelAndView mv = new ModelAndView("/admin/stulist");
		QuerySummary qs = stuService.getAllStudentByPage(s);
		mv.addObject("summary", qs);
		return mv;
	}

	@RequestMapping("/some")
	public ModelAndView getSomeUser(Student s) {
		ModelAndView mv = new ModelAndView("/admin/stulist");
		QuerySummary qs = stuService.getSomeStudentByPage(s);
		mv.addObject("summary", qs);
		return mv;
	}

	@RequestMapping("/one")
	@ResponseBody
	public String getOne(int id) {
		return JsonUtil.toJsonText(stuService.getOne(id));
	}

	@RequestMapping("/edit")
	@ResponseBody
	public String edit(Student s) {
		return JsonUtil.toJsonText(stuService.editStudent(s));
	}

	@RequestMapping("/del")
	@ResponseBody
	public void del(int id) {
		stuService.delStudent(id);
	}

	@RequestMapping("/download")
	@ResponseBody
	public void download(HttpServletRequest request,
			HttpServletResponse response) throws Exception {

		String storeName = "student_template.xls";
		download(request, response, storeName);
	}

	@RequestMapping("/import")
    @ResponseBody
    public String pictureUpload(@RequestParam MultipartFile stuData, HttpServletRequest request) {
		return JsonUtil.toJsonText(stuService.batchImport(stuData));
    	
    }
}
