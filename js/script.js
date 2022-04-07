var clicks;
var players;
var unexpectedturn = 0;
var marketModal = document.getElementById('marketModal');
var marketSpan = document.getElementsByClassName("market_close")[0];
var cheatsheetModal = document.getElementById("cheatsheetModal");
var cheatsheetSpan = document.getElementsByClassName("cheatsheet_close")[0];
var exitModal = document.getElementById("exitModal");
var exitSpan = document.getElementsByClassName("exit_close")[0];
var exitNo = document.getElementsByClassName("exit_no")[0];
// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var btn2 = document.getElementById("secBtn");
var btnExit = document.getElementById("exitBtn");
var btnExit2 = document.getElementById("exitBtn2");
var loseplayer = document.getElementById("lostplayer")
// Get the <span> element that closes the modal
var cardDeck = [];
var startCardThreshold = 9;

const cards = [
{
    card: "<img style='height:7vw;'' src='img/sus_forested.png'> <br> <br> <br> Your sustainable efforts worked! All of the plots where you planted sustainable trees have become forested.",
    fact: "Cocoa beans are grown inside pods on Theobroma trees, which mean <a href='https://commodity.com/soft-agricultural/cocoa/' target='_blank'>'food of the gods'</a> in ancient Greek. <br> <br>Check out this <a href='https://www.youtube.com/watch?v=ibjUpk9Iagk' target='_blank'>TedX video</a> to dive into the history of chocolate!",
    startCard: true
},
{
    card: "<img style='height:7vw;'' src='img/sus_forested.png'> <br> <br> <br> Your sustainable efforts worked! 2 plots with sustainable trees have become forested.",
    fact: "Major cocoa traders like Cargill and Barry Callebaut <a href='https://www.mightyearth.org/wp-content/uploads/2017/09/chocolates_dark_secret_english_web.pdf' target='_blank'> buy cocoa that are grown through illegal deforestation</a> of national parks and other protected forests.",
    startCard: true
},
{
    card: "<img style='height:7vw;'' src='img/sus_forested.png'> <br> <br> <br> Your sustainable efforts worked! All of the plots where you planted sustainable trees have become forested.",
    fact: "Cocoa beans are grown inside pods on Theobroma trees, which mean <a href='https://commodity.com/soft-agricultural/cocoa/' target='_blank'>'food of the gods'</a> in ancient Greek. <br> <br>Check out this <a href='https://www.youtube.com/watch?v=ibjUpk9Iagk' target='_blank'>TedX video</a> to dive into the history of chocolate!"
},
{
    card: "<img style='height:7vw;'' src='img/sus_forested.png'> <br> <br> <br> Your sustainable efforts worked! 2 plots with sustainable trees have become forested.",
    fact: "Major cocoa traders like Cargill and Barry Callebaut <a href='https://www.mightyearth.org/wp-content/uploads/2017/09/chocolates_dark_secret_english_web.pdf' target='_blank'>buy cocoa that are grown through illegal deforestation</a> of national parks and other protected forests."
},
{
    card: "<img style='height:7vw;'' src='img/cocoa_double.png'> <br> <br> <br>A good harvest this time. Your yield has x2 in amount.",
    fact: "Chocolate is one of the most popular foods of today, with <a href='https://brandongaille.com/26-incredible-chocolate-consumption-statistics/' target='_blank'>7.2 million metric tons</a> of it consumed worldwide every year."
},
{
    card: "<img style='height:7vw;'' src='img/cocoa_half.png'> <br> <br> <br>Uh oh, ever-changing weather conditions have ruined your harvest. Your yield has halved (1/2) in amount.",
    fact: "<a href='https://commodity.com/soft-agricultural/cocoa' target='_blank'>Long drought conditions or heavy rains</a> often cause the cocoa pods to dry out or rot."
},
{
    card: "<img style='height:7vw;'' src='img/cocoa_double.png'> <br> <br> <br>You can x2 your yield by buying fertilizers for $0.5.",
    fact: "<a href='https://theconversation.com/ghanas-cocoa-production-relies-on-the-environment-which-needs-better-protection-134557' target='_blank'>Unsustainable and uninformed cocoa farming practices,</a> such as using non-organic chemical fertilizers, are reducing the yield of cocoa beans.",
    startCard: true
},
{
    card: "<img style='height:7vw;'' src='img/cocoa_double.png'> <br> <br> <br>You can x3 your yield by buying fertilizers for $1.",
    fact: "Cocoa farmers are <a href='https://www.sustainability-times.com/environmental-protection/shade-growing-cacao-can-help-mitigate-climate-change/' target='_blank'>clearing forests and growing trees under direct sunshine</a> to boost short-run productivity. However, this reduces coca yield in the long-run.",
    startCard: true
},
{
    card: "<img style='height:7vw;'' src='img/five_dollar.png'> <br> <br> <br>If you don't have any unsustainable trees in your plantation, you've been paid $5 by a fairtrade cocoa organization for your sustainable practices.",
    fact: "With the <a href='https://www.nature.com/articles/s41893-018-0062-8.epdf?sharing_token=oG8SK7UTmBSHV6rbno4xhtRgN0jAjWel9jnR3ZoTv0O4HmHKsMryjWSaaStfVTqI9aZZJj-ecpDB5QvlxbROYKpfMErUxaTYmjqrR0CidFr292cKX0fRhGtPb2aZRcbXoX9e-nn6MAj-ZGuMC1vhbceaR36zWxRVAxLyxhzs8qRQFkvdGJMMVpct4SagUm2tle-vPkUx-skL6s_U0y4xuw%3D%3D&tracking_referrer=www.bbc.com' target='_blank'>support from NGOs and social enterprises,</a> farmers are learning to integrate vegetable/ fruit trees into their plantations and farm cocoa beans more sustainably.",
    startCard: true
},
{
    card: "<img style='height:7vw;'' src='img/one_dollar.png'> <br> <br> <br>If you have less than 3 unsustainable trees in your plantation, you've been paid $2 by a fairtrade cocoa organization for your sustainable practices.",
    fact: "<a href='https://www.beyondgood.com/' target='_blank'>Beyond Good</a>, a chocolate brand, doesn't rely on middlemen to ship and trade cocoa. Instead, they harvest and make their chocolate all in one country: Madagascar. ",
    startCard: true
},
{
    card: "<img style='height:7vw;'' src='img/heart.png'> <br> <br> <br>If you have $4 in your wallet, you can send one of your children back to school! If you fit this criteria, gain one wellness heart.",
    fact: "<a href='https://www.barrons.com/articles/good-company-how-beyond-good-built-transparency-in-african-chocolate-production-01607627718' target='_blank'>School attendance</a> in cocoa growing areas rose from 58 to 80% in Ivory Coast and 89 to 96% in Ghana between 2008 and 2019. "
},
{
    card: "<img style='height:7vw;'' src='img/heart.png'> <br> <br> <br>A miracle has occurred! Your sick wife has recovered and is able to help out the harvest. Gain 1 wellness heart and 20 cocoa beans.",
    fact: "<a href='https://www.bbc.com/future/bespoke/follow-the-food/the-invisible-women-farmers-of-ivory-coast.html' target='_blank'>Women</a> do 70% of the work on cocoa plantations in the Ivory Coast but receive only 30% of the income, earning $0.30 a day."
},
{
    card: "<img style='height:7vw;'' src='img/unusable.png'> <br> <br> <br>Oh no, deforestation is accelerating, and you have no control over it. 2 deforested plots have become unusable.",
    fact: "Cocoa farming is <a href='https://www.bbc.com/future/bespoke/follow-the-food/the-invisible-women-farmers-of-ivory-coast.html' target='_blank'>expanding to other regions outside Africa</a> to avoid deforested land. However, new plantations adopted the same unsustainable practices that destroyed West Africa's forests.",
    startCard: true
},
{
    card: "<img style='height:7vw;'' src='img/unusable.png'> <br> <br> <br>Oh no, deforestation is accelerating, and you have no control over it. 3 deforested plots of land have become unusable.",
    fact: "Deforestation in cocoa farming is <a href='https://fortune.com/2020/02/16/cocoa-chocolate-production-deforestation-mondelez/' target='_blank'>largely driven by poverty,</a> with smallholder farmers lacking money to invest in more sustainable farming methods.",
    startCard: true
},
{
    card: "<img style='height:7vw;'' src='img/unusable.png'> <br> <br> <br>Oh no, climate change is severely affecting your plantation. 1 plot of land has become unusable.",
    fact: "Cocoa farming and deforestation are causing West Africa's <a href='https://www.mightyearth.org/wp-content/uploads/2017/09/chocolates_dark_secret_english_web.pdf' target='_blank'>wildlife populations to plummet</a>. In the Ivory Coast, elephants—the country's national symbol—are on the verge of total disappearance."
},
{
    card: "<img style='height:7vw;'' src='img/cocoa_none.png'> <br> <br> <br>Bad weather day. 3 of your plots with cocoa trees have failed to yield any cocoa beans.",
    fact: "The carbon footprint of a 200g dark chocolate bar, produced from deforested land, is equivalent to that of a <a href='https://www.wri.org/insights/how-much-rainforest-chocolate-bar' target='_blank'>car driven 4.9 miles or 7.8 km</a>."
},
{
    card: "<img style='height:7vw;'' src='img/cocoa_none.png'> <br> <br> <br>Cacao trees are sensitively reacting to the small changes in your forest. 2 of your plots with unsustainable trees have failed to yield any cocoa beans.",
    fact: "<a href='https://www.sciencedirect.com/science/article/pii/S0956053X19302454' target='_blank'>80% of cocoa fruit is discarded</a>, including cocoa pod husks, cocoa bean shells and cocoa sweatings.",
    startCard: true
},
{
    card: "<img style='height:7vw;'' src='img/unusable.png'> <br> <br> <br>Your unsustainable practices are ruining your plantation. All of your plots with unsustainable trees have become unusable.",
    fact: "In 1960, much of Ivory Coast was covered by forests. Now, <a href='https://www.sciencedirect.com/science/article/pii/S0378112715003400' target='_blank'>less than 11%</a> of the country remains forested."
},
{
    card: "<img style='height:7vw;'' src='img/unusable.png'> <br> <br> <br>Your unsustainable practices are ruining your plantation. 2 of your plots with unsustainable trees have become unusable.",
    fact: "Chocolate may <a href='https://www.cntraveler.com/story/chocolate-may-be-extinct-by-2050-according-to-scientists' target='_blank'>go extinct</a> as early as 2050 because of climate change."
},
{
    card: "<img style='height:7vw;'' src='img/unusable.png'> <br> <br> <br>Your unsustainable practices killed trees. One of your plots with unsustainable trees has become unusable.",
    fact: "Theobroma cocoa trees require <a href='https://ideas.ted.com/the-steep-price-we-pay-for-cheap-chocolate/' target='_blank'>extremely specific climatic conditions</a> to thrive, growing in a narrow band within 20 degrees north and south of the equator. "
},
{
    card: "<img style='height:7vw;'' src='img/unusable.png'> <br> <br> <br>Your unsustainable practices killed trees. One of your plots with unsustainable trees has become unusable.",
    fact: "Theobroma cocoa trees require <a href='https://ideas.ted.com/the-steep-price-we-pay-for-cheap-chocolate/' target='_blank'>extremely specific climatic conditions</a> to thrive, growing in a narrow band within 20 degrees north and south of the equator. "
},
{
    card: "<img style='height:7vw;'' src='img/unusable.png'> <br> <br> <br>Your unsustainable practices are ruining your plantation. All of your plots with unsustainable trees have become unusable.",
    fact: "In 1960, much of Ivory Coast was covered by forests. Now, <a href='https://www.sciencedirect.com/science/article/pii/S0378112715003400' target='_blank'>less than 11%</a> of the country remains forested."
},
{
    card: "<img style='height:7vw;'' src='img/unusable.png'> <br> <br> <br>Your unsustainable practices are ruining your plantation. 2 of your plots with unsustainable trees have become unusable.",
    fact: "Chocolate may <a href='https://www.cntraveler.com/story/chocolate-may-be-extinct-by-2050-according-to-scientists' target='_blank'>go extinct</a> as early as 2050 because of climate change.",
    startCard: true
},
{
    card: "<img style='height:7vw;'' src='img/unusable.png'> <br> <br> <br>Your unsustainable practices killed trees. One of your plots with unsustainable trees has become unusable.",
    fact: "Theobroma cocoa trees require <a href='https://ideas.ted.com/the-steep-price-we-pay-for-cheap-chocolate/' target='_blank'>extremely specific climatic conditions</a> to thrive, growing in a narrow band within 20 degrees north and south of the equator. ",
    startCard: true
},
{
    card: "<img style='height:7vw;'' src='img/unusable.png'> <br> <br> <br>Your unsustainable practices killed trees. One of your plots with unsustainable trees has become unusable.",
    fact: "Theobroma cocoa trees require <a href='https://ideas.ted.com/the-steep-price-we-pay-for-cheap-chocolate/' target='_blank'>extremely specific climatic conditions</a> to thrive, growing in a narrow band within 20 degrees north and south of the equator. "
},
{
    card: "<img style='height:7vw;'' src='img/market.png'> <br> <br> <br>Local middlemen are being tricky again. Unless you have 5 cocoa beans in your warehouse, you can not sell to the marketplace this round.",
    fact: "A <a href='https://www.bloomberg.com/news/articles/2021-01-20/chocolate-war-leaves-world-s-top-cocoa-producer-stuck-with-beans' target='_blank'>'Chocolate War'</a> is waging since 2021, with middlemen merchants refusing to pay farmers a decent price. Warehouses are overflowing, and cocoa farmers are battling poverty and hunger. "
},
{
    card: "<img style='height:7vw;'' src='img/market.png'> <br> <br> <br>Local middlemen are being tricky again. Unless you have 7 cocoa packs in your warehouse, you can not sell to the marketplace this round.",
    fact: "In the cocoa supply chain, usually the <a href='https://www.sierraclub.org/sierra/green-life/dark-side-chocolate-industry' target='_blank'>middlemen</a>—–including local merchants and large corporations that ship cocoa overseas—profit most from the dangerous work the farmers put in."
},
{
    card: "<img style='height:7vw;'' src='img/heart_broken.png'> <br> <br> <br>If you own less than $5, you have no choice but to make one of your children leave school and work in the plantations. Lose 1 wellness heart.",
    fact: "The world's chocolate supply relies on more than <a href='https://www.washingtonpost.com/business/2020/10/19/million-child-laborers-chocolate-supply' target='_blank'>1 million child workers</a> workers who are subject to abuse and even slave labor. <br><br>Check this <a href='https://www.youtube.com/watch?v=7Vfbv6hNeng&t=3s' target='_blank'>documentary</a> about child slavery in the chocolate industry."
},
{
    card: "<img style='height:7vw;'' src='img/heart_broken.png'> <br> <br> <br>If you own less than $4, you have no choice but to make two of your children leave school and work in the plantations. Lose 2 wellness hearts.",
    fact: "World's biggest chocolate brands — Hershey and Nestlé — <a href='https://www.washingtonpost.com/graphics/2019/business/hershey-nestle-mars-chocolate-child-labor-west-africa/' target='_blank'>fail to guarantee</a> that their chocolates are produced without child labor. They missed four deadlines to uproot child labor, the latest being 2020. "
},
{
    card: "<img style='height:7vw;'' src='img/skull.png'> <br> <br> <br>You have suffered an injury while doing dangerous work at the plantation. Lose $2 or 1 wellness heart.",
    fact: "Many cocoa farmers are <a href='https://www.cifor.org/publications/pdf_files/articles/ASonwa1702.pdf' target='_blank'>leaving the industry</a>, concerned that cocoa is no longer a good source of income due to decreasing yields, quality, and prices. "
},
{
    card: "<img style='height:7vw;'' src='img/skull.png'> <br> <br> <br>Your son has suffered an injury while doing dangerous work at the plantation. Lose $3 or 1 wellness heart.",
    fact: "In 2018-19, <a href='https://www.norc.org/Research/Projects/Pages/assessing-progress-in-reducing-child-labor-in-cocoa-growing-areas-of-c%C3%B4te-d%E2%80%99ivoire-and-ghana.aspx' target='_blank'>around 38% of children</a> in agricultural households of Ivory Coast were engaged in cocoa production."
},
{
    card: "<img style='height:7vw;'' src='img/skull.png'> <br> <br> <br>Swollen-shoot virus has infected your cocoa trees, and your plantation suffered a severe loss. Lose $2.5 or 4 trees.",
    fact: "In 2018, the Ivory Coast had to <a href='https://www.mightyearth.org/2017/07/31/an-open-secret-illegal-ivorian-cocoa/' target='_blank'>destroy 100,000 hectares of cocoa trees</a> to stop the spread of swollen-shoot virus, which can decrease yields by up to 70% and even kill the trees."
},
{
    card: "<img style='height:7vw;'' src='img/heart_broken.png'> <br> <br> <br>A baby has come to your family. But this also means more loved ones to feed. Lose $3 or 1 wellness heart.",
    fact: "Cocoa farmers in Ghana make <a href='https://www.weforum.org/agenda/2020/11/cocoa-chocolate-supply-chain-business-bar-africa-exports/' target='_blank'>$1/day</a>, whereas those in Ivory Coast make around $0.78/day—both well below the extreme poverty line."
},
{
    card: "<img style='height:7vw;'' src='img/swap.png'> <br> <br> <br>You have the option to swap your plantation with the farmer to the right of you. Will you do it?",
    fact: "It can take an <a href='https://www.worldwildlife.org/magazine/issues/spring-2017/articles/bittersweet-chocolate-s-impact-on-the-environment' target='_blank'>entire year</a> for one cocoa tree to produce cocoa needed for half a pound, or around 220g, of chocolate."
},
{
    card: "<img style='height:7vw;'' src='img/heart_broken.png'> <br> <br> <br>A baby has come to your family. But this also means more loved ones to feed. Lose $2 or 2 wellness hearts.",
    fact: "Farmers' share in the cocoa supply chain <a href='https://www.weforum.org/agenda/2020/11/cocoa-chocolate-supply-chain-business-bar-africa-exports/' target='_blank'>accounts for only 6.6%</a> of chocolate's retail value, while manufacturers (35.2%) and retailers (44.2%) take the biggest cuts."
},
{
    card: "<img style='height:7vw;'' src='img/skull.png'> <br> <br> <br>While collecting banana leaves to ferment cocoa beans, your son suffered a serious injury. Lose $2, 20 cocoa beans, or 2 wellness hearts.",
    fact: "Having to climb trees and use large, dangerous knives, many children have <a href='https://foodispower.org/human-labor-slavery/slavery-chocolate/' target='_blank'>scars on their bodies</a> from their work in cocoa plantations."
},
{
    card: "<img style='height:7vw;'' src='img/skull.png'> <br> <br> <br>Black pod disease has hit cocoa trees. Return back yields for this round.",
    fact: "<a href='https://www.foodnavigator.com/Article/2018/07/31/Cocoa-crop-losses-are-38-and-rising-so-what-can-be-done' target='_blank'>Black pod disease</a>, which can even kill cocoa trees, exists in all cocoa-growing countries and accounts for 20-30% of annual cocoa losses."
},
{
    card: "<img style='height:7vw;'' src='img/swap.png'> <br> <br> <br>You have the option to swap your cocoa warehouse with the farmer to the right. Will you do it?",
    fact: "Approximately <a href='https://pss.uvm.edu/ppp/articles/chocolate.html' target='_blank'>400 beans</a> are required to make 1lb, or 500g, of chocolate.<br><br> Watch this <a href='https://youtu.be/xPe1jMuX32s' target='_blank'>video</a> to learn how chocolate gets made, bean-to-bar!"
},
{
    card: "<img style='height:7vw;'' src='img/heart.png'> <br> <br> <br>You get to exchange one of your deforested plots with your (left) neighbor's forested plot.",
    fact: "Sustainably planting cocoa trees on degraded, or deforested, lands could help <a href='https://www.wri.org/insights/how-much-rainforest-chocolate-bar' target='_blank'>mitigate climate change</a> by avoiding emissions associated with deforestation."
},
{
    card: "<img style='height:7vw;'' src='img/cocoa_double.png'> <br> <br> <br>You see your (right) neighbor's cocoa beans unattended. Steal 3 packs.",
    fact: "Chocolate companies have been <a href='https://fairworldproject.org/wp-content/uploads/2020/10/GA-NORC-report-press-release-Child-Labor-and-Farmer-Poverty.pdf' target='_blank'>exaggerating</a> their efforts to address child labor. They prioritize advertising their 'accomplishments' over actually ending those abuses."
},
{
    card: "<img style='height:7vw;'' src='img/cocoa_double.png'> <br> <br> <br>You see your (left) neighbor's cocoa beans unattended. Steal 10 packs.",
    fact: "About <a href='https://www.iisd.org/ssi/commodities/cocoa-coverage/' target='_blank'>50 million</a> people have their livelihoods dependent on the chocolate industry."
},
{
    card: "<img style='height:7vw;'' src='img/skull.png'> <br> <br> <br>To save cocoa trees from capsid bugs, you need to buy pesticides. Pay $1 or lose 2 trees.",
    fact: "38% of global cocoa is lost every year to <a href='https://www.aciar.gov.au/cocoa-ipm-proceedings149' target='_blank'>diseases and pests</a>, and capsid bugs are one of the major threats in cocoa farming. "
}
];


$("#go-ahead-button1").click(function() {
  $("#splash").fadeOut(500);
  clicks = 7;
  players = 2;
});

$("#go-ahead-button2").click(function() {
  $("#splash").fadeOut(500);
  clicks = 10;
  players = 3;
});

$("#explainbtn1").click(function() {
  $("#explain1").fadeOut(500);
});

$("#explainbtn2").click(function() {
  $("#explain2").fadeOut(500);
});


$("#rules_to_intro").click(function() {
  $("#rules").fadeOut(500);
  $(".intro-wrapper").fadeOut(500);
  // cheatsheetModal.style.display = "block";
});


$("#lostplayer").click(function() {
    if (players === 3) {
        if (clicks > 6) {
            clicks -= 2;
        }
        else if (clicks > 3) {
            clicks -= 1;
        }
        players = 2;
    }
});

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}


const generateCard = function() {
    clicks -= 1;
    unexpectedturn ++;

    document.getElementById("clicks").innerHTML = clicks;

    if (cardDeck.length === 0) {
        cardDeck = Array.from(Array(cards.length).keys()); //create all indexes from 0 to length of card
        shuffle(cardDeck);
    }

    arrayIndex = cardDeck.shift();

    if (startCardThreshold > 0) {
        while (!cards[arrayIndex].hasOwnProperty('startCard')) {
            cardDeck.push(arrayIndex);
            arrayIndex = cardDeck.shift();
        }
        startCardThreshold --;
    }

    if (clicks === 0) {
        marketModal.style.display = "block";

        marketSpan.onclick = function() {
            marketModal.style.display = "none";
        }

        if (players === 2) {
            clicks = 7;
        }
        else {
            clicks = 10;
        }
    }

    else {
        document.getElementById("cards").innerHTML = cards[arrayIndex].card;
        document.getElementById("fact").innerHTML = cards[arrayIndex].fact;
    }

}

// When the user clicks the button, open the modal 
btn.onclick = function() {
    cheatsheetModal.style.display = "block";
}

btn2.onclick = function() {
    cheatsheetModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
cheatsheetSpan.onclick = function() {
  cheatsheetModal.style.display = "none";
}

//for exit
btnExit.onclick = function() {
    exitModal.style.display = "block";
}

btnExit2.onclick = function() {
    exitModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
exitSpan.onclick = function() {
  exitModal.style.display = "none";
}

exitNo.onclick = function() {
  exitModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == cheatsheetModal) {
    cheatsheetModal.style.display = "none";
  }
  else if (event.target == marketModal) {
    marketModal.style.display = "none";
  }
  else if (event.target == exitModal) {
    exitModal.style.display = "none";
  }
}
