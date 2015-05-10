package sdxjm.service.admin;

import sdxjm.domain.Student;
import sdxjm.domain.vo.QuerySummary;
import sdxjm.utils.web.ServiceResult;

public interface IStudentService {
	ServiceResult addStudent(Student s);

	QuerySummary getAllStudentByPage(Student s);
	/**
	 * 获取学生总数
	 * @return
	 */
	int getStuTotalNum();
}
