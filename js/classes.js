class Sprite {
    constructor({position, imageSrc, scale = 1, framesMax = 1, offset = {x:0 , y:0}
    }) {
        this.position = position
        this.width=50
        this.height=150
        this.image = new Image()
        this.image.src = imageSrc
        this.scale = scale
        this.framesMax = framesMax
        this.framesCurrent = 0
        this.framesElapsed = 0
        this.framesHold = 6
        this.offset = offset
    }
    draw() {
        c.drawImage(
            this.image,
            this.framesCurrent * (this.image.width / this.framesMax),
            0,
            this.image.width / this.framesMax,
            this.image.height,
            this.position.x - this.offset.x,
            this.position.y - this.offset.y,
            (this.image.width / this.framesMax) * this.scale,
            this.image.height * this.scale
            
        )
    }

    animateFrames() {
        this.framesElapsed++
        if (this.framesElapsed % this.framesHold === 0) {
        if (this.framesCurrent < this.framesMax - 1) {
        this.framesCurrent ++
    }   else {
        this.framesCurrent = 0
    }
    }
    }

    update() {
        this.draw()
        this.animateFrames()
    }
    }

class Fighter extends Sprite {
    constructor({
        position, 
        velocity, 
        color = 'maroon', 
        imageSrc, 
        scale = 1, 
        framesMax = 1,
        offset = {x:0 , y:0},
        sprites,
        attackBox = { offset: {}, width: undefined, height: undefined}
    }) {
        super({
            position,
            imageSrc,
            scale,
            framesMax,
            offset

        })
        this.velocity = velocity
        this.width=50
        this.height=150
        this.lastKey
        this.attackBox = {
            position: {
                x: this.position.x,
                y: this.position.y
            },
            offset: attackBox.offset,
            width: attackBox.width,
            height: attackBox.height
        }
        this.color = color
        this.isAttacking
        this.health = 100
        this.framesCurrent = 0
        this.framesElapsed = 0
        this.framesHold = 6
        this.sprites = sprites
        this.death = false
        this.deathFlipped = false

        for (const sprite in this.sprites) {
            sprites [sprite].image = new Image()
            sprites [sprite].image.src = sprites [sprite].imageSrc
        }
        
        console.log(this.sprites);
    }

    update() {
        this.draw()
        if (!this.dead) this.animateFrames()

        this.attackBox.position.x = this.position.x + this.attackBox.offset.x
        this.attackBox.position.y = this.position.y + this.attackBox.offset.y

         

        this.position.x += this.velocity.x
        this.position.y += this.velocity.y

        if (this.position.y + this.height + this.velocity.y >= canvas.height - 94) {
            this.velocity.y=0
            this.position.y = 332
        }   else this.velocity.y+=gravity
    }
    attack() {
        this.switchSprite('attack1')
        this.isAttacking = true

    }
    attackFlipped() {
        this.switchSprite('attack1 - f')
        this.isAttacking = true

    }
    attack2() {
        this.switchSprite('attack2')
        this.isAttacking = true

    }
    attack2Flipped() {
        this.switchSprite('attack2 - f')
        this.isAttacking = true

    }

    takeHit() {
        this.health -=10
        
        if (this.health <= 0) {
            this.switchSprite('death')
        }
       else {this.switchSprite('takeHit')}
    }
    takeHitFlipped() {
        this.health -=10
        
        if (this.health <= 0) {
            this.switchSprite('death - f')
        }   else {this.switchSprite('takeHit - f')}
    }



    switchSprite(sprite)  {
        if (this.image === this.sprites.death.image) {
            if (this.framesCurrent === this.sprites.death.framesMax -1) this.dead = true 
            return}
        if (this.image === this.sprites.deathFlipped.image) {
            if (this.framesCurrent === this.sprites.deathFlipped.framesMax -1) this.dead = true 
            return}
        if (this.image === this.sprites.attack1.image &&
            this.framesCurrent < this.sprites.attack1.framesMax - 1)
            return
        if (this.image === this.sprites.attack1Flipped.image &&
            this.framesCurrent < this.sprites.attack1Flipped.framesMax - 1)
            return    
        if (this.image === this.sprites.attack2.image &&
            this.framesCurrent < this.sprites.attack2.framesMax - 1)
            return
        if (this.image === this.sprites.attack2Flipped.image &&
            this.framesCurrent < this.sprites.attack2Flipped.framesMax - 1)
            return
        if (this.image === this.sprites.takeHit.image &&
            this.framesCurrent < this.sprites.takeHit.framesMax - 1)
            return
            if (this.image === this.sprites.takeHitFlipped.image &&
                this.framesCurrent < this.sprites.takeHitFlipped.framesMax - 1)
                return
    
        switch (sprite) {
            case'idle':
                if (this.image !== this.sprites.idle.image) {
                    this.image = this.sprites.idle.image
                    this.framesMax = this.sprites.idle.framesMax
                    this.framesCurrent = 0
                }
                break
            case'idle - flipped':
                if (this.image !== this.sprites.idleFlipped.image) {
                    this.image = this.sprites.idleFlipped.image
                    this.framesMax = this.sprites.idleFlipped.framesMax
                    this.framesCurrent = 0
                }
                break
            case 'run':
                if(this.image !== this.sprites.run.image) {
                    this.image = this.sprites.run.image
                    this.framesMax = this.sprites.run.framesMax
                    this.framesCurrent = 0
                }
                break
            case 'runReverse':
                if(this.image !== this.sprites.runReverse.image) {
                    this.image = this.sprites.runReverse.image
                    this.framesMax = this.sprites.runReverse.framesMax
                    this.framesCurrent = 0
                }
                break
            case 'jump':
                if (this.image !== this.sprites.jump.image) {
                    this.image = this.sprites.jump.image
                    this.framesMax = this.sprites.jump.framesMax
                    this.framesCurrent = 0
                }
                break
            case 'jump - f':
                if (this.image !== this.sprites.jumpFlipped.image) {
                    this.image = this.sprites.jumpFlipped.image
                    this.framesMax = this.sprites.jumpFlipped.framesMax
                    this.framesCurrent = 0
                }
                break
            case 'fall':
                if (this.image !== this.sprites.fall.image) {
                    this.image = this.sprites.fall.image
                    this.framesMax = this.sprites.fall.framesMax
                    this.framesCurrent = 0
                }
                break
            case 'fall - f':
                if (this.image !== this.sprites.fallFlipped.image) {
                    this.image = this.sprites.fallFlipped.image
                    this.framesMax = this.sprites.fallFlipped.framesMax
                    this.framesCurrent = 0
                }
                break
            case 'attack1':
                if (this.image !== this.sprites.attack1.image) {
                    this.image = this.sprites.attack1.image
                    this.framesMax = this.sprites.attack1.framesMax
                    this.framesCurrent = 0
                }
                break
                case 'attack1 - f':
                if (this.image !== this.sprites.attack1Flipped.image) {
                    this.image = this.sprites.attack1Flipped.image
                    this.framesMax = this.sprites.attack1Flipped.framesMax
                    this.framesCurrent = 0
                }
                break
                case 'attack2':
                if (this.image !== this.sprites.attack2.image) {
                    this.image = this.sprites.attack2.image
                    this.framesMax = this.sprites.attack2.framesMax
                    this.framesCurrent = 0
                }
                break
                case 'attack2 - f':
                if (this.image !== this.sprites.attack2Flipped.image) {
                    this.image = this.sprites.attack2Flipped.image
                    this.framesMax = this.sprites.attack2Flipped.framesMax
                    this.framesCurrent = 0
                }
                break
                case 'takeHit':
                if (this.image !== this.sprites.takeHit.image) {
                    this.image = this.sprites.takeHit.image
                    this.framesMax = this.sprites.takeHit.framesMax
                    this.framesCurrent = 0
                }
                break
                case 'takeHit - f':
                if (this.image !== this.sprites.takeHitFlipped.image) {
                    this.image = this.sprites.takeHitFlipped.image
                    this.framesMax = this.sprites.takeHitFlipped.framesMax
                    this.framesCurrent = 0
                }
                break
                case 'death':
                if (this.image !== this.sprites.death.image) {
                    this.image = this.sprites.death.image
                    this.framesMax = this.sprites.death.framesMax
                    this.framesCurrent = 0
                }
                break
                case 'death - f':
                if (this.image !== this.sprites.deathFlipped.image) {
                    this.image = this.sprites.deathFlipped.image
                    this.framesMax = this.sprites.deathFlipped.framesMax
                    this.framesCurrent = 0
                }
                break
                case 'run - f':
                if (this.image !== this.sprites.runFlipped.image) {
                    this.image = this.sprites.runFlipped.image
                    this.framesMax = this.sprites.runFlipped.framesMax
                    this.framesCurrent = 0
                }
                break
                case 'run - f - forward':
                if (this.image !== this.sprites.runFlippedForward.image) {
                    this.image = this.sprites.runFlippedForward.image
                    this.framesMax = this.sprites.runFlippedForward.framesMax
                    this.framesCurrent = 0
                }
                break
                

        }
    }
}