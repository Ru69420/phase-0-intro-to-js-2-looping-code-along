
const name = ['Lisa', 'Kaitlin','Jan'];
const event = 'surprise';

function writeCard() {
  for (let i = 0; i < name.length; i++)
  return 'Thank you, ${name[i]}', for the wonderful ${event} gift!'
};'


function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

wrapGifts(gifts);




let count = 1;
while (count < 5) {
  debugger;
  if (count === 1) {
    console.log(`This loop has executed ${count} time.`);
  } else {
    console.log(`This loop has executed ${count} times.`);
  }
  count += 1;
  debugger;
}

