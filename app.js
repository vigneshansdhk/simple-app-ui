var arr = [
    [
        'a',
        'I Miss u chellam &#128151'
    ],
    [
        'b',
        'Always Pray 4 u &#128522'
    ],
    [
        'c',
        'Fooling u &#128541'
    ],
    [
        'd',
        'Hugs with Love &#128525'
    ],
    [
        'e',
        'Big Enemy of u &#128544'
    ],
    [
        'f',
        'Lovely sister/Brother &#128522'
    ],
    [
        'g',
        'Very Noughty &#128526'
    ],
    [
        'h',
        'Loves u But Not showing &#128521'
    ],
    [
        'i',
        'Close Friend &#128522'
    ],
    [
        'j',
        'Life Long Friend &#128536'
    ],
    [
        'k',
        'Love u &#128536'
    ],
    [
        'l',
        'I Need As Like Partner &#128112;&#127995'
    ],
    [
        'm',
        'Best Mother &#128105'
    ],
    [
        'n',
        'Dear Friend &#128535'
    ],
    [
        'o',
        'I want kiss u &#128536'
    ],
    [
      'p',
      'Only Love &#128515'
    ],
    [
      'q',
      'Ignore u &#128527'
    ],
    [
        'r',
        'really loves u &#128151'
    ],
    [
        's',
        'I love you &#128536'
    ],
    [
        't',
        'I like u &#128525'
    ],
    [
      'u',
      'Always Respect u &#128151'
    ],
    [
       'v',
       'I Want A Lip Kiss &#128536'
    ],
    [
        'w',
        'Want To Propose U &#128070'
    ],
    [
        'x',
        'You Lucky &#128579'
    ],
    [
        'y',
        'Uses U &#128530'
    ],
    [
        'z',
        'Emotional Abt U ! &#128545'
    ]
];
 function add(){
    var hi = document.getElementById('blue').value.toLowerCase();
    if(hi.length > 1){
        alert('please enter only one letter');
        document.getElementById('blue').value = '';
        return false;
    }
    if(!hi){
        document.getElementById('msg').innerHTML='please enter a letter';
    }
   arr.forEach(storevalue =>{
        if(storevalue[0]==hi){
        document.getElementById('red').innerHTML = storevalue[1];
        document.getElementById('blue').value = '';

        }
        
    })


} 
