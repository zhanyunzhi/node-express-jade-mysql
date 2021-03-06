/**
 * Created by ZYZ on 2016/9/3.
 */
$(function(){
    setFootOn('#manage');  //设置底部选中
    $('#add').click(function() {       //保存添加的内容
        var formParam = $("form").serialize();//序列化表格内容为字符串
        formParam += '&productName=' + $("#productId").find("option:selected").text();   //将选择框的文本（即产品的名称）加入提交的参数中
        if(!isEmptyById('name', '级别名称不能为空')){
            return false;
        };
        if($("#productId").val() == 0){       //必须选择产品
            showWarnMsg('请选择产品名称');
            return false;
        };
        if(!isEmptyById('price', '价格不能为空')){
            return false;
        };
        if(isNaN($("#price").val())){       //价格只能输入数字
            showWarnMsg('价格只能输入数字');
            return false;
        };
        $('#loadingToast').show();
        $.ajax({
            type:'POST',
            url:'/levels/add',
            data:formParam,
            cache:false,
            dataType:'json',
        }).done(function(data) {
            if(data.code == 200) {
                showDialogOneMsg('添加成功','添加代理级别成功，点击‘继续添加’继续添加代理级别，点击‘返回’返回上一级','继续添加','返回', '/levels/list');
            } else if(data.code == 2) {
                showDialogTwoMsg('添加失败','当前代理级别已存在','确定');
            } else if(data.code == 3) {
                showWarnMsg('级别名称、产品、价格不能为空');
            } else{
                showDialogTwoMsg('添加失败','请稍后重试','确定');
            }
        }).fail(function() {
            showDialogTwoMsg('添加失败','请稍后重试','确定');
        }).always(function() {
            $('#loadingToast').hide();
        });
    });
    //修改内容
    $('#edit').click(function() {
        var formParam = $("form").serialize();//序列化表格内容为字符串
        formParam += '&productName=' + $("#productId").find("option:selected").text();   //将选择框的文本（即产品的名称）加入提交的参数中
        if(!isEmptyById('name', '级别名称不能为空')){
            return false;
        };
        if($("#productId").val() == 0){       //必须选择产品
            showWarnMsg('请选择产品名称');
            return false;
        };
        if(!isEmptyById('price', '价格不能为空')){
            return false;
        };
        if(isNaN($("#price").val())){       //价格只能输入数字
            showWarnMsg('价格只能输入数字');
            return false;
        };
        $('#loadingToast').show();
        $.ajax({
            type:'POST',
            url:'/levels/edit',
            data:formParam,
            cache:false,
            dataType:'json',
        }).done(function(data) {
            if(data.code == 200) {
                showDialogOneMsg('修改成功','已生成的订单不受影响','留在本页','返回上一级', '/levels/list');
            } else if(data.code == 2) {
                showDialogTwoMsg('修改失败','当前代理级别不存在','确定');
            } else if(data.code == 3) {
                showWarnMsg('级别名称、产品、价格不能为空');
            } else{
                showDialogTwoMsg('修改失败','请稍后重试','确定');
            }
        }).fail(function() {
            showDialogTwoMsg('修改失败','请稍后重试','确定');
        }).always(function() {
            $('#loadingToast').hide();
        });
    });

})