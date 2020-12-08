const token = req.cookies.customer_t;
    if (!token) {
        res.json({
            message: 'fail'
        })
    }

    jwt.verify(token, secretObj, (err, decoded) => {
        console.log(decoded)
        if (!decoded) {
            res.json({
                message: 'fail',
                err: err
            })
        } else {
            models.customers.findAll({}).then((customerList) => {
                res.json({
                        message: 'success',
                        customerList
                    })
                    .catch(err => {

                        console.error(err);
                        res.json({
                            message: 'fail'
                        })
                    });;
            }) // 이곳으로 productList보내기
        }
    })