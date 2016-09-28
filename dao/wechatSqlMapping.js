// dao/userSqlMapping.js
// CRUD SQL语句
var wechat = {
    addWxOpenId:'INSERT IGNORE INTO user(wxOpenId,addTime,editTime) VALUES(?,?,?)',
    addWxUser: 'INSERT IGNORE INTO user (wxOpenId,addTime,editTime,nickname,sex,province,city,country,headimgurl,subscribe_time,subscribe) values (?,?,?,?,?,?,?,?,?,FROM_UNIXTIME(?),?);',      //关注的时候新增用户数据，数据库中建立了name和userId的唯一索引，这里如果name和userId已存在的话将不会插入，影响行数为0，否则插入影响行数为1（insert ignore）
    updateWxUser: 'UPDATE IGNORE user set editTime=?,nickname=?,sex=?,province=?,city=?,country=?,headimgurl=?,subscribe=?,subscribe_time=FROM_UNIXTIME(?) where wxOpenId=?',      //关注的时候更新用户数据数据库中建立了name和userId的唯一索引，这里如果name和userId已存在的话将不会插入，影响行数为0，否则插入影响行数为1（insert ignore）
    unsubscribe: 'UPDATE IGNORE user set subscribe=? where wxOpenId=?',      //取消关注
    edit:'update ignore agent set name=?, productName=?, levelName=?, price=?, editTime=?, remark=? where id=? and userId=?',
    queryByOpenId: 'select id,subscribe from user where wxOpenId=?',        //根据微信openid查询，查询数据库中是否存在当前openid
    queryAll: 'select id,name,levelName,productName,userId,price,remark from agent where userId=?',
    delete: 'delete from agent where id=? and userId=?'
};

module.exports = wechat;