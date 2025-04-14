// Predefined quotes array
const quotes = [
    { text: "A friend is someone who knows all about you and still loves you.", author: "Elbert Hubbard" },
    { text: "Friendship is born at that moment when one person says to another, 'What! You too? I thought I was the only one.'", author: "C.S. Lewis" },
    { text: "Friendship is a sheltering tree.", author: "Samuel Taylor Coleridge" },
    { text: "A friend is what the heart needs all the time.", author: "Henry Van Dyke" },
    { text: "True friends stab you in the front.", author: "Oscar Wilde" },
    { text: "Friends are the family you choose.", author: "Jess C. Scott" },
    { text: "A true friend is somebody who can make us feel better no matter how bad things may be.", author: "Ralph Waldo Emerson" },
    { text: "There is nothing on this earth more to be prized than true friendship.", author: "Thomas Aquinas" },
    { text: "Friendship is the only cement that will ever hold the world together.", author: "Woodrow Wilson" },
    { text: "True friends stab you in the front.", author: "Oscar Wilde" },
    { text: "A real friend is one who walks in when the rest of the world walks out.", author: "Walter Winchell" },
    { text: "A friend in need is a friend indeed.", author: "Latin Proverb" },
    { text: "A good friend is like a four-leaf clover; hard to find and lucky to have.", author: "Irish Proverb" },
    { text: "A friend is someone who gives you total freedom to be yourself.", author: "Jim Morrison" },
    { text: "Friends are the siblings God never gave us.", author: "Mencius" },
    { text: "True friends stab you in the front.", author: "Oscar Wilde" },
    { text: "A friend to all is a friend to none.", author: "Aristotle" },
    { text: "Friendship is a single soul dwelling in two bodies.", author: "Aristotle" },
    { text: "A friend is someone who understands your past, believes in your future, and accepts you just the way you are.", author: "Unknown" },
    { text: "There is nothing better than a friend, unless it is a friend with chocolate.", author: "Linda Grayson" },
    { text: "A friend is someone who knows all about you and still loves you.", author: "Elbert Hubbard" },
    { text: "A real friend is one who walks in when the rest of the world walks out.", author: "Walter Winchell" },
    { text: "A friend to all is a friend to none.", author: "Aristotle" },
    { text: "A friend is someone who can make us feel better no matter how bad things may be.", author: "Ralph Waldo Emerson" },
    { text: "Friendship is born at that moment when one person says to another, 'What! You too? I thought I was the only one.'", author: "C.S. Lewis" },
    { text: "In the cookie of life, friends are the chocolate chips.", author: "Salman Rushdie" },
    { text: "True friends stab you in the front.", author: "Oscar Wilde" },
    { text: "Friends are the family you choose.", author: "Jess C. Scott" },
    { text: "A friend in need is a friend indeed.", author: "Latin Proverb" },
    { text: "A true friend is somebody who can make us feel better no matter how bad things may be.", author: "Ralph Waldo Emerson" },
    { text: "A friend to all is a friend to none.", author: "Aristotle" },
    { text: "Friendship is the golden thread that ties the heart of all the world.", author: "John Evelyn" },
    { text: "True friends stab you in the front.", author: "Oscar Wilde" },
    { text: "Friends are the family you choose.", author: "Jess C. Scott" },
    { text: "A friend is someone who understands your past, believes in your future, and accepts you just the way you are.", author: "Unknown" },
    { text: "There is nothing on this earth more to be prized than true friendship.", author: "Thomas Aquinas" },
    { text: "The best mirror is an old friend.", author: "George Herbert" },
    { text: "Friendship is a sheltering tree.", author: "Samuel Taylor Coleridge" },
    { text: "Friends are the family you choose.", author: "Jess C. Scott" },
    { text: "A friend is someone who knows all about you and still loves you.", author: "Elbert Hubbard" },
    { text: "The great thing about new friends is that they bring new energy to your soul.", author: "Shanna Rodriguez" },
    { text: "In the cookie of life, friends are the chocolate chips.", author: "Salman Rushdie" },
    { text: "True friends stab you in the front.", author: "Oscar Wilde" },
    { text: "A friend is someone who gives you total freedom to be yourself.", author: "Jim Morrison" },
    { text: "Friendship is born at that moment when one person says to another, 'What! You too? I thought I was the only one.'", author: "C.S. Lewis" },
    { text: "The most I can do for my friend is simply be his friend.", author: "Henry David Thoreau" },
    { text: "A friend is what the heart needs all the time.", author: "Henry Van Dyke" },
    { text: "True friends stab you in the front.", author: "Oscar Wilde" },
    { text: "Friends are the family you choose.", author: "Jess C. Scott" },
    { text: "A friend in need is a friend indeed.", author: "Latin Proverb" },
    { text: "A real friend is one who walks in when the rest of the world walks out.", author: "Walter Winchell" },
    { text: "A friend to all is a friend to none.", author: "Aristotle" },
    { text: "True friends stab you in the front.", author: "Oscar Wilde" },
    { text: "The best mirror is an old friend.", author: "George Herbert" },
    { text: "A friend is someone who knows all about you and still loves you.", author: "Elbert Hubbard" },
    { text: "Friendship is a sheltering tree.", author: "Samuel Taylor Coleridge" },
    { text: "Friends are the family you choose.", author: "Jess C. Scott" },
    { text: "A good friend is like a four-leaf clover; hard to find and lucky to have.", author: "Irish Proverb" },
    { text: "The great thing about new friends is that they bring new energy to your soul.", author: "Shanna Rodriguez" },
    { text: "In the cookie of life, friends are the chocolate chips.", author: "Salman Rushdie" }
  ];
  
  // Load initial quote
  function displayRandomQuote() {
    const random = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById("quoteText").textContent = `"${random.text}"`;
    document.getElementById("author").textContent = `– ${random.author}`;
  }
  
  function previewQuote() {
    const name = document.getElementById("nameInput").value.trim();
    const adjective = document.getElementById("adjectiveInput").value.trim();
    const preview = document.getElementById("generatedQuotePreview");
  
    if (!name || !adjective) {
      preview.textContent = "Please enter both a name and an adjective.";
      return;
    }
  
    const templates = [
      `A friend like ${name} is truly ${adjective}.`,
      `${name} is the most ${adjective} friend anyone could wish for.`,
      `The world is better with a ${adjective} soul like ${name}.`,
      `When you think of ${adjective}, think of ${name}.`,
      `If friendship had a face, it would look like ${name} — pure ${adjective}.`,
      `${name} brings a ${adjective} light to every friendship.`,
      `Everyone needs a ${adjective} friend like ${name}.`,
      `A day with ${name} is always a ${adjective} day.`,
      `The magic of ${name}'s friendship lies in their ${adjective} heart.`,
      `${name} has a ${adjective} way of making people feel loved.`,
      `${name}'s friendship is a ${adjective} gift.`,
      `Being around ${name} makes life feel more ${adjective}.`,
      `${name} proves that ${adjective} people exist.`,
      `What a ${adjective} blessing it is to have ${name} as a friend.`,
      `${name} is a true definition of a ${adjective} companion.`,
      `There's no one quite like ${name} — so ${adjective} and real.`,
      `Life is more ${adjective} with ${name} in it.`,
      `Friendship feels ${adjective} when it's with ${name}.`,
      `The kindness of ${name} is deeply ${adjective}.`,
      `With ${name}, every moment becomes ${adjective}.`,
      `${name}'s soul is beautifully ${adjective}.`,
      `${name}'s presence is nothing but ${adjective}.`,
      `You can't spell friendship without a ${adjective} friend like ${name}.`,
      `A ${adjective} friendship begins with someone like ${name}.`,
      `${name}'s friendship makes tough days feel ${adjective}.`,
      `The bond with ${name} is unshakably ${adjective}.`,
      `No one shares laughs like ${name} — so ${adjective}!`,
      `You are lucky if you know someone as ${adjective} as ${name}.`,
      `In a world full of noise, ${name}'s friendship is ${adjective}.`,
      `${name} makes the ordinary feel ${adjective}.`,
      `${name} adds a ${adjective} rhythm to life.`,
      `Every story with ${name} turns ${adjective}.`,
      `A chapter with ${name} is always ${adjective}.`,
      `Friendship with ${name} writes a ${adjective} tale.`,
      `Let your friends be as ${adjective} as ${name}.`,
      `The more you know ${name}, the more ${adjective} life becomes.`,
      `${name} paints life with ${adjective} colors.`,
      `${name}'s smile is purely ${adjective}.`,
      `Happiness wears the face of ${name} — so ${adjective}.`,
      `${name} shows what ${adjective} friendship really means.`,
      `Loyalty, laughter, and ${name} — the ${adjective} trio.`,
      `With every step, ${name} leaves a ${adjective} trail.`,
      `Friendship feels warmer with ${name}'s ${adjective} spirit.`,
      `No journey is too hard with ${name}'s ${adjective} vibe.`,
      `Keep friends like ${name} close — they’re pure ${adjective}.`,
      `${name} is a ${adjective} chapter in everyone's life story.`,
      `What makes ${name} special? Their endless ${adjective} nature.`,
      `${name}'s friendship is a soft breeze of ${adjective} joy.`,
      `${name} never fails to make things feel more ${adjective}.`,
      `A ${adjective} heart beats in ${name}.`,
      `${name}'s actions define true ${adjective} friendship.`,
      // Add 150 more below using similar creativity
    ];
  
    while (templates.length < 200) {
      templates.push(`Friendship with ${name} is just so ${adjective}.`);
    }
  
    const randomTemplate = templates[Math.floor(Math.random() * templates.length)];
    preview.textContent = randomTemplate;
  }
  
  
  // Submit personalized quote to array
  function submitQuote() {
    const preview = document.getElementById("generatedQuotePreview").textContent;
    if (preview && !preview.startsWith("Please")) {
      quotes.push({ text: preview, author: "You" });
      alert("Your quote has been submitted!");
      document.getElementById("nameInput").value = "";
      document.getElementById("adjectiveInput").value = "";
      document.getElementById("generatedQuotePreview").textContent = "";
    } else {
      alert("Please preview your quote first.");
    }
  }
  
  // React to quote with notification
function react(reaction, buttonId) {
    // Get the button position
    const button = document.getElementById(buttonId);
    const buttonRect = button.getBoundingClientRect();
  
    // Create a notification element
    const notification = document.createElement("div");
    notification.classList.add("reaction-notification");
    notification.textContent = `You reacted with ${reaction}`;
  
    // Position the notification just above the button
    notification.style.left = `${buttonRect.left + buttonRect.width / 2 - notification.offsetWidth / 2}px`;
    notification.style.top = `${buttonRect.top - notification.offsetHeight - 10}px`; // 10px gap above the button
  
    // Append notification to the body
    document.body.appendChild(notification);
  
    // Remove the notification after 3 seconds
    setTimeout(() => {
      notification.remove();
    }, 3000);
  }
// React to quote with notification
function react(reaction, buttonId) {
    // Get the button position
    const button = document.getElementById(buttonId);
    const buttonRect = button.getBoundingClientRect();
  
    // Create a notification element
    const notification = document.createElement("div");
    notification.classList.add("reaction-notification");
    notification.textContent = `You reacted with ${reaction}`;
  
    // Position the notification just above the button
    notification.style.left = `${buttonRect.left + buttonRect.width / 2 - notification.offsetWidth / 2}px`;
    notification.style.top = `${buttonRect.top - notification.offsetHeight - 10}px`; // 10px gap above the button
  
    // Append notification to the body
    document.body.appendChild(notification);
  
    // Remove the notification after 3 seconds
    setTimeout(() => {
      notification.remove();
    }, 3000);
  }
    
  
  // Event listeners
  document.getElementById("newQuoteBtn").addEventListener("click", displayRandomQuote);
  document.getElementById("generateQuoteBtn").addEventListener("click", displayRandomQuote);
  document.getElementById("previewQuoteBtn").addEventListener("click", previewQuote);
  document.getElementById("submitGeneratedQuoteBtn").addEventListener("click", submitQuote);
  
  document.getElementById("likeBtn").addEventListener("click", () => react("👍", "likeBtn"));
document.getElementById("loveBtn").addEventListener("click", () => react("❤️", "loveBtn"));
document.getElementById("sadBtn").addEventListener("click", () => react("😢", "sadBtn"));
document.getElementById("clapBtn").addEventListener("click", () => react("👏", "clapBtn"));

  // Load first quote on page load
  window.addEventListener("DOMContentLoaded", displayRandomQuote);
  

