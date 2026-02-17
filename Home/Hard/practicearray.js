const CHOICES = [
    [
        ['2x - 3', '2x - 2', '2x - 4', '3x - 3'],
        ['3', '1', '2x', '2'],
        ['2x - 3', '2x - 2', '2x - 4', '3x - 3'],
        ['4x - 3', '4x - 6', '4x - 5', '4x + 4'],
        ['8x - 10', '8x - 11', '8x - 13', '8x − 12']
    ],

    [
        ['u\u00B2', 'u\u00B2 + 1', 'u\u00B2 - 1', 'u\u00B3'],      // Variations of 'u²'
        ['sin(u)', 'cos(u)', 'tan(u)', 'sin(u) + 1'],             // Variations of 'sin(u)'
        ['u\u00B2', 'u\u00B3', 'u\u2074', 'u\u00B2 - 2'],         // Variations of 'u²'
        ['u', 'u + 1', 'u - 1', 'u\u00B2'],                      // Variations of 'u'
        ['2', '3', '4', '2x']                                    // Variations of '2'  // Variations of '2'
    ],
    [
        ['x\u00B3 - 7', 'x\u00B3 - 6', 'x\u00B3 - 8', 'x\u2074 - 7'],  // Variations of 'x³ - 7'
        ['\u00B9\u2044\u00B2', '\u00B9\u2044\u00B3', '\u00B2\u2044\u00B3', '1/4'],     // Variations of '¹⁄₂'
        ['x\u00B3 - 7', 'x\u00B3 - 6', 'x\u00B3 - 8', 'x\u2074 - 7'],  // Variations of 'x³ - 7'
        ['3x\u00B2', '3x\u00B3', '2x\u00B2', '4x\u00B2'],              // Variations of '3x²'
        ['x\u00B3 - 7', 'x\u00B3 - 6', 'x\u00B3 - 8', 'x\u2074 - 7']   // Variations of 'x³ - 7'
    ],

    [
        ["1", "2", "0", "-1"],                                         // Variations of "1"
        ["x\u00B2 + 8", "x\u00B2 + 7", "x\u00B2 + 9", "x\u00B3 + 8"],   // Variations of "x² + 8"
        ["0", "1", "-1", "2"],                                         // Variations of "0"
        ["u\u00B3", "u\u00B2", "u\u2074", "u\u2075"],                   // Variations of "u³"
        ["(x\u00B2 + 8)\u2074", "(x\u00B2 + 8)\u00B3", "(x\u00B2 + 7)\u2074", "(x\u00B2 + 9)\u2074"]  // Variations of "(x² + 8)⁴"
    ],

    [
        ['tan(x\u00B3)', 'tan(x\u00B2)', 'tan(x\u2074)', 'sin(x\u00B3)'],      // Variations of 'tan(x³)'
        ['cos', 'sin', 'tan', 'sec'],                                        // Variations of 'cos'
        ['sec\u00B2', 'csc\u00B2', 'sec\u00B3', 'sec(x)'],                    // Variations of 'sec²'
        ['3x\u00B2', '2x\u00B2', '4x\u00B2', '3x\u00B3'],                     // Variations of '3x²'
        ['3x\u00B2', '2x\u00B2', '4x\u00B2', '3x\u00B3']                      // Variations of '3x²'
    ],

    [
        ['tan(cos(x\u00B3))', 'tan(sin(x\u00B3))', 'tan(cos(x\u00B2))', 'tan(cos(x\u2074))'],   // Variations of 'tan(cos(x³))'
        ['cos', 'sin', 'tan', 'sec'],                                                         // Variations of 'cos'
        ['tan(cos(x\u00B3))', 'tan(sin(x\u00B3))', 'tan(cos(x\u00B2))', 'tan(cos(x\u2074))'],  // Variations of 'tan(cos(x³))'
        ['-sin', '-cos', '-tan', '-sec'],                                                     // Variations of '-sin'
        ['3x\u00B2', '2x\u00B2', '4x\u00B2', '3x\u00B3']                                       // Variations of '3x²'
    ]

];



var number = 0;
var turns = 0;

function displayChoices(number, turns, obj) {
    let numbers = number;
    let turn = turns;
    console.log('This is numbers', numbers);
    console.log('This is turns', turn);
    //console.log('Buttons length:', buttons.length);
    console.log('Obj:', obj);
    console.log('Obj[numbers]:', obj[numbers]);
    console.log('Obj[numbers][turn]:', obj[numbers][turns]);

    
}

displayChoices(number, turns, CHOICES);
