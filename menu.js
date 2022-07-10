let contador_balao = 1;
let contador_menu = 1;
function abrir_fechar(){
    switch(contador_balao){
        case 1:
            $('.balao_caixa').css('display', 'block');
            contador_balao = 2;
            break;
        case 2:
            $('.balao_caixa').css('display', 'none');
            contador_balao = 1;
            break;
    }
}
function puxar(){
    switch(contador_menu){
        case 1:
            $('.menu_mobile_links').css('display', 'block');
            contador_menu = 2;
            break;
        case 2:
            $('.menu_mobile_links').css('display', 'none');
            contador_menu = 1;
            break;
    }
}
function abrir(){
    $('.balao_caixa').css('display', 'block');
}
function sair(){
    $('.balao_caixa').css('display', 'none');
}