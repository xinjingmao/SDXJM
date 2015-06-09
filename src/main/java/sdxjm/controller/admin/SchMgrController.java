package sdxjm.controller.admin;

import java.util.List;

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

import sdxjm.domain.College;
import sdxjm.domain.Major;
import sdxjm.domain.School;
import sdxjm.domain.vo.QuerySummary;
import sdxjm.service.admin.ISchoolService;
import sdxjm.utils.JsonUtil;
import sdxjm.utils.web.BaseController;

@Controller
@RequestMapping("/sch")
public class SchMgrController extends BaseController{
	@Autowired
	@Qualifier("schoolService")
	private ISchoolService schService;
	
	@RequestMapping("/index")
	public ModelAndView index(HttpServletRequest request){
		ModelAndView mv = managerModelAndView(request);
		mv.setViewName("/admin/schindex");
		return mv;
	}
	
	@RequestMapping("/add")
	@ResponseBody
	public String add(School s){
		//schService.addSchool(s);
		return JsonUtil.toJsonText(schService.addSchool(s));
	}
	
	@RequestMapping("/all")
	public ModelAndView getAllSch(School s){
		System.out.println(s.getPageSize());
		ModelAndView mv = new ModelAndView("/admin/schlist");
		QuerySummary qs = schService.getAllSchoolByPage(s);
		mv.addObject("summary", qs);
		return mv;
	}
	
	@RequestMapping("/somesch")
	public ModelAndView getSomeSch(School s){
		ModelAndView mv = new ModelAndView("/admin/schlist");
		QuerySummary qs = schService.getSomeSchoolByPage(s);
		mv.addObject("summary", qs);
		return mv;
	}
	
	@RequestMapping("/some")
	@ResponseBody
	public String someSch(School s){
		//schService.addSchool(s);
		//System.out.println(schService.getSomeSchool(s));
		return JsonUtil.toJsonText(schService.getSomeSchool(s));
	}
	
	@RequestMapping("/addCol")
	@ResponseBody
	public String addCol(College c){
		//schService.addSchool(s);
		//System.out.println(schService.getSomeSchool(s));
		return JsonUtil.toJsonText(schService.addCollege(c));
	}
	
	@RequestMapping("/listCol")
	public ModelAndView listCol(School s){
		ModelAndView mv = new ModelAndView("/admin/collist");
		List<College> cList = schService.getCollege(s.getId());
		mv.addObject("cList", cList);
		mv.addObject("sName", s.getName());
		mv.addObject("sId", s.getId());
		return mv;
	}
	
	@RequestMapping("/listMaj")
	public ModelAndView listMaj(School s){
		ModelAndView mv = new ModelAndView("/admin/majlist");
		List<College> cList = schService.getColAndMaj(s.getId());
		mv.addObject("cList", cList);
		mv.addObject("sName", s.getName());
		mv.addObject("sId", s.getId());
		return mv;
	}
	
	@RequestMapping("/addMaj")
	@ResponseBody
	public String addMaj(Major m){
		//schService.addSchool(s);
		//System.out.println(schService.getSomeSchool(s));
		return JsonUtil.toJsonText(schService.addMajor(m));
	}
	
	@RequestMapping("/delMaj")
	@ResponseBody
	public void delMaj(int id){
		schService.delMajor(id);
	}
	
	@RequestMapping("/delCol")
	@ResponseBody
	public void delCol(int id){
		schService.delCollege(id);
	}
	
	@RequestMapping("/updateCol")
	@ResponseBody
	public void updateCol(College c){
		schService.updateCollege(c);
	}
	
	@RequestMapping("/updateSchool")
	@ResponseBody
	public String changeSName(School s){
		return JsonUtil.toJsonText(schService.changeSName(s));
	}
	
	@RequestMapping("/delSch")
	@ResponseBody
	public void delSch(int id){
		schService.delSchool(id);
	}
	
	@RequestMapping("/import")
    @ResponseBody
    public String pictureUpload(@RequestParam MultipartFile schoolData, HttpServletRequest request) {
		return JsonUtil.toJsonText(schService.batchImport(schoolData));
    	
    }
	
	@RequestMapping("/download")
	@ResponseBody
	public void download(HttpServletRequest request,
			HttpServletResponse response) throws Exception {

		String storeName = "school_template.xls";
		download(request, response, storeName);
	}
}
