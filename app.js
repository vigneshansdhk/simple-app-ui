var arr = [
    [
        'a',
        'I Miss u chellam'
    ],
    [
        'b',
        'Always Pray 4 u'
    ],
    [
        'c',
        'Fooling u'
    ],
    [
        'd',
        'Hugs with Love'
    ],
    [
        'e',
        'Big Enemy of u'
    ],
    [
        'f',
        'Lovely sister/Brother'
    ],
    [
        'g',
        'Very Noughty'
    ],
    [
        'h',
        'Loves u But Not showing'
    ],
    [
        'i',
        'Close Friend'
    ],
    [
        'j',
        'Life Long Friend'
    ],
    [
        'k',
        'Love u'
    ],
    [
        'l',
        'I Need As Like Partner'
    ],
    [
        'm',
        'Best Mother'
    ],
    [
        'n',
        'Dear Friend'
    ],
    [
        'o',
        'I want kiss u'
    ],
    [
      'p',
      'Only Love'
    ],
    [
      'q',
      'Ignore u'
    ],
    [
        'r',
        'really loves u'
    ],
    [
        's',
        'I love you'
    ],
    [
        't',
        'I like u'
    ],
    [
      'u',
      'Always Respect u'
    ],
    [
       'v',
       'I Want A Lip Kiss'
    ],
    [
        'w',
        'Want To Propose'
    ],
    [
        'x',
        'You Lucky'
    ],
    [
        'y',
        'Uses U'
    ],
    [
        'z',
        'Emotional Abt U !'
    ]
];
 function add(){
    var hi = document.getElementById('blue').value.toLowerCase();
    if(hi.length > 1){
        alert('please enter only one number');
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
