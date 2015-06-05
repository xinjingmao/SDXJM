
<#if summary.navigator.acount &gt; 0>
<div>
	学生总数：<span id="totalNum">${summary.navigator.acount}</span>
</div>
<table class="color" id="stu_table">
    <tr>
        <th>序列号</th>
        <th>ID</th>
		<th>名字</th>
		<th>性别</th>
		<th>手机号码</th>
		<th>qq</th>
		<th>省</th>
		<th>市</th>
		<th>区</th>
		<th>学校</th>
		<th>学院</th>
		<th>专业</th>
		<th>入学年份</th>
		<th>班级</th>
		<th>职位</th>
		<th>添加时间</th>
		<#--<th>录入人</th>
		<th>备注信息</th>--> 
		<th>操作</th>
  	</tr>
    <#list summary.stuList as stu>
       <tr>
       	<td>${stu_index + 1}</td>
        <td>${stu.id}</td>
        <td>${stu.name}</td>
        <td><#if stu.sex == 0>男<#else>女</#if></td>
        <td>${stu.tel}</td>
        <td>${stu.qqNum}</td>
        <td>${stu.province}</td>
        <td>${stu.city}</td>
        <td>${stu.area}</td>
        <td>${stu.school}</td>
        <td>${stu.college}</td>
        <td>${stu.major}</td>
        <td>${stu.grade}年</td>
        <td>${stu.classes}</td>
        <td>${stu.position}</td>
        <td>${stu.addTime?string("yyyy-MM-dd HH:mm:ss")}</td>
        <#-- <td>${stu.agentId}</td>
        <td>${stu.remark}</td>  --> 
        <td>
        <input name="submit" type="image" value="ee" src="${imageRoot}/index_alter_1.png" class="toEdit" id="${stu.id}" />
        <input name="submit" type="image" value="ee" src="${imageRoot}/index_delete.png" class="delstu" id="id=${stu.id}" />
        </td> 
       </tr>
    </#list>
</table>
<#else>
    <p>no recores</p>
</#if>
<p class="page navigator"></p>
<div class="hide navigatorJson">${(summary.navigator.htmlJson)!''}</div>
