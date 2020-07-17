//selectors
console.warn("selectors....");
 const formById = document.getElementById('my-form');
 const selectByQuery = document.querySelector('h1'); //only first one by serial appearance
 const AllSelectByQuery = document.querySelectorAll('.item'); //To select all of same types
 const TagSelect = document.getElementsByTagName('li'); //using tags


 console.log(formById);
 console.log(selectByQuery);
 console.log(AllSelectByQuery); //outputs as an Array
 console.log(TagSelect); //outputs as an Array

 //operations
 const UL = document.querySelector('.items');
//  UL.lastElementChild.remove();
 UL.firstElementChild.textContent = 'Binary In My Blood';
 UL.children[1].textContent = 'Ant Man';
 UL.lastElementChild.innerHTML = '<h3> Spider Man </h3>'

 const button = document.querySelector('.btn');
 button.style.background = 'red';

 console.warn('Events.........');
 button.addEventListener('click', (evenOne) => {
     evenOne.preventDefault();
    console.log('How Dare You Clicked..!!!!')
    console.log(evenOne.target.className);
    document.querySelector('#my-form').style.background = 'gray';
    document.querySelector('body').classList.add('bg-dark');
 });