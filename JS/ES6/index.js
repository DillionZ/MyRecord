1. 字符串的扩展：
    实例方法：
        includes()：返回布尔值，表示是否找到了参数字符串。
        startsWith()：返回布尔值，表示参数字符串是否在原字符串的头部。
        endsWith()：返回布尔值，表示参数字符串是否在原字符串的尾部。
        repeat()：返回一个新字符串，表示将原字符串重复n次。
            'na'.repeat(NaN) // ""    //参数NaN等同于 0  
            'na'.repeat(Infinity)    //如果repeat的参数是负数或者Infinity，会报错。
            // RangeError
            'na'.repeat(-1)
            // RangeError
            'na'.repeat(2.9) // "nana"   //参数如果是小数，会被取整。

        padStart() 用于头部补全 , padEnd() 用于尾部补全
        trimStart()消除字符串头部的空格, trimEnd() 消除尾部的空格 ; 它们返回的都是新字符串，不会修改原始字符串。
        matchAll() 方法返回一个正则表达式在当前字符串的所有匹配
