const port = 3000;
const { appendFile } = require('fs');
const path = require('path');
const basePath = path.join(__dirname, 'arquivos');

const checkAuth = function (req, res, next){
    req.authStatus = true;

    if(req.authStatus){
        console.log("Esta logado, continue");
    } else {
        console.log("Faça o login para continuar!");
    }
}

app.use(checkAuth)

app.get('/', (req,res) => {
    res.sendFile(`${basePath}/index.html`)
});