package com.yck.usercenter.common;

/**
 * 返回工具类
 *
 * @author yck
 */
public class ResultUtils {

    /**
     * 成功返回结果
     *
     * @param data 返回数据
     * @param <T>  数据类型
     * @return 成功结果
     */
    public static <T> BaseResponse<T> success(T data) {
        return new BaseResponse<T>(20000, data, "ok");
    }

    /**
     * 错误返回结果
     *
     * @param errorCode 错误码
     * @return 错误结果
     */
    public static BaseResponse error(ErrorCode errorCode) {
        return new BaseResponse<>(errorCode);
    }

    /**
     * 错误返回结果
     *
     * @param code 错误码
     * @return 错误结果
     */
    public static BaseResponse error(int code, String message, String description) {
        return new BaseResponse<>(code, null, message, description);
    }

    /**
     * 错误返回结果
     *
     * @param errorCode   错误码
     * @param message     失败信息
     * @param description 详情描述
     * @return 错误结果
     */
    public static BaseResponse error(ErrorCode errorCode, String message, String description) {
        return new BaseResponse<>(errorCode.getCode(), null, message, description);
    }


    /**
     * 错误返回结果
     *
     * @param errorCode   错误码
     * @param description 详情描述
     * @return 错误结果
     */
    public static BaseResponse error(ErrorCode errorCode, String description) {
        return new BaseResponse<>(errorCode.getCode(), null, errorCode.getMessage(), description);
    }

}
