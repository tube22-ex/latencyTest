const word_set = ['あ', 'い', 'う', 'え', 'お', 'か', 'き', 'く', 'け', 'こ', 'さ', 'し', 'す', 'せ', 'そ', 'た', 'ち', 'つ', 'て', 'と', 'な', 'に', 'ぬ', 'ね', 'の', 'は', 'ひ', 'ふ', 'へ', 'ほ', 'ま', 'み', 'む', 'め', 'も', 'や', 'ゆ', 'よ', 'ら', 'り', 'る', 'れ', 'ろ', 'わ']
const roma_set = ['A', 'I', 'U', 'E', 'O', 'KA', 'KI', 'KU', 'KE', 'KO', 'SA', 'SI', 'SU', 'SE', 'SO', 'TA', 'TI', 'TU', 'TE', 'TO', 'NA', 'NI', 'NU', 'NE', 'NO', 'HA', 'HI', 'FU', 'HE', 'HO', 'MA', 'MI', 'MU', 'ME', 'MO', 'YA', 'YU', 'YO', 'RA', 'RI', 'RU', 'RE', 'RO', 'WA']
const Latency = []
setTimeout(problem,400)

function problem(){
    var Random = Math.floor( Math.random() * (word_set.length - 0) ) + 0 ;
    document.getElementById('kana_text').textContent = word_set[Random]
    document.getElementById('not_entered').textContent = roma_set[Random]
    let display_time = new Date().getTime();
    let n = 0
    let first_text = true
    
    document.addEventListener('keydown',function KeyEvent(e){
        if(e.key.toUpperCase() == roma_set[Random][n]){
            if(first_text === true){
                Latency.push(new Date().getTime() - display_time)
                console.log(new Date().getTime() - display_time)
                document.getElementById('Latency_His').innerHTML = roma_set[Random] + " : " + Latency[Latency.length-1] + "<br>" + document.getElementById('Latency_His').innerHTML
                first_text = false
            }
            
            document.getElementById('entered').textContent += roma_set[Random][n]
            document.getElementById('not_entered').textContent = document.getElementById('not_entered').textContent.slice(1)
            n++
            if(n == roma_set[Random].length){
                document.getElementById('kana_text').textContent = ''
                document.getElementById('entered').textContent = ''

                setTimeout(problem,400)
            }
        }
        
    })
    
}


