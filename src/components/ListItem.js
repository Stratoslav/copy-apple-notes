const today = new Date();
const yyyy = today.getFullYear();
let mm = today.getMonth() + 1; // Months start at 0!
let dd = today.getDate();

if (dd < 10) dd = "0" + dd;
if (mm < 10) mm = "0" + mm;

const formattedToday = dd + "/" + mm + "/" + yyyy;

export const todoList = [
  {
    title: "i need eat",
    data: formattedToday,
    text: "qwerty jhgfd erty mnbv wertyu oiuytre xcvbnm juhgtfr",
    id: 1,
  },
  {
    title: "i need man",
    data: formattedToday,
    text: "qwerty jhgfd erty mnbv wertyu oiuytre xcvbnm juhgtfr",
    id: 2,
  },
  {
    title: "i need woman",
    data: formattedToday,
    text: "qwerty jhgfd erty mnbv wertyu oiuytre xcvbnm juhgtfr",
    id: 3,
  },
];
