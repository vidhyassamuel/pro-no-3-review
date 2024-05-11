// local reviews data
const reviews = [
      {
        id: 1,
        name: 'sara',
        job: 'web developer',
        img: 'https://img.freepik.com/premium-photo/portrait-successful-business-woman-suit-gray-isolated-background-female-office-worker-success-manager-serious-office-female-worker-manager-employees_545934-33546.jpg?w=1380',
        text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
      },
    {
  id: 2,
    name: 'susanna',
    job: 'web designer',
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
   {
    id: 3,
        name: 'jeal',
        job: 'intern',
        img: 'https://plus.unsplash.com/premium_photo-1661661926373-c1e3a03f9e86?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
      },
      {
        id: 4,
        name: 'jessy',
        job: 'the boss',
        img: ' https://images.unsplash.com/photo-1499914485622-a88fac536970?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
      },
    ];
    // select items
    const img = document.getElementById('person-img');
    const author = document.getElementById('author');
    const job = document.getElementById('job');
    const info = document.getElementById('info');
    
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const randomBtn = document.querySelector('.random-btn');
    
    // set starting item
    let currentItem = 0;
    
    // load initial item
    window.addEventListener('DOMContentLoaded', function () {
      const item = reviews[currentItem];
      img.src = item.img;
      author.textContent = item.name;
      job.textContent = item.job;
      info.textContent = item.text;
    });
    
    // show person based on item
    function showPerson(person) {
      const item = reviews[person];
      img.src = item.img;
      author.textContent = item.name;
      job.textContent = item.job;
      info.textContent = item.text;
    }
    // show next person
    nextBtn.addEventListener('click', function () {
      currentItem++;
      if (currentItem > reviews.length - 1) {
        currentItem = 0;
      }
      showPerson(currentItem);
    });
    // show prev person
    prevBtn.addEventListener('click', function () {
      currentItem--;
      if (currentItem < 0) {
        currentItem = reviews.length - 1;
      }
      showPerson(currentItem);
    });
    // show random person
    randomBtn.addEventListener('click', function () {
      console.log('hello');
    
      currentItem = Math.floor(Math.random() * reviews.length);
      showPerson(currentItem);
    });
