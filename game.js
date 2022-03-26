//Using the DOM event listener

document.addEventListener('DOMContentLoaded', ()=>
{
    const gameArray= [
        {
            name: 'apple-fruit',
            img: 'images/apple-fruit.jpg'
        },
        {
            name: 'apple-fruit',
            img: 'images/apple-fruit.jpg'
        },
        {
            name: 'burger',
            img: 'images/burger.jpg'
        },
        {
            name: 'burger',
            img: 'images/burger.jpg'
        },
        {
            name: 'dough',
            img: 'images/dough.jpg'
        },
        {
            name: 'dough',
            img: 'images/dough.jpg'
        },
        {
            name: 'pizza',
            img: 'images/pizza.jpg'
        },
        {
            name: 'pizza',
            img: 'images/pizza.jpg'
        },
        {
            name: 'sandwitch',
            img: 'images/sandwich.jpg'
        },
        {
            name: 'sandich',
            img: 'images/sandwich.jpg'
        },
        {
            name: 'strange-food',
            img: 'images/strange-food.jpg'
        },
        {
            name: 'strange-food',
            img: 'images/strange-food.jpg'
        },
    ]

    gameArray.sort(()=> 0.25 - Math.random());

  
    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result')
    var cardChoosen = [];
    var cardChoosenID = [];
    var cardsWon = [];
    //create two empty arrays for cardId and cardChoosenId

  //create your game board
    function createBoard(){
        for(let i =0; i<gameArray.length; i++){
            var card = document.createElement('img')
            card.setAttribute('src', 'images/colourful.jpg')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card);
             
        }
    }

   

    function flipCard(){

        var cardId = this.getAttribute('data-id');
        //push cards into array
        cardChoosen.push(gameArray[cardId].name);
        cardChoosenID.push(cardId);
        this.setAttribute('src', gameArray[cardId].img)

        if (cardChoosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }

    }


    createBoard();
    
    function checkForMatch(){

        //picking all the items in the first fucntion
        var cards = document.querySelectorAll('img')
        const optionOneId = cardChoosenID[0];
        const optionTwoId = cardChoosenID[1];

        if(cardChoosen[0] === cardChoosen[1]){
            alert('You found your card');
            cards[optionOneId].setAttribute('src', 'images/white.jpg');
            cards[optionTwoId].setAttribute('src', 'images/white.jpg');
            cardsWon.push(cardChoosen)
        }else{
          alert('Please, Try again')  
            cards[optionOneId].setAttribute('src', 'images/colourful.jpg')
            cards[optionTwoId].setAttribute('src', 'images/colourful.jpg')
        }
        cardsChoosen = [];
        cardChoosenID = [];
        resultDisplay.textContent = cardsWon.length;
        if (cardsWon.length === gameArray.length/2){
            resultDisplay.textContent = 'Congratulation! You found them all'
        }
     }
    
})