const worker  = new Worker('worker.js');
const arrayBuff = new ArrayBuffer(1_000_000)
button.addEventListener('click', () => {
  worker.postMessage(arrayBuff, [arrayBuff]);
  
  console.log(arrayBuff.byteLength);
})