import express from "express";
import fileUpload from "express-fileupload";
import pdfParse from "pdf-parse";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(fileUpload());

// Rota para processar PDFs e buscar palavra-chave
app.post("/search", async (req, res) => {
  if (!req.files || !req.files.pdf || !req.body.query) {
    return res.status(400).json({ error: "Arquivo PDF e palavra-chave são obrigatórios." });
  }

  const pdfFile = req.files.pdf;
  const query = req.body.query.toLowerCase();

  try {
    const data = await pdfParse(pdfFile.data);
    const text = data.text;
    
    const matches = [];
    const lines = text.split("\n");
    lines.forEach((line, index) => {
      if (line.toLowerCase().includes(query)) {
        matches.push({ text: line.trim(), page: index + 1 });
      }
    });

    res.json({ results: matches });
  } catch (error) {
    res.status(500).json({ error: "Erro ao processar PDF." });
  }
});

app.listen(PORT, () => {
  console.log(\`Servidor rodando na porta \${PORT}\`);
});
