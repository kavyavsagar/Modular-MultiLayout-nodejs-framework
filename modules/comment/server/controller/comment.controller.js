
var comment = new Module('comment');
var commentModel = comment.setModel('comment');

var commentController = { 

	comments : function(req, res){ 
		comment.setLayout('grey.handlebars');
		res.render('comments', {'message' :'You can comment here'});
		
	}
};
module.exports = commentController;
