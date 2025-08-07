const validate = (schema)=> {
    return (req, res, next)=> {
        const result = schema.validate(req.body,{ abortEarly: false, stripUnknown: true });
        if(result.error){
            const errors = result.error.details.map((d)=> d.message);
            return res.status(400).json(errors);
        }
        req.body = result.value;
        next();
    };
};

module.exports = validate;
