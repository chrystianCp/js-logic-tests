//TODO: 


function gradingStudents(grades) {
    // Write your code here
    let res = [];
    for(let el of grades){
        if(el<38){
            res.push(el);
        }else if(el+1 === Math.ceil(el/5)*5){
          res.push(Math.ceil(el/5)*5);
        }else if(el+2 === Math.ceil(el/5)*5){
            res.push(Math.ceil(el/5)*5);
        }else{
          res.push(el);
        }
    }
    return res;
}