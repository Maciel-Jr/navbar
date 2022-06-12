function puxar(){
    let mobile_menu_links = document.querySelector('.menu_mobile_links');
    if(mobile_menu_links.classList.contains('open')){
        mobile_menu_links.classList.remove('open');
        
    }
    else{
        mobile_menu_links.classList.add('open');
         
    }
    
    
}
function balao(){
    let comantario = document.querySelector('#balao')  
    comantario.classList.add('abrir'); 
    comantario.classList.remove('fechar'); 
    comantario.innerHTML = `
    <div class="balao_caixa">
                <div class="cima_balao">
                    <div class="texto_balao_cima">
                        <p>PRODUCTS</p>
                    </div>
                    <div class="buton_balao_cima">
                        <button onclick="sair_balao()"><img src="Assets/Close.svg"></button>
                    </div>
                </div>
                <div class="balao_container">
                    <div class="balao_titulo">
                        <img src="Assets/Spense_Icon.svg">
                        <h4>Spense</h4>
                    </div>  
                    <div class="texto_balao">
                        <p>Spense is a landing page for writers. Great for practicing absolute and flex layouts</p>
                    </div>              
                </div>
                <div class="balao_container">
                    <div class="balao_titulo">
                        <img src="Assets/Fiber_Icon.svg">
                        <h4>Fiber Landing Page</h4>
                    </div>
                    <div class="texto_balao">
                        <p>An online portfolio generator. Great to practicing flex/grid layout, and absolute position</p>
                    </div> 
                </div>
                <div class="balao_container">
                    <div class="balao_titulo">
                        <img src="Assets/Gradie_Icon.svg">
                        <h4>Gradie Sing Up Page</h4>
                    </div> 
                    <div class="texto_balao">
                        <p>Gradie is simple sing up page, great to practice centering layouts</p>
                    </div> 
                </div>`       
}
function sair_balao(){
    let comantario = document.querySelector('#balao')
    comantario.classList.remove('abrir');
    comantario.classList.remove('fechar');
    comantario.innerHTML = '';
}