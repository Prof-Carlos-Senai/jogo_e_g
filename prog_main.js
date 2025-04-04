let des = document.getElementById('des').getContext('2d')

let foguete = new Jog(10,275,100,50,'./img/foguete.png')

let bge = new Obj(0,0,800,600,'./img/espaco.jpg')

let enemy01 = new Inimigo(850,150,60,60,'./img/meteoro1.png')
let enemy03 = new Inimigo(1520,280,60,60,'./img/meteoro2.png')
let enemy02 = new Inimigo(1210,350,100,100,'./img/planeta1.png')


let t1 = new Text()
let t2 = new Text()
let t3 = new Text()
let t4 = new Text()
let t5 = new Text()

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

function pontos(){
    if(foguete.point(enemy01)){
        foguete.pts +=5
    }else if(foguete.point(enemy02)){
        foguete.pts += 5
    }else if(foguete.point(enemy03)){
        foguete.pts += 5
    }
}

function colisao(){
    if(foguete.colid(enemy01)){
        foguete.vida -= 1
        enemy01.recomeca()
    }else if(foguete.colid(enemy02)){
        foguete.vida -= 1
        enemy02.recomeca()
    }else if(foguete.colid(enemy03)){
        foguete.vida -= 1
        enemy03.recomeca()
    }  
}


function atualiza(){
    foguete.mov()
    enemy01.mov()
    enemy02.mov()
    enemy03.mov()
    colisao()
    pontos()
}

function desenha(){
    bge.des_img()
    t1.des_text('Pontos: ',20,30,'yellow','26px Times')
    t2.des_text(foguete.pts,104,30,'yellow','26px Times')
    t3.des_text('Vida: ',660,30,'yellow','26px Times')
    t4.des_text(foguete.vida,720,30,'yellow','26px Times')  
    foguete.des_img()
    enemy01.des_img()
    enemy02.des_img()
    enemy03.des_img()
}

function main(){
    des.clearRect(0,0,800,600)
    atualiza()
    desenha()
    requestAnimationFrame(main)
}


main()