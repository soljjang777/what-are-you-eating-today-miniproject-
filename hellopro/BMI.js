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
        alert("肥満");
    } else if( bmi >= 23.0 && bmi < 25.0 ){
        alert("過体重");
    } else if( bmi >= 18.0 && bmi < 23.0 ){
        alert("正常");
    } else {
        alert("低体重");
    }
}