const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://naymc0:Dr3amw3av3r@@cluster0-mjza5.mongodb.net/test?retryWrites=true&w=majority', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false
})

.then(db => console.log('DB is connected'))
.catch(err => console.log(err));