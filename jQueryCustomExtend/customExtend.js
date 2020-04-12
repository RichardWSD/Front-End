/*******************************************************
 * 添加$.常用方法
 *******************************************************/

(function ($) {
    // 小数限制
    function fnLimitDecimal(value, keeps) {
        var prev = '';
        if (/^[\-\+]/gi.test(value))
            prev = value.substring(0, 1);
        value = value.replace(/[^\d.]/g, ""); //清除"数字"和"."以外的字符
        value = value.replace(/^\./g, ""); //验证第一个字符是数字而不是
        value = value.replace(/\.{2,}/g, "."); //只保留第一个. 清除多余的
        // value = value.replace(".", "$#$").replace(/\./g, "").replace("$#$", ".");

        var regx = new RegExp('^(\\d+)\\.(\\d{0,' + (keeps || 2) + '}).*$', 'g');
        value = value.replace(regx, '$1.$2'); //只能输入两个小数
        return prev + value;
    }

    // 整数限制
    function fnLimitInteger(value) {
        var prev = '';
        if (/^[\-\+]/gi.test(value))
            prev = value.substring(0, 1);

        value = value.replace(/[^\d]/g, "");
        return prev + value;
    }

    // 小数限制
    $(document).on('keyup', '.limit-decimal', function () {
        $(this).val(fnLimitDecimal($(this).val(), $(this).data('limit')));
    });
    $(document).on('afterpaste', '.limit-decimal', function () {
        $(this).val(fnLimitDecimal($(this).val(), $(this).data('limit')));
    });
    // 整数限制
    $(document).on('keyup', '.limit-integer', function () {
        $(this).val(fnLimitInteger($(this).val()));
    });
    $(document).on('afterpaste', '.limit-integer', function () {
        $(this).val(fnLimitInteger($(this).val()));
    });

    // 小数限制（范围）
    $(document).on('keyup', '.limit-decimal-range', function () {
        var rex = /(^[\+-]?\d*\.?\d*)(-([\+-]?\d*\.?\d*))?/gi;
        var arr = rex.exec($(this).val());

        if (undefined == arr[3]) {
            $(this).val(fnLimitDecimal($(this).val(), $(this).data('limit')));
        } else if (arr.length > 1) {
            var temp0 = fnLimitDecimal(arr[1], $(this).data('limit'));
            var temp1 = fnLimitDecimal(arr[3], $(this).data('limit'));
            $(this).val(temp0 + '-' + temp1);
        }
    });
    $(document).on('afterpaste', '.limit-decimal-range', function () {
        var arr = $(this).val().split('-');
        if (arr.length === 1) {
            $(this).val(fnLimitDecimal($(this).val(), $(this).data('limit')));
        } else if (arr.length > 1) {
            var temp0 = fnLimitDecimal(arr[0], $(this).data('limit'));
            var temp1 = fnLimitDecimal(arr[1], $(this).data('limit'));
            $(this).val(temp0 + '-' + temp1);
        }
    });
})(window.jQuery);


(function ($) {
    $.extend({
        /*
         * 转换为数字:空字符返回默认值或者0,其他非数字的，直接报错
         */
        toNumber: function(input, def) {
            if (undefined == input)
                return undefined == def ? 0 : def;

            if (input.constructor === String && $.trim(input).length === 0)
                return undefined == def ? 0 : def;

            if (isNaN(input))
                throw '非数字不可转换为数字';

            return new Number(input);
        },

        /*
         * 转换日期时间格式
         */
        dateFormat: function(date,format) {
            if (undefined === date || null === date)
                return '';
            var regex = /^\/Date\((-?\d*)\)\/$/gi;

            if (regex.test(date)) {
                var temp = RegExp.$1 * 1;
                if (temp === -2209017600000)
                    return '--';
                date = new Date(RegExp.$1 * 1);
            }
            return moment(date).format(format);
        },

        dateRangeFormat: function (start, end, format, splitter) {
            var startTemp = $.dateFormat(start, format);
            var endTemp = $.dateFormat(start, format);
            if (startTemp === endTemp)
                return startTemp;

            return startTemp + ' ' + (splitter || '-') + ' ' + endTemp;
        },

        /*
         * 数字格式转换（四舍五入，精确digits位数）
         */
        mathRoundFormat: function (data, digits) {
            debugger;
            if (isNaN(data)) {
                return data;
            }
            /*
             * 字符串 类型的值的位数没有限制（除了JavaScript的最大数组大小）。请参阅RANGE设置BigNumber的最大和最小可能的指数值。
             * Number类型报错：[BigNumber Error]数字原语有超过15个有效数字
             */

            return new BigNumber(Math.fround(data, digits) + '').toFormat(digits);
        },

        /*
         * object 转数组（格式[{name:"",value:""}...]）
         */
        toArray: function (obj, name) {
            return (function toArray(obj, name) {
                var arr = [];
                if (obj == undefined)
                    return arr;

                if (name === undefined)
                    name = '';

                if (obj instanceof Array) {
                    $.each(obj, function (index, item) {
                        var _name = name + '[' + index + ']';
                        $.each(toArray(item, _name), function (index2, item2) {
                            arr.push(item2);
                        });
                    });
                } else if (typeof obj === 'object' && obj.toString().toLowerCase() === '[object object]') {
                    $.each(obj, function (index, item) {
                        var _name = (name === '' ? '' : name + '.') + index;
                        $.each(toArray(item, _name), function (index2, item2) {
                            arr.push(item2);
                        });
                    });
                } else {
                    arr.push({ name: name, value: obj });
                }

                return arr;
            })(obj, name);
        },

        /*
         * 获取Url：全局配置$.global_config_urls
         */
        geturl:function(key) {
            return $.global_config_urls[key] || 'javascript:void(0)';
        },

        /*
         * 循环执行函数
         */
        loopExecutionFunc: function (args, size, fn) {
            size = size || 1000;
            var index = 0;
            do {
                index++;
                var start = (index - 1) * size;
                var end = index * size;
                if (end > args.length)
                    end = args.length;
                var tempArgs = [];
                for (start; start < end; start++) {
                    tempArgs.push(args[start]);
                }
                if (tempArgs.length > 0) {
                    fn(tempArgs);
                }
            } while ((index - 1) * size < args.length);
        },

        /*
         * 刷新url
         */
       locationReload:function() {
           var newUrl = (function(url) {
               var regex = /(?:[\?|&]_=(\d*))/gi;
               var matches = regex.exec(url);
               if (matches != null) {
                   var oldParamValue = matches[1];
                   var newParamValue = (oldParamValue || 0) * 1 + 1;
                   var _param = matches[0].replace(oldParamValue, newParamValue);
                   url = url.replace(matches[0], _param);
               } else {
                   url = url + ((url.lastIndexOf('?') > -1) ? '&_=1' : '?_=1');
               }
               return url;
           })(location.href);
            location.href = newUrl;
       },

        /*
         * 替换url
         */
       replaceUrl: function (url, param, iskeep) {
           debugger;
           var regex = /([^\?]+)(?:\?(.*))?/gi;
            var matches = regex.exec(url);
            if (matches != null) {
                var action = matches[1];
                var queryString = matches[2];
                var oldAgrs = {};
                if (iskeep) {
                    if (null != queryString && queryString !== '') {
                        $.each(queryString.split('&'), function (index,item) {
                            var arr = item.split('=');
                            oldAgrs[arr[0].toLowerCase()] = arr[1] || '';
                        });
                    }
                }
                var args = [];
                $.each($.toArray(param), function (index, item) {
                    if (undefined !== oldAgrs[item.name.toLowerCase()])
                        delete oldAgrs[item.name.toLowerCase()];
                    args.push(item.name + '=' + item.value);
                });

                $.each(oldAgrs, function(index, item) {
                    args.push(index + '=' + item);
                });
                return action + '?' + args.join('&');
            }
           return url;
       },

        /*
         * 模拟form表单提交
         */
       mockFormSubmit:function(option){
           var options = $.extend(true, {
               type:"get"
           }, option);
           if (undefined === options.url || null === options.url)
               alert("mockFormSubmit.options未指定url!");

           var $hds = $.map(option.data, function (arg, i) {
                   return $('<input />', arg);
           });
           var $form = $('<form>', { action:options.url,method:options.type }).append($hds).appendTo($('body'));
           $form.submit();
           $form.remove();
       }
    });
})(window.jQuery);