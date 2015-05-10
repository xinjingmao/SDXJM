package sdxjm.utils;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

/**
 * 时间日期工具类 除了isDatetime(str),isDate(str)方法的字符串参数可能不是合法的时间日期字符串外,
 * 其他方法的时间日期字符串参数都默认是合法的日期字符串, 因此可能需要先调用isDatetime()或isDate()先确定字符串合法
 * 
 * @author tgf(Jan 25, 2011)
 * 
 */
public class DateUtil {
    /**
     * parse Date object to like '2000-12-24 21:34:34' format
     * 
     * @param date
     * @return
     */
    public static String dateToString(Date date) {
        // 日期时间格式模板
        SimpleDateFormat dateTimeFormat = new SimpleDateFormat(
                "yyyy-MM-dd HH:mm:ss");
        return dateTimeFormat.format(date);
    }

    /**
     * 在当前时间加上N个月的时间
     * 
     * @param months
     *            增加(或减少)的月数(可以正负月数)
     * @return
     */
    public static String addMonths(int months) {
        Calendar cal = Calendar.getInstance();
        cal.add(Calendar.MONTH, months);
        return dateToString(cal.getTime());
    }

    /**
     * 在当前时间加上N个月的时间
     * 
     * @param startDate
     *            开始时间
     * @param months
     *            增加(或减少)的月数(可以正负月数)
     * @return
     */
    public static String addMonths(String startDate, int months) {
        Date date = parseDateTime(startDate);
        Calendar cal = Calendar.getInstance();
        cal.setTime(date);
        cal.add(Calendar.MONTH, months);
        return dateToString(cal.getTime());
    }

    /**
     * 在当前时间加上N周的时间
     * 
     * @param weeks
     *            增加(或减少)的周数(可以正负周数)
     * @return
     */
    public static String addWeeks(int weeks) {
        Calendar cal = Calendar.getInstance();
        cal.add(Calendar.WEEK_OF_YEAR, weeks);
        return dateToString(cal.getTime());
    }

    /**
     * 在startDate时间加上N周的时间
     * 
     * @param startDate
     *            开始时间
     * @param weeks
     *            增加(或减少)的周数(可以正负周数)
     * @return
     */
    public static String addWeeks(String startDate, int weeks) {
        Date date = parseDateTime(startDate);
        Calendar cal = Calendar.getInstance();
        cal.setTime(date);
        cal.add(Calendar.WEEK_OF_YEAR, weeks);
        return dateToString(cal.getTime());
    }

    /**
     * 在当前时间加上N小时的时间
     * 
     * @param hours
     *            (可以正负小时)
     * @return
     */
    public static String addHours(int hours) {
        Calendar cal = Calendar.getInstance();
        cal.add(Calendar.HOUR, hours);
        return dateToString(cal.getTime());
    }

    /**
     * 在startDate时间加上N小时的时间
     * 
     * @param startDate
     * @param hours
     * @return
     */
    public static String addHours(String startDate, int hours) {
        Date date = parseDateTime(startDate);
        Calendar cal = Calendar.getInstance();
        cal.setTime(date);
        cal.add(Calendar.HOUR, hours);
        return dateToString(cal.getTime());
    }

    /**
     * 在当前时间加上N秒后的时间
     * 
     * @param seconds
     *            (可以正负N秒)
     * @return
     */
    public static String addSeconds(int seconds) {
        Calendar cal = Calendar.getInstance();
        cal.add(Calendar.SECOND, seconds);
        return dateToString(cal.getTime());
    }

    /**
     * 在指定时间加上N秒后的时间
     * 
     * @param hours
     *            (可以正负N秒)
     * @return
     */
    public static String addSeconds(String endTime, int seconds) {
        Date endDate = parseDateTime(endTime);
        Calendar cal = Calendar.getInstance();
        cal.setTime(endDate);
        cal.add(Calendar.SECOND, seconds);
        return dateToString(cal.getTime());
    }

    /**
     * 将字符串日期转换成Date对象 使用这个方法前,一般需要保证source是合法的日期(isDatetime),否则会返回null值
     * 字符串格式为"yyyy-MM-dd HH:mm:ss" 或 "yyyy-MM-dd"
     * 
     * @param source
     * @return 格式错误返回null
     */
    public static Date parseDateTime(String source) {
        // 日期时间格式模板
        SimpleDateFormat dateTimeFormat = new SimpleDateFormat(
                "yyyy-MM-dd HH:mm:ss");
        if(StringUtil.isEmpty(source)){
            return null;
        }else if(source.length() == 16){
            dateTimeFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm");
        }else if(source.length() == 10){
            dateTimeFormat = new SimpleDateFormat("yyyy-MM-dd");
        }

        String datetimeStr = amendDatetime(source);
        // 尝试第一种情况
        try{
            Date date = dateTimeFormat.parse(datetimeStr);
            return date;
        }catch (Exception e){
            return null;
        }
    }

    /**
     * 返回当前日期格式(yyyy-MM-dd)
     * 
     * @return
     */
    public static String getDate() {
        // 日期格式模板
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
        return dateFormat.format(new Date());
    }

    /**
     * 返回当前日期格式(yyyyMMdd)
     * 
     * @return
     */
    public static String getToday() {
        // 日期格式模板
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyyMMdd");
        return dateFormat.format(new Date());
    }
    
    /**
     * 返回当前日期时间格式(yyyy-MM-dd HH:mm:ss)
     * 
     * @return
     */
    public static String getDateTime() {
        return getDateTime(new Date());
    }

    /**
     * 将Date时间类型转换成字符串格式(yyyy-MM-dd HH:mm:ss)
     * 
     * @param date
     * @return
     */
    public static String getDateTime(Date date) {
        // 日期时间格式模板
        SimpleDateFormat dateTimeFormat = new SimpleDateFormat(
                "yyyy-MM-dd HH:mm:ss");
        return dateTimeFormat.format(date);
    }
    
    /**
     * 将Date时间类型转换成字符串格式(yyyyMMddHHmmss)
     * 
     * @param date
     * @return
     */
    public static String getDateTime2(Date date) {
        // 日期时间格式模板
        SimpleDateFormat dateTimeFormat = new SimpleDateFormat(
                "yyyyMMddHHmmss");
        return dateTimeFormat.format(date);
    }

    /**
     * 从时间日期字符串中切取日期
     * 
     * @param datetimeStr
     * @return
     */
    public static String getDate(String datetimeStr) {
        int sp = datetimeStr.indexOf(' ');
        return datetimeStr.substring(0, sp == -1 ? datetimeStr.length() : sp);
    }

    /**
     * 字符串时间是否小于当前时间(包括时间日期) 字符串时间必须使用isDate()确定是合法时间格式 否则会抛出异常
     * 
     * @param source
     * @return
     */
    public static boolean beforeNow(String source) {
        Date datetime = parseDateTime(source);
        Date now = new Date();
        return now.getTime() > datetime.getTime();
    }

    /**
     * 结束时间与当前时间的时间间隔(称)
     * 
     * @param endTime
     * @return
     */
    public static int secondGap(String endTime) {
        Date endDate = parseDateTime(endTime);
        if(endDate == null){
            return 0;
        }
        return secondGap(endDate);
    }

    /**
     * 结束时间与当前时间的时间间隔(秒)
     * 
     * @param endTime
     * @return
     */
    public static int secondGap(Date endDate) {
        Date now = new Date();
        long gap = endDate.getTime() - now.getTime();
        return (int)(gap / 1000);
    }

    
    
    /**
     * 判断dateStr是否是合法的日期(YYYY-MM-DD)
     * 
     * @param dateStr
     * @return
     */
    public static boolean isDate(String dateStr) {
        if(StringUtil.isEmpty(dateStr)){
            return false;
        }

        return dateStr.matches(RegexConstants.DATE_PATTEN);
    }

    /**
     * 判断是否是日期时间字符串(YYYY-MM-DD HH:mm:ss) 其中时间可选, 时间的任何一个字段也可选
     * 
     * @param datetime
     * @return
     */
    public static boolean isDatetime(String datetimeStr) {
        if(StringUtil.isEmpty(datetimeStr)){
            return false;
        }

        // 切掉日期时间后面可能的".0"
        String datetime = amendDatetime(datetimeStr);
        // 分隔时间日期
        String[] dt = datetime.split("\\s+");
        if(dt.length > 2){
            return false;
        }

        String date = dt[0];
        String time = null;
        if(dt.length == 2){
            time = dt[1];
        }
        if(!isDate(date))
            return false;
        if(time != null){
            if(!time.matches(RegexConstants.TIME_PATTEN)){
                return false;
            }

        }
        return true;
    }

    /**
     * 判断dateStr是否是小于当前日期(至少相隔一天) 需要先确保datetimeStr是合法的日期
     * 
     * @param datetimeStr
     *            (YYYY-MM-DD HH:MM)
     * @return
     */
    public static boolean beforeNowDate(String datetimeStr) {
        String nowDate = getDate();
        return startEndDate(datetimeStr, nowDate);
    }

    /**
     * 判断dateStr是否是小于当前日期(精确的时间) 需要先确保datetimeStr是合法的日期
     * 
     * @param datetimeStr
     *            (YYYY-MM-DD HH:MM:SS)
     * @return
     */
    public static boolean isbeforeNowDate(String datetimeStr) {
        SimpleDateFormat dateFormat = new SimpleDateFormat(
                "yyyy-MM-dd HH:MM:SS");
        String nowDate = dateFormat.format(new Date());
        return parseDateTime(datetimeStr).getTime() < parseDateTime(nowDate)
                .getTime();
    }

    /**
     * 判断startDate,endDate是否至少相隔一天
     * 
     * @param startDatetime
     *            (YYYY-MM-DD HH:MM)
     * @param endDatetime
     *            (YYYY-MM-DD HH:MM)
     * @return
     */
    public static boolean startEndDate(String startDatetime, String endDatetime) {
        // 切取日期
        String startDate = startDatetime.split("\\s+")[0];
        String endDate = endDatetime.split("\\s+")[0];
        return parseDateTime(startDate).getTime() < parseDateTime(endDate)
                .getTime();
    }

    /**
     * 判断startDate是否比endDate大
     * 
     * @param startDatetime
     *            (YYYY-MM-DD HH:MM:SS)
     * @param endDatetime
     *            (YYYY-MM-DD HH:MM:SS)
     * @return
     */
    public static boolean isLaterDate(String startDatetime, String endDatetime) {
        return parseDateTime(startDatetime).getTime() > parseDateTime(
                endDatetime).getTime();
    }

    /**
     * 判断日期是否比当前时间早
     * 
     * @param time
     *            (YYYY-MM-DD HH:MM:SS)
     * @return
     */
    public static boolean isBeforeNow(String time) {
        return parseDateTime(time).getTime() < getTime();
    }

    /**
     * 判断startDate是否比endDate大
     * 
     * @param startDatetime
     *            (YYYY-MM-DD HH:MM:SS)
     * @param endDatetime
     *            (YYYY-MM-DD HH:MM:SS)
     * @return
     */
    public static boolean isLaterDateEqual(String startDatetime,
            String endDatetime) {
        return parseDateTime(startDatetime).getTime() >= parseDateTime(
                endDatetime).getTime();
    }

    /**
     * 在日期增加天数
     * 
     * @param dateStr
     * @param day
     * @return
     */
    public static String addDay(String dateStr, int day) {
        Date date = parseDateTime(dateStr);
        Calendar cal = Calendar.getInstance();
        cal.setTime(date);
        cal.add(Calendar.DAY_OF_MONTH, day);
        return dateToString(cal.getTime());
    }
    
    /**
     * 在当前日期增加天数
     * 
     * @param dateStr
     * @param day
     * @return
     */
    public static String addDay(int day) {
        Date date = new Date();
        Calendar cal = Calendar.getInstance();
        cal.setTime(date);
        cal.add(Calendar.DAY_OF_MONTH, day);
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyyMMdd");
        return dateFormat.format(cal.getTime());
    }

    /**
     * 修正mysql返回的时间日期最后多余的".0"
     * 
     * @param datetime
     * @return
     */
    public static String amendDatetime(String datetime) {
        if(datetime != null){
            return datetime.replaceAll("(.+)\\.\\d+", "$1");
        }
        return datetime;
    }

    /**
     * 分隔当前日期的年份,月份,日期
     * 
     * @return
     */
    public static String[] spliteDate() {
        return getDate().split("-");
    }

    /**
     * 获取当前时间毫秒数(1970)
     * 
     * @return
     */
    public static long getTime() {
        return new Date().getTime();
    }

    /**
     * 获取日期字符串表示的毫秒数
     * 
     * @param datetimeStr
     * @return
     */
    public static long getTime(String datetimeStr) {
        return parseDateTime(datetimeStr).getTime();
    }

    /**
     * 两个日期相差的天数
     * 
     * @param startDatetime
     * @param endDatetime
     * @return
     */
    public static int dayGap(String startDatetime, String endDatetime) {
        // 切取日期
        String startDate = startDatetime.split("\\s+")[0];
        String endDate = endDatetime.split("\\s+")[0];
        long gap = parseDateTime(endDate).getTime()
                - parseDateTime(startDate).getTime();
        return (int)(gap / (24 * 60 * 60 * 1000));
    }

    /**
     * 参数日期与当前日期相差的天数(小于当前日期返回正数, 大于当前日期返回负数)
     * 
     * @param startDatetime
     * @return
     */
    public static int dayGap(String dateStr) {
        String startDate = dateStr.split("\\s+")[0];
        String nowDate = getDate();
        long gap = parseDateTime(nowDate).getTime()
                - parseDateTime(startDate).getTime();
        return (int)(gap / (24 * 60 * 60 * 1000));
    }

    /**
     * 根据日期字符串返回时间的毫秒数,不合法返回-1
     * 
     * @param dateStr
     * @return
     */
    public static long getMilliSeconds(String dateStr) {
        if(isDatetime(dateStr)){
            Date date = parseDateTime(dateStr);
            if(date != null){
                return date.getTime();
            }
        }
        return -1L;
    }

    /**
     * 当前时间的day of month
     * 
     * @return
     */
    public static int dayOfMonth() {
        Calendar cal = Calendar.getInstance();
        return cal.get(Calendar.DAY_OF_MONTH);
    }

    /**
     * 当前时间的月份
     * 
     * @return
     */
    public static int getMonth() {
        Calendar cal = Calendar.getInstance();
        return cal.get(Calendar.MONTH) + 1;
    }

    /**
     * 返回日期"yyyy-mm-dd hh:mm:ss"各个字段值
     * 
     * @param date
     * @return
     */
    public static String[] getDateFields(String date) {
        String[] dd = date.split("\\s+");
        return dd[0].split("-");
    }

    /**
     * 获得下一个整10分钟的时间(Vence)
     * 
     * @param dateTimeStr
     * @return
     */
    public static String getNextTenMinTime(String dateTimeStr) {
        String result = null;
        try{
            SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
            Calendar cal = Calendar.getInstance();
            cal.setTime(sdf.parse(dateTimeStr));
            int minutes = cal.get(Calendar.MINUTE);
            // 获得离下一个整10分钟还差多少分钟
            int minutes2Add = minutes / 10 * 10 + 10 - minutes;
            // 换算成毫秒
            long millis2Add = minutes2Add * 60 * 1000;
            // 增加到dateTimeStr的时间中
            cal.setTimeInMillis(cal.getTimeInMillis() + millis2Add);
            // 去除秒和毫秒内容
            cal.set(Calendar.SECOND, 0);
            cal.set(Calendar.MILLISECOND, 0);
            // 获得结果字符串
            result = sdf.format(cal.getTime());
        }catch (ParseException e){
            return dateTimeStr;
        }
        return result;
    }

    /**
     * 获取两个时间之间的时间间隔(毫秒)
     * 
     * @param endTime
     * @return
     */
    public static long secondGap(String startDatetime, String endDatetime) {
    	long mss = parseDateTime(endDatetime).getTime()
                - parseDateTime(startDatetime).getTime();
        return mss;
    }
    public static void test() {
        Calendar cal = Calendar.getInstance();
        cal.add(Calendar.SECOND, 360000);
        System.err.println(cal.getTime().toString());
    }
}
