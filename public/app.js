const myInput = document.getElementById("myInput");
const addBtn = document.querySelector(".addBtn");
const myUL = document.getElementById("myUL");

addBtn.addEventListener('click', () => {
    console.log(myInput.value);
    fetch("/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            title: myInput.value,
        }),
    })
    location.reload();
})

fetch('/show')
    .then((data) => data.json())
    .then((data) => showTask(data));


const showTask = (data) => {
    data.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.title}`;
        const container = document.createElement("div");
        container.className = "container";
        const btn = document.createElement("button");
        btn.className = "btn";
        btn.textContent = "delete";

        container.appendChild(li);
        container.appendChild(btn);
        myUL.appendChild(container);

        btn.addEventListener('click', () => {
            console.log(item._id)
            fetch(`/task/${item._id}`, {
                method: 'DELETE',
            })
            location.reload();
        })
    });
}
