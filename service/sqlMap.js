//sql语言
const  sqlMap = {
  user: {
    add: 'insert into a(id,name,keshi,fuze,phone,place,fangshu,chuangwei) values(0,?, ?, ?, ?, ?, 30, 80)',
    show: 'select  *  from a ',
    showB: 'select  *  from b ',
    showC: 'select  *  from c ',
    del: 'delete from a where id = ?',
    delB: 'delete from b where id = ?',
    update: 'update a set name = ?,keshi = ?,fangshu="30",chuangwei="80",fuze = ?,phone = ?,place = ? where id = 0',
    search:'select * from a where name=? and keshi=?',
    searchB:'select * from b where id=?',
    searchC:'select * from c where id=?',
  },

}
module.exports = sqlMap;
