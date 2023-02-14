const tip = document.querySelector('#tip'),
billamount = document.querySelector('#billAmount'),
totalpeople = document.querySelector('#totalPeople'),
calculate   =document.querySelector('#calculate'),
selection =document.querySelector('#serviceQuality')


function result(){
    console.log(billamount.value)
    let result = (billamount.value * selection.value) / totalpeople.value
    console.log(result)
    if (result == 'NaN'){
        console.log('try all time')
        const container =document.querySelector('#container')
        const element=document.createElement('div')
        element.classList.add('error')
        element.textContent = 'you left one of inputs empty'
        container.insertAdjacentHTML("beforebegin", element);

    }

    return result
}

calculate.addEventListener('click',()=>{
    
    tip.innerHTML = result()
})

