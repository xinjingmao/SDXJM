package sdxjm.mapper;

import java.util.List;

import org.springframework.stereotype.Component;

import sdxjm.domain.Student;

@Component("studentMapper")
public interface StudentMapper {

	int addStudent(Student s);

	List<Student> getAllStudent(Student s);

	int getStuTotalNum();

	Student getOne(int id);

	void editStudent(Student s);

	void delStudent(int id);

	int getSomeStuNum(Student s);

	List<Student> getSomeStudent(Student s);

	Student checkStuExit(Student s);
}
