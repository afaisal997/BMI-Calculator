const form = document.querySelector('form');

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    const height = parseInt(document.querySelector('#Height').value);
    const weight = parseInt(document.querySelector('#Weight').value);
    const result = document.querySelector('#bmi-value');
    const conclusion = document.querySelector('.conclusion');

    if(height === '' || isNaN(height) || height < 0){
        result.innerHTML = `Please provide a valid height ${height}`;
    }else if(weight === '' || isNaN(weight) || weight < 0){
        result.innerHTML = `Please provide a valid weight ${weight}`;
    }
    else{
        const bmi = (weight/((height*height)/10000)).toFixed(2);
        // show the result
        result.innerHTML = `<span></span>${bmi}`;
        // show the conclusion
        if(bmi < 18.5){
            conclusion.innerHTML = `<h3 style="color: orange;">Underweight</h3>`;
        }
        else if(bmi >= 18.5 && bmi <= 24.9){
            conclusion.innerHTML = `<h3 style="color: green;">Normal</h3>`;
        }
        else if(bmi >= 25 && bmi <= 29.9){
            conclusion.innerHTML = `<h3 style="color: orangered;">Overweight</h3>`;
        }
        else if(bmi >= 30){
            conclusion.innerHTML = `<h3 style="color: red;">Obese</h3>`;
        }
    }    
    
})