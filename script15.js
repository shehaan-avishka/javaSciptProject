const color = ["Blue", "Green", "Red", "Orange", "Violent", "Indigo", "Yellow"];
const o = ["th", "st", "nd", "rd"];

for( let i=0; i< color.length; ++i){
    let j = i+1;
    if (j==1){
        console.log(j+o[1]+ " choice is "+color[i]);
    }else if(j==2){
        console.log(j+o[2]+ " choice is "+color[i]);
    }else if(j==3){
        console.log(j+o[3]+ " choice is "+color[i]);
    }else{
        console.log(j+o[0]+ " choice is "+color[i]);
    }
}