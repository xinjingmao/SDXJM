package sdxjm.service.admin;

import org.springframework.web.multipart.MultipartFile;

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
	
	Student getOne(int id);

	ServiceResult editStudent(Student s);

	void delStudent(int id);

	QuerySummary getSomeStudentByPage(Student s);
	
	ServiceResult batchImport(MultipartFile stuData);
}
