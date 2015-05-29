package sdxjm.service.admin;

import java.util.List;

import sdxjm.domain.Manager;
import sdxjm.utils.web.ServiceResult;

public interface IManagerService {

	ServiceResult addManager(Manager manager);

	List<Manager> getAllManager();

	ServiceResult adminLogin(Manager manager);

	ServiceResult changepwd(Manager manager);

	void delManager(int id);

}
