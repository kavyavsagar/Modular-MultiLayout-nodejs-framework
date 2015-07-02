// setup mongoose and db variable 
var mongo = dbconnect.mongoose;
var Schema   = dbconnect.Schema; 
/*
 * 
 * User schema
 */
var UserSchema = new Schema({
    email: {
        type: String,
        default: '',
        trim: true
    },
    name: {
        type: String,
        default: '',
        trim: true
    },
    password: {
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
 * define model of user schema
 */
var User = mongo.model('users', UserSchema);

var Authentication = { 

	insert : function(req, res){
		
        var data = new User(req);

		data.save(function (err, todo) {
            if(err) {console.log('error'); res(false);}

            res(true);
        });		
	},
    listUser : function(res){

        User.find({}, function(err, users) {       
            if(err) {console.log('error'); res(false);}

            res(users);
        }); 
    }
};
module.exports = Authentication;