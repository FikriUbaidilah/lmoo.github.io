class Start{
    constructor() {
        this.name = "kamu"
        this.bot = "lmoo"
        this.pick;
        this.win = ""
        this.botp;
    }

    brainbot(){
        const pick = ["🖐️","✌️","✊"]
        const botpick = pick[Math.floor(Math.random() * pick.length)]
        this.botp = botpick
        return botpick
    }

    pickplayer(pick){
        this.pick = pick;
        return pick;
    }   

    winner(){
        if (this.botp == "✌️" && this.pick == "🖐️"){
            this.win = "lmoo menang"
            return this.win
        }
        else if (this.botp == "🖐️" && this.pick == "✊"){
            this.win = "lmoo menang"
            return this.win
        }
        else if (this.botp == "✊" && this.pick == "✌️"){
            this.win = "lmoo menang"
            return this.win
        } 
        else if (this.pick == "✌️" && this.botp == "🖐️"){
            this.win = "kamu menang"
            return this.win
        } 
        else if (this.pick == "✊" && this.botp == "✌️"){
            this.win = "kamu menang"
            return this.win
        } 
        else if (this.pick == "🖐️" && this.botp == "✊"){
            this.win = "kamu menang"
            return this.win
        } 
        else{
            this.win = "seri"
            return this.win
        }
    }
}

const skamu = document.getElementById('kamu')
const slmoo = document.getElementById('lmoo')

skamu.textContent = 0
slmoo.textContent = 0

let skorl = 0
let skork = 0

const main = document.getElementById('main')
const loby = document.getElementById('loby')
const btn = document.getElementById('btn')
const score = document.getElementById('score')
const loading = document.getElementById('loading')

function home(){
    loby.classList.add('in')
    setTimeout(() => {
        loby.classList.remove('in')
    }, 1500);
}

home()

main.style.display = "none"
loading.style.display = "none"

btn.addEventListener('click', function() {
    let v = score.value
    console.log(v)
    const y = document.getElementById('y')
    y.textContent = v
    if (v == ''){
        alert("nothing")
    }
    else{
        loby.style.display = 'none'
        loading.style.display = 'block'
        setTimeout(function(){
        main.classList.add('in')    
        main.style.display = 'flex'
        loading.style.display = 'none'
        setTimeout(() => {
            main.classList.remove('in')
        }, 1000);
        },3000)
        
    }
    
}) 



function play(isi){
    const start = new Start();
    console.log (start.bot)
    console.log ("bot : " + start.brainbot())
    console.log ("player : " + start.pickplayer(isi))
    console.log (start.winner())
    
    const vs = document.getElementById('vs')
    const rs = document.getElementById('rs')

    vs.textContent = start.pick + 'vs' + start.botp
    rs.textContent = start.win

    if (start.win == "kamu menang"){
        skork++
        skamu.textContent = skork
    }
    else if (start.win == "lmoo menang"){
        skorl++
        slmoo.textContent = skorl
    }
    else{
        console.log ("seri")
    }
}