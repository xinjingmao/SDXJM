package sdxjm.mapper;

import java.util.List;

import org.springframework.stereotype.Component;

import sdxjm.domain.College;
import sdxjm.domain.Major;
import sdxjm.domain.School;

@Component("schoolMapper")
public interface SchoolMapper {

	int addSchool(School s);

	List<School> getAllSchool(School s);
	
	List<School> getSomeSchool(School s);

	int getSchTotalNum();

	College checkColExit(College c);

	void addCollege(College c);

	List<College> getCollege(int schoolId);

	List<College> getColAndMaj(int id);
	
	void addMajor(Major m);

	Major checkMajExit(Major m);

	void delMajor(int id);

	void delCollege(int id);

	void updateCollege(College c);
	
	void changeSName(School s);

	void delSchool(int id);

	int getSomeSchNum(School s);

	List<School> getSomeSchByPage(School s);

	School checkSchExit(School s);
}
