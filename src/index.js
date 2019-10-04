module.exports = function check(str, bracketsConfig) {
    let stack = [];
    let count = bracketsConfig.length;
    let bracket = '';

    for(let i = 0; i <= str.length; i++){
        for(let j = 0; j < count; j++){
            if ((str[i] == bracketsConfig[j][1])&&(stack.length != 0)){
                bracket = stack.pop();
                if (bracket != bracketsConfig[j][0]){
                    stack.push(bracket);
                }
                else{
                    break;
                }
            }
            if (str[i] == bracketsConfig[j][0]){
                stack.push(bracketsConfig[j][0]);
                break;
            } 
            if((str[i] == bracketsConfig[j][1])&&(stack.length == 0)){
                return false;
            }
        }
    }
    if(stack.length == 0){
        return true;
    }
    else{
        return false;
    }
}
