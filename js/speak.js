const speak = (element, delay = 1000) => {
  const phrases = [
    "hago cosas",
    "hago otras cosas",
    "sigo haciendo cosas",
    "qué cosas más chulas hago",
    "no puedo parar de hacer cosas",
    "estoy haciendo cosas",
    "voy haciendo cosas",
    "y dale con lo de hacer cosas",
    "hago cosas, como los catalanes",
    "aquí sigo haciendo cosas",
    "¿pararé algún día de hacer cosas?",
    "cosas, cosas, cosas",
    "qué pesado con las cosas",
    "¿por qué hago tantas cosas?",
    "pues nada, haré cosas",
    "¿en serio tengo que seguir haciendo cosas?",
    "no hay nada que me guste más que hacer cosas",
  ];
  setInterval(() => {
    const phrase = phrases[Math.floor(Math.random() * phrases.length)];
    if (typeof element !== "undefined") {
      element.textContent = phrase;
    }
  }, delay);
};

export default speak;
