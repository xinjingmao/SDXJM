<#if summary.navigator.acount &gt; 0>
<div class="mun_style">
	学校总数：<span id="totalNum">${summary.navigator.acount}</span>
</div>

<table class="table-bordered table-hover table_style" id="sch_table">
	<thead>
	    <tr>
	        <th>序列号</th>
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
	</thead>
	<tbody>
	    <#list summary.schList as sch>
	       <tr>
	       	<td>${sch_index + 1}</td>
	        <td>${sch.province}</td>
	        <td>${sch.city}</td>
	        <td>${sch.area}</td>
	        <td><input class="form-control input-sm" type="text" name="name" id="sN${sch.id}" value="${sch.name}" readonly="readonly" style="background-color:#ffffff"></td>
	        <td><button class="listcol btn btn-default btn-sm" value="id=${sch.id}&name=${sch.name}">学院列表</button></td>
	        <td><button class="listmaj btn btn-default btn-sm" value="id=${sch.id}&name=${sch.name}">专业列表</button></td>
	        <td><input class="form-control input-sm" type="text" id="sA${sch.id}" value="${sch.address}" readonly="readonly" style="background-color:#ffffff"></td>
	        <td>
	        	<label id="lNa${sch.id}" name="nature" class="list_block">
	        		<#if sch.nature == 0></#if>
	        		<#if sch.nature == 1>本科</#if>
	        		<#if sch.nature == 2>专科</#if>
	        		<#if sch.nature == 3>中专</#if>
	        	</label>
	        	<select id="sNa${sch.id}" name="nature" class="list_none form-control">
					<option value="0" <#if sch.nature == 0>selected="selected"</#if>></option>
					<option value="1" <#if sch.nature == 1>selected="selected"</#if>>本科</option>
	            	<option value="2" <#if sch.nature == 2>selected="selected"</#if>>专科</option>
	            	<option value="3" <#if sch.nature == 3>selected="selected"</#if>>中专</option>
				</select>
	        </td>
	        <td>
	        	<label id="lK${sch.id}" name="kind" class="list_block">
	        		<#if sch.kind == 0></#if>
	        		<#if sch.kind == 1>综合类</#if>
	        		<#if sch.kind == 2>理工类</#if>
	        		<#if sch.kind == 3>师范类</#if>
	        		<#if sch.kind == 4>农林类</#if>
	        		<#if sch.kind == 5>政法类</#if>
	        		<#if sch.kind == 6>医药类</#if>
	        		<#if sch.kind == 7>财经类</#if>
	        		<#if sch.kind == 8>民族类</#if>
	        		<#if sch.kind == 9>语言类</#if>
	        		<#if sch.kind == 10>艺术类</#if>
	        		<#if sch.kind == 11>体育类</#if>
	        		<#if sch.kind == 12>军事类</#if>
	        	</label>
	        	<select id="sK${sch.id}" name="kind" class="list_none form-control">
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
	        <td>
	        	<input name="submit" type="image" value="编辑" src="${imageRoot}/index_alter_1.png" class="schEdit list_block" onmousemove="this.src='${imageRoot}/index_alter_2.png'" onmouseout="this.src='${imageRoot}/index_alter_1.png'" id="schEdit${sch.id}" />
			    <input name="submit" type="image" value="删除" src="${imageRoot}/index_delete.png" class="delsch list_block" onmousemove="this.src='${imageRoot}/delete-red_image.png'" onmouseout="this.src='${imageRoot}/index_delete.png'" id="delSch${sch.id}" />
			    <input name="submit" type="image" value="修改" src="${imageRoot}/index_alter_1.png" class="updateSchool list_none" onmousemove="this.src='${imageRoot}/yes_red.png'" onmouseout="this.src='${imageRoot}/yes_nor.png'" id="${sch.id}" />
			    <input name="submit" type="image" value="取消" src="${imageRoot}/index_delete.png" class="schBack list_none" onmousemove="this.src='${imageRoot}/back_red.png'" onmouseout="this.src='${imageRoot}/back_nor.png'" id="schBack${sch.id}" />
	        </td>
	       </tr>
	    </#list>
	</tbody>
</table>
<#else>
    <p>抱歉，没有找到你需要的资源!</p>
</#if>
<p class="page navigator u_content"></p>
<div class="hide navigatorJson">${(summary.navigator.htmlJson)!''}</div>
