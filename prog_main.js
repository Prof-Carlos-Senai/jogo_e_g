let des = document.getElementById('des').getContext('2d')

let morcego = new Jog(10,250,100,100,'./img/azazel.png')
let foguete = new Jog(10,275,100,50,'./img/foguete.png')

let bgg = new Obj(0,0,800,600,'./img/subnautica.png')
let bge = new Obj(0,0,800,600,'./img/espaco.jpg')

document.addEventListener('keydown', (e)=>{
    // console.log(e)
    if(e.key === "ArrowUp"){
        foguete.dir = -10
    }else if(e.key === "ArrowDown"){
        foguete.dir = +10
    }
})

document.addEventListener('keyup', (e)=>{
    if(e.key === "ArrowUp"){
        foguete.dir = 0
    }else if(e.key === "ArrowDown"){
        foguete.dir = 0
    }
})


function atualiza(){
    foguete.mov()
    // morcego.mov()
}

function desenha(){
    // bgg.des_img()
    bge.des_img()
    // morcego.des_img()
    foguete.des_img()
}

function main(){
    des.clearRect(0,0,800,600)
    atualiza()
    desenha()
    requestAnimationFrame(main)
}


main()