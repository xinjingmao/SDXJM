package sdxjm.service.admin.impl;

import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import jxl.Sheet;
import jxl.Workbook;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import sdxjm.domain.College;
import sdxjm.domain.Major;
import sdxjm.domain.School;
import sdxjm.domain.vo.QuerySummary;
import sdxjm.mapper.SchoolMapper;
import sdxjm.service.admin.ISchoolService;
import sdxjm.utils.StringUtil;
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

	@Override
	public ServiceResult batchImport(MultipartFile schoolData) {
		try {
			List<School> list = getAllByExcel(schoolData.getInputStream());
			if (list == null || list.size() == 0) {
				return failI18nResult("error.school.batchImport");
			}
			for (School s : list) {
				School sc = schMapper.checkSchExit(s);
				if (sc == null) {
					schMapper.addSchool(s);
				}

			}
		} catch (IOException e) {
			// TODO Auto-generated catch block
			return failI18nResult("error.school.batchImport");
		}
		return successI18nResult("success.school.batchImport");
	}

	/**
	 * 查询指定目录中电子表格中所有的数据
	 * 
	 * @param inputStream
	 * @return
	 */
	public static List<School> getAllByExcel(InputStream inputStream) {
		List<School> list = new ArrayList<School>();
		Date t = new Date();
		try {
			Workbook rwb = Workbook.getWorkbook(inputStream);
			Sheet rs = rwb.getSheet(0);// 或者rwb.getSheet(0)
			int clos = rs.getColumns();// 得到所有的列
			int rows = rs.getRows() > 5000 ? 5000 : rs.getRows();// 得到所有的行

			for (int i = 1; i < rows; i++) {
				for (int j = 0; j < clos; j++) {
					// 第一个是列数，第二个是行数
					String province = rs.getCell(j++, i).getContents();// 默认最左边编号也算一列
																		// 所以这里得j++
					if (StringUtil.isEmpty(province))
						continue;
					String city = rs.getCell(j++, i).getContents();
					String area = rs.getCell(j++, i).getContents();
					String name = rs.getCell(j++, i).getContents();
					String address = rs.getCell(j++, i).getContents();
					int nature = getNature(rs.getCell(j++, i).getContents());
					int kind = getKind(rs.getCell(j++, i).getContents());

					if (StringUtil.isEmpty(city) || StringUtil.isEmpty(area)
							|| StringUtil.isEmpty(name)) {
						continue;
					}
					list.add(new School(name, province, city, area, t, nature,
							kind, address));
				}
			}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return null;
		}
		return list;

	}

	private static int getNature(String s) {
		if (s.equals("本科")) {
			return 1;
		}
		if (s.equals("专科")) {
			return 2;
		}
		if (s.equals("中专"))
			return 3;

		return 0;
	}

	private static int getKind(String s) {
		if (s.equals("综合类"))
			return 1;
		if (s.equals("理工类"))
			return 2;
		if (s.equals("师范类"))
			return 3;
		if (s.equals("农林类"))
			return 4;
		if (s.equals("政法类"))
			return 5;
		if (s.equals("医药类"))
			return 6;
		if (s.equals("财经类"))
			return 7;
		if (s.equals("民族类"))
			return 8;
		if (s.equals("语言类"))
			return 9;
		if (s.equals("艺术类"))
			return 10;
		if (s.equals("体育类"))
			return 11;
		if (s.equals("军事类"))
			return 12;
		return 0;
	}

}
