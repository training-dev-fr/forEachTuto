fetch("employe2.json")
    .then(result => result.json())
    .then(data => {
        data.forEach(employe => {
            console.log("Employé : " + employe.firstname + " " + employe.lastname);
            employe.contact.forEach(contact => {
                console.log(contact.type + " : " + contact.value);
            });
            console.log("===========================================");
        });
    });