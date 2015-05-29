<ul>
	<form id="modify_student_form">
	<input name="id" type="hidden" value="${stu.id}" />
	<li>
		<label>姓名：</label>
		<input  name="name" id="name" value="" size="50" style="width:390px" placeholder="请输入学生姓名" />
	</li>
	<li>
		<label>性别：</label>
		<input type="radio" name="sex" value="0" checked>男
		<input type="radio" name="sex" value="1">女
	</li>
	<li>
		<label>手机号码：</label>
		<input  name="tel" type="text" id="tel" value="" size="50" placeholder="请输入学生手机号码" style="width:366px" />
	</li>
	<li>
		<label>QQ：</label>
		<input  name="qqNum" id="qqNum" value="" size="50" style="width:394px" placeholder="请输入学生QQ" />
	</li>
	<li>
		<label>&nbsp;&nbsp;省：</label>
		<select name="province" id="province" style="width:394px"></select>
	</li>
	<li>
		<label>&nbsp;&nbsp;市：</label>
		<select name="city" id="city" style="width:394px"></select>
	</li>
	<li>
		<label>&nbsp;&nbsp;区：</label>
		<select name="area" id="area" style="width:394px"></select>
	</li>
	<li>
		<label>学校：</label>
		<select name="school" id="school" style="width:390px"></select>
	</li>
	<li>
		<label>学院：</label>
		<select name="college" id="college" style="width:390px"></select>
	</li>
	<li>
		<label>专业：</label>
		<select name="major" id="major" style="width:390px"></select>
	</li>
	<li>
		<label>入学年份：</label>
		<input  name="grade" id="grade" value="" size="50" style="width:366px" placeholder="请输入学生的入学年份" />
	</li>
	<li>
		<label>班级：</label>
		<input name="classes" id="classes" value="" size="50" style="width:390px" placeholder="请输入学生的班级" />
	</li>
	<li>
		<label>职位：</label>
		<input  name="position" id="position" value="" size="50" style="width:390px" placeholder="请输入学生的职位，如：班长，学习委员.. 没有职位的请输入‘学生’即可" />
	</li>
	
	<li>
		<input type="reset" value="重置" />
	</li>
	</form>
	<button id="save_btn">保存</button> 
</ul>
            
