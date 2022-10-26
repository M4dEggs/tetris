document.addEventListener('DOMContentLoaded',() => {
    const grid = document.querySelector('.grid');
    let squares = Array.from(document.querySelectorAll('.grid div'));
    const Scoredisplay = document.querySelector('#score');
    const start_btn = document.querySelector('start-btn');
    const width = 10;


    // Blocks

    const Lshape = [
        [1, width+1, width*2+1, 2],
        [width, width+1, width+2,width*2+2],
        [1, width+1, width*2+1, width*2],
        [width, width*2 , width*2+1, width ]
    ];

    const zshape = [
        [width*2 , width*2+1, width+1 , width+2],
        [1 , width+1 , width+2 , width*2+2],
        [width, width+1, width*2+1 , width*2+2],
        [width*2, width, width+1, 1]
    ];

    const Tshape = [
        [width, width+1 , 1 , width+2],
        [1, width+1, width+2, width*2+1 ],
        [width, width+1, width+2 , width*2+1],
        [1, width+1, width, width*2+1]
    ];

    const squareshape = [
        [0,1,width,width+1],
        [0,1,width,width+1],
        [0,1,width,width+1],
        [0,1,width,width+1]
    ];

    const lineshape = [
        [1,width+1,width*2+1,width*3+1],
        [width, width+1, width+2, width+3],
        [1,width+1,width*2+1,width*3+1],
        [width, width+1, width+2, width+3]
    ];

    const shapes = [Lshape,zshape,squareshape,lineshape,Tshape];

    let currentPosition = 4;
    let currentRotation = 0;

    // Randomly selects shape from list 
    let random = Math.floor(Math.random()*shapes.length);
    let current = shapes[random][currentRotation];
    
    // Randomly draws shape
    function draw (){
        current.forEach(index => {
            squares[currentPosition + index].classList.add('shape')
        })
    }

    // undraw the shape
    function undraw(){
        current.forEach( index => {
            squares[currentPosition + index].classList.remove('shape')
        })
    }

    // make the shapes move 

    timerID = setInterval(moveDown, 500);

    function moveDown() {
        undraw();
        currentPosition += width;
        draw();
        freeze();
    }

    // stops the shape

    function freeze() {
        if (current.some(index => squares[currentPosition + width + index].classList.contains('taken'))){
            current.forEach(index => squares[currentPosition + index].classList.add('taken'))
            // starts new shape
            random = Math.floor(Math.random()*shapes.length)
            current = shapes[random][currentRotation]
            currentPosition = 4;
            draw()

        }
    }

    
 










})
