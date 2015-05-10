/*yt base*/
var yt = {
	cssRoot: '/media/css',
	templateRoot: '/media/css/template/',
	jsRoot: '/media/js',
	webRoot: 'http://youtui.mobi',
	imageRoot: '/media/image',
	mediaHost: 'http://zhuan.b0.upaiyun.com',
	isLocal: true
};

yt.currentImageRoot = function(){
	var host = yt.mediaHost;
	if(yt.isLocal){
		host = yt.webRoot;
	}
	
	return host + yt.imageRoot;
};

//从url中切取activityId
yt.pickActivityIdFromUrl = function(){
	var pattern = /^.*\/(\d+)\/.+$/;
	if(pattern.test(location.href)){
		return activityId = RegExp.$1;
	}
	return "";
};

//显示验证结果信息层
//如果message存在,则表示验证失败,反之成功
yt.display_validate_result = function(selector, message){	
	if(message){		
		$(selector).removeClass("validate_success").addClass("validate_fail").html(message);
	}else{		
		$(selector).removeClass("validate_fail").addClass("validate_success").html("&nbsp;");
	}		
};

//显示请求结果信息层
//结果是html字符串
yt.display_request_result = function(selector, message, success){
	if(success){
		$(selector).addClass("success_box").removeClass("fail_box").html(message);
	}else{
		$(selector).addClass("fail_box").removeClass("success_box").html(message);
	}
};

//显示请求结果信息层
//result结果显示在modal中
yt.display_service_result_in_modal = function(modal,selector,message){
	if(message.indexOf('W2') != -1){
		var url = "/home/relogin?redirectUrl=" + location.href + "&auth=true";
		message = "授权超时&nbsp;请先<a target='_blank' href='" + url + "'>重新授权</a>";
	}
	if(message.indexOf('塔外') != -1){
		message = "淘宝禁止塔外IP调用，请先配置";
	}
	$(selector).html(message);
	$(modal).modal();
};

//result结果是json对象
yt.display_service_result = function(selector, result){
	var success = result.success;
	var message = result.message;
	yt.display_request_result(selector, message, success);
};

//显示请求结果信息层 使用bootstrap 的样式
//结果是html字符串
yt.display_request_result_label = function(selector, message, success){
	if(!$(selector).hasClass("label")){
		$(selector).addClass("label");
	}
	if(success){
		$(selector).addClass("label-success").removeClass("label-important").html(message);
	}else{
		$(selector).addClass("label-important").removeClass("label-success").html(message);
	}
	/*if(message.indexOf("授权") != -1){
		$(selector + " a").click(function(){
			$(selector).hide("slow");
		});
	}
	$(selector).show();*/
};


//判断是否免费用户
yt.isFreeVersion = function(){
	if($("#currentPayFee").val() == '0'){
		return true;
	}
	return false;
},

//显示请求结果信息层 使用bootstrap 的样式
//result结果是json对象
yt.display_service_result_label = function(selector, result){
	var success = result.success;
	var message = result.message;
	if(message.indexOf('W2') != -1){
		var url = "/home/relogin?redirectUrl=" + location.href + "&auth=true";
		message = "授权超时&nbsp;请先<a target='_blank' href='" + url + "'>重新授权</a>";
	}
	if(message.indexOf('塔外') != -1){
		message = "淘宝禁止塔外IP调用，请先配置";
	}
	yt.display_request_result_label(selector, message, success);
};

//显示请求前端表单验证结果信息层 使用bootstrap 的样式
//结果是html字符串
yt.display_request_result_controls = function(selector, message){
	if(message){
		$(selector).parent().parent().addClass("error").removeClass("success");
		$(selector).html(message);
	}else{
		$(selector).parent().parent().removeClass("error");
		$(selector).html('');
	}
};

//切换多个层的可视性
//selector_arr: 需要进行切换的层的选择器数组
//show_index: 需要显示的层在选择器数组中的index(剩余层表示不显示)
yt.switch_divs_visible = function(selector_arr, show_index){	
	if(show_index >= 0 && show_index < selector_arr.length){
		//取出要显示的层
		var show_div = selector_arr[show_index];	
		//将要显示的层屏蔽
		selector_arr[show_index] = "";
		$(show_div).removeClass("hide");
	}
	$(selector_arr.join(",")).addClass("hide");
};

yt.check_all_Validated =  function(validate_form, display_div){
	//验证页面是否有错误提示信息
	var $errtip = $(validate_form).find(".validate_fail");
	if($errtip.length != 0){
		var result = {success:false, message:'页面上有输入错误，请先修正'};
		yt.display_service_result(display_div, result);
		return false;
	}
	//清空错误提示框
	if($(display_div).hasClass("fail_box")){
		$(display_div).removeClass("fail_box").html("");
	}
	return true;
};

yt.check_all_Validated_Controls =  function(validate_form, display_div){
	//验证页面是否有错误提示信息
	var $errtip = $(validate_form).find(".error");
	if($errtip.length != 0){
		var result = {success:false, message:'页面上有输入错误，请先修正'};
		yt.display_request_result_label(display_div, result.message, result.success);
		return false;
	}
	//清空错误提示框
	if($(display_div).hasClass("label-important")){
		$(display_div).removeClass("label-important").html("");
	}
	return true;
};


//A short snippet for detecting versions of IE in JavaScript
//without resorting to user-agent sniffing
//UPDATE: Now using Live NodeList idea from @jdalton
yt.getIEVerison = function(){
		var undef;
		var v = 3,
		div = document.createElement('div'),
		all = div.getElementsByTagName('i');
		while (
		div.innerHTML = '<!--[if gt IE ' + (++v) + ']><i></i><![endif]-->',
		all[0]
		);

		return v > 4 ? v : undef;
};

//省市二级联动
yt._cityInfo = [{"n":"北京市","c":["北京市"]},
              	{"n":"天津市","c":["天津市"]},
              	{"n":"上海市","c":["上海市"]},
              	{"n":"重庆市","c":["重庆市"]},
              	{"n":"河北省","c":["石家庄市","唐山市","秦皇岛市","邯郸市","邢台市","保定市","张家口市","承德市","沧州市","廊坊市","衡水市"]},
              	{"n":"山西省","c":["太原市","大同市","阳泉市","长治市","晋城市","朔州市","晋中市","运城市","忻州市","临汾市","吕梁市"]},
              	{"n":"台湾省","c":["台北市","高雄市","基隆市","台中市","台南市","新竹市","嘉义市","台北县","宜兰县","桃园县","新竹县","苗栗县","台中县","彰化县","南投县","云林县","嘉义县","台南县","高雄县","屏东县","澎湖县","台东县","花莲县"]},
              	{"n":"辽宁省","c":["沈阳市","大连市","鞍山市","抚顺市","本溪市","丹东市","锦州市","营口市","阜新市","辽阳市","盘锦市","铁岭市","朝阳市","葫芦岛市"]},
              	{"n":"吉林省","c":["长春市","吉林市","四平市","辽源市","通化市","白山市","松原市","白城市","延边朝鲜族自治州"]},
              	{"n":"黑龙江省","c":["哈尔滨市","齐齐哈尔市","鹤岗市","双鸭山市","鸡西市","大庆市","伊春市","牡丹江市","佳木斯市","七台河市","黑河市","绥化市","大兴安岭地区"]},
              	{"n":"江苏省","c":["南京市","无锡市","徐州市","常州市","苏州市","南通市","连云港市","淮安市","盐城市","扬州市","镇江市","泰州市","宿迁市"]},
              	{"n":"浙江省","c":["杭州市","宁波市","温州市","嘉兴市","湖州市","绍兴市","金华市","衢州市","舟山市","台州市","丽水市"]},
              	{"n":"安徽省","c":["合肥市","芜湖市","蚌埠市","淮南市","马鞍山市","淮北市","铜陵市","安庆市","黄山市","滁州市","阜阳市","宿州市","巢湖市","六安市","亳州市","池州市","宣城市"]},
              	{"n":"福建省","c":["福州市","厦门市","莆田市","三明市","泉州市","漳州市","南平市","龙岩市","宁德市"]},
              	{"n":"江西省","c":["南昌市","景德镇市","萍乡市","九江市","新余市","鹰潭市","赣州市","吉安市","宜春市","抚州市","上饶市"]},
              	{"n":"山东省","c":["济南市","青岛市","淄博市","枣庄市","东营市","烟台市","潍坊市","济宁市","泰安市","威海市","日照市","莱芜市","临沂市","德州市","聊城市","滨州市","荷泽市"]},
              	{"n":"河南省","c":["郑州市","开封市","洛阳市","平顶山市","安阳市","鹤壁市","新乡市","焦作市","濮阳市","许昌市","漯河市","三门峡市","南阳市","商丘市","信阳市","周口市","驻马店市"]},
              	{"n":"湖北省","c":["武汉市","黄石市","十堰市","宜昌市","襄樊市","鄂州市","荆门市","孝感市","荆州市","黄冈市","咸宁市","随州市","恩施土家族苗族自治州","仙桃市","潜江市","天门市","神农架林区"]},
              	{"n":"湖南省","c":["长沙市","株洲市","湘潭市","衡阳市","邵阳市","岳阳市","常德市","张家界市","益阳市","郴州市","永州市","怀化市","娄底市","湘西土家族苗族自治州"]},
              	{"n":"广东省","c":["广州市","深圳市","珠海市","汕头市","韶关市","佛山市","江门市","湛江市","茂名市","肇庆市","惠州市","梅州市","汕尾市","河源市","阳江市","清远市","东莞市","中山市","潮州市","揭阳市","云浮市"]},
              	{"n":"甘肃省","c":["兰州市","金昌市","白银市","天水市","嘉峪关市","武威市","张掖市","平凉市","酒泉市","庆阳市","定西市","陇南市","临夏回族自治州","甘南藏族自治州"]},
              	{"n":"四川省","c":["成都市","自贡市","攀枝花市","泸州市","德阳市","绵阳市","广元市","遂宁市","内江市","乐山市","南充市","眉山市","宜宾市","广安市","达州市","雅安市","巴中市","资阳市","阿坝藏族羌族自治州","甘孜藏族自治州","凉山彝族自治州"]},
              	{"n":"贵州省","c":["贵阳市","六盘水市","遵义市","安顺市","铜仁地区","毕节地区","黔西南布依族苗族自治州","黔东南苗族侗族自治州","黔南布依族苗族自治州"]},
              	{"n":"海南省","c":["海口市","三亚市","五指山市","琼海市","儋州市","文昌市","万宁市","东方市","澄迈县","定安县","屯昌县","临高县","白沙黎族自治县","昌江黎族自治县","乐东黎族自治县","陵水黎族自治县","保亭黎族苗族自治县","琼中黎族苗族自治县"]},
              	{"n":"云南省","c":["昆明市","曲靖市","玉溪市","保山市","昭通市","丽江市","思茅市","临沧市","楚雄彝族自治州","红河哈尼族彝族自治州","文山壮族苗族自治州","西双版纳傣族自治州","大理白族自治州","德宏傣族景颇族自治州","怒江傈僳族自治州","迪庆藏族自治州"]},
              	{"n":"青海省","c":["西宁市","海东地区","海北藏族自治州","黄南藏族自治州","海南藏族自治州","果洛藏族自治州","玉树藏族自治州","海西蒙古族藏族自治州"]},
              	{"n":"陕西省","c":["西安市","铜川市","宝鸡市","咸阳市","渭南市","延安市","汉中市","榆林市","安康市","商洛市"]},
              	{"n":"广西壮族自治区","c":["南宁市","柳州市","桂林市","梧州市","北海市","防城港市","钦州市","贵港市","玉林市","百色市","贺州市","河池市","来宾市","崇左市"]},
              	{"n":"西藏自治区","c":["拉萨市","昌都地区","山南地区","日喀则地区","那曲地区","阿里地区","林芝地区"]},
              	{"n":"宁夏回族自治区","c":["银川市","石嘴山市","吴忠市","固原市","中卫市"]}];


/* @prov 省select id,
*  @city 市select id
*  @defaultProv 默认省名
*  @defaultCity 默认省的默认市名
*/ 
yt.initProv = function(prov, city, defaultProv, defaultCity) {
   	var provEl = $(prov);
   	var cityEl = $(city);
   	var hasDefaultProv = (typeof(defaultCity) != 'undefined');

	var provHtml = '';
	
	for(var i = 0; i < yt._cityInfo.length; i++) {
		provHtml += '<option value="' + i + '"' + ((hasDefaultProv && yt._cityInfo[i].n == defaultProv) ? ' selected="selected"' : '') + '>' + yt._cityInfo[i].n + '</option>';
	   	}
	   	provEl.html(provHtml);
	   	yt.initCities(provEl, cityEl, defaultCity);
	   	provEl.change(function() {
	   		yt.initCities(provEl, cityEl);
	   	});
};
	
yt.initCities = function(provEl, cityEl, defaultCity) {
   	var hasDefaultCity = (typeof(defaultCity) != 'undefined');
	if(provEl.val() != '' && parseInt(provEl.val()) >= 0) {
		var cities = yt._cityInfo[parseInt(provEl.val())].c;
		var cityHtml = '';
		
		for(var i = 0; i < cities.length; i++) {
			cityHtml += '<option value="' + i + '"' + ((hasDefaultCity && cities[i] == defaultCity) ? ' selected="selected"' : '') + '>' + cities[i] + '</option>';
	   		}
	   		cityEl.html(cityHtml);
	   	}
};


//扩展日期格式化
Date.prototype.format = function(format)
{
	/*
	* format="yyyy-MM-dd hh:mm:ss";
	*/
	var o = {
	"M+" : this.getMonth() + 1,
	"D+" : this.getDate(),
	"h+" : this.getHours(),
	"m+" : this.getMinutes(),
	"s+" : this.getSeconds(),
	"q+" : Math.floor((this.getMonth() + 3) / 3),
	"S" : this.getMilliseconds()
	}
	
	if (/(y+)/.test(format))
	{
	format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4
	- RegExp.$1.length));
	}
	
	for (var k in o)
	{
	if (new RegExp("(" + k + ")").test(format))
	{
	format = format.replace(RegExp.$1, RegExp.$1.length == 1
	? o[k]
	: ("00" + o[k]).substr(("" + o[k]).length));
	}
	}
	return format;
};

//获取日期dis天后的日期
yt.getNewDate = function getNewDate(year,month,date,dis) {
	var d = new Date();
	var oldMs = Date.UTC(year,month,date);
	var dDis = Date.UTC(2010,1,2)-Date.UTC(2010,1,1);
	var newMs = oldMs+dDis*dis;
	d.setTime(newMs);
	return d;
};

//获取当前日期与一星期前的日期，并格式化
yt.getTwoDay = function getTwoDay(){
	var d = new Date();
	var d1 = new Date();
	d1 = yt.getNewDate(d.getFullYear(),d.getMonth(),d.getDate(),-7);
	return [d1.format("yyyy-MM-DD"), d.format("yyyy-MM-DD")];
};

//获取日期1天后的日期，并格式化
yt.getAfterOneDay = function getAfterOneDay(date){
	var arr = date.split("-");   
	var d = new Date(arr[0],parseInt(arr[1])-1,arr[2]);
	var d1 = new Date();
	d1 = yt.getNewDate(d.getFullYear(),d.getMonth(),d.getDate(),1);
	return d1.format("yyyy-MM-DD");
};

//获取当前日期与一星期后的日期，并格式化
yt.getTwoDayAfterOneWeek = function getTwoDayAfterOneWeek(){
	var d = new Date();
	var d1 = new Date();
	d1 = yt.getNewDate(d.getFullYear(),d.getMonth(),d.getDate(),7);
	return [d.format("yyyy-MM-DD"), d1.format("yyyy-MM-DD")];
};

//获取当前日期与30天后的日期，并格式化
yt.getTwoDayAfterOneMonth = function getTwoDayAfterOneMonth(){
	var d = new Date();
	var d1 = new Date();
	d1 = yt.getNewDate(d.getFullYear(),d.getMonth(),d.getDate(),30);
	return [d.format("yyyy-MM-DD"), d1.format("yyyy-MM-DD")];
};
window.bz = window.bz || {};
Array.prototype.indexOf = function(vItem){
	for(i=0;i<this.length;i++){
	if(vItem == this[i]){
		return i;
		}
	}
	return -1;
};
String.prototype.trim = function() {
	
	var reSpace = /^[\s\u3000]+|[\s\u3000]+$/g;
	return this.replace(reSpace, "");
};
String.prototype.endWith = function(str){
	var reS = "^.*" + str + "$";
	var regex = new RegExp(reS);
	return regex.test(this);
};
String.prototype.startWith = function(str){
	var reS = "^" + str + ".*$";
	var regex = new RegExp(reS);
	return regex.test(this);
};
String.prototype.contain = function(str){
	var reS = "^.*" + str + ".*$";
	var regex = new RegExp(reS);
	return regex.test(str);
};
String.prototype.isEmpty = function(){ 
	return this.toString() === "" ? true : false; 
}; 
Number.prototype.add = function(num, scale){	
	var r1, r2, m;
	try {/** sssssss */
		r1 = this.toString().split(".")[1].length;
	} catch (e) {
		r1 = 0;
	}
	try {
		r2 = num.toString().split(".")[1].length;
	} catch (e) {
		r2 = 0;
	}
	m = Math.pow(10, Math.max(r1, r2));
	var result = (this * m + num * m) / m;
	return round(result,scale);
};
Number.prototype.sub = function(num, scale){
	var r1, r2, m, n;
	try {
		r1 = num.toString().split(".")[1].length;
	} catch (e) {
		r1 = 0;
	}
	try {
		r2 = this.toString().split(".")[1].length;
	} catch (e) {
		r2 = 0;
	}
	m = Math.pow(10, Math.max(r1, r2));
	
	
	n = (r1 >= r2) ? r1 : r2;
	var result = ((this * m - num * m) / m).toFixed(n);
	return round(result,scale);
};
Number.prototype.mul = function(num, scale){
	var m = 0, s1 = this.toString(), s2 = num.toString();
	try {
		m += s1.split(".")[1].length;
	} catch (e) {
	}
	try {
		m += s2.split(".")[1].length;
	} catch (e) {
	}
	var result = Number(s1.replace(".", "")) * Number(s2.replace(".", ""))
		      / Math.pow(10, m);
	return round(result, scale);
};
Number.prototype.div = function(num, scale){
	var t1 = 0, t2 = 0, r1, r2;
	try {
		t1 = this.toString().split(".")[1].length;
	} catch (e) {
	}
	try {
		t2 = num.toString().split(".")[1].length;
	} catch (e) {
	}
	
	r1 = Number(this.toString().replace(".", ""));
	r2 = Number(num.toString().replace(".", ""));
	var result = (r1 / r2) * Math.pow(10, t2 - t1);
	return round(result, scale);
};
Number.prototype.floor = function(num){
	var v = parseInt(this.toString());
	return parseInt(v/num);
};
bz.StringBuffer = function (){
    this.strArray = new Array();
}
bz.StringBuffer.prototype.append = function( str ){
    this.strArray.push( str );
}
bz.StringBuffer.prototype.toString = function(){
    return this.strArray.join("");
}
bz.datetime = {};
bz.datetime.isDate = function(date){
	if( ! date){
		return false;
	}
	var dateRegex = /((^((1[8-9]\d{2})|([2-9]\d{3}))([-\/\._])(10|12|0?[13578])([-\/\._])(3[01]|[12][0-9]|0?[1-9])$)|(^((1[8-9]\d{2})|([2-9]\d{3}))([-\/\._])(11|0?[469])([-\/\._])(30|[12][0-9]|0?[1-9])$)|(^((1[8-9]\d{2})|([2-9]\d{3}))([-\/\._])(0?2)([-\/\._])(2[0-8]|1[0-9]|0?[1-9])$)|(^([2468][048]00)([-\/\._])(0?2)([-\/\._])(29)$)|(^([3579][26]00)([-\/\._])(0?2)([-\/\._])(29)$)|(^([1][89][0][48])([-\/\._])(0?2)([-\/\._])(29)$)|(^([2-9][0-9][0][48])([-\/\._])(0?2)([-\/\._])(29)$)|(^([1][89][2468][048])([-\/\._])(0?2)([-\/\._])(29)$)|(^([2-9][0-9][2468][048])([-\/\._])(0?2)([-\/\._])(29)$)|(^([1][89][13579][26])([-\/\._])(0?2)([-\/\._])(29)$)|(^([2-9][0-9][13579][26])([-\/\._])(0?2)([-\/\._])(29)$))/;
	return dateRegex.test(date);
};
bz.datetime.isDatetime = function(datetime){
	if( ! datetime){
		return false;
	}
	
	var ss = datetime.split(/\s+/);
	if( ! ss || ss.length > 2) {
		return false;
	}
	
	var date = ss[0];
	var time = ss[1];
	if( ! bz.datetime.isDate(date)){
		return false;
	}
	
	if(time){
		var timeRegex = /^(?:[01]?[0-9]|2[0-3])(?::[0-5]?[0-9]){0,2}$/;
		if( ! timeRegex.test(time)){
			return false;
		}
	}
	return true;
};
bz.datetime._str_to_date = function(datetime) {
	var obj = bz.datetime._cut_date_time(datetime);
	var month = bz.util.parseInt(obj.month) - 1;	
	return new Date(obj.year, month, obj.day, obj.hour, obj.minute, obj.second);
};
bz.datetime._date_to_str = function(date) {
	var year = date.getFullYear();
	var month = date.getMonth() + 1;
	month = month < 10 ? ("0" + month) : month;
	var day = date.getDate();
	day = day < 10 ? ("0" + day) : day;
	var hours = date.getHours();
	hours = hours < 10 ? ("0" + hours) : hours;
	var minutes = date.getMinutes();
	minutes = minutes < 10 ? ("0" + minutes) : minutes;
	var seconds = date.getSeconds();
	seconds = seconds < 10 ? ("0" + seconds) : seconds;
	return [year,'-',month,'-',day,' ',hours,':',minutes,":",seconds].join("");
};
bz.datetime._cut_date_time = function(datetime){
	var obj = {};
	var dt = datetime.split(/\s+/);
	var date = dt[0];
	var time = dt[1];
	var datePie = date.split("-");
	obj.year = datePie[0];
	obj.month = datePie[1];
	obj.day = datePie[2];
	if(time){
		var timePie = time.split(":");
		obj.hour = timePie[0];
		obj.minute = timePie[1] || 0;
		obj.second = timePie[2] || 0;
	}else{
		obj.hour = obj.minute = obj.second = 0;		
	}
	return obj;
};
bz.datetime.beforeNowDate = function(date){	
	var start = bz.datetime._str_to_date(date);
	var end = new Date();
	end.setHours(0, 0, 0, 0);
	return start.getTime() < end.getTime();
};
bz.datetime.startEndDate = function(startDate, endDate){		
	var start = bz.datetime._str_to_date(startDate);
	var end = bz.datetime._str_to_date(endDate);
	return start.getTime() <= end.getTime();
};
bz.datetime.startLtEndDate = function(startDate, endDate){
	var start = bz.datetime._str_to_date(startDate);
	var end = bz.datetime._str_to_date(endDate);
	return start.getTime() <= end.getTime();
};
bz.datetime.dayGap = function(startDate, endDate){
	var start = bz.datetime._str_to_date(startDate);
	var end = bz.datetime._str_to_date(endDate);
	var sgap = end.getTime() - start.getTime();
	return Math.floor (sgap / (24 * 60 * 60 * 1000));
};
bz.datetime.hourGap = function(startDate, endDate){
	var start = bz.datetime._str_to_date(startDate);
	var end = bz.datetime._str_to_date(endDate);
	var sgap = end.getTime() - start.getTime();
	return Math.floor (sgap / (60 * 60 * 1000)) % 24;
};
bz.datetime.minuteGap = function(startDate, endDate){
	var start = bz.datetime._str_to_date(startDate);
	var end = bz.datetime._str_to_date(endDate);
	var sgap = end.getTime() - start.getTime();
	return Math.floor (sgap / (60 * 1000)) % 60;
};
bz.datetime.beforeNow = function(datetime){
	var date = bz.datetime._str_to_date(datetime);
	var now = new Date();
	return date.getTime() < now.getTime();
};
bz.datetime.millisecondsGap = function(datetime){	
	var date = bz.datetime._str_to_date(datetime);
	var now = new Date();	
	return date.getTime() - now.getTime();
};
bz.datetime._amend_date = function(date){
	
	
	
	var regex = /^(\d{4})-(\d{1,})-(\d{1,})$/;
	if(regex.test(date)){
		var year = RegExp.$1;
		var month = RegExp.$2;
		var day = RegExp.$3;
		if(month.length == 1){
			month = "0" + month;
		}
		if(day.length == 1){
			day = "0" + day;
		}
		return year + "-" + month + "-" + day;
	}
};
bz.datetime.addDays = function(dateStr, days){
	var day = bz.util.parseInt(dateStr);
	if( day > 0){
		return bz.datetime.addSeconds(day * 24 * 3600);
	}
	var day = bz.util.parseInt(days);
	return bz.datetime.addSeconds(dateStr, day * 24 * 3600);
};
bz.datetime.addSeconds = function(dateStr, seconds){
	var second = bz.util.parseInt(dateStr);
	if(second > 0){
		var date = new Date();
		date = new Date(date.getTime() + second * 1000);
		return bz.datetime._date_to_str(date);
	}	
	
	if(bz.datetime.isDatetime(dateStr)){
		var date = bz.datetime._str_to_date(dateStr);
		seconds = bz.util.parseInt(seconds);
		if(seconds > 0){
			date = new Date(date.getTime() + seconds * 1000);
		}		
		return bz.datetime._date_to_str(date);
	}	
};
bz.datetime.nowDate = function(){
	var date = new Date();
	return bz.datetime._date_to_str(date);
};
//获取下一个整十分钟的时刻
bz.datetime.nextTenTimeDate = function(){
	var date = bz.datetime.nowDate();
	var min = date.substring(14,16);
	var nextTenMin = parseInt(min / 10) * 10 + 10;
	var addMin = nextTenMin - min;
	return bz.datetime._date_to_str(new Date(new Date().getTime() + addMin * 60 * 1000));
};
//获取上一个整十分钟的时刻
bz.datetime.lastTenTimeDate = function(){
	var date = bz.datetime.nowDate();
	var min = date.substring(14,16);
	var lastTenMin = parseInt(min / 10) * 10;
	var addMin = lastTenMin - min;
	return bz.datetime._date_to_str(new Date(new Date().getTime() + addMin * 60 * 1000));
}
bz.tool = {};
bz.nav = {
	gen: function(acount, len, page, url){
		
		var nav = this._amend_nav_params(acount, len, page, url);
		if( ! nav){
			return "";
		}
		
		var max = 6;
		
		first_len = 3;
		
		end_len = 2;	
		
		
		page = nav.page;
		totalPage = nav.totalPage;
		acount = nav.acount;
		url = nav.url;
		
		
		var navArr = ["共<span class=\"acount\">", acount, "</span>条记录&nbsp&nbsp"];
		
		if(page > 1){
			navArr.push(this._gen_one_anchor(page - 1, "上一页"));			
		}else{
			navArr.push("<span class='no_anchor'>上一页</span>");
		}
		
		
		if(totalPage <= max){
			navArr.push(this._gen_anchors(1, totalPage, page));
		}else{
			
			var e = totalPage - end_len - 1;
			if(page <= first_len + 2){
				
				if(page == 1){
					navArr.push(this._gen_anchors(1, first_len, page));
				}else{
					navArr.push(this._gen_anchors(1, page + 1, page));
				}
				
				navArr.push("...");
				navArr.push(this._gen_anchors(totalPage - 1, totalPage, page));
			}else if(page >= e){
				
				navArr.push(this._gen_anchors(1, first_len, page));
				navArr.push("...");
				navArr.push(this._gen_anchors(page - 1, totalPage, page));
			}else{
				
				navArr.push(this._gen_anchors(1, first_len, page));
				navArr.push("...");
				navArr.push(this._gen_anchors(page - 1, page + 1, page));
				navArr.push("...");
				navArr.push(this._gen_anchors(totalPage - 1, totalPage, page));
			}
		}
		
		
		if(page < totalPage){
			navArr.push(this._gen_one_anchor(page + 1, "下一页"));				
		}else{			
			navArr.push("<span class='no_anchor'>下一页</span>");
		}
		
		var all = navArr.join("");		
		return all.replace(/\$\{url\}/gi, url);	
	},
	
	
	_gen_anchors: function(start, end, current){
		var as = [];
		for ( var i = start; i <= end; i++) {
			if(i == current){
				as.push("<span class='no_anchor'>" + i + "</span>");
			}else{
				as.push(this._gen_one_anchor(i));
			}
		}
		return as.join("");
	},
	
	_bootstrap_gen_anchors: function(start, end, current){
		var as = [];
		for ( var i = start; i <= end; i++) {
			if(i == current){
				as.push("<li><span class='disabled'>" + i + "</span></li>");
			}else{
				as.push(this._bootstrap_gen_one_anchor(i));
			}
		}
		return as.join("");
	},
	
	_gen_one_anchor: function(page, display){
		display = display || page;
		return ["<a href=\"${url}\" page=\"", page , "\">", display, "</a>"].join("");
	},
	
	_bootstrap_gen_one_anchor: function(page, display){
		display = display || page;
		return ["<li><a href=\"${url}\" page=\"", page , "\">", display, "</a></li>"].join("");
	},
	
	gentiny: function(acount, len, page, url){
		
		var nav = this._amend_nav_params(acount, len, page, url);
		if( ! nav){
			return "";
		}
		
		
		var page = nav.page;
		var totalPage = nav.totalPage;
		var url = nav.url;
		
		var prePage = (page - 1) > 0 ? (page - 1) : "";
		var nextPage = (page + 1) > totalPage ? "" : (page + 1);
		
		
		return [page, "/", totalPage, 
		        "<a href='", url, "' page='",prePage, "' class='tiny_prev'></a>",
		        "<a href='", url, "' page='",nextPage, "' class='tiny_next'></a>"].join("");		
	},
	genround: function(acount, len, page, url){
		
		var nav = this._amend_nav_params(acount, len, page, url);
		if( ! nav){
			return "";
		}
		
		
		var page = nav.page;
		var totalPage = nav.totalPage;
		var url = nav.url;
		
		var prePage = (page - 1) > 0 ? (page - 1) : "";
		var nextPage = (page + 1) > totalPage ? "" : (page + 1);
		
		
		return ["<a href='", url, "' page='",prePage, "' class='round_page_prev'></a>",
		        "<span><strong>",page,"</strong>/",totalPage,"</span>",
		        "<a href='", url, "' page='",nextPage, "' class='round_page_next'></a>"].join("");		
	},
	genmiddle: function(acount, len, page, url){
		
		var nav = this._amend_nav_params(acount, len, page, url);
		if( ! nav){
			return "";
		}
		
		
		var page = nav.page;
		var totalPage = nav.totalPage;
		var url = nav.url;
		
		var prePage = (page - 1) > 0 ? (page - 1) : "";
		var nextPage = (page + 1) > totalPage ? "" : (page + 1);
		
		
		return ["<a href='", url, "' page='",prePage, "' class='middle_page_prev'></a>",
		        "<span><strong>", page, "</strong>/", totalPage,
		        "</span><a href='", url, "' page='",nextPage, "' class='middle_page_next'></a>"].join("");		
	},
	genbootstrapstyle: function(acount, len, page, url){
		var nav = this._amend_nav_params(acount, len, page, url);
		if( ! nav){
			return "";
		}
		var max = 6;
		var first_len = 3;
		
		var end_len = 2;
		var page = nav.page;
		var totalPage = nav.totalPage;
		var url = nav.url;
		var prePage = (page - 1) > 0 ? (page - 1) : "";
		var nextPage = (page + 1) > totalPage ? "" : (page + 1);
		
		var navArr = ["<ul>"];
		
		if(page > 1){
			navArr.push(this._bootstrap_gen_one_anchor(page - 1, "上一页"));			
		}else{
			navArr.push("<li class='disabled'><a href=\"#\">上一页</a></li>");
		}
		
		if(totalPage <= max){
			navArr.push(this._bootstrap_gen_anchors(1, totalPage, page));
		}else{
			
			var e = totalPage - end_len - 1;
			if(page <= first_len + 2){
				
				if(page == 1){
					navArr.push(this._bootstrap_gen_anchors(1, first_len, page));
				}else{
					navArr.push(this._bootstrap_gen_anchors(1, page + 1, page));
				}
				
				navArr.push("<li><span class='disabled'>...</span></li>");
				navArr.push(this._bootstrap_gen_anchors(totalPage - 1, totalPage, page));
			}else if(page >= e){
				
				navArr.push(this._bootstrap_gen_anchors(1, first_len, page));
				navArr.push("<li><span class='disabled'>...</span></li>");
				navArr.push(this._bootstrap_gen_anchors(page - 1, totalPage, page));
			}else{
				
				navArr.push(this._bootstrap_gen_anchors(1, first_len, page));
				navArr.push("<li><span class='disabled'>...</span></li>");
				navArr.push(this._bootstrap_gen_anchors(page - 1, page + 1, page));
				navArr.push("<li><span class='disabled'>...</span></li>");
				navArr.push(this._bootstrap_gen_anchors(totalPage - 1, totalPage, page));
			}
		}
		
		if(page < totalPage){
			navArr.push(this._bootstrap_gen_one_anchor(page + 1, "下一页"));				
		}else{			
			navArr.push("<li class='disabled'><a href='#'>下一页</a></li></ul>");
		}
		
		var all = navArr.join("");	
		//alert(all);
		return all.replace(/\$\{url\}/gi, url);	
	},
	
	_amend_nav_params: function(acount, len, page, url){		
		
		if(bz.util.isObject(acount)){
			var obj = acount;
			acount = bz.util.parseInt(obj.acount);
			len = bz.util.parseInt(obj.len);
			page = bz.util.parseInt(obj.page);
			url = obj.url;			
		}
		
		
		if(acount < 1){
			return null;
		}
		
		var nav = {};				
		nav.page = page || 1;					
		nav.url = url || "javascript:;";	
		nav.acount = acount;
		len = len || 1;
		
		
		nav.totalPage = Math.floor(acount / len);
		if((acount % len) != 0){
			nav.totalPage += 1;
		}	
		
		
		if(page > nav.totalPage){
			nav.page = nav.totalPage;
		}
		
		
		return nav;
	}
}; 
bz.jiathis = {	
	_jiaUrl_: 'http://www.jiathis.com/send/?',	
	
	_uid_: '1508794',
	
	gen: function(shareMsg,shareUrl,webid,uid){
		if(shareUrl == undefined){
			return false;
		}
		
		shareMsg = encodeURIComponent(shareMsg);
		shareUrl = encodeURIComponent(shareUrl);
		var jiaUrl = this._get_jiathis_url(shareMsg,shareUrl,webid,uid);
		window.open(jiaUrl);
	},
	
	
	_get_jiathis_url: function(shareMsg,shareUrl,webid,uid){
		return [this._jiaUrl_, "title=", shareMsg, '&uid=', this._uid_, '&url=', shareUrl, '&webid=', webid].join("");
	}	
};

bz.util = {};
bz.util.round = function(number, scale){
	if(!isNumber(number)){
		return;
	}
	if(isDigits(scale) && scale > 0){
		return Math.round(number*Math.pow(10,scale))/Math.pow(10,scale);
	}
	return number;
};
bz.util.isEmail = function(email) {
	if (!email) {
		return false;
	}
	var pattern = /^(?:[\w]+\.?[\w]+)+@(?:[\w]+\.?[\w]+)+\.(?:com|net|cn|org|me|info)$/;	
	return pattern.test(email);
};
bz.util.isTelphone = function(telphone) {
	if (!telphone) {
		return false;
	}	
	var pattern = /^0[1-9][0-9]{1,2}-[1-9][0-9]{6,7}$|^1[1-9][0-9]{9}$/;
	return pattern.test(telphone);
};
/* 验证用户手机号码*/
bz.util.isCellphone = function(cellphone) {
	if (!cellphone) {
		return false;
	}	
	var pattern = /^1[1-9][0-9]{9}$/;
	return pattern.test(cellphone);
};
bz.util.isNumber = function(number) {
	var pattern = /^[+-]?\d+(?:\.?\d+|)$/;
	return pattern.test(number);
};
bz.util.isInteger = function(number){
	var pattern = /^[+-]?\d+$/;
	return pattern.test(number);
};
bz.util.isPositiveInt = function(number){
	var pattern = /^[1-9]\d*$/;
	return pattern.test(number);
};
bz.util.isDigit = function(number){
	var pattern = /^\d+$/;
	return pattern.test(number);
};
bz.util.isUrl = function(url){
	var regex = /^https?:\/\/.+$/;
	return regex.test(url);
};
bz.util.addFavorite = function(url, title){
	if(window.sidebar){
		window.sidebar.addPanel(title, url, "");
	}else if(document.all){
		window.external.AddFavorite(url, title);
	}else if( window.opera && window.print){
		return true;
	}
};
bz.util.clone = function(object){
	if(object && typeof object == "object"){
		var baby = {};
		for(var key in object){
			baby[key] = object[key];
		}
		return baby;
	}
};
bz.util.addEvent = function(elem, eventType, fn){
	if(elem.addEventListener){
		elem.addEventListener(evenType, fn, false);
	}else if(elem.attachEvent){
		elem.attachEvent("on" + evenType, fn);
	}else{
		elem["on" + evenType] = fn;
	}
};
bz.util.parseJSON = function(data) {		
	if ( typeof data !== "string" || !data ) {
		return null;
	}
	data = data.trim();
	return eval('(' + data + ')');
};
bz.util.isFunction = function(fn){		
	return (typeof fn == 'function');
};
bz.util.isObject = function(obj){	
	return (typeof obj == 'object');
};
bz.util.isUndefined = function(variable){
	return variable == 'undefined';
};
bz.util.jqId = function(id){
	return id.replace(/(:|\.|\/)/g, "\\$1");
};
bz.util.parseInt = function(str, def){
	def = def || 0;
	if( ! bz.util.isNumber(str)){
		return def;
	}
	
	var value = parseInt(str, 10);
	if(isNaN(value)){
		return def;
	}
	return value;
};
   
//halfUp(Dight,How):数值格式化函数，Dight要格式化的  数字，How要保留的小数位数。   
bz.util.halfUpStr = function(dight,how){
	if(isNaN(dight)){
		return dight;
	}
	var hstr = Math.round  (dight*Math.pow(10,how))/Math.pow(10,how) + "";
	//如果是整数则补充位数00,如 2 -> 2.0
	if(hstr.length == 1){
		var strPlus = ".";
		for(var i=0;i<how;i++){
			strPlus += "0";
		}
		return hstr + strPlus;
	}
	return hstr;
};
bz.util.encode = function(value) {
	if( ! value) return '';
	return encodeURI(value);
};
bz.util.extend = function(){
	var result = {};
	var len = arguments.length;
	for ( var i = 0; i < len; i++) {
		var obj = arguments[i];
		if(bz.util.isObject(obj)){
			for(var key in obj) {
				result[key] = obj[key];
			}
		}
	}
	return result;
};
bz.util.isLatlng = function(latlng){
	if( ! bz.util.isObject(latlng)) return false;
	var x = bz.util.parseInt(latlng.x, 361);
	var y = bz.util.parseInt(latlng.y, 361);
	return (x > -180 && x < 180) && (y > -180 && y < 180);
};
bz.util.redirect = function(url){
	if(url){
		location.href = url;
	}else{
		location.reload();
	}	
};
bz.util.isImage = function(url){
	var re = /^.+\.(:?gif|png|jpeg|jpg)$/i;
	return re.test(url);
};
bz.util.isImageUrl = function(url){
	var re = /^https?:\/\/.+\.(?:gif|png|jpeg|jpg)$/i;
	return re.test(url);
};
//从链接中切取商品ID
bz.util._cut_item_id = function(href){
	var regex = /http:\/\/item\.(?:taobao|tmall)\.com\/item.htm\?.*id=(\d+).*/;
	if(regex.test(href)){
		return RegExp.$1;
	}
};
bz.util.random = function(start, end){
	return Math.floor(Math.random() * end) + start;	
};
bz.util.str2bool = function(boolStr){
	return boolStr == "true";	
};
bz.util.googleStat = function(code){
	var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
	ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
	var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s); 
};
bz.util.baiduStat = function(code){
	if(code){
		var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
		ga.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'hm.baidu.com/h.js?' + code;
		var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);		
	}	
};

jQuery.cookie = function(key, value, options){
	 
	
    if (arguments.length > 1 && String(value) !== "[object Object]") {
    	options = jQuery.extend({}, options);
        if (value === null || value === undefined) {
            options.expires = -1;
        }
        if (typeof options.expires === 'number') {
            var days = options.expires, t = options.expires = new Date();
            t.setDate(t.getDate() + days);
        }
        
        value = String(value);
        
        return (document.cookie = [
            encodeURIComponent(key), '=',
            options.raw ? value : encodeURIComponent(value),
            options.expires ? '; expires=' + options.expires.toUTCString() : '', 
            options.path ? '; path=' + options.path : '',
            options.domain ? '; domain=' + options.domain : '',
            options.secure ? '; secure' : ''
        ].join(''));
    }
    
    
    options = value || {};
    var result, decode = options.raw ? function (s) { return s; } : decodeURIComponent;
    return (result = new RegExp('(?:^|; )' + encodeURIComponent(key) + '=([^;]*)').exec(document.cookie)) ? decode(result[1]) : null;
};

(function($){	
	$.countdown = function(options){
		options = $.extend({}, options);
		if(options.secondsGap > 0){
			return new CountDown(options);
		}		
	};
		
	
	function CountDown(options){
		this.options = options;
		this.timer = null;
		
		this.start();
	}
	
	CountDown.prototype = {
		start: function(){
			var options = this.options;
			var secondsGap = options.secondsGap;
			if(secondsGap > 0 && options.callback){
				this.timer = new _Timer_(secondsGap, function(time){
					options.callback(time);
				});	
				
				
				this.timer.start();
			}
		},
		
		
		clear: function(){
			if(this.timer){
				this.timer.clear();
			}
		}
	};
	
	
	
	
	
	function _Timer_(secondsGap, callback){
		this.millisecondsGap = secondsGap * 1000;
		this.interval = 1000;
		this.callback = callback;
		this._timer = null;
	}
	
	_Timer_.prototype = {
		
		start: function() {
			var self = this;
			this._timer = setInterval(display, this.interval);
			function display(){
				self._display();
			}
		},
		
		
		clear: function(){
			if(this._timer){				
				clearInterval(this._timer);
			}
		},
		
		_display: function(){		
			if( ! this._time_to_stop()){
				var _cal_result = this._cal_counting();
				
				this.callback(_cal_result);				
			}else{
				
				this.callback(null);
			}
		},
		
		_time_to_stop: function(){
			this.millisecondsGap -= this.interval;
			if(this.millisecondsGap <= 0){
				
				clearInterval(this._timer);				
				return true;
			}
			return false;
		},
		
		
		_cal_counting: function(){
			var gap = this.millisecondsGap;
			
			var day = gap.floor(this._with_milliseconds.day);
			gap -= day * this._with_milliseconds.day;
			var hour = gap.floor(this._with_milliseconds.hour);
			gap -= hour * this._with_milliseconds.hour;
			var minute = gap.floor(this._with_milliseconds.minute);
			gap -= minute * this._with_milliseconds.minute;
			var second = gap.floor(this._with_milliseconds.second);
			return {
				day:day, hour:hour, minute:minute, second:second
			};
		},
		_with_milliseconds: {
			second: 1000,
			minute: 1000 * 60,
			hour:   1000 * 60 * 60,
			day:    1000 * 60 * 60 * 24 
		}		
	};
})(jQuery);

bz.jsonGet = function(url, params, handler){
	if($.isFunction(params)){
		handler = params;
		params = "";		
	}
	handler = handler || function(){};
	bz._ajax_json_(url, params, handler, "GET");
};
bz.jsonPost = function(url, params, handler){
	if($.isFunction(params)){
		handler = params;
		params = "";		
	}
	handler = handler || function(){};
	bz._ajax_json_(url, params, handler, "POST");
};
bz.ajax = function(url,settings){
	jQuery.extend(settings, {cache: false});
	jQuery.ajax(url, setttings);
};
bz.get = function(url, data, success){
	var setttings = {
			cache: false, 
			type: "GET",
			url: url,
			data: data,			
			success: success
		};
	
	return jQuery.ajax(setttings);
};
bz._ajax_json_ = function(url, params, handler, type){
	var setttings = {
		cache: false, 
		type: type,
		url: url,
		data: params,
		dataType: 'json',
		success: function(result){
			handler(result);
		},
		statusCode: {
			403: function(){
				handler(_no_privilege_result());
			}			
		},
		error: function(){
			handler(_error_result());
		}
	};
	
	function _no_privilege_result(){
		return {
			success: false,
			message: '没有操作权限',
			object: ''
		};
	}
	
	function _error_result(){
		return {
			success: false,
			message: '对不起, 服务器出错, 请稍后重试',
			object: ''
		};
	}
	
	
	jQuery.ajax(setttings);
};
jQuery.fn.enter = function(fn){	
	return this.each(function(){
		var $this = jQuery(this);			
		$this.keypress(function(event){
			if(event.keyCode == 13){
				fn();
			}
		});
	});
};
bz.copy = function(val, callback){
	if( ! val) return;
	
	if (window.clipboardData){
		window.clipboardData.clearData();
		window.clipboardData.setData('text', val);
		callback(true);		
	}else if(navigator.userAgent.indexOf("Opera") != -1) {   
        window.location = txt;
        callback(true);	
	}else if(window.netscape) {   
        try {   
             netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");   
        } catch (e) {   
             alert("被浏览器拒绝！\n请在浏览器地址栏输入'about:config'并回车\n然后将'signed.applets.codebase_principal_support'设置为'true'");   
        }   
        var clip = Components.classes['@mozilla.org/widget/clipboard;1'].createInstance(Components.interfaces.nsIClipboard);   
        if (!clip)   
             return;   
        var trans = Components.classes['@mozilla.org/widget/transferable;1'].createInstance(Components.interfaces.nsITransferable);   
        if (!trans)   
             return;   
        trans.addDataFlavor('text/unicode');
        var str = new Object();   
        var len = new Object();   
        var str = Components.classes["@mozilla.org/supports-string;1"].createInstance(Components.interfaces.nsISupportsString);   
        var copytext = txt;   
        str.data = copytext;   
        trans.setTransferData("text/unicode",str,copytext.length*2);   
        var clipid = Components.interfaces.nsIClipboard;   
        if (!clip)   
             return false;   
        clip.setData(trans,null,clipid.kGlobalClipboard);   
        callback(true);	
   }else{
	   callback(false);	
   }
};
bz.flashcopy = function flashcopy(copyText,callback){ 
if (window.clipboardData) { 
	window.clipboardData.setData("Text", copyText) 
} 
else { 
	var flashcopier = 'flashcopier'; 
	if(!document.getElementById(flashcopier)) 
	{ 
		var divholder = document.createElement('div'); 
		divholder.id = flashcopier; 
		document.body.appendChild(divholder); 
	} 
	document.getElementById(flashcopier).innerHTML = ''; 
	var divinfo = '<embed src="./_clipboard.swf" FlashVars="clipboard='+encodeURIComponent(copyText)+'" width="0" height="0" type="application/x-shockwave-flash"></embed>'; 
	document.getElementById(flashcopier).innerHTML = divinfo; 
} 
callback(true);	
};

bz.scroll = function(top, callback){
	if( ! top || ! $.isFunction(callback)){
		return;
	}
	
	$(window).scroll(function(){
		var all = $(document).height();
		var wh = $(window).height();		
		var stop = $(window).scrollTop();
		if(stop >= top){			
			callback();
		}else if((wh + stop + 10) >= all){			
			
			callback();
		}
	});
};
bz.dialog = function(options){
	var $element = $(options.selector);	
	var inited = $element.data("dialog_inited");
	if(inited){
		$element.dialog("open");
	}else{
		
		var width = options.width || $element.width() + 30;			
		var height = options.height || 'auto';
				
		var title = $element.attr("title");				
		$element.dialog({
			modal:true,
			width: width,
			height: height,
			resizable:false,
			title: title
		});
		$element.data("dialog_inited", true);	
	}		
};
bz.tiper = function($element, triggerId){
	var inited = $element.data("tiper_inited");
	if(inited){
		$element.toggle();
	}else{
		if(triggerId && $element){
			$trigger = $(triggerId);
			var offset = $trigger.offset();
			var height = $element.height();
			
			$element.css({"top":(offset.top - height - 10)+"px","left":(offset.left-140)+"px"});			
			
			$element.find("a.close").bind('click',function(){
				$element.hide();
			});
			$element.data("tiper_inited", true);
			$element.show();
			$element.focus();
		};
	}
};

(function ($) {
$.fn.maxlength = function (settings) {
    if (typeof settings == 'string') {
        settings = { feedback : settings };
    }
    settings = $.extend({}, $.fn.maxlength.defaults, settings);
    function length(el) {
    	var parts = el.value;
    	if ( settings.words )
    		parts = el.value.length ? parts.split(/\s+/) : { length : 0 };
    	return parts.length;
    }
    
    return this.each(function () {
        var field = this,
        	$field = $(field),
        	$form = $(field.form),
        	limit = settings.useInput ? $form.find('input[name=maxlength]').val() : $field.attr('maxlength'),
        	$charsLeft = $form.find(settings.feedback);
    	function limitCheck(event) {
        	var len = length(this),
        	    exceeded = len >= limit,
        		code = event.keyCode;
        	if ( !exceeded )
        		return;
            switch (code) {
                case 8:  
                case 9:
                case 17:
                case 36: 
                case 35:
                case 37: 
                case 38:
                case 39:
                case 40:
                case 46:
                case 65:
                    return;
                default:
                    return settings.words && code != 32 && code != 13 && len == limit;
            }
        }
        var updateCount = function () {
            var len = length(field),
            	diff = limit - len;
            $charsLeft.html( diff || "0" );
            
            if (settings.hardLimit && diff < 0) {
            	field.value = settings.words ? 
            	    
            		field.value.split(/(\s+)/, (limit*2)-1).join('') :
            		field.value.substr(0, limit);
                updateCount();
            }
        };
        $field.keyup(updateCount).change(updateCount);
        if (settings.hardLimit) {
            $field.keydown(limitCheck);
        }
        updateCount();
    });
};
$.fn.maxlength.defaults = {
    useInput : false,
    hardLimit : true,
    feedback : '.charsLeft',
    words : false
};
})(jQuery);

(function($){
	$.fn.syncclick = function(options){
		options = $.extend({}, $.fn.syncclick.defaults, options);
		
		return this.each(function(){
			get(this);
		});
		
		function get(element){
			var syncclick = $(element).data("bz_syncclick");
			if( ! syncclick){
				syncclick = new SyncClick(element, options);
				$(element).data("bz_syncclick", syncclick);
			}
			return syncclick;
		}
	};
	
	$.fn.syncclick.defaults = {				
		
		delay: 2000,
		
		one: false
	};
	
	function SyncClick(element, options){
		this.$element = $(element);
		this.options = options;
		this.locked = false;
		this._init_();
	}
	
	SyncClick.prototype = {
		_init_: function(){
			var self = this;
			var options = this.options;
			this.$element.click(function(){
				if(self.locked){
					return;
				}							
				
				
				if($.isFunction(options.prepare)){
					var data = options.prepare();
					
					if(data == false){
						
						self.locked = false;
						return;
					}
					options.data = data;
				}
				
				if(options.url){
					
					self._before_send();						
					$.ajax(options).complete(function(){
						
						self._complete_action(self);
					});
				}			
			});
		},
		
		_before_send: function(){
			
			this.locked = true;
			this.$element.css({'cursor': 'wait'});
			if(this.options.waitingClass){
				this.$element.addClass(this.options.waitingClass);
			}		
		},
		
		_complete_action: function(self){			
			var options = self.options;
			
			if(options.one){
				return;
			}		
			
			if(options.delay > 0){
				setTimeout(_end_, options.delay);
			}else{
				_end_();
			}
			
			function _end_(){
				
				self.locked = false;
				self.$element.css({'cursor': 'pointer'});
				if(options.waitingClass){
					self.$element.removeClass(options.waitingClass);
				}
			}		
		}
	};
})(jQuery);

(function($){
	$.fn.tooltip = function(option){
		option = $.extend({}, $.fn.tooltip.option, option);
		return this.each(function(){
			get(this);		
		}).mouseenter(function(){get(this).show();});				
		
		function get(element){
			var tooltip = $(element).data('tooltip');
			if( ! tooltip){
				tooltip = new ToolTip(element, option);
				$(element).data('tooltip', tooltip);
			}
			return tooltip;
		}	
	};
	$.fn.tooltip.option = {
		
	};
	
	
	function ToolTip(element, option){
		this.$element = $(element);
		this.option = option;		
		this._init_();
	}
	
	ToolTip.prototype = {
		_init_: function(){
			this.$tip = this._tip_();
			this.$tip.appendTo(document.body).hide();
			this.$contentDiv = this.$tip.find('.tooltip-content');
			this.content = this.option.content;
		},
		
		show: function(){	
			var self = this;
			this._loadContent_(function(){
				self.$contentDiv.html(self.content);
			});			
			
			var offset = this.$element.offset();
			var pos = {
				'top': (offset.top - 25) + 'px',
				'left': (offset.left + 60) + 'px'
			};
			this.$tip.css(pos).show('fast');
			this._event_();
		},
		
		hide: function(){			
			this.$tip.hide('slow');
		},
		
		_event_: function(){
			$(".close").click(function(){
				$(".tooltip").hide('slow');
			});
		},
		
		_tip_: function(){
			if( ! this.$tip){
				this.$tip = $("<div class='tooltip'></div>").html('<div class="t_box"><div class="t_sub_box"><s><i></i></s><a href="javascript:;" class="close" title="关闭"></a><div class="tooltip-content"></div></div></div>');
			}
			return this.$tip;
		},
		
		_loadContent_: function(callback){
			var self = this;
			var url = self.$element.attr('url');			
			if( ! self.content && url){
				$.get(url, function(result){
					self.content = result;
					callback();
				}).error(function(){
					self.content = "请求出错,请稍候重试...";
					callback();
				});		
			}else{
				self.content = self.option.bodyHandler;
				callback();
			}
		}
	};
})(jQuery);


(function($){
	$.fn.hoverdelay = function(options){
		options = $.extend({}, $.fn.hoverdelay.options, options);
		return this.each(function(){
			newInstance(this);
		});
		
		function newInstance(element){
			var delay = $(element).data("hover_delay");
			if( ! delay){
				delay = new HoverDelay(element, options);
				$(element).data("hover_delay", delay);
			}
		}
	};
	
	$.fn.hoverdelay.options = {
		callback: function(){},
		delay: 0
	};
	
	function HoverDelay(element, options){
		this.$element = $(element);
		this.options = options;
		this.timer = null;
		this._init_();
	}
	
	HoverDelay.prototype = {
		_init_: function(){
			var options = this.options;
			this.$element.hover(function(){
				if(options.delay <= 0){
					options.callback();
				}else{
					this.timer = setTimeout(options.callback, options.delay);
				}				
			},
			function(){
				if(this.timer){
					clearTimeout(this.timer);
				}
			});
		}
	};	
})(jQuery);


(function($){	
	$.fn.slides = function(option){	
		option = $.extend({}, $.fn.slides.option, option);
		return this.each(function(){
			var $this = $(this);
			var $container = $("." + option.containerClass, $this);
			$container.children().wrapAll('<div class="slides_control"/>');
			
			var $control = $('.slides_control',$this),
				$slides = $control.children(),
				total = $slides.length,
				width = $slides.outerWidth(),
			    height = $slides.outerHeight(),	
			    start = option.start - 1, 
			    effect = option.effect.indexOf(',') < 0 ? option.effect : option.effect.replace(' ', '').split(',')[0],
				paginationEffect = option.effect.indexOf(',') < 0 ? effect : option.effect.replace(' ', '').split(',')[1],
			    current = 0, next = 0, prev = 0, position, direction, active, loaded;					
						
			if(total < 2){
				
				$container.fadeIn(option.fadeSpeed, option.fadeEasing, function(){
					
					loaded = true;
					
					option.slidesLoaded();
				});
				
				$('.' + option.next + ', .' + option.prev).fadeOut(0);
				return false;				
			}
			
			if(start < 0){
				start = 0;
			}			
			if(start > total){
				start = total - 1;
			}			
			if(option.start){
				current = start;
			}
			
			
			$container.css({	
				overflow: 'hidden',
				position: 'relative',
				display: 'block'
			});			
			
			
			$slides.css({
				position: 'absolute',
				top: 0, 
				left: width,
				zIndex: 0,
				display: 'none'
			});
			
			
			$control.css({
				position: 'relative',
				
				width: (width * 3),
				
				height: height,
				
				left: -width
			});			
						
			
			$slides.eq(start).fadeIn(option.fadeSpeed, option.fadeEasing, function(){
				
				loaded = true;
				
				option.slidesLoaded();
			});			
			
			if(option.bigTarget){
				$slides.css({cursor: 'pointer'}).click(function(){
					return false;
				});
			}
			
			
			if(option.pagination){
				$this.append("<ul class='"+ option.paginationClass +"'></ul>");
				$slides.each(function(index){
					$('ul.' + option.paginationClass, $this).append('<li><a href="javascript:;" index="'+ index +'">'+ (index+1) +'</a></li>');
				});			
			}
			
			var $navLi = $("ul." + option.paginationClass + " li", $this),
			$navA = $("a", $navLi);	
							
			
			$navA.click(function(){
				if(option.play){
					pause();
				}
				
				var index = parseInt($(this).attr("index"));				
				if(index != current){
					animate("pagination", paginationEffect, index);
				}				
			});
			
			
			$navLi.eq(start).addClass(option.currentClass);
			
			
			if(option.hoverPause && option.play){
				$control.mouseover(function(){					
					stop();					
				}).mouseleave(function(){					
					pause();					
				});
			}			
			
			function animate(direction, effect, clicked){				
				if( ! active && loaded){					
					active = true;
					
					option.animationStart(current + 1);
					switch(direction) {
						case 'next':
							
							prev = current;
							
							next = current + 1;							
							
							next = total === next ? 0 : next;
							
							position = width*2;
							
							direction = -width*2;
							
							current = next;							
						break;
						case 'prev':
							
							prev = current;
							
							next = current - 1;
							
							next = next === -1 ? total-1 : next;								
							
							position = 0;								
							
							direction = 0;		
							
							current = next;
						break;
						case 'pagination':
							
							next = clicked;
							
							prev = $navLi.eq(current).find("a").attr("index");
							prev = parseInt(prev);
							
							if (next > prev) {
								position = width*2;
								direction = -width*2;
							} else {
							
								position = 0;
								direction = 0;
							}
							
							current = next;
						break;
					}						
					
					
					if (effect === 'fade') {
						$slides.eq(prev).fadeOut(option.fadeSpeed, option.fadeEasing, function(){
							$slides.eq(next).fadeIn(option.fadeSpeed, option.fadeEasing);
							
							option.animationComplete(next + 1);
							active = false;
						});
					
					} else {						
						$slides.eq(next).css({
							left: position,
							display: 'block'
						});
						$control.animate({
							left: direction
						},option.slideSpeed, option.slideEasing, function(){
							$control.css({
								left: -width
							});
							$slides.eq(next).css({
								left: width,
								zIndex: 5
							});
							$slides.eq(prev).css({
								left: width,
								display: 'none',
								zIndex: 0
							});
							
							option.animationComplete(next + 1);
							active = false;
						});
					}
					
					$navLi.eq(current).addClass('current');
					$navLi.eq(prev).removeClass('current');
				}
			}
						
			function stop() {
				
				clearInterval($this.data('interval'));
			}
			function pause() {
				if (option.pause) {
					
					clearTimeout($this.data('pause'));
					clearInterval($this.data('interval'));
					
					var pauseTimeout = setTimeout(function() {
						
						clearTimeout($this.data('pause'));
						
						var playInterval = setInterval(	function(){
							animate("next", effect);
						},option.play);
						
						$this.data('interval',playInterval);
					},option.pause);
					
					$this.data('pause',pauseTimeout);
				} else {
					
					stop();
				}
			}	
			
			if (option.play) {
				
				var playInterval = setInterval(function() {
					animate("next", effect);
				}, option.play);
				
				$this.data('interval',playInterval);
			}
			
		});	
	};	
	
	$.fn.slides.option = {
			play:5000,
			pagination: true,
			containerClass: 'slides_container',
			paginationClass: 'pagination',
			currentClass: 'current',
			pause: 0,
			start: 1,
			pause: 1000,
			hoverPause: true,
			effect: 'slide',
			fadeSpeed: 400,
			slideSpeed: 400,
			bigTarget: false,
			slidesLoaded: function(){},
			animationStart: function(){},
			animationComplete: function(){}
		};
})(jQuery);

(function($){
	$.fn.tabs = function(option){	
		option = $.extend({}, $.fn.tabs.option, option);
		return this.each(function(){
			var $this = $(this),
				$navLi = $this.children("ul").children("li"),
				$navA = $navLi.children("a"),
				$tabs = $this.children("div"),
				$select = $this.find("select.tabnav");				
			
			
			$tabs.addClass("hide").eq(option.selected).removeClass("hide");
			$navLi.eq(option.selected).addClass(option.selectedClass);
			
			if($navA.length > 0){
				$navA.click(function(){
					var $el = $(this);
					_action_($el);
					return false;
				});
			}else{					
				$select.change(function(){						
					var $el = $select.find("option:selected");					
					_action_($el);					
					return false;
				});
			}
					
			
			function _action_($el){
				//在IFRAME 底下，IE 的要使用tab 作为attr，href识别出来的包含域名的
				var tabId = $el.attr("tab") || $el.attr("href");
				$tabs.addClass("hide");
				$(tabId).removeClass("hide");
				$navLi.removeClass(option.selectedClass);
				$el.parent().addClass(option.selectedClass);
			}
		});
	};	
	
	$.fn.tabs.option = {
		selected: 0,
		selectedClass: 'selected',
		trigger: 'click'
	};
})(jQuery);

(function($){
	$.fn.uploadFile = function(options){
		return this.each(function(){
			if(_is_file_input(this)){
				var up = new AjaxFileUpload(this, options);
				up.upload();
			}			
		});
		
		
		function _is_file_input(element){
			return $(element).is(":file");
		}
	};
	
	
	var counter = 0;
	function AjaxFileUpload(element, options){
		this.$element = $(element);
		this.$clone = $(element).clone(true);		
		this.options = options;
	};
	
	AjaxFileUpload.prototype = {
		
		upload: function(){
			var self = this;
			var id = ++counter;
			
			
			var iframeId = "bz-uploadFile-iframe-" + id;
			var formId = "bz-uploadFile-form-" + id;
			this._create_upload_iframe_form(iframeId, formId);
			
			
			var $form = $("#" + formId);		
			this.$element.before(this.$clone).appendTo($form);
				
			$form.attr("action", this.options.url);
			$form.attr("target", iframeId);
			$form.submit();
			
			var $iframe = $("#" + iframeId);
			
			$iframe.load(function(){
				
				self._upload_callback($iframe[0], $form[0]);
			});
		},
		_create_upload_iframe_form: function(frameId, formId){
			var html = "<iframe id='${frameId}' name='${frameId}'  style='position:absolute; top:-9999px; left:-9999px'  src='javascript:false'/><form id='${formId}' name='${formId}' enctype='multipart/form-data' method='POST' style='position:absolute; top:-9999px; left:-9999px'></form>";
			html = html.replace(/\$\{frameId\}/g, frameId);
			html = html.replace(/\$\{formId\}/g, formId);				
			$(html).appendTo(document.body);				
		},
		
		_upload_callback: function(iframe, form){
			var responseText = "";
			if(iframe.contentWindow){
				responseText = iframe.contentWindow.document.body?iframe.contentWindow.document.body.innerHTML:null;
            }else if(iframe.contentDocument){
				responseText = iframe.contentDocument.document.body?iframe.contentDocument.document.body.innerHTML:null;
            }				
			
			if(responseText){					
				
				var regex = /<pre.*>(.+)<\/pre>/gi;
				if(regex.test(responseText)){
					responseText = RegExp.$1;
				}
				if(this.options.dataType == 'json'){
					responseText = $.parseJSON(responseText);
				}
				
				if( this.options.success ){				
					this.options.success(responseText);
				}
			}			
			$(iframe).remove();
			$(form).remove();
		}		
	};
})(jQuery);

(function($){
	$.fn.validate = function(run){		
		return this.each(function(){
			var $this = $(this);	
			var validator = $this.attr('validator');
			if(validator){
				var dator = getValidator(this);
				
				if(run === true){
					dator.run();
				}else{
					
					$this.blur(function(){
						dator.run();
					});
				}				
			}					
		});
		
		function getValidator(element){
			var dator = $.data(element, 'bz-validator');
			if( ! dator){
				dator = new Validator(element);
				$.data(element, 'bz-validator', dator);
				
				$.fn.validate.validators.push(dator);
			}			
			return dator;
		}
	};
	
	
	$.fn.validate.validators = [];
	
	$.fn.validate.isAllValid = function(){
		var validators = $.fn.validate.validators;
		for ( var i = 0; i < validators.length; i++) {
			var validator = validators[i];
			if(validator.validate_result.success == false) return false;
		}
		return true;
	};
	
	function Validator(element){
		this.$element = $(element);
		this._init_element();
	}
	
	Validator.prototype = {
		run: function(){
			this._validate();
			//验证信息的显示方式 contorls， 为boostrap 的表单验证显示方式
			this.validatorDisplayType = this.$element.attr("validatorDisplayType");
			if(this.validatorDisplayType == "controls"){
				this._handle_validate_result_controls();
			}else if(this.validatorDisplayType == "label"){
				this._handle_validate_result_label();
			}else{
				this._handle_validate_result();
			}
		},
		
		_init_element: function(){
			this.validator = this.$element.attr("validator");
			this.error_message = this.$element.attr("error_message");
			this.success_message = this.$element.attr("success_message");
			this.name = this.$element.attr("name");
			this.validate_result_label = this._init_validate_result_label();
			this.validate_result = {};
		},
		
		_validate: function() {
			this.value = this.$element.val();
			
			var validators = this.validator.split(/\s+/g);
			var validate_message;
			for ( var i = 0; i < validators.length; i++) {
				var validator = validators[i];				
				if(validator){					
					validate_message = $.fn.validate._valid(validator, this.value);
					if(validate_message){
						break;
					}
				}				
			}
			
			if(validate_message){
				this.validate_result.success = false;
				this.validate_result.message = this.error_message || validate_message;
			}else{
				this.validate_result.success = true;
				this.validate_result.message = this.success_message || '';
			}
		},
		
		_handle_validate_result: function(){
			var success = this.validate_result.success;
			var message = this.validate_result.message || "&nbsp;";
			var $label = this.validate_result_label;
			if(success){
				$label.removeClass("validate_fail");
				$label.addClass("validate_success");	
			}else{
				$label.removeClass("validate_success");
				$label.addClass("validate_fail");	
			}
			$label.html(message);
		},
		
		_handle_validate_result_label: function(){
			var success = this.validate_result.success;
			var message = this.validate_result.message || "&nbsp;";
			var $label = this.validate_result_label;
			if(success){
				$label.removeClass("label-important");
				$label.html('');
			}else{
				$label.removeClass("label-success").addClass("label-important");
				$label.html(message);
			}
		},
		
		_handle_validate_result_controls: function(){
			var success = this.validate_result.success;
			var message = this.validate_result.message || "&nbsp;";
			var $label = this.validate_result_label;
			if(success){
				$label.parent().parent().removeClass("error");
				$label.html('');
			}else{
				$label.parent().parent().removeClass("success").addClass("error");
				$label.html(message);
			}
		},
		
		_init_validate_result_label: function(){
			
			var id = this.$element.attr("validate_result_div_id");
			if(id){
				return $("#" + id);
			}
			
			var label_id = this.name + "_bz_validate_result_label";
			var $label = $("<div class='tip'></div>");
			$label.attr("id", label_id);
			this.$element.after($label);
			return $label;
		}
	};
	
	
	$.fn.validate._valid = function(validator, value){
		if(validator != 'required' && value.trim() == ''){
			return;
		}
		switch (validator) {
		case 'required':
			if(value.trim() == '') return '不能为空';
			break;
		case 'email':
			if( value.trim() != '' && ! bz.util.isEmail(value)) return '请输入合法的邮箱地址';
			break;
		case 'url':
			if( value.trim() != '' && ! bz.util.isUrl(value)) return '请输入合法的网络地址';
			break;
		case 'number':
			if( ! bz.util.isNumber(value)) return '请输入数字';
			break;
		case 'digit':
			if( ! bz.util.isDigit(value)) return '请输入正整数';
			break;
		case 'integer':
			if( ! bz.util.isInteger(value)) return '请输入整数';
			break;
		case 'telphone':
			if( ! bz.util.isTelphone(value)) return '请输入合法的电话号码';
			break;
		case 'cellphone':
			if( ! bz.util.isCellphone(value)) return '请输入合法的手机号码';
			break;
		default:			
			if(/^length\[(\d*)-(\d*)\]$/.test(validator)){					
				
				var n = RegExp.$1;
				var m = RegExp.$2;	
				n = bz.util.parseInt(n);
				m = bz.util.parseInt(m);					
				if(n < m){
					var length = value.length;					
					if(length < n || length > m){
						return '请输入' + n + "至" + m + "个字符";
					}
				}				
			}else if(/^regex\((.+)\)$/.test(validator)){
				
				var regex = RegExp.$1;
				var re = new RegExp(regex);
				if( ! value.match(re)){
					return '输入不正确';
				}
			}else if(/^integer\[(\d*)\-(\d*)\]$/.test(validator)){
				
				var n = RegExp.$1;
				var m = RegExp.$2;	
				n = bz.util.parseInt(n);
				m = bz.util.parseInt(m);				
				if(n < m){
					var val = bz.util.parseInt(value, NaN);
					if(isNaN(val) || val < n || val > m){
						return "请输入整数范围:" + n + "-" + m;
					}
				}
			}
			break;
		}		
	};
})(jQuery);

(function($){
	$.fn.pageget = function(option){		
		option = $.extend({}, $.fn.pageget.option, option);
		if(option.singleRequest){
			var pageget = get(this);
			pageget.start(option.pageNo);
		}else{
			return this.each(function(){
				var pageget = get(this);
				pageget.start(option.pageNo);
			});
		}
		
		function get(element){
			/*var pageget = $(element).data("bz_pageget");			
			if( ! pageget){
				pageget = new PageGet(element, option);
				$(element).data("bz_pageget",pageget);				
			}
			return pageget;
			*/
			
			return new PageGet(element, option);
		}
	};	
		
	$.fn.pageget.option = {
		navigatorType:'',
		loadingDivClass: '.pageget-loading',
		errorDivClass: '.pageget-error',
		cache: true,
		singleRequest: true
	};
	
	
	function PageGet(element, option){
		this.$this = $(element);
		this.option = option;	
		this.$loadingDiv = '';
		this.$errorDiv = '';
		this._init_();
	}
	
	PageGet.prototype = {
		
		_init_: function(){
			this.$loadingDiv = this.$this.find(this.option.loadingDivClass);
			this.$errorDiv = this.$this.find(this.option.errorDivClass);
		},	
		
		
		_prepare_data_: function(pageNo){	
			var option = this.option;
			var requestData = option.data;
			if($.isFunction(option.prepare)){
				var data = option.prepare();
				if(data == false){
					return;
				}
				requestData = data;
			}	
			pageNo = pageNo || 1;
			if(requestData){
				requestData += "&pageNo=" + pageNo;
			}else{
				requestData = "pageNo=" + pageNo;
			}
			return requestData;			
		},
		
		start: function(pageNo){
			var $this = this.$this;
			var self = this;
			var option = this.option;
			
			var requestData = this._prepare_data_(pageNo);	
			var requestUrl = this.option.url;
			
			var key = requestUrl + requestData;
			key = key.replace("-","_");
			
			var result = $this.data(key);
			if(result && option.cache){				
				$this.html(result);
				self._bind_events_();
			}else{
				$this.html(option.loading);
				bz.get(requestUrl, requestData, function(result){
					$this.html(result);
					self._bind_events_();
					
					
					$this.data(key, result);					
				}).error(function(){
					self._handle_error();			
				});		
			}
		},
		
		_handle_error: function(){
			var $this = this.$this;				
			if(this.$errorDiv.length > 0){
				$this.html("");
				this.$errorDiv.show().appendTo($this);
			}else{
				$this.html("访问服务器出错,请与客服联系..");
			}	
		},
		
		_bind_events_: function(){
			var $this = this.$this;
			var self = this;
			var option = self.option;
			
			if(self.option.callback){
				self.option.callback();
			}
			
			var navJson = $this.find(".navigatorJson").html();
			var nav = $.parseJSON(navJson);
			if(nav){
				var navHtml = '';
				if(option.navigatorType == 'tiny'){
					navHtml = bz.nav.gentiny(nav);
				}else if(option.navigatorType == 'middle'){
					navHtml = bz.nav.genmiddle(nav);
				}else if(option.navigatorType == 'round'){
					navHtml = bz.nav.genround(nav);
				}else if(option.navigatorType == 'bootstrapstyle'){
					navHtml = bz.nav.genbootstrapstyle(nav);
				}else{
					navHtml = bz.nav.gen(nav);
				}					
				var $nav = $this.find(".navigator");
				$nav.html(navHtml);
				$nav.find("a").click(function(){
					var page = $(this).attr("page");
					if(page){
						self.start(page);
					}						
				});
			}
		}
	};	
})(jQuery);

/*!
* iCheck v0.9, http://git.io/uhUPMA
* =================================
* Powerful jQuery plugin for checkboxes and radio buttons customization
*
* (c) 2013 Damir Foy, http://damirfoy.com
* MIT Licensed
*/

(function($, _iCheck, _checkbox, _radio, _checked, _disabled, _type, _click, _touch, _add, _remove, _cursor) {

  // Create a plugin
  $.fn[_iCheck] = function(options, fire) {

    // Cached vars
    var user = navigator.userAgent,
      mobile = /ipad|iphone|ipod|android|blackberry|windows phone|opera mini/i.test(user),
      handle = ':' + _checkbox + ', :' + _radio,
      stack = $(),
      walker = function(object) {
        object.each(function() {
          var self = $(this);

          if (self.is(handle)) {
            stack = stack.add(self);
          } else {
            stack = stack.add(self.find(handle));
          };
        });
      };

    // Check if we should operate with some method
    if (/^(check|uncheck|toggle|disable|enable|update|destroy)$/.test(options)) {

      // Find checkboxes and radio buttons
      walker(this);

      return stack.each(function() {
        var self = $(this);

        if (options == 'destroy') {
          tidy(self, 'ifDestroyed');
        } else {
          operate(self, true, options);
        };

        // Fire method's callback
        if ($.isFunction(fire)) {
          fire();
        };
      });

    // Customization
    } else if (typeof options == 'object' || !options) {

      // Check if any options were passed
      var settings = $.extend({
          checkedClass: _checked,
          disabledClass: _disabled,
          labelHover: true
        }, options),

        selector = settings.handle,
        hoverClass = settings.hoverClass || 'hover',
        focusClass = settings.focusClass || 'focus',
        activeClass = settings.activeClass || 'active',
        labelHover = !!settings.labelHover,
        labelHoverClass = settings.labelHoverClass || 'hover',

        // Setup clickable area
        area = ('' + settings.increaseArea).replace('%', '') | 0;

      // Selector limit
      if (selector == _checkbox || selector == _radio) {
        handle = ':' + selector;
      };

      // Clickable area limit
      if (area < -50) {
        area = -50;
      };

      // Walk around the selector
      walker(this);

      return stack.each(function() {
        var self = $(this);

        // If already customized
        tidy(self);

        var node = this,
          id = node.id,

          // Layer styles
          offset = -area + '%',
          size = 100 + (area * 2) + '%',
          layer = {
            position: 'absolute',
            top: offset,
            left: offset,
            display: 'block',
            width: size,
            height: size,
            margin: 0,
            padding: 0,
            background: '#fff',
            border: 0,
            opacity: 0
          },

          // Choose how to hide input
          hide = mobile ? {
            position: 'absolute',
            visibility: 'hidden'
          } : area ? layer : {
            position: 'absolute',
            opacity: 0
          },

          // Get proper class
          className = node[_type] == _checkbox ? settings.checkboxClass || 'i' + _checkbox : settings.radioClass || 'i' + _radio,

          // Find assigned labels
          label = $('label[for="' + id + '"]').add(self.closest('label')),

          // Wrap input
          parent = self.wrap('<div class="' + className + '"/>').trigger('ifCreated').parent().append(settings.insert),

          // Layer addition
          helper = $('<ins class="' + _iCheck + '-helper"/>').css(layer).appendTo(parent);

        // Finalize customization
        self.data(_iCheck, {o: settings, s: self.attr('style')}).css(hide);
        !!settings.inheritClass && parent[_add](node.className);
        !!settings.inheritID && id && parent.attr('id', _iCheck + '-' + id);
        parent.css('position') == 'static' && parent.css('position', 'relative');
        operate(self, true, 'update');

        // Label events
        if (label.length) {
          label.on(_click + '.i mouseenter.i mouseleave.i ' + _touch, function(event) {
            var type = event[_type],
              item = $(this);

            // Do nothing if input is disabled
            if (!node[_disabled]) {

              // Click
              if (type == _click) {
                operate(self, false, true);

              // Hover state
              } else if (labelHover) {
                if (/ve|nd/.test(type)) {
                  // mouseleave|touchend
                  parent[_remove](hoverClass);
                  item[_remove](labelHoverClass);
                } else {
                  parent[_add](hoverClass);
                  item[_add](labelHoverClass);
                };
              };

              if (mobile) {
                event.stopPropagation();
              } else {
                return false;
              };
            };
          });
        };

        // Input events
        self.on(_click + '.i focus.i blur.i keyup.i keydown.i keypress.i', function(event) {
          var type = event[_type],
            key = event.keyCode;

          // Click
          if (type == _click) {
            return false;

          // Keydown
          } else if (type == 'keydown' && key == 32) {
            if (!(node[_type] == _radio && node[_checked])) {
              if (node[_checked]) {
                off(self, _checked);
              } else {
                on(self, _checked);
              };
            };

            return false;

          // Keyup
          } else if (type == 'keyup' && node[_type] == _radio) {
            !node[_checked] && on(self, _checked);

          // Focus/blur
          } else if (/us|ur/.test(type)) {
            parent[type == 'blur' ? _remove : _add](focusClass);
          };
        });

        // Helper events
        helper.on(_click + ' mousedown mouseup mouseover mouseout ' + _touch, function(event) {
          var type = event[_type],

            // mousedown|mouseup
            toggle = /wn|up/.test(type) ? activeClass : hoverClass;

          // Do nothing if input is disabled
          if (!node[_disabled]) {

            // Click
            if (type == _click) {
              operate(self, false, true);

            // Active and hover states
            } else {

              // State is on
              if (/wn|er|in/.test(type)) {
                // mousedown|mouseover|touchbegin
                parent[_add](toggle);

              // State is off
              } else {
                parent[_remove](toggle + ' ' + activeClass);
              };

              // Label hover
              if (label.length && labelHover && toggle == hoverClass) {

                // mouseout|touchend
                label[/ut|nd/.test(type) ? _remove : _add](labelHoverClass);
              };
            };

            if (mobile) {
              event.stopPropagation();
            } else {
              return false;
            };
          };
        });
      });
    } else {
      return this;
    };
  };

  // Do something with inputs
  function operate(input, direct, method) {
    var node = input[0];

      // disable|enable
      state = /ble/.test(method) ? _disabled : _checked,
      active = method == 'update' ? {checked: node[_checked], disabled: node[_disabled]} : node[state];

    // Check and disable
    if (/^ch|di/.test(method) && !active) {
      on(input, state);

    // Uncheck and enable
    } else if (/^un|en/.test(method) && active) {
      off(input, state);

    // Update
    } else if (method == 'update') {

      // Both checked and disabled states
      for (var state in active) {
        if (active[state]) {
          on(input, state, true);
        } else {
          off(input, state, true);
        };
      };

    } else if (!direct || method == 'toggle') {

      // Helper or label was clicked
      if (!direct) {
        input.trigger('ifClicked');
      };

      // Toggle checked state
      if (active) {
        if (node[_type] !== _radio) {
          off(input, state);
        };
      } else {
        on(input, state);
      };
    };
  };

  // Set checked or disabled state
  function on(input, state, keep) {
    var node = input[0],
      parent = input.parent(),
      remove = state == _disabled ? 'enabled' : 'un' + _checked,
      regular = option(input, remove + capitalize(node[_type])),
      specific = option(input, state + capitalize(node[_type]));

    // Prevent unnecessary actions
    if (node[state] !== true && !keep) {

      // Toggle state
      node[state] = true;

      // Trigger callbacks
      input.trigger('ifChanged').trigger('if' + capitalize(state));

      // Toggle assigned radio buttons
      if (state == _checked && node[_type] == _radio && node.name) {
        var form = input.closest('form'),
          stack = 'input[name="' + node.name + '"]';

        stack = form.length ? form.find(stack) : $(stack);

        stack.each(function() {
          if (this !== node && $(this).data(_iCheck)) {
            off($(this), state);
          };
        });
      };
    };

    // Add proper cursor
    if (node[_disabled] && !!option(input, _cursor, true)) {
      parent.find('.' + _iCheck + '-helper').css(_cursor, 'default');
    };

    // Add state class
    parent[_add](specific || option(input, state));

    // Remove regular state class
    parent[_remove](regular || option(input, remove) || '');
  };

  // Remove checked or disabled state
  function off(input, state, keep) {
    var node = input[0],
      parent = input.parent(),
      callback = state == _disabled ? 'enabled' : 'un' + _checked,
      regular = option(input, callback + capitalize(node[_type])),
      specific = option(input, state + capitalize(node[_type]));

    // Prevent unnecessary actions
    if (node[state] !== false && !keep) {

      // Toggle state
      node[state] = false;

      // Trigger callbacks
      input.trigger('ifChanged').trigger('if' + capitalize(callback));
    };

    // Add proper cursor
    if (!node[_disabled] && !!option(input, _cursor, true)) {
      parent.find('.' + _iCheck + '-helper').css(_cursor, 'pointer');
    };

    // Remove state class
    parent[_remove](specific || option(input, state) || '');

    // Add regular state class
    parent[_add](regular || option(input, callback));
  };

  // Remove all traces of iCheck
  function tidy(input, callback) {
    if (input.data(_iCheck)) {

      // Remove everything except input
      input.parent().html(input.attr('style', input.data(_iCheck).s || '').trigger(callback || ''));

      // Unbind events
      input.off('.i').unwrap();
      $('label[for="' + input[0].id + '"]').add(input.closest('label')).off('.i');
    };
  };

  // Get some option
  function option(input, state, regular) {
    if (input.data(_iCheck)) {
      return input.data(_iCheck).o[state + (regular ? '' : 'Class')];
    };
  };

  // Capitalize some string
  function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
})(jQuery, 'iCheck', 'checkbox', 'radio', 'checked', 'disabled', 'type', 'click', 'touchbegin.i touchend.i', 'addClass', 'removeClass', 'cursor');


