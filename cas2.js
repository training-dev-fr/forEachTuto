fetch("employe.json")
    .then(result => result.json())
    .then(data => {
        data.forEach(employe => {
            console.log(employe.email);
        });
    });