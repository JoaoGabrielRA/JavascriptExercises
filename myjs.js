const inputs = document.querySelectorAll('input');
const labels= document.querySelectorAll('label');

for(let i in inputs){
    if((inputs[i].type !== 'file') && (inputs[i].type !== 'date') ){
        try{
            labels[i].classList.add('floating');
        }catch(e){}
    }
}

for(let i in labels){

    console.log(labels[i]);
}
