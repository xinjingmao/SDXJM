package sdxjm.service.admin.impl;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import sdxjm.domain.College;
import sdxjm.domain.Major;
import sdxjm.domain.School;
import sdxjm.domain.vo.QuerySummary;
import sdxjm.mapper.SchoolMapper;
import sdxjm.service.admin.ISchoolService;
import sdxjm.utils.web.BaseService;
import sdxjm.utils.web.ServiceResult;

@Service("schoolService")
public class SchoolService extends BaseService implements ISchoolService {
	@Autowired
	@Qualifier("schoolMapper")
	private SchoolMapper schMapper;

	@Override
	public ServiceResult addSchool(School s) {
		String msg = s.verify();
		if (!msg.equals("success")) {
			return failI18nResult(msg);
		}
		// 检查学校是否已存在
		School sc = schMapper.checkSchExit(s);
		if (sc != null) {
			return failI18nResult("error.school.schoolExist");
		}
		s.setAddTime(new Date());
		schMapper.addSchool(s);
		return successI18nResult("success.school.addSchool");
	}

	@Override
	public QuerySummary getAllSchoolByPage(School s) {
		int total = schMapper.getSchTotalNum();
		QuerySummary qs = new QuerySummary(total, s);
		qs.setSchList(schMapper.getAllSchool(s));
		return qs;
	}

	@Override
	public int getSchTotalNum() {
		return schMapper.getSchTotalNum();
	}

	@Override
	public List<School> getSomeSchool(School s) {
		return schMapper.getSomeSchool(s);
	}

	@Override
	public ServiceResult addCollege(College c) {
		String msg = c.verify();
		if (!msg.equals("success")) {
			return failI18nResult(msg);
		}
		// 检查学院是否已存在
		College f = schMapper.checkColExit(c);
		if (f != null) {
			return failI18nResult("error.school.collegeExist");
		}
		c.setAddTime(new Date());
		schMapper.addCollege(c);
		return successI18nResult("success.school.addCollege");
	}

	@Override
	public List<College> getCollege(int schoolId) {
		// TODO Auto-generated method stub
		return schMapper.getCollege(schoolId);
	}

	@Override
	public List<College> getColAndMaj(int id) {
		// TODO Auto-generated method stub
		return schMapper.getColAndMaj(id);
	}

	@Override
	public ServiceResult addMajor(Major m) {
		String msg = m.verify();
		if (!msg.equals("success")) {
			return failI18nResult(msg);
		}
		// 检查专业是否已存在
		Major f = schMapper.checkMajExit(m);
		if (f != null) {
			return failI18nResult("error.school.majorExist");
		}
		m.setAddTime(new Date());
		schMapper.addMajor(m);
		return successI18nResult("success.school.addMajor");
	}

	@Override
	public void delMajor(int id) {
		// TODO Auto-generated method stub
		schMapper.delMajor(id);
	}

	@Override
	public void delCollege(int id) {
		// TODO Auto-generated method stub
		schMapper.delCollege(id);
	}

	@Override
	public void updateCollege(College c) {
		// TODO Auto-generated method stub
		schMapper.updateCollege(c);
	}

	@Override
	public ServiceResult changeSName(School s) {
		schMapper.changeSName(s);
		return successI18nResult("success.school.changeSName");
	}

	@Override
	public void delSchool(int id) {
		// TODO Auto-generated method stub
		schMapper.delSchool(id);
	}

	@Override
	public QuerySummary getSomeSchoolByPage(School s) {
		int total = schMapper.getSomeSchNum(s);
		QuerySummary qs = new QuerySummary(total, s);
		qs.setSchList(schMapper.getSomeSchByPage(s));
		return qs;
	}

}
