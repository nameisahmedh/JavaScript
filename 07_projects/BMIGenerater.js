const form = document.querySelector('form')

form.addEventListener('submit',(e)=>{
    // this e.preventDefault is used because as we submit anyform it should be done in post or get stages to go near server as to stop this we use e.preventDefault()
    e.preventDefault()

    const weight = parseInt(document.querySelector('#weight').value)
    const height = parseInt(document.querySelector('#height').value)
    const result = document.querySelector('#result')
    let status;
    
    if(weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML = "Please give a valid weight"
        
    }
    else if(height === '' || height < 0 || isNaN(height)){
        result.innerHTML = "Please give a valid height"
        
    }
    else{
        const bmi =  (weight*10000/(height*height)).toFixed(1)
        
        if(bmi<=18.4){
            status = "Underweight"
        
        }
        else if(bmi>=18.5 && bmi<=24.9){
            status = "Normal"
            
        }
        else if(bmi>=25.0 && bmi<=29.9){
            status = "OverWeight"
        
        }
        else{
            status = "Obese"
            
        }
        result.innerHTML = `<span>Your BMI is ${bmi} with status as ${status}</span>`
    }
})