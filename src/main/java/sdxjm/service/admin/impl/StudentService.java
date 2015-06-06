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

import sdxjm.domain.Student;
import sdxjm.domain.vo.QuerySummary;
import sdxjm.mapper.StudentMapper;
import sdxjm.service.admin.IStudentService;
import sdxjm.utils.StringUtil;
import sdxjm.utils.web.BaseService;
import sdxjm.utils.web.ServiceResult;

@Service("studentService")
public class StudentService extends BaseService implements IStudentService {
	@Autowired
	@Qualifier("studentMapper")
	private StudentMapper stuMapper;

	@Override
	public ServiceResult addStudent(Student s) {
		String msg = s.verify();
		if (!msg.equals("success")) {
			return failI18nResult(msg);
		}
		// 检查学生是否已存在
		Student s1 = stuMapper.checkStuExit(s);
		if (s1 != null) {
			return failI18nResult("error.student.stutelExist");
		}
		s.setAddTime(new Date());
		stuMapper.addStudent(s);
		return successI18nResult("success.student.addStudent");
	}

	@Override
	public QuerySummary getAllStudentByPage(Student s) {
		int total = stuMapper.getStuTotalNum();
		QuerySummary qs = new QuerySummary(total, s);
		qs.setStuList(stuMapper.getAllStudent(s));
		return qs;
	}

	@Override
	public int getStuTotalNum() {
		// TODO Auto-generated method stub
		return stuMapper.getStuTotalNum();
	}

	@Override
	public Student getOne(int id) {
		// TODO Auto-generated method stub
		return stuMapper.getOne(id);
	}

	@Override
	public ServiceResult editStudent(Student s) {
		String msg = s.verify();
		if (!msg.equals("success")) {
			return failI18nResult(msg);
		}
		stuMapper.editStudent(s);
		return successI18nResult("success.student.editStudent");
	}

	@Override
	public void delStudent(int id) {
		// TODO Auto-generated method stub
		stuMapper.delStudent(id);
	}

	@Override
	public QuerySummary getSomeStudentByPage(Student s) {
		int total = stuMapper.getSomeStuNum(s);
		QuerySummary qs = new QuerySummary(total, s);
		qs.setStuList(stuMapper.getSomeStudent(s));
		return qs;
	}

	@Override
	public ServiceResult batchImport(MultipartFile stuData) {
		try {
			List<Student> list = getAllByExcel(stuData.getInputStream());
			if (list == null || list.size() == 0) {
				return failI18nResult("error.student.batchImport");
			}
			for (Student s : list) {
				Student s1 = stuMapper.checkStuExit(s);
				if (s1 == null) {
					stuMapper.addStudent(s);
				}
			}
		} catch (IOException e) {
			// TODO Auto-generated catch block
			return failI18nResult("error.student.batchImport");
		}
		return successI18nResult("success.student.batchImport");
	}

	/**
	 * 查询指定目录中电子表格中所有的数据
	 * 
	 * @param inputStream
	 * @return
	 */
	public static List<Student> getAllByExcel(InputStream inputStream) {
		List<Student> list = new ArrayList<Student>();
		Date t = new Date();
		try {
			Workbook rwb = Workbook.getWorkbook(inputStream);
			Sheet rs = rwb.getSheet(0);// 或者rwb.getSheet(0)
			int clos = rs.getColumns();// 得到所有的列
			int rows = rs.getRows();// 得到所有的行

			for (int i = 1; i < rows; i++) {
				for (int j = 0; j < clos; j++) {
					// 第一个是列数，第二个是行数
					String name = rs.getCell(j++, i).getContents();// 默认最左边编号也算一列
																	// 所以这里得j++
					int sex = rs.getCell(j++, i).getContents().equals("男") ? 0
							: 1;
					String tel = rs.getCell(j++, i).getContents();
					String qqNum = rs.getCell(j++, i).getContents();
					String province = rs.getCell(j++, i).getContents();
					String city = rs.getCell(j++, i).getContents();
					String area = rs.getCell(j++, i).getContents();
					String school = rs.getCell(j++, i).getContents();
					String college = rs.getCell(j++, i).getContents();
					String major = rs.getCell(j++, i).getContents();
					String grade = rs.getCell(j++, i).getContents();
					String classes = rs.getCell(j++, i).getContents();
					String position = rs.getCell(j++, i).getContents();

					if (StringUtil.isEmpty(name) || StringUtil.isEmpty(tel)
							|| StringUtil.isEmpty(qqNum)
							|| StringUtil.isEmpty(province)
							|| StringUtil.isEmpty(city)
							|| StringUtil.isEmpty(area)
							|| StringUtil.isEmpty(school)
							|| StringUtil.isEmpty(college)
							|| StringUtil.isEmpty(major)
							|| StringUtil.isEmpty(grade)
							|| StringUtil.isEmpty(classes)
							|| StringUtil.isEmpty(position)) {
						continue;

					}
					list.add(new Student(school, name, sex, college, major,
							grade, classes, position, province, city, area,
							tel, qqNum, t));
				}
			}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return null;
		}
		return list;

	}

}
