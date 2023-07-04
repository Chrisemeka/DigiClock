//timestamp
const clock = document.querySelector(".clock");
const day = document.querySelector(".date");

const tick = () => {
    const now = new Date();

    const date = now.toDateString();
    const hrs = now.getHours();
    const mins = now.getMinutes();
    const sec = now.getSeconds();

    const h1 = `
        <h1>${date}</h1>
    `;

    const html = `
        <span>${hrs}</span> :
        <span>${mins}</span> :
        <span>${sec}</span>
    `;

    day.innerHTML = h1;
    clock.innerHTML = html;
}

setInterval(tick, 1000);
