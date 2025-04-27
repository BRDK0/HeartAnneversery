
let heartClickCounter = 0;
let bonusModeActivated = false; // (We still track if we already dropped the special hearts)

const heartClickCounterDisplay = document.getElementById("heartClickCounterDisplay");
const heartButton = document.getElementById("heartButton");
const particlesContainer = document.getElementById("particlesContainer");
const textBox = document.getElementById("textBox");

const messages = [
 "I love how much of a kind soul you are! 💕",
  "I can't wait to spend the rest of my days with you!",
  "You make my heart go badonkadonk",
  "You are so dedicated and I love it!",
  "I love the way you are with animals",
  "You're so kind it makes my heart flutter💓",
  "I still think of the first time I saw you at the mall 💘",
  "I feel so overwhelmed with joy when I see you 💝",
  "Je t'aime tellememt 💓",
  "I pinkie tickle promist to alway love you ❤️",
  "You are so smart and so cute",
  "Never before did I know I could love someone so much",
  "You're so adorbs!!",
  "We FUCKING DID IT, 2 years WOOOOOOO!",
  "We are strong together as a team, it is always us against them!",
  "We will work through everything together.",
  "I love you a whale of lot!!!",
  "Can't believe that one day I am going to propose!",
  "With this I am with you no matter where you are or if I can respond to messages or not!",
  "I will always love you more than you would ever know",
  "You are such a strong person",
  "Your eyes make me so happy",
  "I always thought I knew what love meant but I didn't only when I met you did I really find out",
  "I can't wait for the many road trips and hikes that await us, even with your babies bladder!",
  "My one and only Pookie",
  "You make me go crazy in love with you",
  "I would do anything if it meant that I could see you smile",
  "Everytime I feel a sudden burst of love I will add to the compliments in this list!",
  "HOM I ate your nose!!! 😂",
  "HOM I eated all of your hair!!! 😂😂😂",
  "NOM I bit your chin hehehehhe 😂",
  "Fly me to the moon and take, let me play amoung the stars",
  "I may or may not have started off with 100 love messages and it will only grow longer over time!",
  "Kiki and Mervy say HI!!!! too, they also love you very much!",
  "Yep, it's just me and my girl hitting the town!",
  "You'll always be my gamer girl!",
  "If you screenshot this I will let you pop 1 pimple, redeemable once!",
  "To many more anniverseries in the future",
  "I love our walkies with the doggies",
  "Your little clay figurines are so cool!",
  "Nice ass! ❤️❤️",
  "Screenshot this for one redeemable bueno!",
  "Don't forget that you and me = BJ! 😂😂",
  "I only love you more the longer I know you!",
  "You're my cherry cola!",
  "My bunny!💝",
  "🐇🐇🐇",
  "Here have a cherry blossom flower! 🌸🌸",
  "Reedemable for 1 20 minute back massage!",
  "Your lips are always so soft! 💝",
  "No matter what we will always make it through this!",
  "I could get lost in eyes over and over",
  "I want to make you happy.",
  "Nothing makes me happier than your smile",
  "Your kind attitude is what makes you, well you!",
  "You're a bubbly but firm energy and that's why so many people love you",
  "You're kinder than you give yourself credit for",
  "You have the best type of kindness, you have integrety kindness where you will be so kind even when no one will give you credit for it! ",
  "I could write a book on my love for you",
  "I've never been able to go the many different addventures that you and I have gone on. I really appreciate you pushing me to be out there and it is one of the things I love so much about you",
  "I'm really glad that I found you, it really feels like you are the part of my soul I have been missing",
  "I corgi not enough of you (Get it? I can't get enough of you)",
  "Reedem this with a screenshot for 1 free colonel Burger from me 💝 no garnish or cheese!😂😂",
  "I love making chip spirals for you because of how much you love them",
  "I really do mean with that promise ring that I promise to propose to you one day. I love you and I will make our future happen",
  "You are my sweetiepie who is in need of a? 😂",
  "I am going to do everything in my power to get us out of this country when the time is right!",
  "I would litteraly do anything if you asked me to",
  "I love how you push me to be the best version of myself",
  "I love you so much and I will always try to help you be the best version of yourself",
  "I'm hear to listen and I will do my best to only listen so please always talk to me",
  "You can open up your heart sweetheart, I am here for you always 💝",
  "PikaCHUUUUUUUU, if you remember telling me that cause I do!",
  "I will always remember your little quirks as they are what makes you and why I love you",
  "I never try to annoy you, if you talk to me I will do my best to not repeat but remember I am human",
  "I always feel the comfiest around you, I feel like I can sleep without worry",
  "I know I can be unaware but I am working on fixing that so that you can feel more safe and relaxed",
  "I always appreciate when you do something for me, I just struggle at showing it",
  "I don't have an issue with you spending money on me but I struggle to accept things because I want to give and not recieve",
  "I love doing things for you because seeing you happy makes everything worth it",
  "I litteraly feel butterflies in my tummy everytime I see you and I know what thats like cause I ate one!",
  "I know we need to have our own worlds but I want you apart of mine so badly, I want to enjoy everything with you and I get jealous of other people if they can enjoy it with you but I can't",
  "I LOVE LOVE LOVE LOVE LOVE LOVE LOVE LOVE LOVE LOVE LOVE LOVE LOVE LOVE LOVE LOVE LOVE LOVE LOVE LOVE LOVE LOVE LOVE LOVE LOVE YOU THE MOSTESTTTTTTTTTTTTTTT",
  "My sweet sweet honey, you help heal my wounds",
  "As much as I want to be your rock in your life. You are the strongest and pretty much only rock in mine <3",
  "You a cutie with a big booty hehe 🤭",
  "You also a cutie with a corgi with a big booty",
  "Je t'aime, Je t'aime, je t'ai toujours adoré ",
  "If there is anything you need help with please know that I am always here for you",
  "I love when you lean on me, and I love making things right for you!",
  "I will always be a comfy couch for you",
  "I love to listen to your music and listen to your world, I still remember listening to the song moonlight because you loved it so much and I do enjoy your rave music ",
  "I love your painting and wish you would paint more my darling",
  "You are so creative and I love it",
  "You are doing your best, You are not behind. You got this. YOU ARE FRICKING FANTASTIC",
  "Whatever you doing just remember that you are such a strong person and that you are going to get through it. I know you will",
  "Everything takes time, remember to slow down breathe and think it through. I love you so much and always will trust your judgement ",
  "Whenever I google something that you've proved me wrong in isn't because I need to be wrong but I want to learn where I went wrong",
  "I love you and I am glad you can deal with my stubborness",
  "I can't wait to put our wedding vows in this list"
];

let lastMessages = [];

function getRandomMessage() {
  let randomMessage;
  
  // Keep selecting random message until it's not in the lastMessages array
  do {
    randomMessage = messages[Math.floor(Math.random() * messages.length)];
  } while (lastMessages.includes(randomMessage));

  // Add the selected message to the lastMessages array
  lastMessages.push(randomMessage);

  // If there are more than 5 messages in lastMessages, remove the oldest
  if (lastMessages.length > 10) {
    lastMessages.shift();
  }

  return randomMessage;
}

heartButton.addEventListener("click", () => {
  const randomMessage = getRandomMessage();
  textBox.textContent = randomMessage;

  const rect = heartButton.getBoundingClientRect();

  heartClickCounter++;
  heartClickCounterDisplay.textContent = `💖 Love messages: ${heartClickCounter} 💖`;

  if (heartClickCounter % 100 === 0) {
    spawnMassiveHeartRain();
  }

  for (let i = 0; i < 20; i++) {
    const mini = document.createElement("div");
    mini.classList.add("mini-heart");

    // Randomize inside the heart button
    const randomX = rect.left + Math.random() * rect.width;
    const randomY = rect.top + Math.random() * rect.height / 2; // upper half

    mini.style.left = `${randomX}px`;
    mini.style.top = `${randomY}px`;

    // Spread particles randomly
    const xOffset = (Math.random() - 0.5) * 150;
    const yOffset = -Math.random() * 150 - 50;

    mini.style.setProperty("--x", `${xOffset}px`);
    mini.style.setProperty("--y", `${yOffset}px`);

    particlesContainer.appendChild(mini);

    setTimeout(() => {
      mini.remove();
    }, 1600);
  }

  // ✨ RANDOM CHANCE FOR BUNNY AND CARNATIONS
  const bunnyChance = Math.random();
  const carnationChance = Math.random();

  if (bunnyChance < 0.1) { // 10% chance
    spawnBunny();
  }

  if (carnationChance < 0.07) { // 7% chance
    spawnCarnations();
  }

  // ✨ Track click count for special 100 clicks event
  
  if (heartClickCounter % 100 === 0) {
    spawnMassiveHeartRain();
  }
});



function spawnBunny() {
  const totalBunnies = 3;
  const padding = isMobile() ? 30 : 0; // Safe padding for mobile

  for (let i = 0; i < totalBunnies; i++) {
    const bunny = document.createElement("img");
    bunny.src = "CuteBunny.svg";
    bunny.classList.add("falling-bunny");

    const randomX = padding + Math.random() * (window.innerWidth - padding * 2);
    bunny.style.left = `${randomX}px`;
    bunny.style.top = `-45px`;

    particlesContainer.appendChild(bunny);

    setTimeout(() => {
      bunny.remove();
    }, 4000);
  }
}

function spawnCarnations() {
  const totalFlowers = 5;
  const padding = isMobile() ? 20 : 0; // Safe padding for mobile

  for (let i = 0; i < totalFlowers; i++) {
    const flower = document.createElement("img");
    flower.src = "Carnations.svg";
    flower.classList.add("falling-carnation");

    const randomX = padding + Math.random() * (window.innerWidth - padding * 2);
    flower.style.left = `${randomX}px`;
    flower.style.top = `-50px`;

    particlesContainer.appendChild(flower);

    setTimeout(() => {
      flower.remove();
    }, 4000);
  }
}

// Helper function to detect mobile devices
function isMobile() {
  return window.innerWidth <= 768; // you can tweak this breakpoint if you want
}

function spawnMassiveHeartRain() {
  const totalHearts = 100;
  const totalDuration = 15000; // 15 seconds
  const interval = totalDuration / totalHearts; // time between each heart

  let spawned = 0;
  const padding = isMobile() ? 20 : 0;

  const heartInterval = setInterval(() => {
    const bigHeart = document.createElement("div");
    bigHeart.classList.add("falling-big-heart");

    const randomX = padding + Math.random() * (window.innerWidth - padding * 2);
    bigHeart.style.left = `${randomX}px`;
    bigHeart.style.top = `-60px`;

    particlesContainer.appendChild(bigHeart);

    setTimeout(() => {
      bigHeart.remove();
    }, 4000);

    spawned++;
    if (spawned >= totalHearts) {
      clearInterval(heartInterval);
    }
  }, interval);
}




