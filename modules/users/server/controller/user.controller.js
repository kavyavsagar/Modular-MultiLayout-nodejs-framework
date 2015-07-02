
var userMod = new Module('users');
var userModel = userMod.setModel('user');

var authController = { 

	addUser : function(req, res){


		var userInsert = {                                   
                   email : 'jithin@cubettech.com',
                   name: 'Jithin Tc',
                   password : '123456'
                }; 

		userModel.insert(userInsert, function(result){
			if(result)
				console.log('success');
		});
	},
	getUsers : function(req, res){
		userMod.setLayout('purple.handlebars');
		userModel.listUser(function(result){
			if(result)				
				res.render('userlists', {'message' :result});
		
		});
	}
};
module.exports = authController;
