const [...checkBoxes] = document.getElementsByClassName("checkBoxs");

checkBoxes.forEach((box) => {
    box.addEventListener("change", () => {
        const isChecked = box.checked;
        if (isChecked) {
            const taskId = box.dataset.taskId;

            fetch(`/done/${taskId}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ taskId: taskId }),
            })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Erro ao enviar requisição");
                }
                console.log("Conexão bem sucedida");

                window.location.reload()
                // Faça qualquer outra coisa que você precise fazer após o sucesso da requisição
            })
            .catch((err) => console.log(err));
        }
    });
});