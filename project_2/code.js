const form =document.querySelector('form');
form.addEventListener('submit',function(e){
    e.preventDefault();
    const height=parseFloat(document.querySelector('#height').value);
    const weight=parseFloat(document.querySelector('#weight').value);
    if(height<=0 || height==="" || isNaN(height)){
        alert("Please enter a valid height");
    }
    else if(weight<=0 || weight==="" || isNaN(weight)){
        alert("Please enter a valid weight");
    }
    else{
        const bmi = ((weight / (height * height)) * 10000).toFixed(2);
    if(bmi<18.5){
        document.querySelector('#result').textContent = ` ${bmi}. You are Underweight.`;
    }
    else if(bmi>=18.5 && bmi<=24.9){
        document.querySelector('#result').textContent = ` ${bmi}. You are Normalweight.`;
    }
    else if(bmi>=25 && bmi<=29.9){
        document.querySelector('#result').textContent = ` ${bmi}. You are Overweight.`;
    }
    else{
        document.querySelector('#result').textContent = ` ${bmi}. You are Obese.`;
    }
    }
    


})