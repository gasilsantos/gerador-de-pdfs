function gerarPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;

    if (nome === "" || email === "" || mensagem === "") {
        alert("Preencha todos os campos antes de gerar o PDF!");
        return;
    }

    doc.setFont("helvetica", "bold");
    doc.text("Gerador de PDF", 20, 20);
    
    doc.setFont("helvetica", "normal");
    doc.text(`Nome: ${nome}`, 20, 40);
    doc.text(`E-mail: ${email}`, 20, 50);
    doc.text("Mensagem:", 20, 60);
    
    const splitText = doc.splitTextToSize(mensagem, 170);
    doc.text(splitText, 20, 70);

    doc.save("documento.pdf");
}
