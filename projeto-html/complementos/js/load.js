const load = () => {
    const backToTop = new BackToTop();
}

async function enviar() {

    const name = document.querySelector('.field-name').value;
    const assunto = document.querySelector('.field-assunto').value;
    const email = document.querySelector('.field-email').value;
    const message = document.querySelector('.field-message').value;

    const loading = document.querySelector('.loading');
    /*loading.className = loading.className + ' show';*/


    console.log(name, assunto, email, message);

    const msg = {
        from: "siteenoch@assessoria.app",
        to: "enoch.henrique@gmail.com",
        subject: `Assunto: ${assunto}`,
        text: `Destinatario: ${name}
               Email: ${email}

               Mensagem: ${message}
              `
    };

    console.log(msg);

    try {
        const data = await fetch('https://fiap-sender.herokuapp.com/email/send',
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(msg),
            }
        )
        alert("E-mail enviado com sucesso! Em breve entraremos em contato!");
    } catch (err) {
        alert("Falha ao enviar e-mail. Por gentileza, nos contate pelo telefone.");
        console.error(err);
    }
}

