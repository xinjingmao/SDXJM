<table class="color">
    <tr><td>管理员Id</td>
    <td>手机</td>
    <td>添加时间</td>
    <td>操作</td></tr>
    <#if managers?size &gt; 0>
    
    <#list managers as m>
    <tr>
    <td>${m.id}</td> 
    <td>${m.tel}</td>                    
    <td>${m.addTime?string("yyyy-MM-dd HH:mm:ss")}</td>
    <td><#if tel != m.tel><a class="delmanager" id="${m.id}">删除</a><#else><span>删除</span></#if></td>
    </tr>
    </#list>
    <#else>
        <tr><td colspan="2">暂无数据</td></tr>
    </#if>
</table>
