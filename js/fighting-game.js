const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

playerPosition = 0
canvas.width = 1024  
canvas.height = 576

c.fillRect(0, 0, canvas.width, canvas.height)

const gravity = 0.7


const background = new Sprite({
    position: {
        x:0,
        y:0
    },
    scale: 1,
    imageSrc: './assets/background.png'
})
const shop = new Sprite({
    position: {
        x:625,
        y:128
    },
    imageSrc: './assets/shop.png',
    scale: 2.75,
    framesMax: 6
})
const player = new Fighter({
    position: {
        x: 55,
        y: 0
    },
    velocity: {
        x: 0,
        y: 1000
    },
    offset: {
        x: 0,
        y: 0
    },
    imageSrc: './assets/Mack/Idle.png',
    framesMax: 8,
    scale: 2.5,
    offset: {
        x: 215,
        y:155
    },
    sprites: {
        idle: {
            imageSrc: './assets/Mack/Idle.png',
            framesMax: 8
        },
        idleFlipped: {
            imageSrc: './assets - backwards/Mack/Idle - f.png',
            framesMax: 8
        },
        run: {
            imageSrc: './assets/Mack/Run.png',
            framesMax: 8,
            
        },
        runReverse: {
            imageSrc: './assets/Mack/Run - backwards.png',
            framesMax: 8,
            
        },
        jump: {
            imageSrc: './assets/Mack/Jump.png',
            framesMax: 2,
            
        },
        jumpFlipped: {
            imageSrc: './assets - backwards/Mack/Jump - f.png',
            framesMax: 2,
            
        },
        fall: {
            imageSrc: './assets/Mack/Fall.png',
            framesMax: 2,
            
        },
        fallFlipped: {
            imageSrc: './assets - backwards/Mack/Fall - f.png',
            framesMax: 2,
            
        },
        attack1: {
            imageSrc: './assets/Mack/Attack1.png',
            framesMax: 4
            
        },
        attack1Flipped: {
            imageSrc: './assets - backwards/Mack/Attack1 - f.png',
            framesMax: 4
            
        },
        attack2: {
            imageSrc: './assets/Mack/attack2.png',
            framesMax: 4
            
        },
        attack2Flipped: {
            imageSrc: './assets - backwards/Mack/attack2 - f.png',
            framesMax: 4
            
        },
        takeHit: {
            imageSrc: './assets/Mack/Take Hit.png',
            framesMax: 4
            
        },
        takeHitFlipped: {
            imageSrc: './assets - backwards/Mack/Take Hit - f.png',
            framesMax: 4
            
        },
        death: {
            imageSrc: './assets/Mack/Death.png',
            framesMax: 6
            
        },
        deathFlipped: {
            imageSrc: './assets - backwards/Mack/Death - f.png',
            framesMax: 6
            
        },
        runFlipped:{
            imageSrc: './assets - backwards/Mack/run - f.png',
            framesMax: 8
        },
        runFlippedForward:{
            imageSrc: './assets - backwards/Mack/Run - f - forward.png',
            framesMax: 8
        },
    },
    attackBox: {
        offset: {
            x:-180,
            y:40
        },
        width: 420,
        height: 50
    }
})


const enemy = new Fighter({
    position: {
        x: 550,
        y: 0
    },
    velocity: {
        x: 350,
        y: 1000
    },
    offset: {
        x: -50,
        y: 0
    },
    imageSrc: './assets/Kenji/Idle.png',
    framesMax: 4,
    scale: 2.5,
    offset: {
        x: 215,
        y:167
    },
    sprites: {
        idle: {
            imageSrc: './assets/Kenji/Idle.png',
            framesMax: 4
        },
        idleFlipped: {
            imageSrc: './assets - backwards/Kenji/Idle - f.png',
            framesMax: 4
        },
        run: {
            imageSrc: './assets/Kenji/Run.png',
            framesMax: 8
            
        },
        runReverse: {
            imageSrc: './assets/Kenji/Run - Backwards.png',
            framesMax: 8
            
        },
        jump: {
            imageSrc: './assets/Kenji/Jump.png',
            framesMax: 2
            
        },
        jumpFlipped: {
            imageSrc: './assets - backwards/Kenji/Jump - f.png',
            framesMax: 2
            
        },
        fall: {
            imageSrc: './assets/Kenji/Fall.png',
            framesMax: 2
            
        },
        fallFlipped: {
            imageSrc: './assets - backwards/Kenji/Fall - f.png',
            framesMax: 2
            
        },
        attack1: {
            imageSrc: './assets/Kenji/Attack1.png',
            framesMax: 4,
            
        },
        attack1Flipped: {
            imageSrc: './assets - backwards/Kenji/Attack1 - f.png',
            framesMax: 4
            
        },
        attack2: {
            imageSrc: './assets/Kenji/Attack2.png',
            framesMax: 4,
            
        },
        attack2Flipped  : {
            imageSrc: './assets - backwards/Kenji/Attack2 - f.png',
            framesMax: 4,
            
        },
        takeHit: {
            imageSrc: './assets/Kenji/Take Hit.png',
            framesMax: 3,
            
        },
        takeHitFlipped: {
            imageSrc: './assets - backwards/Kenji/Take Hit - f.png',
            framesMax: 3,
            
        },
        death: {
            imageSrc: './assets/Kenji/Death.png',
            framesMax: 7,
            
        },
        deathFlipped: {
            imageSrc: './assets - backwards/Kenji/Death - f.png',
            framesMax: 7,
            
        },
        runFlipped: {
            imageSrc: './assets - backwards/Kenji/Run - f.png',
            framesMax: 8
            
        },
        runFlippedForward: {
            imageSrc: './assets - backwards/Kenji/Run - backwards - f.png',
            framesMax: 8
            
        },

    },
    attackBox: {
        offset: {
            x: -170,
            y:40
        },
        width: 410,
        height: 50
    }
})


console.log(player,enemy)
const key = {
    a: {
        pressed:false
    },
    d: {
        pressed:false
    },
    w: {
        pressed:false
    },
    j: {
        pressed:false
    },
    l: {
        pressed:false
    },
    i: {
        pressed:false
    }
}

decreaseTimer()

function animate() {
    window.requestAnimationFrame(animate)
    c.fillStyle = 'black'
    c.fillRect(0, 0, canvas.width, canvas.height)
    background.update()
    shop.update()
    c.fillStyle = 'rgba(255, 255, 255, 0.15)'
    c.fillRect(0, 0, canvas.width, canvas.height)
    player.update()
    enemy.update()
    player.velocity.x = 0
    enemy.velocity.x = 0

    // Player movement
    if (player.position.x === enemy.position.x && player.position.x != 30) {
        player.position.x = enemy.position.x + 1}
    if (key.a.pressed && player.lastKey === 'a' && player.position.x > 30 && player.position.x > enemy.position.x) {
        player.velocity.x = -5
        player.switchSprite('run - f - forward')}
    else if (key.a.pressed && player.lastKey === 'a' && player.position.x > 30 && player.position.x < enemy.position.x) {
        player.velocity.x = -5
        player.switchSprite('runReverse')}   
    else if (key.d.pressed && player.lastKey === 'd'&& enemy.position.x < player.position.x && player.position.x < 930) {
        player.velocity.x = 5
        player.switchSprite('run - f')}
    else if (key.d.pressed && player.lastKey === 'd' && enemy.position.x > player.position.x && player.position.x < 930){
        player.velocity.x = 5
        player.switchSprite('run')}
    else if (player.position.x > enemy.position.x && player.position.x <= 930) {
        player.switchSprite('idle - flipped')}
    else{
        player.switchSprite('idle')}

    if (player.velocity.y < 0 && player.position.x < enemy.position.x) {
        player.switchSprite('jump')
    }   else if (player.velocity.y < 0 && player.position.x > enemy.position.x){
        player.switchSprite('jump - f')
    }   else if (player.velocity.y > 0 && player.position.x < enemy.position.x) {
        player.switchSprite('fall')
    }   else if(player.velocity.y > 0 && player.position.x > enemy.position.x){
        player.switchSprite('fall - f')
    }

    // Enemy movement
    if (key.j.pressed && enemy.lastKey === 'j' && enemy.position.x > 30 && player.position.x > enemy.position.x){
        enemy.velocity.x = -5
        enemy.switchSprite('run - f - forward')}
    else if (key.l.pressed && enemy.lastKey == 'l' && enemy.position.x < 930 && player.position.x > enemy.position.x){
        enemy.velocity.x = 5
        enemy.switchSprite('run - f')}
    else if (key.j.pressed && enemy.lastKey === 'j' && enemy.position.x > 30) {
        enemy.velocity.x = -5
        enemy.switchSprite('run')}   
    else if (key.l.pressed && enemy.lastKey === 'l' && enemy.position.x < 930){
        enemy.velocity.x = 5
        enemy.switchSprite('runReverse')}
    else if(player.position.x > enemy.position.x && enemy.position.x < 930) {
        enemy.switchSprite('idle - flipped')}
    else if(player.position.x < enemy.position.x && enemy.position.x <= 930){
        enemy.switchSprite('idle')}
    
    if (enemy.velocity.y < 0 && player.position.x < enemy.position.x) {
        enemy.switchSprite('jump')
    }   else if(enemy.velocity.y < 0 && player.position.x > enemy.position.x){
        enemy.switchSprite('jump - f')
    }   else if ( enemy.velocity.y > 0 && player.position.x < enemy.position.x) {
        enemy.switchSprite('fall')
    }   else if (enemy.velocity.y > 0 && player.position.x > enemy.position.x) {
        enemy.switchSprite('fall - f')
    }
    // detect if hit enemy
    if (
        rectangularCollision({
            rectangle1: player,
            rectangle2: enemy
        }) &&
        player.isAttacking && player.framesCurrent === 2
    ) {
        if (enemy.position.x > player.position.x){
        enemy.takeHit()
        player.isAttacking = false
        gsap.to('#enemyHealth', {width: enemy.health + '%'})}

        else if (enemy.position.x < player.position.x){
        enemy.takeHitFlipped()
        player.isAttacking = false
        gsap.to('#enemyHealth', {width: enemy.health + '%'})}    
    }
    //if player misses
    if (player.isAttacking && player.framesCurrent <= 2 && player.framesCurrent >= 2) {
        player.isAttacking = false}
    if (
        rectangularCollision({
            rectangle1: enemy,
            rectangle2: player
        }) &&
        enemy.isAttacking && enemy.framesCurrent === 2 
    ) {
        if (player.position.x < enemy.position.x){
        player.takeHit()
        enemy.isAttacking = false
        gsap.to('#playerHealth', {width: player.health + '%'})}

        else if(enemy.position.x < player.position.x){
        player.takeHitFlipped()
        enemy.isAttacking = false
        gsap.to('#playerHealth', {width: player.health + '%'})}
    }
    if (enemy.isAttacking && enemy.framesCurrent <= 2 && enemy.framesCurrent >= 2) {
        enemy.isAttacking = false
    }
    if (enemy.health === 0 && player.health === 0) {
            determineWinner({player, enemy, timerId})
            if (player.position.x < enemy.position.x) {
                player.switchSprite('death')
                enemy.switchSprite('death')}
            else if(player.position.x > enemy.position.x){
                player.switchSprite('death - f')
                enemy.switchSprite.apply('death - f')}

        }
    if (enemy.health != 0 && player.health === 0) {
        determineWinner({player, enemy, timerId})
        if (player.position.x < enemy.position.x) {
        player.switchSprite('death')}
        else if (player.position.x > enemy.position.x){
            player.switchSprite('death - f')}
    }
    if (player.health != 0 && enemy.health === 0) {
        determineWinner({player, enemy, timerId})
        if (player.position.x < enemy.position.x) {
            enemy.switchSprite('death')}
        else{
            enemy.switchSprite('death - f')}
    }
     

}
    

animate()

window.addEventListener('keydown',  (event) =>{
    if(!player.dead && !enemy.dead && timer!=0) {
    switch (event.key) {
        case 'd' :
            if (player.position.x > 930) {
                key.d.pressed = false
                player.position.x = 930
                }
            else{
                key.d.pressed = true
                player.lastKey='d'
            }
            break
        case 'a' :
            if (player.position.x < 30) {
                key.a.pressed = false
                player.position.x = 30 
                }
            else{
                key.a.pressed = true
                player.lastKey='a'
            }
            break
        case 'w' :
            if (player.velocity.y != 0) {
                key.w.pressed = false
            }
            else{
            player.velocity.y =-18
            }
            break
        case 'x':
            if (player.position.x < enemy.position.x) {
            player.attack()}
            else if(player.position.x > enemy.position.x) {
            player.attackFlipped()}
            break
        case 'z':
            if (player.position.x < enemy.position.x) {
            player.attack2()}
            else if (player.position.x > enemy.position.x){
            player.attack2Flipped()}
            break

    }
}
    if(!player.dead && !enemy.dead && timer!=0) {
    switch (event.key) {
        case 'j' :
            if (enemy.position.x > 930) {
                key.j.pressed = false
                enemy.position.x = 930
                }
            else{
                key.j.pressed = true
                enemy.lastKey='j'
            }
            break
        case 'l' :
            if (enemy.position.x < 30) {
                key.l.pressed = false
                enemy.position.x = 30 
                }
            else{
                key.l.pressed = true
                enemy.lastKey='l'
            }
            break
        case 'i' :
            if (enemy.velocity.y != 0) {
                key.i.pressed = false
            }
            else{
            enemy.velocity.y =-18
            }
            break
        case 'm':
            if (player.position.x < enemy.position.x) {
            enemy.attack()}
            else if(player.position.x > enemy.position.x) {
            enemy.attackFlipped()}
            break
        case ',':
            if (player.position.x < enemy.position.x){
            enemy.attack2()}
            else if (player.position.x > enemy.position.x){
            enemy.attack2Flipped()}
            break
        }
    }
})



window.addEventListener('keyup',  (event) =>{
    switch (event.key) {
        case 'd' :
            key.d.pressed = false
            break
        case 'a' :
            key.a.pressed = false
            break
        case 'w' :
            key.w.pressed = false
    }
    switch (event.key) {
        case 'l' :
            key.l.pressed = false
            break
        case 'j' :
            key.j.pressed = false
            break
        case 'i' :
            key.i.pressed = false
    }   
    console.log(event.key)

})
