function login (input){
    let username = input[0];
    let index = 1;
    let password = '';
    let tryCount=0;
    for (let i = (username.length-1); i >= 0; i--){
        password += username.charAt(i);
    }
    let attempt = input[index];
    while (attempt!==password){
        tryCount++;
        if(tryCount===4){
            console.log(`User ${username} blocked!`);
            break;
        }
        console.log('Incorrect password. Try again.');
        index++;
        attempt = input[index];
    }
    if (attempt===password){
        console.log(`User ${username} logged in.`);
    }
}
login (['Acer','login','go','let me in','recA']);