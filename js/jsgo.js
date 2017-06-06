var jsgo = (function($) {

    /**
     * 过滤code-div的字符串根据关键字改变颜色
     */
    let codeTextFilter = ()=> {
        const dataType = ['var ', 'let ', 'const ', 'function ', 'for ', 'if ', 'else ', 'of ', 'new']
        let $codeText = $('.code-div')
        $codeText.each(function() {
            let htmlTemp = $(this).html()
            for(let dt of dataType) {
                htmlTemp = htmlTemp.split(dt).join('<span>'+ dt + '</span>')
            }
            $(this).html(htmlTemp)
        })
    }

    /**
     * 绑定点击事件执行run
     */
    let doRun = ()=> {
        $('body').on('click', '.code-div button', function() {
            buttonAnimate($(this))
            clearLog()
            runFunc('func1')
        })
    }

    /**
     * run按钮动画
     * @param obj
     */
    let buttonAnimate = (obj)=> {
        obj.addClass('animated flipInX')
        let timeId = setTimeout(()=> {
            obj.removeClass('animated flipInX')
            clearTimeout(timeId)
        }, 1000)
    }

    /**
     * 运行实例js
     * @param funcName
     */
    let runFunc = (funcName)=> {
        eval(funcName + '()')
    }

    /**
     * 将log写入console
     * @param logStr
     */
    let log = (logStr)=> {
        const $rd = $('.result-div')
        let log = '<p>=> ' + logStr + '</p>'
        $(log).appendTo($rd)
        resultAnimate()
    }

    /**
     * log动画
     */
    let resultAnimate = ()=> {
        $('.result-div p').addClass('animated slideInDown')
    }

    /**
     * 清除之前的log
     */
    let clearLog = ()=> {
        $('.result-div').empty()
    }

    let func1 = ()=> {
        function Person(){}
        let person = new Person()
        person.name = 'javascript'
        log(person.name)
    }

    return {
        init: ()=> {
            codeTextFilter()
            doRun()
        }

    }
})(jQuery)