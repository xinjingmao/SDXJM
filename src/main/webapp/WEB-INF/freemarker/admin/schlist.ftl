<#if summary.navigator.acount &gt; 0>
<div class="mun_style">
	学校总数：<span id="totalNum">${summary.navigator.acount}</span>
</div>
<table class="table-bordered table-hover table_style" id="sch_table">
	<thead>
	    <tr>
	        <th>序列号</th>
	        <th>ID</th>
			<th>省</th>
			<th>市</th>
			<th>区</th>
			<th>学校</th>
			<th>学院</th>
			<th>专业</th>
			<th>添加时间</th>
			<th>操作</th>
	  	</tr>
  	</thead>
  	<tbody>
	    <#list summary.schList as sch>
	       <tr>
	       	<td>${sch_index + 1}</td>
	        <td>${sch.id}</td>
	        <td>${sch.province}</td>
	        <td>${sch.city}</td>
	        <td>${sch.area}</td>
	        <td><input class="form-control input-sm" type="text" id="sN${sch.id}" value="${sch.name}"></td>
	        <td><button class="listcol btn btn-default btn-xs" value="id=${sch.id}&name=${sch.name}">学院列表</button></td>
	        <td><button class="listmaj btn btn-default btn-xs" value="id=${sch.id}&name=${sch.name}">专业列表</button></td>
	        <td>${sch.addTime?string("yyyy-MM-dd HH:mm:ss")}</td>
	        <td><#--<a class="changeName" id="${sch.id}">修改校名</a> | <a class="delsch" id="id=${sch.id}">删除</a>-->
	        	<input name="submit" type="image" value="修改" src="${imageRoot}/index_alter_1.png" class="toEdit" onmousemove="this.src='${imageRoot}/index_alter_2.png'" onmouseout="this.src='${imageRoot}/index_alter_1.png'" id="${sch.id}" />
	        	<input name="submit" type="image" value="删除" src="${imageRoot}/index_delete.png" class="delstu" id="id=${sch.id}" />
	        </td>
	       </tr>
	    </#list>
	</tbody>
</table>
<#else>
    <p>no recores</p>
</#if>
<p class="page navigator u_content"></p>
<div class="hide navigatorJson">${(summary.navigator.htmlJson)!''}</div>
