module.exports = (err, req, res, next)=>{
    console.log(err);
    let code;
    let name = err.name;
    let message;

    switch(name){
        case 'LOGIN FAILED':
            code = 401;
            message = 'Kombinasi user dan password tidak ditemukan';
            break;
        case 'ALREADY EXIST':
            code = 400;
            message = 'Email atau Username Sudah Terdaftar';
            break;
        case 'NOT FOUND':
            code = 404;
            message = 'Kombinasi user dan password tidak ditemukan';
            break;
        case 'UNAUTHORIZED':
            code = 401;
            message = 'Anda Tidak Memiliki Autorisasi';
            break;
        case 'MISSING ACCESS TOKEN':
            code = 403;
            message = 'Access Token Tidak Ada';
            break;
        default:
            code = 500;
            message = 'Internal Server Error';
    }

    res.status(code).json({succes:false, message});
}