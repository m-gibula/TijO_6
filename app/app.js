function findMax(array)
{
    var i =0;
    for(i=0;i<array.length;i++){
        if(isNaN(array[i])){
            return false;
        }

    }
    return Math.max(array);
}
module.exports = {
    findMax: findMax
};
