package sdxjm.service.admin;

import java.util.List;

import sdxjm.domain.College;
import sdxjm.domain.Major;
import sdxjm.domain.School;
import sdxjm.domain.vo.QuerySummary;
import sdxjm.utils.web.ServiceResult;

public interface ISchoolService {
	ServiceResult addSchool(School s);

	QuerySummary getAllSchoolByPage(School s);
	
	List<School> getSomeSchool(School s);
	/**
	 * 获取学校总数
	 * @return
	 */
	int getSchTotalNum();

	ServiceResult addCollege(College c);
	
	List<College> getCollege(int schoolId);

	List<College> getColAndMaj(int id);
	
	ServiceResult addMajor(Major m);

	void delMajor(int id);

	void delCollege(int id);

	void updateCollege(College c);
	
	ServiceResult changeSName(School s);

	void delSchool(int id);

	QuerySummary getSomeSchoolByPage(School s);
}
