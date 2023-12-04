const button=document.querySelector('#btn')
const closebtn=document.querySelector('#close')
const btnsave=document.querySelector('#btnsave')
const title=document.querySelector('#title')
const description=document.querySelector('#descrip')
const parentNote=document.querySelector('#parentNote')
//model ka
const model=document.getElementById('model')
button.addEventListener('click',function(){
model.style.display='block'
})
///btn close ka
closebtn.addEventListener('click',function(){
    model.style.display='none'
})
//btn save 
btnsave.addEventListener('click',function(){
    if(title.value != "" && description.value != ""){
        const newdev=document.createElement('div');

        newdev.innerHTML=title.value;
        newdev.innerHTML += `<br>${description.value}`;
        
        parentNote.appendChild(newdev)
        newdev.style.backgroundColor='blue'
        newdev.style.padding='15px'
        newdev.style.color='white'
        model.style.display='none';
        

    }

})
