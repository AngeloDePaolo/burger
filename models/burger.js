var orm = require ("../config/orm");

var burger = {
    all: (cb)=> {
        orm.allBurgers((res)=> {
            cb(res);
        })
    },
    create: (title, cb) =>{
        orm.createBurger(title, cb);
    },
    update: (id, cb)=>{
        orm.updateBurger(id, cb);
    }
}

module.exports = burger;