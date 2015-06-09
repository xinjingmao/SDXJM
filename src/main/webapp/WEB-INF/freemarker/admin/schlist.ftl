<#if summary.navigator.acount &gt; 0>
<div>
	学校总数：<span id="totalNum">${summary.navigator.acount}</span>
</div>
<table class="color" id="sch_table">
    <tr>
        <th>序列号</th>
        <th>ID</th>
		<th>省</th>
		<th>市</th>
		<th>区</th>
		<th>学校</th>
		<th>学院</th>
		<th>专业</th>
		<th>详细地址</th>
		<th>学校性质</th>
		<th>学校种类</th>
		<th>添加时间</th>
		<th>操作</th>
  	</tr>
    <#list summary.schList as sch>
       <tr>
       	<td>${sch_index + 1}</td>
        <td>${sch.id}</td>
        <td>${sch.province}</td>
        <td>${sch.city}</td>
        <td>${sch.area}</td>
        <td><input class="form-control input-sm" type="text" name="name" id="sN${sch.id}" value="${sch.name}"></td>
        <td><button class="listcol btn btn-default btn-xs" value="id=${sch.id}&name=${sch.name}">学院列表</button></td>
        <td><button class="listmaj btn btn-default btn-xs" value="id=${sch.id}&name=${sch.name}">专业列表</button></td>
        <td><input class="form-control input-sm" type="text" id="sA${sch.id}" value="${sch.address}"></td>
        <td>
        	<select id="sNa${sch.id}" name="nature">
				<option value="0" <#if sch.nature == 0>selected="selected"</#if>></option>
				<option value="1" <#if sch.nature == 1>selected="selected"</#if>>本科</option>
            	<option value="2" <#if sch.nature == 2>selected="selected"</#if>>专科</option>
            	<option value="3" <#if sch.nature == 3>selected="selected"</#if>>中专</option>
			</select>
        </td>
        <td>
        	<select id="sK${sch.id}" name="kind">
				<option value="0" <#if sch.kind == 0>selected="selected"</#if>></option>
				<option value="1" <#if sch.kind == 1>selected="selected"</#if>>综合类</option>
            	<option value="2" <#if sch.kind == 2>selected="selected"</#if>>理工类</option>
            	<option value="3" <#if sch.kind == 3>selected="selected"</#if>>师范类</option>
            	<option value="4" <#if sch.kind == 4>selected="selected"</#if>>农林类</option>
            	<option value="5" <#if sch.kind == 5>selected="selected"</#if>>政法类</option>
            	<option value="6" <#if sch.kind == 6>selected="selected"</#if>>医药类</option>
            	<option value="7" <#if sch.kind == 7>selected="selected"</#if>>财经类</option>
            	<option value="8" <#if sch.kind == 8>selected="selected"</#if>>民族类</option>
            	<option value="9" <#if sch.kind == 9>selected="selected"</#if>>语言类</option>
            	<option value="10" <#if sch.kind == 10>selected="selected"</#if>>艺术类</option>
            	<option value="11" <#if sch.kind == 11>selected="selected"</#if>>体育类</option>
            	<option value="12" <#if sch.kind == 12>selected="selected"</#if>>军事类</option>
			</select>
        </td>
        <td>${sch.addTime?string("yyyy-MM-dd HH:mm:ss")}</td>
        <td><a class="updateSchool" id="${sch.id}">修改属性</a> | <a class="delsch" id="id=${sch.id}">删除</a></td>
       </tr>
    </#list>
</table>
<#else>
    <p>no recores</p>
</#if>
<p class="page navigator"></p>
<div class="hide navigatorJson">${(summary.navigator.htmlJson)!''}</div>
