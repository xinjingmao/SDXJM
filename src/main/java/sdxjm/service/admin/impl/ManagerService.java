package sdxjm.service.admin.impl;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import sdxjm.domain.Manager;
import sdxjm.mapper.ManagerMapper;
import sdxjm.service.admin.IManagerService;
import sdxjm.utils.EncryptUtil;
import sdxjm.utils.StringUtil;
import sdxjm.utils.web.BaseService;
import sdxjm.utils.web.ServiceResult;

@Service("managerService")
public class ManagerService extends BaseService implements IManagerService {

	@Autowired
	@Qualifier("managerMapper")
	private ManagerMapper mgrMapper;

	@Override
	public ServiceResult addManager(Manager m) {
		String msg = m.verify();
		if (!msg.equals("success")) {
			return failI18nResult(msg);
		}
		int temp = (int) (Math.random() * 10000);
		while (temp < 999) {
			temp = (int) (Math.random() * 10000);
		}
		m.setExtra(temp);
		m.setPassword(getPassword("123456"+temp));
		m.setAddTime(new Date());
		mgrMapper.addManager(m);
		return successI18nResult("success.manager.addManager");
	}

	@Override
	public List<Manager> getAllManager() {
		// TODO Auto-generated method stub
		return mgrMapper.getAllManager();
	}

	@Override
	public ServiceResult adminLogin(Manager manager) {
		// 1.判断登录
		Manager admin = mgrMapper.checkExist(manager.getTel());
		if (admin == null) {
			return failI18nResult("error.manager.adminNotExists");
		}
		String p = getPassword(manager.getPassword()+admin.getExtra());
		if(!p.equals(admin.getPassword())){
			return failI18nResult("error.manager.adminNotExists");
		}
		
		return successObjectResult(admin);
	}

	public String getPassword(String password) {
		return EncryptUtil.sha1(password);
	}

	@Override
	public ServiceResult changepwd(Manager manager) {
		String msg = manager.changePsdVerify();
		if(!msg.equals("success")){
			return failI18nResult(msg);
		}
		Manager m = mgrMapper.checkExist(manager.getTel());
		manager.setPassword(getPassword(manager.getPassword()+m.getExtra()));
		mgrMapper.changepwd(manager);
		return successI18nResult("success.manager.operationSuccess");
	}

	@Override
	public void delManager(int id) {
		// TODO Auto-generated method stub
		mgrMapper.delManager(id);
	}
}
