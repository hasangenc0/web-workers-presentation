import filter from './filter';
const $input = document.getElementById('input');
const $preview = document.getElementById('preview');
const previewCtx = $preview.getContext('2d');
const worker = new Worker('worker.js', { type: 'module'});

function applyFilter() {
  const imageData = previewCtx
  .getImageData(0, 0, $preview.width, $preview.height);

  if (document.forms.form.option[0].checked) {
    console.log('Filtering in main thread')

    filter(imageData)
    previewCtx.putImageData(imageData, 0, 0);
    return
  }

  worker.postMessage(imageData, [imageData.data.buffer]);
}

worker.addEventListener('message', (d) => {
  const imageData = d.data;
  previewCtx.putImageData(imageData, 0, 0);
});

function showStatus() {
  document.getElementById('status').innerHTML = 'Processing...';
}

$input.addEventListener('change', (e) => {
  const file = e.target.files[0];
  
  createImageBitmap(file).then((bitmap) => {
      $preview.height = bitmap.height;
      $preview.width = bitmap.width;
      previewCtx.drawImage(bitmap, 0, 0);
      showStatus();
      applyFilter();
  });
});
