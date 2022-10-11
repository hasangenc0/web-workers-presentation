const worker = new SharedWorker('worker.js');
worker.port.addEventListener('message', function(e) {
  console.log(e.data)
  if (input1.value != e.data) {
    input1.value = e.data;
  }
}, false);

worker.port.start();

input1.addEventListener('keyup', (e) => {
  const val = e.target.value;
  worker.port.postMessage(val);
})