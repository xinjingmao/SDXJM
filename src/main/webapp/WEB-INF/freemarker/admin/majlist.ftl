<div id="add_major_div">
	<form method="post" id="add_major_form">
		<input id="sId" type="hidden" value="${sId}" />
		<div class="row">
			<div class="span4">
				<div class="input-group dis">
			        <span class="input-group-addon">学&nbsp;校:</span>
			        <div class="radio-box">
			            <span id="sName1">${sName}</span>
			        </div>
			    </div>
			</div>
		</div>
		<div class="row">
			<div class="span4">
				<div class="input-group dis">
			        <span class="input-group-addon">学&nbsp;院:</span>
			        <select name="collegeId" id="collegeId" class="form-control">
			        	<#if cList?size &gt; 0>
						    <#list cList as c>
						    	<option value="${c.id}">${c.name}</option>
						    </#list>
						<#else>
							<option value="0">暂无学院，请先添加</option>
						</#if>
			        </select>
			    </div>
			</div>
		</div>
		<div class="row">
			<div class="span4">
				<div class="input-group dis">
			        <span class="input-group-addon">专&nbsp;业:</span>
			        <input name="name" id="name3" type="text" value="" class="form-control" placeholder="请输入专业">
			    </div>
			</div>
		</div>
	</form>
	<div class="row">
		<div class="span4 center">
			<button id="add_btn2" class="btn btn-success">添&nbsp; &nbsp;加</button>
		</div>
	</div>	
</div>



<div id="maj_list_div" class="maxheight">
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


