export function setupCounter(element: HTMLButtonElement) {
  let counter = 0;
  const setCounter = (count: number) => {
    counter = count;
    element.innerHTML = `count is overkill ${counter}`;
  };
  element.addEventListener("click", () => setCounter(counter + 1));
  setCounter(100500);
}
