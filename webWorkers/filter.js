export default function filter(imageData) {
  const data = imageData.data;

  for (let i = 0; i < data.length; i += 4) {
    const [r, g, b] = [data[i], data[i + 1], data[i + 2]];
    data[i] = data[i + 1] = data[i + 2] = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  }

  console.log(data);
}
