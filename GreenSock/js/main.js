var animacion;
var logo;
var btnReiniciar;
var btnAnimar;
var btnPausar;
var btnReversa;
var btnPlay;
var btnAnimarImg;

window.onload = function() {
    btnAnimar = document.getElementById("btnAnimar");
    btnReiniciar = document.getElementById("btnReiniciar");
    btnPausar = document.getElementById("btnPausar");
    btnReversa = document.getElementById("btnReversa");
    btnPlay = document.getElementById("btnPlay");
    btnAnimarImg = document.getElementById("btnAnimarImg");
    logo = document.getElementById("logo");
    btnAnimar.onclick = animar;
    btnAnimarImg.onclick = animarImg;
}

function animar(){
    
    // animacion = TweenLite.from(logo, 2, {
    // animacion = TweenLite.to(logo, 2, {
    
    // animacion = TweenMax.to(logo, 2, {
    //     left: 600,
    //     backgroundColor: "pink",
    //     borderRadius: 50,
    //     // delay: 0, // Segundos que se va a demorar en comenzar la animación
    //     // 'easeIn' => aceleración; 'easeOut' => desaceleración progresiva; 'easeInOut' => comenzar lento
    //     // ease: Back.easeIn, // Hace que retroceda como si tomara impulso
    //     //ease: Back.easeOut // Hace que retroceda un poco al llegar al final
    //     //ease: Bounce.easeOut // Hace que como si rebotara al llegar al final
    //     //ease: Bounce.easeIn // Hace que como si rebotara para iniciar
    //     //ease: Elastic.easeOut // Hace que como si tuviera un caucho al llegar al final
    //     // Eventos "callback" para TweenLite=> 'onComplete'; 'onStart'; 'onUpdate'; 'onReverse'; 'onReverseComplete'
    //     // onComplete: animacionTerminada,
    //     //onCompleteParams: ["Animación terminada", "Este es otro parámetro"]
    //     repeat: 2, // Para TweenMax
    //     repeatDelay: 2, // Para TweenMax
    //     yoyo: true
    // });

    // // Animación TimelineLite (banners o animaciones complejas con varios elementos)
    // var img1 = document.getElementById("img1");
    // var img2 = document.getElementById("img2");
    // var img3 = document.getElementById("img3");

    // animacion = new TimelineLite();

    // animacion.to(logo, 2, {
    //     left: 400
    // })
    // .staggerTo([img1, img2, img3], 2, {
    //     left: 600
    // }, 0.5);

    // Animación TimelineLite (banners o animaciones complejas con varios elementos)
    var img1 = document.getElementById("img1");
    var img2 = document.getElementById("img2");
    var img3 = document.getElementById("img3");

    animacion = new TimelineMax({delay: 2, pause: false, repeat: 0, repeatDelay: 1, yoyo: true, onComplete: animacionCompleta});

    animacion.to(logo, 2, {
        left: 400
    })
    .staggerTo([img1, img2, img3], 2, {
        left: 600
    }, 0.5);

    btnReiniciar.onclick = function(){
        animacion.restart();
    }
    btnPausar.onclick = function() {
        animacion.pause();
    }

    btnReversa.onclick = function() {
        animacion.reverse();
    }

    btnPlay.onclick = function() {
        animacion.play();
    }
}

function animacionTerminada(mensaje, parametro2){
    // console.log("Animación terminada") // Muestra el mensaje en consola cuando términa la animación
    console.log(mensaje, parametro2)
}

// TweenLite
// function animarImg(){
//     var img1 = document.getElementById("img1");
//     var img2 = document.getElementById("img2");
//     var img3 = document.getElementById("img3");
//     TweenLite.to([img1, img2, img3], 1, {scale:0.2});
// }

function animarImg(){
    var img1 = document.getElementById("img1");
    var img2 = document.getElementById("img2");
    var img3 = document.getElementById("img3");
    
    TweenMax.staggerTo([img1, img2, img3], 2, {left:400}, 0.5);
}

function animacionTerminada() {
    console.log('Animación terminada')
}
