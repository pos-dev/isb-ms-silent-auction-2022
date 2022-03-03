// After submiting the form stay in the page

// Item 1
window.addEventListener("load", function() {
    const form = document.getElementById('my-form');
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        const data = new FormData(form);
        const action = e.target.action;
        fetch(action, {
            method: 'POST',
            body: data,
            })
        .then(() => {
            alert("Success!");
        })
    });
});

// Item 2
window.addEventListener("load", function() {
    const form = document.getElementById('my-form2');
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        const data = new FormData(form);
        const action = e.target.action;
        fetch(action, {
            method: 'POST',
            body: data,
            })
        .then(() => {
            alert("Success!");
        })
    });
});