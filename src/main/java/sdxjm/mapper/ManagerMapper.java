package sdxjm.mapper;

import java.util.List;

import org.springframework.stereotype.Component;

import sdxjm.domain.Manager;

@Component("managerMapper")
public interface ManagerMapper {

	void addManager(Manager m);

	List<Manager> getAllManager();

	Manager checkExist(String string);

	void changepwd(Manager manager);

	void delManager(int id);


}
