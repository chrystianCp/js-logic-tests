const timeConversion = (s) => {
    // Write your code here
  let horas = s.slice(0,2);
  let minutos = s.slice(3,5);
  let segundos = s.slice(-4,-2);
  let ampm = s.slice(-2);
  let res = '';
  
  if(ampm === 'AM'){
    if(horas === '12'){
    	horas = '00';
    }  	
    res = `${horas}:${minutos}:${segundos}`;    
  }
  if(ampm==='PM'){    
    if(horas==='12'){
      return res = `${horas}:${minutos}:${segundos}`;
    }
    horas = parseInt(horas) + 12;    
    return res = `${horas}:${minutos}:${segundos}`;    
  }  
  return res;
}

console.log(timeConversion('12:45:54PM'));