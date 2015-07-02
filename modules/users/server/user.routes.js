
var userCtrl = new Module('users').setController('user');
/*
* Routing declaration
*/

app.post('/adduser', userCtrl.addUser);
app.get('/user',  userCtrl.getUsers);
