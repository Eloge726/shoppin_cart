// let btn1=document.getElementById('bt1')
// btn1.addEventListener('click',function increase(){

// })

function increase(id,p,ctn,t){
    let inp=document.getElementById(id)
    let val=inp.value
    
    val++
    
    console.log(val)
    inp.value=val
    // inc prix
    let sp=document.getElementById(p)
 
    sp.innerHTML=val*ctn
    // inc total
    let total=document.getElementById(t)
    let sum=parseInt(total.innerHTML)
    sum=sum+ctn
    total.innerHTML=sum




}


function decrease (id, p, cnst,t){
    let imp=document.getElementById(id)
    let val=imp.value
    if (val>0){
        val--
    }
    
    console.log(val)
    imp.value=val 
    // dec prix
    let sp= document.getElementById(p)
    
    sp.innerHTML= val*cnst
     // inc total
     let total=document.getElementById(t)
     let sum=parseInt(total.innerHTML)
     if (sum>0){
     sum=sum-cnst
     total.innerHTML=sum}
     
}

function supprimer(id){
    let parent=document.getElementById(id)
    parent.remove()
}
// let h=document.getElementById('far1')
// h.addEventListener('click',function () {
//     console.log('hello')
    
//     h.style.color='red'
// })
let j=false
function styling(id){
    j=!j
    let h=document.getElementById(id)
    if(j){
    h.style.color='red'
    }
}

function somme(n1, n2, c1,c2,t){
 let nb1= document.getElementById(n1)
 let nb2 =document.getElementById(n2)
 let pt= document.getElementById(t)
 let val1=nb1.value
 let val2=nb2.value
 pt.innerHTML = (val1*c1) + (val2*c2)
}