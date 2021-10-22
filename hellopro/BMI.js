function call() {
    let kg = document.getElementById('kg')
    let cm = document.getElementById('cm')

    if(kg.value == ''){
        alert('体重を入力してください！');
        kg.focus();
        return false
    }
    if(cm.value == ''){
        alert('身長を入力してください！');
        cm.focus();
        return false
    }

    let bmi = Number(kg.value) / ((Number(cm.value)/100) * ((Number(cm.value)/100)));
    alert('あなたの体質量指数は' + bmi.toFixed(2) + 'となります。')
    if( bmi >= 25.0 ){
        alert("비만");
    } else if( bmi >= 23.0 && bmi < 25.0 ){
        alert("과체중");
    } else if( bmi >= 18.0 && bmi < 23.0 ){
        alert("정상");
    } else {
        alert("저체중");
    }
}