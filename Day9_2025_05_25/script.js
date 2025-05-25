document.addEventListener('DOMContentLoaded',() => {
    const imageSelect = document.getElementById('imageSelect');
    const changeButton = document.getElementById('changeButton');
    const body = document.body;
    
    if (changeButton && imageSelect && body){
        changeButton.addEventListener('click', () => {
            const selectImageUrl = imageSelect.value;
            if (selectImageUrl && !selectImageUrl.startsWith('#')){
                body.style.backgroundImage = `url('${selectImageUrl}')`;
            }else{
                console.log('Please replace placeholder values with acutal image URLS.');
            }
        });
    }
});