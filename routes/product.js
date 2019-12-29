var express = require('express');
var router = express.Router();

router.get('/',function (req,res,nex) {
    var dataMsg ={
        code:0,
        data:{name:'大福',age:3},
        msg:'请求成功'
    }
    res.json(dataMsg);
});

module.exports = router;