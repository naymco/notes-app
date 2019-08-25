const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://naymco:D%r3%a%m%w%3av%3r%@@cluster0-vamxx.mongodb.net/test?retryWrites=true&w=majority', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false
})

.then(db => console.log('DB is connected'))
.catch(err => console.log(err));