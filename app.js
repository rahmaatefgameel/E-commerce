const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});
 



//Add elements
let candlesData = [
    {
      name : "Lilac Blossom Odor Eliminating Highly Fragranced Candle",
      img : "https://m.media-amazon.com/images/I/812I0huX2jL._AC_UL320_.jpg",
      price : "$14.75",
      moreInfo : "About this item <br><br> An alluring grove of wild lilacs in full bloom - brings a fresh springtime floral feel to every room! This lilac candle will fill the room with an uplifting and luxurious lilac scent.<br><br>Handcrafted by world renowned candle artisans who have curated the finest, purest collection of wax blends and aromatic fragrances. Meticulously formulated using lead-free wicks to ensure an optimal pleasant burning experience.All designed to envelop you in a luxurious fragrant ambiance. This exclusive order eliminating technology was developed to remove offensive household odors including: Pet Smells, Smoke, Cooking, and Garbage. We've loaded the candle with top-selling fragrances and our exclusive wax blend. Our high quality candles react and bond to offensive odors, instead of masking or overpowering them, leaving your room with a long-lasting and fresh smelling fragrance."
    },
    {
        name : "4 Pack Candles for Home Scented, Lavender Candles Set",
        img : "https://m.media-amazon.com/images/I/71doSVcoMgL._AC_UL320_.jpg",
        price : "$22.75",
        moreInfo : "About this item <br><br> An alluring grove of wild lilacs in full bloom - brings a fresh springtime floral feel to every room! This lilac candle will fill the room with an uplifting and luxurious lilac scent.<br><br>Handcrafted by world renowned candle artisans who have curated the finest, purest collection of wax blends and aromatic fragrances. Meticulously formulated using lead-free wicks to ensure an optimal pleasant burning experience.All designed to envelop you in a luxurious fragrant ambiance. This exclusive order eliminating technology was developed to remove offensive household odors including: Pet Smells, Smoke, Cooking, and Garbage. We've loaded the candle with top-selling fragrances and our exclusive wax blend. Our high quality candles react and bond to offensive odors, instead of masking or overpowering them, leaving your room with a long-lasting and fresh smelling fragrance."
      },
      {
        name : "Yankee Candle - Vanilla Cupcake Scented Candle, Over 110 Hours of Burn Time",
        img : "https://m.media-amazon.com/images/I/61Xvg8m8ChL._AC_UL480_QL65_.jpg",
        price : "$34.99",
        moreInfo : "About this item <br><br> An alluring grove of wild lilacs in full bloom - brings a fresh springtime floral feel to every room! This lilac candle will fill the room with an uplifting and luxurious lilac scent.<br><br>Handcrafted by world renowned candle artisans who have curated the finest, purest collection of wax blends and aromatic fragrances. Meticulously formulated using lead-free wicks to ensure an optimal pleasant burning experience.All designed to envelop you in a luxurious fragrant ambiance. This exclusive order eliminating technology was developed to remove offensive household odors including: Pet Smells, Smoke, Cooking, and Garbage. We've loaded the candle with top-selling fragrances and our exclusive wax blend. Our high quality candles react and bond to offensive odors, instead of masking or overpowering them, leaving your room with a long-lasting and fresh smelling fragrance."
      },
      {
        name : "Scented Candles Clearance, 3 Pack Candles for Home Scented, 100 Hour Long",
        img : "https://m.media-amazon.com/images/I/71TKFeJ66cL._AC_UL480_QL65_.jpg",
        price : "$14.75",
        moreInfo : "About this item <br><br> An alluring grove of wild lilacs in full bloom - brings a fresh springtime floral feel to every room! This lilac candle will fill the room with an uplifting and luxurious lilac scent.<br><br>Handcrafted by world renowned candle artisans who have curated the finest, purest collection of wax blends and aromatic fragrances. Meticulously formulated using lead-free wicks to ensure an optimal pleasant burning experience.All designed to envelop you in a luxurious fragrant ambiance. This exclusive order eliminating technology was developed to remove offensive household odors including: Pet Smells, Smoke, Cooking, and Garbage. We've loaded the candle with top-selling fragrances and our exclusive wax blend. Our high quality candles react and bond to offensive odors, instead of masking or overpowering them, leaving your room with a long-lasting and fresh smelling fragrance."
      },
      {
        name : "Essential Oil Orange and Lemongrass Scented Pillar Candle",
        img : "https://m.media-amazon.com/images/I/614X1C9e9FL._AC_UL480_QL65_.jpg",
        price : "$12.00",
        moreInfo : "About this item <br><br> An alluring grove of wild lilacs in full bloom - brings a fresh springtime floral feel to every room! This lilac candle will fill the room with an uplifting and luxurious lilac scent.<br><br>Handcrafted by world renowned candle artisans who have curated the finest, purest collection of wax blends and aromatic fragrances. Meticulously formulated using lead-free wicks to ensure an optimal pleasant burning experience.All designed to envelop you in a luxurious fragrant ambiance. This exclusive order eliminating technology was developed to remove offensive household odors including: Pet Smells, Smoke, Cooking, and Garbage. We've loaded the candle with top-selling fragrances and our exclusive wax blend. Our high quality candles react and bond to offensive odors, instead of masking or overpowering them, leaving your room with a long-lasting and fresh smelling fragrance."
      },    
  ]
  
  function createCard(candle) {
    const cardElement = document.createElement('li');
    cardElement.classList.add('card');
    
    // Create the image container
    const imgDiv = document.createElement('div');
    imgDiv.classList.add('img');
    
    // Create and configure the image
    const img = document.createElement('img');
    img.src = candle.img;
    img.alt = "";
    img.draggable = false;
    imgDiv.appendChild(img);
    
    // Create and configure the heading
    const heading = document.createElement('h2');
    heading.textContent = candle.name;
    heading.style.color = "#A25772";
    heading.style.fontWeight = "bold";
    
    // Create the price span
    const priceSpan = document.createElement('span');
    priceSpan.textContent = candle.price;
    
    // Create the more info container
    const moreInfoDiv = document.createElement('div');
    moreInfoDiv.classList.add('more-info', 'invisible');
    moreInfoDiv.innerHTML = candle.moreInfo;
    
    // Assemble the elements
    cardElement.appendChild(imgDiv);
    cardElement.appendChild(heading);
    cardElement.appendChild(priceSpan);
    cardElement.appendChild(moreInfoDiv);
    
    // Add the card element to the desired parent element in the DOM
    const targetElement = document.getElementById('#card-container'); // Replace with the actual selector for your target element
    targetElement.appendChild(cardElement);
    
    cardElement.addEventListener("click", () => {
      x = cardElement.childNodes[3]
      if(x.classList.contains("invisible")){
        x.classList.remove("invisible")
      }
      else {
        x.classList.add("invisible")
      }
  })}
  
  
  for(let i = 0; i < candlesData.length; i++)
  {
    createCard(candlesData[i])
  }
  
  const searchInput = document.getElementById('search-input'); // Replace with the actual id of your search input element
  const cardContainer = document.getElementById('#card-container'); // Replace with the actual id of your card container element
  searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredcandles = candlesData.filter(candle => candle.name.toLowerCase().includes(searchTerm));
    // Clear the card container
    cardContainer.innerHTML = '';
    console.log(filteredcandles.length)
    leftBtn = document.getElementById("left")
    rightBtn = document.getElementById("right")
    console.log(leftBtn)
    if(filteredcandles.length <= 3)
    {
      if(!leftBtn.classList.contains("invisible")){
        leftBtn.classList.add("invisible")
        rightBtn.classList.add("invisible")
      }
    } else {
      if(leftBtn.classList.contains("invisible")){
        leftBtn.classList.remove("invisible")
        rightBtn.classList.remove("invisible")
      }
    }
  
    // Render the filtered candles
    filteredcandles.forEach(candle => {
      createCard(candle)
    });
  });
  
  
  

  
  
  const slider = document.querySelector(".slider"); 
  const arrows = document.querySelectorAll(".slider-container i");  
  arrows.forEach(btn => { 
      btn.addEventListener("click", () => { 
        const card = slider.querySelector(".card"); 
        console.log(card)
        const cardWidth = card.offsetWidth; 
            if(btn.id == "left"){
                slider.scrollLeft -= cardWidth
            }
            else {
                slider.scrollLeft += cardWidth
            }
            
      }); 
  }); 
  
  
  