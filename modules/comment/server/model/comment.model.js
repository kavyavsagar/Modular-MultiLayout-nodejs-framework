// setup mongoose and db variable 
var mongo = dbconnect.mongoose;
var Schema   = dbconnect.Schema; 
/*
 * 
 * Comment schema
 */
var CommentSchema = new Schema({
    subject: {
        type: String,
        default: '',
        trim: true
    },
    name: {
        type: String,
        default: '',
        trim: true
    },
    message: {
        type: String,
        default: '',
        trim: true
    },        
    created: {
        type: Date,
        default: Date.now
    }
});

/*
 * define model of comments schema
 */
var Comment = mongo.model('comments', CommentSchema);

var CommentData = { 

	insert : function(req, res){
		
        var data = new Comment(req);

		data.save(function (err, todo) {
            if(err) {console.log('error'); res(false);}

            res(true);
        });		
	},
  
};
module.exports = CommentData;