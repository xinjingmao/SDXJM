<div id="add_college_div">
	<form method="post" id="add_college_form">
	<input name="schoolId" id="schoolId" type="hidden" value="${sId}" />
	<li>
		<label>学校：</label>
		<span id="sName" style="width:294px">${sName}</span>
	</li>
	<li>
		<label>学院：</label>
		<input name="name" id="name2" value="" size="50" style="width:290px" placeholder="请输入学院" />
	</li>
	</form>
	<li>
		<button id="add_btn1">添加</button> 
	</li>
	
	
	<#if cList?size &gt; 0>
	<div id="update_col_div">
		<p>更换学院名称</p>
		<form method="post" id="update_college_form">
		<li>
			<label>旧学院名：</label>
			<select name="id" id="cId" style="width:250px">
			    <#list cList as c>
			    	<option value="${c.id}">${c.name}</option>
			    </#list>
			</select>
		</li>
		<li>
			<label>新学院名：</label>
			<input name="name" id="name2" value="" size="50" style="width:250px" placeholder="请输入新学院名" />
		</li>
		</form>
		<li>
			<button id="ud_btn">更新</button> 
		</li>
	</div>
	</#if>
</div>

<div id="col_list_div">
	学院：
	<#if cList?size &gt; 0>
	    <#list cList as c>
	    	<#if c_index % 5 == 0>
	    		</br>
	    	</#if>
	    	<span><a id="id=${c.id}" class="delcol" title="点击删除学院">${c.name}</a></span>
	    </#list>
	<#else>
	    <p>暂无学院，请添加</p>
	</#if>
</div>



