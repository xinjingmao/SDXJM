<div id="add_major_div">
	<form method="post" id="add_major_form">
	<li>
		<label>学校：</label>
		<span id="sName1" style="width:394px">${sName}</span>
		<input id="sId" type="hidden" value="${sId}" />
	</li>
	<li>
		<label>学院：</label>
		<select name="collegeId" id="collegeId" style="width:250px">
			<#if cList?size &gt; 0>
			    <#list cList as c>
			    	<option value="${c.id}">${c.name}</option>
			    </#list>
			<#else>
			    <option value="0">暂无学院，请先添加</option>
			</#if>
		</select>
	</li>
	<li>
		<label>专业：</label>
		<input name="name" id="name3" value="" size="50" style="width:246px" placeholder="请输入专业 " />
	</li>
	</form>
	<li>
		<button id="add_btn2">添加</button> 
	</li>
	
</div>



<div id="maj_list_div">
<#if cList?size &gt; 0>
    <#list cList as c>
    	<div class="majorlist">
			学院：${c.name}</br>
			<#if c.majors?size &gt; 0>
				专业：
	    		<#list c.majors as m>
		    		<#if m_index % 5 == 0>
		    			</br>
			    	</#if>
			    	<span><a id="id=${m.id}" class="delmaj" title="点击删除专业">${m.name}</a></span>
				</#list>
			</#if>
		</div>
    </#list>
<#else>
    <span>暂无专业，请添加</span>
</#if>
</div>


