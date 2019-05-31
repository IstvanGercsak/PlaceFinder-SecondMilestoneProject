function sendMail(contactForm) {
        emailjs.send("gmail", "second_milestone", {
            "from_name": contactForm.name.value,
            "from_email": contactForm.emailaddress.value,
            "from_tel": contactForm.phonenumber.value,
            "description": contactForm.description.value
        })
            .then(
                function (response) {
                    console.log("SUCCESS", response);
                    alert("The message was sent!")
                },
                function (error) {
                    console.log("FAILED", error);
                    alert("There was a problem with the sending of the message!")
                }
            );
        return false;  // To block from loading a new page
    }