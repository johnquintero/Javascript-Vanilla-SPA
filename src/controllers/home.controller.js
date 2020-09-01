import views from '../views/home.html'

export default () =>{
    const view = ``;
    const divElement = document.createElement('div');
    divElement.classList = "text-danger";
    divElement.innerHTML = views;

    const btnClick = divElement.querySelector('#btnClick');
    btnClick.addEventListener('click', (e) => {
        alert('click');
    });

    return divElement;
};