package sdxjm.service.admin.impl;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import sdxjm.domain.Student;
import sdxjm.domain.vo.QuerySummary;
import sdxjm.mapper.StudentMapper;
import sdxjm.service.admin.IStudentService;
import sdxjm.utils.web.BaseService;
import sdxjm.utils.web.ServiceResult;
@Service("studentService")
public class StudentService extends BaseService implements IStudentService {
	@Autowired
	@Qualifier("studentMapper")
	private StudentMapper stuMapper;
	
	@Override
	public ServiceResult addStudent(Student s) {
		String msg = s.verify();
		if(!msg.equals("success")){
			return failI18nResult(msg);
		}
		s.setAddTime(new Date());
		stuMapper.addStudent(s);
		return successI18nResult("success.student.addStudent");
	}

	@Override
	public QuerySummary getAllStudentByPage(Student s) {
		int total = stuMapper.getStuTotalNum();
		QuerySummary qs = new QuerySummary(total, s);
		qs.setStuList(stuMapper.getAllStudent(s));
		return qs;
	}

	@Override
	public int getStuTotalNum() {
		// TODO Auto-generated method stub
		return stuMapper.getStuTotalNum();
	}

	@Override
	public Student getOne(int id) {
		// TODO Auto-generated method stub
		return stuMapper.getOne(id);
	}

	@Override
	public ServiceResult editStudent(Student s) {
		String msg = s.verify();
		if(!msg.equals("success")){
			return failI18nResult(msg);
		}
		stuMapper.editStudent(s);
		return successI18nResult("success.student.editStudent");
	}

	@Override
	public void delStudent(int id) {
		// TODO Auto-generated method stub
		stuMapper.delStudent(id);
	}

	@Override
	public QuerySummary getSomeStudentByPage(Student s) {
		int total = stuMapper.getSomeStuNum(s);
		QuerySummary qs = new QuerySummary(total, s);
		qs.setStuList(stuMapper.getSomeStudent(s));
		return qs;
	}

}
