// uses of modules 

export const square =(x)=>x*x;
export const cube =(a)=> a*a*a;
export const factorial =(num)=>{
    if(num<=1)
    return 1;
return num*factorial(num-1);
};