export const greet = () => {
  return "Hello World from School of Applied Technology 👋🏼";
};

export const setBackgroundImageDynamically = () => {
  const cards = document.querySelectorAll('.card__image');

  cards.forEach((card: HTMLDivElement, index) => {
    if (window.innerWidth < 768) {
      card.style.backgroundImage = `url('https://picsum.photos/370/390?random=${index + 1}')`;
    } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
      card.style.backgroundImage = `url('https://picsum.photos/340/250?random=${index + 1}')`;
    } else {
      card.style.backgroundImage = `url('https://picsum.photos/320/200?random=${index + 1}')`;
    }    
  });
}

const main = () => {
  console.log(greet());
};

main();
