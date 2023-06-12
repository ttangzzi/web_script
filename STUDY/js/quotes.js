const quotes = [
  {
    quote : "Love is the triumph of imagination over intelligence.",
    author : "H. L. Mencken",
  },
  {
    quote : "Hate the sin, love the sinner.",
    author : "Mahatma Gandhi",
  },
  {
    quote : "The enthusiasm of a woman's love is even beyond the biographer's.",
    author : "Jane Austen",
  },
  {
    quote : "Real love is a permanently self-enlarging experience.",
    author : "M. Scott Peck",
  },
  {
    quote : "There's always one who loves and one who lets himself be loved.",
    author : "William Somerset Maugham",
  },
  {
    quote : "Love all, trust a few. Do wrong to none.",
    author : "William Shakespeare",
  },
  {
    quote : "When love is in excess it brings a man no honor nor worthiness.",
    author : "Euripides",
  },
  {
    quote : "To love someone is to identify with them.",
    author : "Aristotle",
  },
  {
    quote : "Love is merely madness.",
    author : "William Shakespeare",
  },
  {
    quote : "Love is or it ain't. Thin love ain't love at all.",
    author : "Toni Morrison",
  }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
