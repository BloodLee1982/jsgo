var jsgo = (function($) {

    /**
     * ����code-div���ַ������ݹؼ��ָı���ɫ
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
     * �󶨵���¼�ִ��run
     */
    let doRun = ()=> {
        $('body').on('click', '.code-div button', function() {
            buttonAnimate($(this))
            clearLog()
            runFunc('func1')
        })
    }

    /**
     * run��ť����
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
     * ����ʵ��js
     * @param funcName
     */
    let runFunc = (funcName)=> {
        eval(funcName + '()')
    }

    /**
     * ��logд��console
     * @param logStr
     */
    let log = (logStr)=> {
        const $rd = $('.result-div')
        let log = '<p>=> ' + logStr + '</p>'
        $(log).appendTo($rd)
        resultAnimate()
    }

    /**
     * log����
     */
    let resultAnimate = ()=> {
        $('.result-div p').addClass('animated slideInDown')
    }

    /**
     * ���֮ǰ��log
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