<div id="add_college_div">
	<form method="post" id="add_college_form">
		<input name="schoolId" id="schoolId" type="hidden" value="${sId}" />
		<div class="row">
			<div class="span4">
				<div class="input-group dis">
			        <span class="input-group-addon">学&nbsp;校:</span>
			        <div class="radio-box">
			            <span id="sName">${sName}</span>
			        </div>
			    </div>
			</div>
		</div>
		<div class="row">
			<div class="span4">
				<div class="input-group dis">
			        <span class="input-group-addon">学&nbsp;院:</span>
			        <input name="name" id="name2" type="text" value="" class="form-control" placeholder="请输入学院">
			    </div>
			</div>
		</div>
	</form>
	<div class="row">
		<div class="span4 center">
			<button id="add_btn1" class="btn btn-success">添&nbsp; &nbsp;加</button>
		</div>
	</div>	
	
	<#if cList?size &gt; 0>
	<div id="update_col_div">
		<p>更换学院名称</p>
		<form method="post" id="update_college_form">
		<div class="row">
			<div class="span4">
				<div class="input-group dis">
			        <span class="input-group-addon">旧学院名:</span>
			        <select name="id" id="cId" class="form-control">
			        	<#list cList as c>
			    			<option value="${c.id}">${c.name}</option>
			    		</#list>
			        </select>
			    </div>
			</div>
		</div>
		<div class="row">
			<div class="span4">
				<div class="input-group dis">
			        <span class="input-group-addon">新学院名:</span>
			        <input name="name" id="name2" type="text" value="" class="form-control" placeholder="请输入新学院名">
			    </div>
			</div>
		</div>
		</form>
		<div class="row">
			<div class="span4 center">
				<button id="ud_btn" class="btn btn-success">更&nbsp; &nbsp;新</button>
			</div>
		</div>
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



