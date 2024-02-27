function submitData(name, email) {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            name,
            email
        }),
    })
        .then(r => r.json())
        .then(email => {
            const id = (email.id)
            document.body.append(id)
        })
        .catch(error => {
            document.body.append("request to http://localhost:3000/users failed, reason: Unauthorized Access")
        })
}