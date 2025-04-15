const occasionSelect = document.getElementById("occasion");
const vibeSelect = document.getElementById("vibe");
const priceSelect = document.getElementById("price");
const getGiftBtn = document.getElementById("getGift");

// Sample gift ideas database
const giftIdeas = {
    "birthday": {
      "creative": {
        "under-500": "Custom personalized mug",
        "500-1000": "DIY scrapbook with memories",
        "1000-2500": "Customized leather wallet",
        "2500-5000": "Personalized star map",
        "5000-10000": "Customized name necklace",
        "above-10000": "Weekend getaway experience"
      },
      "funny": {
        "under-500": "Funny socks with quirky prints",
        "500-1000": "Comical T-shirt with a meme",
        "1000-2500": "Funny board game",
        "2500-5000": "Comedy show tickets",
        "5000-10000": "Customized caricature portrait",
        "above-10000": "Weekend comedy club experience"
      },
      "adventurous": {
        "under-500": "Portable hammock",
        "500-1000": "Adventure gear like trekking poles",
        "1000-2500": "Go-karting voucher",
        "2500-5000": "Hot air balloon ride",
        "5000-10000": "Scuba diving experience",
        "above-10000": "Weekend adventure trip package"
      },
      "sentimental": {
        "under-500": "Personalized photo frame",
        "500-1000": "Customized engraved necklace",
        "1000-2500": "Personalized keepsake box",
        "2500-5000": "Memory book filled with pictures",
        "5000-10000": "Customized engraved watch",
        "above-10000": "Memory lane experience with special places"
      },
      "luxurious": {
        "under-500": "High-end chocolates",
        "500-1000": "Luxury scented candles",
        "1000-2500": "Branded wallet",
        "2500-5000": "Designer sunglasses",
        "5000-10000": "Customized jewelry",
        "above-10000": "Designer handbag"
      },
      "cozy": {
        "under-500": "Fuzzy socks and a blanket",
        "500-1000": "Personalized robe and slippers",
        "1000-2500": "Custom knitted scarf and gloves",
        "2500-5000": "Luxury throw blanket",
        "5000-10000": "Electric heated blanket",
        "above-10000": "Luxury vacation cabin experience"
      },
      "practical": {
        "under-500": "Multi-tool kit",
        "500-1000": "Portable phone charger",
        "1000-2500": "Coffee maker",
        "2500-5000": "Smart home device",
        "5000-10000": "High-quality laptop bag",
        "above-10000": "Premium smartphone"
      },
      "quirky": {
        "under-500": "Fun quirky mug",
        "500-1000": "Unusual gadget like a mini drone",
        "1000-2500": "Crazy board game",
        "2500-5000": "DIY mystery box gift",
        "5000-10000": "Customized inflatable paddleboard",
        "above-10000": "Customized high-tech gadget"
      },
      "surprising": {
        "under-500": "Unexpected surprise gift box",
        "500-1000": "Surprise experience voucher",
        "1000-2500": "Mystery gift box subscription",
        "2500-5000": "Surprise weekend trip package",
        "5000-10000": "Surprise vacation experience",
        "above-10000": "Exclusive experience voucher for a hidden gem"
      }
    },
    "cheer-up": {
      "cozy": {
        "under-500": "A fuzzy blanket with a sweet uplifting note.",
        "500-1000": "A comfort snack box with their favorite goodies.",
        "1000-2500": "A cozy hoodie with a comforting quote.",
        "2500-5000": "A self-care package with warm socks, teas, and a candle.",
        "5000-10000": "A relaxing home massage kit with oils and music.",
        "above-10000": "A surprise spa day or wellness retreat booking."
      },
      "funny": {
        "under-500": "A silly stress relief toy like a screaming goat button.",
        "500-1000": "A toilet book of hilarious jokes or memes.",
        "1000-2500": "A custom funny cartoon of their moody day.",
        "2500-5000": "A 'Bad Day Survival Kit' with quirky tools and snacks.",
        "5000-10000": "A surprise comedy show ticket package.",
        "above-10000": "A personal stand-up comedy gig or roast evening."
      }
    },
    "thank-you": {
      "sentimental": {
        "under-500": "A handwritten gratitude card with pressed flowers.",
        "500-1000": "A framed quote that reflects your appreciation.",
        "1000-2500": "A personalized thank-you journal.",
        "2500-5000": "A photo collage of shared memories.",
        "5000-10000": "A thank-you scrapbook with notes from friends.",
        "above-10000": "A weekend appreciation retreat or getaway."
      },
      "practical": {
        "under-500": "A useful desk organizer or gadget.",
        "500-1000": "A portable blender or mini coffee maker.",
        "1000-2500": "A classy pen set with their name engraved.",
        "2500-5000": "A personalized office toolkit.",
        "5000-10000": "A smartwatch or tech organizer kit.",
        "above-10000": "Premium luggage set or travel tech combo."
      }
    },
    "just-because": {
      "quirky": {
        "under-500": "A random wacky toy or desk trinket.",
        "500-1000": "A mystery snack box from another country.",
        "1000-2500": "A surprise envelope game or puzzle.",
        "2500-5000": "A box of peculiar handmade crafts.",
        "5000-10000": "An unexpected day trip planned in secret.",
        "above-10000": "A mystery vacation getaway surprise."
      },
        "under-500": "A love note in a bottle.",
        "500-1000": "A mini love book of 50 reasons you care.",
        "1000-2500": "Custom playlist with matching keychain QR code.",
        "2500-5000": "Surprise picnic with candles and fairy lights.",
        "5000-10000": "Helicopter or hot-air balloon date voucher.",
        "above-10000": "Luxury beachside dinner setup with flowers."
    }
  };

// Utility to capitalize labels (for display)
function formatLabel(label) {
  return label.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

// Format price range display
function formatPriceRange(price) {
  const ranges = {
    "under-500": "Under ₹500",
    "500-1000": "₹500 ~ ₹1,000",
    "1000-2500": "₹1,000 ~ ₹2,500",
    "2500-5000": "₹2,500 ~ ₹5,000",
    "5000-10000": "₹5,000 ~ ₹10,000",
    "above-10000": "Above ₹10,000",
  };
  return ranges[price] || price;
}

// Show the selected gift idea
function showGiftIdea(occasion, vibe, price) {
  const suggestion = giftIdeas?.[occasion]?.[vibe]?.[price] ||
    "Try a heartfelt letter or a shared memory gift — it's always priceless.";

  let resultCard = document.querySelector(".result-card");
  if (!resultCard) {
    resultCard = document.createElement("div");
    resultCard.className = "result-card";
    document.querySelector(".gift-container").appendChild(resultCard);
  }

  resultCard.innerHTML = `
    <h2>Your Gift Idea</h2>
    <p>${suggestion}</p>
    <div class="gift-price">
      Occasion: <strong>${formatLabel(occasion)}</strong> |
      Vibe: <strong>${formatLabel(vibe)}</strong> |
      Price: <strong>${formatPriceRange(price)}</strong>
    </div>
    <div class="result-footer">Powered by Mephisto X</div>
  `;
  resultCard.classList.add("show");
}

// Click event
getGiftBtn.addEventListener("click", () => {
  const occasion = occasionSelect.value;
  const vibe = vibeSelect.value;
  const price = priceSelect.value;
  showGiftIdea(occasion, vibe, price);
});
