  class CommonService {
 
     Insert(schema, insertData, done){
    
        schema.model.insertMany(insertData,(err, doc) => {
            if (err) {
                return done(err);
            }

            return done(null, doc);
        });


    }

    RemoveDocuments(schema, condition,  done){
        schema.model.remove(condition,(err,doc)=>{
            if (err) {
                return done(err);
            }

            return done(null, doc);
        })
    }

    Fetch(schema,condition,projection, skipObj, done){
        schema.model.find(condition,projection, skipObj, (err, doc)=>{
            if(err){
                return done(err);
            }
            return done(null, doc);
        })
    }

    Update(schema,condition,updatedValues, done){
        schema.model.update(condition,{$set : updatedValues}, (err, doc) =>{
            if(err){
                return done(err);
            }
            return done(null, doc);
        })
    }


findOneAndUpdate(schema,condition,updatedValues, done){
    schema.model.findOneAndUpdate(condition,{$set : updatedValues}, {new: true}, (err, doc) =>{
        if(err){
            return done(err);
        }
        return done(null, doc.toJSON());
    })
}
async getCount(schema, query) {
    return await schema.model.count( query);
}
}

module.exports = new CommonService();


