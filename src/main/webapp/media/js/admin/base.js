/*
 * 控制div的显示和隐藏
 */

/*$(function(){
	base.run();
}); */   

var base ={
	/*addOption : function (cmb, str, obj){
			var option = document.createElement("OPTION");
			cmb.options.add(option);
			option.innerHTML = str;
			option.value = str;
			option.obj = obj;
		},*/
	
	switchDiv : function(d1,d2,d3,d4,d5,d6){
		if($(d1).css("display")=="none"){
			$(d1).css("display","block");
			$(d2).css("display","none");
			$(d3).css("display","none");
			$(d4).css("display","none");
			$(d5).css("display","none");
			$(d6).css("display","none");
		}
	},
	
	schoolInit : function(_cmbSchool, _cmbCollege, _cmbMajor, schoolList, defaultSchool, defaultCollege, defaultMajor){
		//清空选项子节点
		$("#"+_cmbSchool+",#"+_cmbCollege+",#"+_cmbMajor).empty();
		
		var cmbSchool = document.getElementById(_cmbSchool);
		var cmbCollege = document.getElementById(_cmbCollege);
		var cmbMajor = document.getElementById(_cmbMajor);
		
		function cmbSelect(cmb, str)
		{
			for(var i=0; i<cmb.options.length; i++)
			{
				if(cmb.options[i].value == str)
				{
					cmb.selectedIndex = i;
					return;
				}
			}
		}
		
		function cmbAddOption(cmb, str, obj)
		{
			var option = document.createElement("OPTION");
			cmb.options.add(option);
			option.innerHTML = str;
			option.value = str;
			option.obj = obj;
		}
		
		function changeCollege()
		{
			cmbMajor.options.length = 0;
			if(cmbCollege.selectedIndex == -1)return;
			var item = cmbCollege.options[cmbCollege.selectedIndex].obj;
			cmbAddOption(cmbMajor, '全部', null);
			if(item.majors){
				for(var i=0; i<item.majors.length; i++)
				{
					cmbAddOption(cmbMajor, item.majors[i].name, null);
				}
			}
			
			cmbSelect(cmbMajor, defaultMajor);
		}
		function changeSchool()
		{
			cmbCollege.options.length = 0;
			cmbCollege.onchange = null;
			if(cmbSchool.selectedIndex == -1)return;
			
			var item = cmbSchool.options[cmbSchool.selectedIndex].obj;
			cmbAddOption(cmbCollege, '全部', {});
			if(item.colleges){
				for(var i=0; i<item.colleges.length; i++)
				{
					cmbAddOption(cmbCollege, item.colleges[i].name, item.colleges[i]);
				}
			}
			cmbSelect(cmbCollege, defaultCollege);
			//if(flag != 'col'){
				changeCollege();
				cmbCollege.onchange = changeCollege;
			//}
			
		}
		
		cmbAddOption(cmbSchool, '全部', {});
		if(schoolList.length){
			for(var i=0; i<schoolList.length; i++)
			{
				cmbAddOption(cmbSchool, schoolList[i].name, schoolList[i]);
			}
		}
		
		cmbSelect(cmbSchool, defaultSchool);
		//if(flag != 'sch'){
			changeSchool();
			cmbSchool.onchange = changeSchool;
		//}
		
	},
};

