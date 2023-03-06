export default function () {
  const handleToggle = () => {
    const body = document.querySelector("body");

    body.classList.toggle("dark");
  };

  return <button onClick={handleToggle}>Toggle Dark Mode</button>;
}
