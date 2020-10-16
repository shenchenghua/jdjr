$(document).ready(function () {
    var sub = $('#sub') //二级菜单

    var activeRow   //行
    var activeMenu  //对应的二级菜单

    $('#test') //最大的div包含了一级二级菜单
        .on('mouseover' , function (e) {  //enter :父亲的不归儿子所有(不支持冒泡) 应用over
            if(e.target.nodeName == "LI") {
                sub.removeClass('none')
            }
        })
        .on('mouseleave' , function () {
            sub.addClass('none') 

            if (activeRow) {
                activeRow.removeClass('active')
                activeRow = null
            }
            if (activeMenu) {
                activeMenu.addClass('none')
                activeMenu = null
            }

        })
        .on('mouseenter', 'li', function (e) {
            if (!activeRow) {                               //从外进入li
                activeRow = $(e.target).addClass('active')  //e.target相当愉悦this $(e.target)相当于li
                console.log(activeRow);
                activeMenu = $('#' +  activeRow.data('id')) //获得对应的二级菜单 activeRow相当于li
                console.log(activeRow.data()); 
                activeMenu.removeClass('none')
                return
            }
            //从一个li进入另一个li
            activeRow.removeClass('active')
            activeMenu.addClass('none')

            activeRow = $(e.target)
            activeRow.addClass('active')
            activeMenu = $('#' + activeRow.data('id'))
            activeMenu.removeClass('none')
        } )
})