// dao/userSqlMapping.js
// CRUD SQL语句
var product = {
    add:'INSERT INTO product(name,remark,userId,userName,addTime,editTime,totalCount) VALUES(?,?,?,?,?,?,0)',
    queryByName:'select * from product where name=? and userId=?',
    queryAll: 'select * from product where userId=?',
    queryById: 'select * from product where id=?',
    edit:'update product set name=?, remark=?, editTime=? where id=?',
    delete: 'delete from product where id=?',
};

module.exports = product;