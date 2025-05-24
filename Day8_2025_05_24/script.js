function appendToScreen(value){
    document.getElementById('screen').textContent += value;
}
function clearToScreen(){
    document.getElementById('screen').textContent ='';
}
function calculate(){
    const screen = document.getElementById('screen');
    try{
        const result = eval(screen.textContent.replace('x','*'));
        screen.textContent = isFinite(result) ? result : 'Lỗi';

    } catch{
        screen.textContent = 'Lỗi';
    }
}