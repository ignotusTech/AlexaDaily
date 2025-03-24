const puppeteer = require("puppeteer");
const fs = require("fs");

const meses = [
  "janeiro", "fevereiro", "marco", "abril", "maio", "junho",
  "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
];

const ano = 2025;
const baseUrl = "https://www.calendarr.com/brasil/calendario-";
const urls = meses.map(mes => `${baseUrl}${mes}-${ano}/`);

const pegarDatas = async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  const datas = {};

  for (let i = 0; i < urls.length; i++) {
    const url = urls[i];
    const mesNumero = (i + 1).toString(); // Convertendo o índice do array para número do mês

    console.log(`Acessando o site: ${url}`);
    await page.goto(url, { waitUntil: "networkidle2" });

    const eventos = await page.evaluate((mesNumero) => {
      const eventosTemp = {};
      document.querySelectorAll(".calendar-list-holiday-box-list-item").forEach((el) => {
        const dataTexto = el.querySelector(".list-holiday-dayweek-wrapper")?.innerText.trim(); // Ex: "3 Seg"
        let descricao = el.querySelector(".holiday-name")?.innerText.trim(); // Nome do feriado

        if (dataTexto && descricao) {
          const dia = dataTexto.split(" ")[0]; // Pega só o número do dia
          const chave = `${mesNumero}.${dia}`;

          // Se já existir eventos para essa data, adicionamos ao array
          if (eventosTemp[chave]) {
            eventosTemp[chave].push(descricao);
          } else {
            eventosTemp[chave] = [descricao];
          }
        }
      });

      return eventosTemp;
    }, mesNumero);

    // Junta os eventos de todos os meses
    Object.entries(eventos).forEach(([chave, descricoes]) => {
      if (datas[chave]) {
        datas[chave] = [...datas[chave], ...descricoes]; // Junta as descrições
      } else {
        datas[chave] = descricoes;
      }
    });
  }

  await browser.close();

  if (Object.keys(datas).length === 0) {
    console.log("Nenhuma data encontrada.");
    return;
  }

  // Formata os dados no modelo desejado
  let output = "// INICIO DAS DATAS\n";
  Object.entries(datas).forEach(([chave, descricoes]) => {
    output += `msgData[${chave}] = '${descricoes.join(", ")}';\n`;
  });

  // Salva no arquivo
  fs.writeFileSync("datas_formatadas.js", output);
  console.log("Arquivo 'datas_formatadas.js' gerado com sucesso!");
};

pegarDatas();
