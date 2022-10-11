const pages = [];
const messages = [];

onconnect = function(e) {
  const port = e.ports[0];

  pages.push(port);

  port.onmessage = function(event) {
    const message = event.data;

    messages.push(message);

    pages.forEach(instance => {
      instance.postMessage(message);
    });
  }
}
