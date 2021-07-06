
const random = () => {
  return Math.floor(Math.random() * (200 + 1))
}

// console.log(random())

const child = document.querySelectorAll('.child');
for (const ch of child) {
  setInterval(() => {
    ch.style.bottom = `${random()}px`;
    ch.style.left = `${random()}px`;
  }, 500)
}

const triangle = document.querySelectorAll('.triangle');
for (const tr of triangle) {
  setInterval(() => {
    tr.style.bottom = `${random()}px`;
    tr.style.left = `${random()}px`;
  }, 500)
}


const parent = document.querySelectorAll('.parent');
for (const par of parent) {
  setInterval(() => {
    par.style.bottom = `${random()}px`;
    par.style.left = `${random()}px`;
  }, 1000)
}


