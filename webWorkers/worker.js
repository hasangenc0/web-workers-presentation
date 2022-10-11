import filter from './filter.js';

addEventListener('message', (d) => {
  console.log('Filtering in worker thread')
  const imageData = d.data;
  let t0 = performance.now()
  filter(imageData)
  let t1 = performance.now()
  console.log('took', t1-t0)
  postMessage(imageData, [imageData.data.buffer])
});

const size = 1024 * 1024 * 1024;
const sharedDataBuffer = new ArrayBuffer(size);