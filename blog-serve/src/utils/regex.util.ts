// This file contains regular expressions used for validation in the application.

// 正整数
export const REGEX_POSITIVE_INTEGER: RegExp = /^[1-9]\d*$/;

// 非空字符串
export const REGEX_NOT_EMPTY: RegExp = /^(?!\s*$).+/;

// 中文
export const REGEX_CHINESE: RegExp = /^[\u4e00-\u9fa5]+$/;

// 非中文
export const REGEX_NOT_CHINESE: RegExp = /^[^\u4e00-\u9fa5]+$/;

// 邮箱
export const REGEX_EMAIL: RegExp = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;

// URL
export const REGEX_URL: RegExp = /^(https?|ftp|file):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/

// 手机号
export const REGEX_PHONE: RegExp = /^1[3456789]\d{9}$/;

// 身份证号
export const REGEX_ID_CARD: RegExp = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;

// 邮政编码
export const REGEX_POSTAL_CODE: RegExp = /^[1-9]\d{5}$/;

// 6-20位字母、数字、特殊字符的组合，至少包含两种
export const REGEX_PASSWORD_6_20: RegExp = /^(?![a-zA-z]+$)(?!\d+$)(?![!@#$%^&*]+$)[a-zA-Z\d!@#$%^&*]{6,20}$/;
// 6-20位字母、数字、特殊字符的组合，至少包含三种
export const REGEX_PASSWORD_6_20_THREE: RegExp = /^(?![a-zA-z]+$)(?!\d+$)(?![!@#$%^&*]+$)[a-zA-Z\d!@#$%^&*]{6,20}$/;

// 生肖
export const REGEX_ZODIAC: RegExp = /^([鼠牛虎兔龙蛇马羊猴鸡狗猪])$/;
