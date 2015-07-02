
var commentCtrl = new Module('comment').setController('comment');
/*
* Routing declaration
*/

app.get('/comments', commentCtrl.comments);
