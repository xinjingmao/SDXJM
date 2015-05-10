package sdxjm.utils;

import java.util.ArrayList;
import java.util.List;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;

/**
 * transfer java object to json string, or other
 * 
 * 
 */
public class JsonUtil {
    /**
     * transfer java object to json text
     * 
     * @param obj
     * @return
     */
    public static String toJsonText(Object object) {
        return JSON.toJSONString(object);
    }

    public static Object toOjbect(String jsonText) {
        return JSON.parse(jsonText);
    }

    public static JSONObject parseObject(String jsonText) {
        return JSON.parseObject(jsonText);
    }

    public static <T> List<T> toList(String jsonArrayText, Class<T> clazz) {
        ArrayList<T> list = new ArrayList<T>();
        JSONArray array = JSONArray.parseArray(jsonArrayText);
        for(int i = 0; i < array.size(); i++){
            list.add(array.getObject(i, clazz));
        }
        return list;
    }
}
