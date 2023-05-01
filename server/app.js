const app = require("./index");

app.listen(app.get('port'), () => {
    console.log(`Server is Listening at http://localhost:${app.get('port')}`);
})