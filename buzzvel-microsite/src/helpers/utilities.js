export function debounce(fn, delay) {
  let timeout;

  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), delay);
  };
};

export function createId(length=8) {
  const baseUUID = crypto.randomUUID().replace('-','');

  return baseUUID.slice(0, length);
};