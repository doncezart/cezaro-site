export async function load({ fetch }) {
    const response = await fetch('/api/samp');
    const images = await response.json();
    return {images};
  }