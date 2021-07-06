
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


const randomBis = () => {
  return Math.floor(Math.random() * (900 + 1))
}

const randomTer = () => {
  return Math.floor(Math.random() * (500 + 1))
}



const parent = document.querySelectorAll('.parent');
for (const par of parent) {
  setInterval(() => {
    par.style.bottom = `${randomTer()}px`;
    par.style.left = `${randomBis()}px`;
  }, 1000)
}


