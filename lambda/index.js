/* *
 * This sample demonstrates handling intents from an Alexa skill using the Alexa Skills Kit SDK (v2).
 * Please visit https://alexa.design/cookbook for additional examples on implementing slots, dialog management,
 * session persistence, api calls, and more.
 * */
const Alexa = require('ask-sdk-core');
const date = new Date();
const today = date.getDate();
const month = date.getMonth() + 1; 
//const month = date.getMonth(); 

//var msgData = [];
var msgData = new Array();

//INICIO DAS DATAS
msgData[1.1] = 'Ano-Novo, Dia da Confraternização Universal (1º de janeiro), Dia Mundial da Paz, Início do Janeiro Branco | Saúde Mental (de 1 a 31), Início do Janeiro Roxo | Hanseníase (de 1 a 31)';
msgData[1.2] = 'São Basílio Magno, Dia do Sanitarista, Dia Mundial do Introvertido, Dia do Confeiteiro';
msgData[1.3] = 'Dia do Juiz de Menores';
msgData[1.4] = 'Dia Mundial do Braille, Dia do Hemofílico, Dia Nacional da Abreugrafia';
msgData[1.5] = 'Dia da Criação da Primeira Tipografia no Brasil, Dia de São Nepomuceno Neumann';
msgData[1.6] = 'Dia Nacional Graças a Deus É Segunda-Feira, Dia da Gratidão, Dia do Astrólogo, Dia de Reis';
msgData[1.7] = 'Dia de Não Aguentar Mais Isso, Dia da Liberdade de Cultos, Dia do Leitor';
msgData[1.8] = 'Dia do Fotógrafo';
msgData[1.9] = 'Dia do Astronauta, Dia do Fico';
msgData[1.10] = 'Dia de São Gonçalo de Amarante';
msgData[1.11] = 'Dia do Controle da Poluição por Agrotóxicos';
msgData[1.12] = 'Dia Nacional do Empresário Contábil, Aniversário de Belém';
msgData[1.13] = 'Dia de Realizar seus Sonhos, Dia de Santo Hilário de Poitiers';
msgData[1.14] = 'Dia de Vestir seu Pet com Roupa de Gente, Dia do Enfermo, Dia do Treinador de Futebol, Dia Mundial da Lógica';
msgData[1.15] = 'Dia Nacional do Jogo Limpo e de Combate ao Doping nos Esportes, Dia de Santo Amaro, Dia do Compositor, Dia do Adulto';
msgData[1.16] = 'Dia de São Marcelo, Papa, Dia do Cortador de Cana-de-Açúcar';
msgData[1.17] = 'Dia de Esquecer as Resoluções de Ano Novo, Dia dos Tribunais de Contas do Brasil, Aniversário da Emancipação do Ceará, Dia de Santo Antão';
msgData[1.18] = 'Dia da Manicure, Dia da Universidade, Dia Internacional do Riso, Dia Nacional do Krav Maga, Dia do Esteticista';
msgData[1.19] = 'Dia do Cabeleireiro, Dia de São Canuto, Dia do Passista';
msgData[1.20] = 'Dia Nacional do Fusca, Dia Nacional da Parteira Tradicional, Dia do Farmacêutico, Dia de São Sebastião, Dia Mundial do Queijo';
msgData[1.21] = 'Dia Mundial da Religião, Dia Nacional de Combate à Intolerância Religiosa';
msgData[1.23] = 'Dia Internacional da Medicina Integrativa, Dia de Santo Ildefonso';
msgData[1.24] = 'Dia Internacional da Educação, Dia da Previdência Social, Dia dos Aposentados, Dia Mundial da Cultura Africana e Afrodescendente';
msgData[1.25] = 'Dia dos Correios e Telégrafos, Dia Nacional da Bossa Nova, Dia do Carteiro, Aniversário de São Paulo';
msgData[1.26] = 'Dia da Gula, Dia Nacional de Combate e Prevenção da Hanseníase, Dia de São Timóteo, Dia Internacional das Aduanas, Dia Mundial da Educação Ambiental, Dia Mundial contra a Hanseníase';
msgData[1.27] = 'Dia do Orador, Dia Internacional em Memória das Vítimas do Holocausto, Dia Internacional do Conservador-Restaurador';
msgData[1.28] = 'Dia Internacional da Proteção de Dados, Dia do Portuário, Dia Nacional do Auditor-Fiscal do Trabalho, Dia Nacional de Combate ao Trabalho Escravo, Dia de São Tomás de Aquino, Dia do Comércio Exterior';
msgData[1.29] = 'Dia Nacional da Visibilidade Trans, Ano-Novo Chinês';
msgData[1.30] = 'Dia Nacional das Histórias em Quadrinhos, Dia do Padrinho, Dia Mundial da Não-Violência e Cultura de Paz, Dia da Saudade';
msgData[1.31] = 'Dia do Mágico, Dia de São João Bosco, Dia Nacional das Reservas Particulares do Patrimônio Natural, Dia do Engenheiro Ambiental';
msgData[2.1] = 'Dia do Publicitário, Início do Fevereiro Roxo | Lúpus, Alzheimer e Fibromialgia (de 1 a 29), Início do Fevereiro Laranja | Leucemia (de 1 a 29)';
msgData[2.2] = 'Dia do Agente Fiscal, Dia Mundial das Zonas Úmidas, Dia de Iemanjá, Dia de Nossa Senhora dos Navegantes';
msgData[2.3] = 'Dia de São Brás';
msgData[2.4] = 'Dia Mundial do Câncer, Aniversário de Macapá, Dia do Amigo do Facebook, Dia Internacional da Fraternidade Humana';
msgData[2.5] = 'Dia do Datiloscopista, Dia Nacional da Mamografia, Dia do Dermatologista, Dia Mundial da Nutella';
msgData[2.6] = 'Dia do Agente de Defesa Ambiental, Dia Internacional da Tolerância Zero à Mutilação Genital Feminina';
msgData[2.7] = 'Dia do Gráfico, Dia Nacional de Luta dos Povos Indígenas';
msgData[2.8] = 'Dia do Magistério Militar';
msgData[2.9] = 'Dia do Frevo em Pernambuco, Dia de Leitura na Banheira';
msgData[2.10] = 'Dia do Atleta Profissional, Dia Mundial das Leguminosas, Dia Internacional da Epilepsia';
msgData[2.11] = 'Dia do Zelador, Dia Mundial do Enfermo, Dia de Nossa Senhora de Lourdes, Dia Internacional das Mulheres e Meninas na Ciência, Dia da Internet Segura';
msgData[2.12] = 'Dia de Darwin';
msgData[2.13] = 'Dia Mundial do Rádio, Dia do Serviço de Assistência Religiosa do Exército, Dia Internacional do Preservativo, Dia de Ter um Nome Diferente';
msgData[2.14] = 'Dia Mundial do Amor, Dia do Botonista, Dia Internacional da Doação de Livros, Dia de São Valentim';
msgData[2.15] = 'Dia Internacional de Luta contra o Câncer Infantil';
msgData[2.16] = 'Dia do Repórter';
msgData[2.17] = 'Dia Mundial do Gato';
msgData[2.18] = 'Dia Nacional de Combate ao Alcoolismo, Dia Internacional da Síndrome de Asperger';
msgData[2.19] = 'Dia do Esportista, Dia de São Conrado, Dia Mundial da Baleia';
msgData[2.20] = 'Dia Mundial da Justiça Social, Dia Nacional de Combate às Drogas e Alcoolismo';
msgData[2.21] = 'Dia Nacional do Imigrante Italiano, Dia Internacional da Língua Materna';
msgData[2.22] = 'Dia Internacional do Maçom, Dia do Auxiliar de Serviços Gerais, Dia Mundial da Margarita';
msgData[2.23] = 'Dia Nacional do Movimento Municipalista Brasileiro, Dia Nacional do Rotary';
msgData[2.24] = 'Promulgação da Primeira Constituição Republicana, Dia da Conquista do Voto Feminino no Brasil';
msgData[2.25] = 'Dia da Criação do Ministério das Comunicações';
msgData[2.26] = 'Dia de Santo Alexandre, Dia de Contar um Conto de Fadas';
msgData[2.27] = 'Dia do Agente Fiscal da Receita Federal, Dia do Livro Didático, Dia de São Leandro';
msgData[2.28] = 'Dia Mundial da Doença Rara, Dia da Ressaca, Dia de São Romão e Lupicino, Dia Mundial de combate a LER/DORT';
msgData[3.1] = 'Dia Mundial de Zero Discriminação, Dia das Crianças Doentes, Dia Pan-Americano de Turismo, Dia do Turismo Ecológico, Aniversário do Rio de Janeiro, Início do Março Vermelho | Câncer Renal (de 1 a 31), Início do Março Azul-Marinho | Câncer Colorretal (de 1 a 31)';
msgData[3.3] = 'Segunda-feira de Carnaval, Dia Mundial da Vida Selvagem, Dia do Corpo de Intendentes da Marinha, Dia do Médico Otorrinolaringologista, Dia Mundial da Audição, Dia Mundial dos Defeitos do Nascimento';
msgData[3.4] = 'Carnaval, Dia Mundial da Obesidade, Dia Mundial da Engenharia para o Desenvolvimento Sustentável, Dia Internacional da Conscientização sobre o HPV, Dia dos Soldadinhos de Brinquedo';
msgData[3.5] = 'Quarta-feira de Cinzas (Ponto Facultativo até as 14h), Dia do Filatelista Brasileiro, Dia Nacional da Música Clássica, Dia da Integração Cooperativista, Dia Internacional do Desarmamento e Conscientização sobre a Não-Proliferação, Dia Mundial da Eficiência Energética, Quaresma 2025 (de 5 de março a 17 de abril)';
msgData[3.7] = 'Dia do Paleontólogo, Dia do Fuzileiro Naval, Dia Nacional da Advocacia Pública, Dia Mundial da Oração';
msgData[3.8] = 'Dia Internacional da Mulher';
msgData[3.9] = 'Dia Mundial do DJ';
msgData[3.10] = 'Dia do Sogro, Dia do Telefone, Dia do Conservador, Dia da Sociedade dos Amigos do Bairro, Dia Nacional de Combate ao Sedentarismo, Dia Internacional das Juízas, Dia do Super Mario';
msgData[3.12] = 'Dia Mundial Contra a Cibercensura, Dia do Bibliotecário, Aniversário de Recife, Dia Mundial do Glaucoma';
msgData[3.13] = 'Dia Mundial do Rim, Dia do Conservacionismo';
msgData[3.14] = 'Dia do Vendedor de Livros, Dia da Incontinência Urinária, Dia Nacional dos Animais, Dia do Pi, Dia Internacional de Luta contra as Barragens, Dia Internacional da Matemática, Dia de Salvar uma Aranha, Dia Mundial do Sono, 1º Eclipse Lunar de 2025 - Eclipse Total (visível no Brasil)';
msgData[3.15] = 'Dia Mundial do Consumidor, Dia de São Longuinho, Dia da Escola, Dia Internacional de Combate à Islamofobia, Dia das Confissões Sinceras';
msgData[3.16] = 'Dia Nacional de Conscientização sobre as Mudanças Climáticas, Dia Nacional do Ouvidor, Dia do Agente Penitenciário Federal, Dia do Agente Federal de Execução Penal, Dia do Médico Clínico';
msgData[3.17] = 'Aniversário de Aracaju, Dia do Agente Funerário, Dia de São Patrício';
msgData[3.18] = 'Dia do DeMolay, Dia Nacional da Imigração Judaica';
msgData[3.19] = 'Dia do Carpinteiro e do Marceneiro, Dia Nacional do Artesão, Dia do Consertador, Dia de São José';
msgData[3.20] = 'Dia Mundial da Saúde Bucal, Dia Nacional do Teatro para a Infância e Juventude, Dia Nacional da Aquicultura, Dia Mundial sem Carne, Dia Nacional de Atenção à Disfagia, Dia da Língua Francesa, Dia do Contador de Histórias, Dia Internacional da Felicidade, Início do Outono';
msgData[3.21] = 'Dia Internacional Contra a Discriminação Racial, Dia Internacional da Síndrome de Down, Dia Internacional das Florestas e da Árvore, Dia Mundial da Poesia, Dia Internacional de Nowruz, Dia do Pão Francês, Dia Mundial da Infância, Dia Internacional da Cefaleia em Salvas, Dia do Tiramisù, Dia Internacional do Perfume';
msgData[3.22] = 'Dia Mundial da Água';
msgData[3.23] = 'Dia Mundial da Meteorologia, Dia do Optometrista, Aniversário de Florianópolis, Dia Nacional do Piso Salarial dos Professores, Dia Mundial do Acupunturista';
msgData[3.24] = 'Dia Internacional para o Direito à Verdade para as Vítimas de Graves Violações dos Direitos Humanos, Dia Mundial de Combate à Tuberculose';
msgData[3.25] = 'Dia da Constituição, Dia de São Dimas, Dia do Especialista de Aeronáutica, Dia Internacional em Memória das Vítimas da Escravidão e do Comércio Transatlântico de Escravos, Dia Nacional da Comunidade Árabe, Dia Internacional da Solidariedade da Pessoa Detenta ou Desaparecida, Dia Nacional do Oficial de Justiça, Dia Internacional de Solidariedade com Funcionários Detidos e Desaparecidos da ONU, Dia da Anunciação do Senhor, Hora do Planeta';
msgData[3.26] = 'Dia de Criar seu Próprio Feriado, Dia do Cacau, Aniversário de Porto Alegre, Dia Mundial de Conscientização da Epilepsia, Dia do Mercosul';
msgData[3.27] = 'Dia do Circo, Dia Mundial do Teatro';
msgData[3.28] = 'Dia do Diagramador, Dia do Revisor';
msgData[3.29] = 'Aniversário de Curitiba, Aniversário de Salvador';
msgData[3.30] = 'Dia Mundial do Transtorno Bipolar, Dia Internacional do Lixo Zero';
msgData[3.31] = 'Dia da Integração Nacional, Dia da Saúde e Nutrição, Dia Mundial do Backup, Dia Internacional da Visibilidade Transgênero';
msgData[4.1] = 'Dia da Abolição da Escravidão dos Índios, Dia da Mentira - 1º de Abril, Início do Abril Azul | Autismo (de 1 a 30), Início do Abril Verde | Saúde e Segurança no Trabalho (de 1 a 30), Dia Internacional da Diversão no Trabalho';
msgData[4.2] = 'Dia Internacional do Livro Infantil, Dia Mundial da Conscientização do Autismo, Início da Semana da Saúde no Brasil (de 2 a 7), Dia Internacional da Checagem de Fatos';
msgData[4.3] = 'Dia do Desporto Comunitário, Dia do Atuário';
msgData[4.4] = 'Dia Nacional do Parkinsoniano, Dia Mundial dos Animais de Rua, Dia Internacional de Alerta às Minas Terrestres e Assistência à Desminagem';
msgData[4.5] = 'Dia do Propagandista Farmacêutico, Dia das Telecomunicações, Dia Internacional da Consciência, Dia do Filho';
msgData[4.6] = 'Dia Internacional do Esporte para o Desenvolvimento e pela Paz, Dia Nacional de Mobilização pela Promoção da Saúde e Qualidade de Vida, Dia Mundial da Atividade Física';
msgData[4.7] = 'Dia do Jornalista, Dia do Médico Legista, Dia Internacional para Reflexão do Genocídio de 1994 contra os Tutsi em Ruanda, Dia Nacional de Combate ao Bullying e à Violência na Escola, Dia do Corretor, Dia Mundial da Saúde';
msgData[4.8] = 'Dia da Natação, Dia Mundial do Combate ao Câncer, Dia Mundial da Astronomia, Dia Nacional do Sistema Braille, Aniversário de Cuiabá';
msgData[4.9] = 'Dia Nacional do Aço, Dia Nacional da Biblioteca';
msgData[4.10] = 'Dia da Engenharia, Dia do Engenheiro Metalurgista, Dia do Engenheiro Militar, Dia Mundial da Homeopatia';
msgData[4.11] = 'Dia do Infectologista, Dia Mundial de Conscientização da Doença de Parkinson, Dia da Escola de Samba';
msgData[4.12] = 'Dia do Obstetra, Dia Internacional do Voo Espacial Tripulado, Dia Nacional do Humorista';
msgData[4.13] = 'Dia do Office-Boy, Dia do Hino Nacional Brasileiro, Dia do Jovem, Dia do Beijo, Aniversário de Fortaleza, Domingo de Ramos';
msgData[4.14] = 'Dia Pan-Americano, Dia do Técnico em Serviço de Saúde, Dia Nacional do Neurocirurgião, Dia Mundial do Café, Dia de Olhar para o Céu, Dia Mundial da Doença de Chagas';
msgData[4.15] = 'Dia Nacional da Conservação do Solo, Dia do Desarmamento Infantil, Dia Mundial da Arte, Dia Mundial do Desenhista';
msgData[4.16] = 'Dia de Trabalhar de Pijama, Dia Mundial da Voz, Dia do Sacerdócio';
msgData[4.17] = 'Dia Mundial do Hemofílico, Dia Mundial da Hemofilia, Dia Nacional de Luta pela Reforma Agrária, Dia Nacional da Botânica, Quinta-feira Santa';
msgData[4.18] = 'Sexta-feira Santa, Dia de Monteiro Lobato, Dia Nacional do Livro Infantil, Dia Mundial do Radioamador, Dia Internacional dos Monumentos e Sítios, Dia do Amigo';
msgData[4.19] = 'Dia Mundial dos Simpsons, Dia do Exército Brasileiro, Dia de Santo Expedito, Sábado de Aleluia, Dia dos Povos Indígenas (Dia do Índio)';
msgData[4.20] = 'Páscoa, Dia do Diplomata, Dia do Disco, Dia da Língua Chinesa';
msgData[4.21] = 'Tiradentes, Dia do Metalúrgico, Dia da Latinidade, Dia da Polícia Civil, Dia do Têxtil, Dia Mundial da Criatividade e Inovação, Dia do Funcionário Policial Civil, Aniversário de Brasília';
msgData[4.22] = 'Dia do Agente de Viagem, Dia da Comunidade Luso-Brasileira, Dia da Aviação de Caça, Data Festiva da Força Aérea Brasileira, Dia Nacional da Tontura, Descobrimento do Brasil, Dia da Terra';
msgData[4.23] = 'Dia Mundial do Escoteiro, Dia do Serralheiro, Dia do Torcedor Corinthiano, Dia Nacional da Educação de Surdos, Dia Nacional do Choro, Dia da Língua Inglesa, Dia da Língua Espanhola, Dia Mundial do Livro e dos Direitos de Autor, Dia Internacional de Cutucar o Nariz, Dia de São Jorge';
msgData[4.24] = 'Dia do Penitenciário, Dia do Boi, Dia do Chimarrão, Dia Internacional do Jovem Trabalhador, Dia Internacional do Milho, Dia do Samurai, Dia Mundial de Combate à Meningite, Dia Nacional da Família na Escola, Dia Nacional da Língua Brasileira de Sinais, Dia das Meninas nas Tecnologias de Informação e Comunicação, Dia Mundial do Multilateralismo e da Diplomacia para a Paz, Dia do Churrasco';
msgData[4.25] = 'Dia da Contabilidade, Dia Mundial da Luta contra a Malária, Dia do Despachante Aduaneiro, Dia do DNA, Dia Internacional de Consciencialização para a Alienação Parental, Dia Mundial do Pinguim';
msgData[4.26] = 'Dia do Goleiro, Dia de Prevenção e Combate à Hipertensão, Dia Internacional de Lembrança do Desastre de Chernobyl, Dia do Juiz Trabalhista, Dia Mundial da Propriedade Intelectual, Dia Mundial da Medicina Veterinária, Dia de Abraçar um Australiano';
msgData[4.27] = 'Dia da Empregada Doméstica, Dia Mundial do Design Gráfico, Dia do Engraxate, Dia do Código Morse';
msgData[4.28] = 'Dia da Sogra, Dia Nacional da Caatinga, Dia Nacional em Memória das Vítimas de Acidentes e Doenças do Trabalho, Dia Mundial da Segurança e da Saúde no Trabalho, Dia da Educação';
msgData[4.29] = 'Dia Internacional da Dança, Dia de Santa Catarina de Sena';
msgData[4.30] = 'Dia do Ferroviário, Dia Internacional do Jazz, Dia Nacional da Mulher, Dia Internacional do Cão-Guia';
msgData[5.1] = 'Dia do Trabalho, Dia da Literatura Brasileira, Dia Mundial da Senha, Início do Maio Amarelo | Segurança no Trânsito (de 1 a 31), Início do Maio Cinza | Câncer Cerebral (de 1 a 31), Início do Maio Laranja | Exploração e Abuso Sexual Infantil (de 1 a 31), Início do Maio Roxo | Doenças Inflamatórias Intestinais (de 1 a 31)';
msgData[5.2] = 'Dia Nacional da Ética, Dia Mundial do Atum, Dia Internacional do Harry Potter';
msgData[5.3] = 'Dia Internacional da Liberdade de Imprensa, Dia do Parlamento, Dia Nacional do Taquígrafo, Dia do Sertanejo, Dia do Pau-Brasil';
msgData[5.4] = 'Dia de Star Wars, Dia Internacional do Respeito pelas Galinhas, Dia Nacional do ex-Combatente, Dia Mundial do Riso, Dia Internacional do Bombeiro';
msgData[5.5] = 'Dia Nacional do Líder Comunitário, Dia Nacional das Comunicações, Dia Nacional do Expedicionário, Dia do Marechal Rondon, Dia Nacional sobre o Uso Racional de Medicamentos, Dia Mundial de Higienização das Mãos, Dia Internacional da Parteira, Dia da Língua Portuguesa e da Cultura Lusófona, Dia Mundial do Trânsito e da Cortesia ao Volante, Dia do Patrimônio Mundial Africano';
msgData[5.6] = 'Dia da Matemática, Dia do Cartógrafo, Dia do Psicanalista, Dia Mundial de Combate à Asma, Dia do Engenheiro Cartógrafo, Dia Internacional sem Dieta, Dia da Coragem';
msgData[5.7] = 'Dia do Oftalmologista, Dia Nacional de Prevenção da Alergia, Dia Mundial da Espondilite Anquilosante, Dia Internacional da Luta contra a Endometriose, Dia do Silêncio';
msgData[5.8] = 'Dia Nacional do Turismo, Dia do Profissional de Marketing, Dia do Artista Plástico, Dia Internacional da Cruz Vermelha, Dia da Vitória, Dia da Talassemia, Dia Nacional das Hemoglobinopatias, Dia Mundial do Câncer de Ovário, Tempo de Recordação e Reconciliação pelos que perderam a vida durante a Segunda Guerra Mundial, dias 8 e 9 de maio';
msgData[5.9] = 'Dia Mundial das Meias Perdidas, Dia da Europa, Aniversário da Fundação de Mato Grosso';
msgData[5.10] = 'Dia do Guia de Turismo, Dia da Cozinheira, Dia da Cavalaria, Dia do Campo, Dia Internacional de Atenção à Pessoa com Lúpus, Dia Mundial das Aves Migratórias';
msgData[5.11] = 'Dia das Mães, Dia Nacional do Reggae, Dia do Aniversário do Buda Shakyamuni, Dia da Integração do Telégrafo no Brasil';
msgData[5.12] = 'Dia Internacional da Enfermagem e do Enfermeiro, Dia Nacional de Conscientização e Enfrentamento da Fibromialgia, Dia Internacional da Sanidade Vegetal';
msgData[5.13] = 'Dia do Automóvel, Dia do Zootecnista, Dia da Fraternidade, Dia Nacional do Chefe de Cozinha, Dia Mundial do Coquetel, Abolição da Escravatura, Dia de Nossa Senhora de Fátima';
msgData[5.14] = 'Dia Continental do Seguro, Dia de São Matias';
msgData[5.15] = 'Dia do Gerente Bancário, Dia do Assistente Social, Dia Nacional do Controle das Infecções Hospitalares, Dia Internacional do Serviço de Informação Aeronáutica, Dia Nacional de Conscientização da Mucopolissacaridose, Dia Internacional da Família';
msgData[5.16] = 'Dia do Gari, Dia Internacional da Luz, Dia Internacional da Convivência em Paz, Dia do Médico Geriatra, Dia Mundial de Conscientização sobre a Doença Celíaca';
msgData[5.17] = 'Dia Mundial das Telecomunicações e da Sociedade da Informação, Dia Mundial da Hipertensão, Dia de Vesak, Dia Internacional Contra a Homofobia, Dia Mundial da Reciclagem, Dia Mundial da Pastelaria, Dia Mundial do Whisky';
msgData[5.18] = 'Dia dos Vidraceiros, Dia Internacional dos Museus, Dia Nacional do Cocktail, Dia Nacional da Luta Antimanicomial, Dia Nacional de Combate ao Abuso e à Exploração Sexual Infantil, Dia de Conscientização sobre a Necessidade de Vacina Contra HIV/Aids';
msgData[5.19] = 'Dia do Físico, Dia dos Acadêmicos de Direito, Dia do Estudante de Direito, Dia do Defensor Público, Dia de São Crispim de Viterbo, Dia Nacional de Doação de Leite Humano, Dia Nacional de Combate à Cefaleia, Dia Mundial da Doença Inflamatória Intestinal, Dia Mundial do Médico de Família';
msgData[5.20] = 'Dia Mundial das Abelhas, Dia Nacional do Medicamento Genérico, Aniversário de Palmas, Dia do Comissário de Menores, Dia Nacional do Técnico e Auxiliar de Enfermagem, Dia Mundial da Metrologia, Dia do Pedagogo';
msgData[5.21] = 'Dia da Língua Nacional, Dia Mundial da Diversidade Cultural para o Diálogo e o Desenvolvimento, Dia do Afilhado, Dia Internacional do Chá';
msgData[5.22] = 'Dia do Apicultor, Dia de Santa Rita, Dia Mundial do Gótico, Dia Internacional da Biodiversidade Biológica, Dia do Abraço';
msgData[5.23] = 'Dia da Tartaruga, Dia da Juventude Constitucionalista, Dia Internacional para Acabar com a Fístula Obstétrica';
msgData[5.24] = 'Dia da Infantaria, Dia do Datilógrafo, Dia do Telegrafista, Dia do Vestibulando, Dia do Detento, Dia Nacional do Calcário Agrícola, Dia Nacional do Cigano, Dia Nacional do Milho, Dia Nacional do Café, Dia Mundial da Pessoa com Esquizofrenia';
msgData[5.25] = 'Dia da Indústria, Dia do Massagista, Dia da Toalha, Dia Internacional do Sapateado, Dia Internacional das Crianças Desaparecidas, Dia do Orgulho Geek, Dia da Costureira, Dia Nacional do Respeito ao Contribuinte, Dia Internacional da Tireoide, Dia do Trabalhador Rural, Dia da África, Dia Nacional da Adoção';
msgData[5.26] = 'Dia Nacional de Combate ao Glaucoma, Dia do Revendedor Lotérico';
msgData[5.27] = 'Dia Nacional da Mata Atlântica, Dia do Profissional Liberal, Dia do Serviço de Saúde, Dia do Engenheiro de Custos';
msgData[5.28] = 'Dia do Hambúrguer, Dia do Ceramista, Dia Nacional de Luta pela Redução da Mortalidade Materna, Dia do Desafio, Dia de São Germano de Paris, Dia Internacional de Luta pela Saúde da Mulher, Dia Mundial do Brincar, Dia Internacional da Dignidade Menstrual';
msgData[5.29] = 'Dia do Estatístico, Dia do Geógrafo, Dia Mundial da Energia, Dia Internacional dos Soldados da Paz das Nações Unidas, Dia de São Maximino, Dia Mundial da Saúde Digestiva, Dia do Ibgeano';
msgData[5.30] = 'Dia do Geólogo, Dia do Decorador, Dia da Santa Joana dArc, São Fernando, Dia Mundial da Esclerose Múltipla, Dia Mundial da Batata Frita';
msgData[5.31] = 'Dia do Comissário de Bordo, Dia do Espírito Santo, Dia Mundial sem Tabaco, Dia da Aeromoça, Dia Mundial de Combate ao Fumo, Dia do Aeroporto';
msgData[6.1] = 'Dia da Imprensa, Dia de São Justino, Dia Mundial dos Pais, Semana do Meio Ambiente, Dia Mundial do Leite, Início do Junho Vermelho | Doação de Sangue (de 1 a 30), Início do Junho Verde | Proteção do Meio Ambiente (de 1 a 30)';
msgData[6.2] = 'Dia de Sair mais Cedo do Trabalho, Dia Internacional da Prostituta';
msgData[6.3] = 'Dia da Repetição, Dia Internacional do Administrador de Pessoal e da Comunidade Social, Dia Mundial da Bicicleta, Dia Nacional da Educação Ambiental, Dia do Profissional de RH, Dia da Conscientização Contra a Obesidade Mórbida Infantil';
msgData[6.4] = 'Dia de Abraçar seu Gato, Dia de Santa Clotilde, Dia Internacional das Crianças Inocentes Vítimas de Agressão, Dia do Engenheiro Agrimensor, Dia do Gestor Comercial, Dia Mundial da Corrida';
msgData[6.5] = 'Dia da Ecologia, Dia Nacional da Reciclagem, Dia de São Bonifácio, Dia Internacional de Luta contra a Pesca Ilegal, Não Declarada e Não Regulamentada, Dia do Engenheiro Mecânico, Dia Mundial do Meio Ambiente';
msgData[6.6] = 'Dia de São Norberto, Dia Nacional de Luta contra Queimaduras, Dia Nacional do Teste do Pezinho, Dia da Língua Russa';
msgData[6.7] = 'Dia da Liberdade de Imprensa, Dia Mundial da Segurança dos Alimentos';
msgData[6.8] = 'Dia do Oceanógrafo, Dia do Citricultor, Dia de São Medardo, Dia Mundial dos Oceanos, Dia de Pentecostes, Dia do Pastor Evangélico';
msgData[6.9] = 'Dia da Imunização, Dia do Porteiro, Dia do Tenista, Dia Nacional de Anchieta, Dia Internacional dos Arquivos';
msgData[6.10] = 'Dia da Artilharia, Dia de Portugal, de Camões e das Comunidades Portuguesas';
msgData[6.11] = 'Dia da Marinha Brasileira, Dia do Educador Sanitário, Dia de São Barnabé';
msgData[6.12] = 'Dia dos Namorados, Dia do Correio Aéreo Nacional, Dia Mundial de Combate ao Trabalho Infantil, Dia de São Gaspar de Búfalo, Dia do Enxadrista';
msgData[6.13] = 'Dia do Turista, Dia Internacional de Conscientização sobre o Albinismo, Dia de Santo Antônio';
msgData[6.14] = 'Dia do Solista, Dia Mundial do Doador de Sangue, Dia Universal de Deus';
msgData[6.15] = 'Dia Mundial da Consciencialização da Violência contra a Pessoa Idosa, Aniversário da Emancipação do Acre, Dia Mundial do Vento';
msgData[6.16] = 'Dia de São Francisco Régis, Dia Internacional da Tartaruga Marinha, Dia Internacional das Remessas Familiares, Dia Internacional da Criança Africana';
msgData[6.17] = 'Dia do Funcionário Público Aposentado, Dia da Medicina Veterinária Militar, Dia Mundial do Karatê, Dia Mundial de Combate à Desertificação e à Seca, Dia do Gestor Ambiental';
msgData[6.18] = 'Dia do Químico, Dia da Imigração Japonesa, Dia da Gastronomia Sustentável, Dia do Orgulho Autista';
msgData[6.19] = 'Corpus Christi, Dia do Cinema Brasileiro, Dia do Migrante, Dia de São Romualdo, Dia Internacional para Eliminação da Violência Sexual em Conflito, Dia Mundial de Conscientização sobre a Doença Falciforme, Dia Nacional do Luto';
msgData[6.20] = 'Ponto Facultativo (dia seguinte ao Corpus Christi), Dia do Revendedor, Dia do Vigilante, Dia do Refugiado, Dia do Advogado Trabalhista, Início do Inverno (Solstício de Inverno)';
msgData[6.21] = 'Dia de São Luís Gonzaga, Dia do Mídia, Dia do Profissional de Mídia, Dia do Aperto de Mão, Dia Mundial do Skate, Dia do Intelectual, Dia Internacional do Yoga, Dia Nacional de Controle da Asma, Dia Nacional de Luta Contra a Esclerose Lateral Amiotrófica (ELA), Dia Mundial da Girafa';
msgData[6.22] = 'Dia de Levar o Cachorro para o Trabalho, Dia do Orquidófilo, Dia do Aeroviário, Dia do Economiário';
msgData[6.23] = 'Dia Mundial do Desporto Olímpico, Dia do Atleta Olímpico, Dia do Lavrador, Dia de São José Cafasso, Dia das Nações Unidas para o Serviço Público, Dia Internacional das Viúvas, Dia Nacional do Agente Marítimo, Dia Internacional das Mulheres na Engenharia';
msgData[6.24] = 'Dia da Polícia Militar, Dia do Disco Voador, Dia do Observador Aéreo, Dia do Caboclo, Dia Nacional da Araucária, Dia da Indústria Gráfica, Dia Internacional do Leite, Dia da Comunidade Britânica, Dia Mundial da Ufologia, Dia de São João';
msgData[6.25] = 'Dia do Cotonete, Dia do Imigrante, Dia Mundial do Vitiligo, Dia Mundial do Marinheiro';
msgData[6.26] = 'Dia Internacional contra o Abuso e Tráfico Ilícito de Drogas, Dia Internacional de Apoio às Vítimas de Tortura, Dia Nacional do Diabetes, Dia do Metrologista';
msgData[6.27] = 'Dia Nacional do Vôlei, Dia Nacional do Progresso, Dia de Nossa Senhora do Perpétuo Socorro, Dia Nacional do Técnico em Nutrição e Dietética, Dia Nacional do Quadrilheiro Junino, Dia Internacional das Micro, Pequenas e Médias Empresas';
msgData[6.28] = 'Dia de Santo Irineu, Dia da Renovação Espiritual, Dia Internacional do Orgulho LGBT';
msgData[6.29] = 'Dia do Papa, Dia do Pescador, Dia do Dublador, Dia do Telefonista, Dia do Pescador Amador, Dia Nacional da Aviação de Segurança Pública do Brasil, Dia do Engenheiro de Petróleo, Dia Internacional dos Trópicos, Dia de São Pedro e São Paulo';
msgData[6.30] = 'Dia da Mídia Social, Dia Nacional do Bumba Meu Boi, Dia Nacional do Fiscal Federal Agropecuário, Dia Internacional do Asteroide, Dia Internacional do Parlamentarismo';
msgData[7.1] = 'Dia de Santo Aarão, Dia Mundial da Arquitetura, Dia da Vacina BCG, Início do Julho Amarelo | Hepatites Virais (de 1 a 31), Início do Julho Verde | Câncer de Cabeça e Pescoço (de 1 a 31)';
msgData[7.2] = 'Dia do Hospital, Dia do Bombeiro Brasileiro, Independência da Bahia';
msgData[7.3] = 'Dia Nacional de Combate à Discriminação Racial, Dia de São Tomé, Dia Internacional sem Sacos Plásticos';
msgData[7.4] = 'Dia de Fritar Ovos na Calçada, Dia do Operador de Telemarketing, Dia de Santa Isabel, Dia da Independência dos Estados Unidos';
msgData[7.5] = 'Dia Internacional do Cooperativismo, Dia Mundial do Biquíni';
msgData[7.6] = 'Dia de Construir um Espantalho, Dia da criação do IBGE, Dia de Santa Maria Goretti, Dia Mundial das Zoonoses, Dia de Levar o seu Webmaster para Almoçar';
msgData[7.7] = 'Dia Mundial do Chocolate';
msgData[7.8] = 'Dia do Panificador, Dia Nacional da Ciência e do Pesquisador, Aniversário de Ouro Preto, Dia Mundial da Alergia';
msgData[7.9] = 'Aniversário de Boa Vista, Dia do Médico Oncologista, Dia da Revolução Constitucionalista';
msgData[7.10] = 'Dia do Engenheiro de Minas, Dia Mundial da Lei, Dia da Saúde Ocular, Dia da Pizza';
msgData[7.11] = 'Dia Mundial da População, Dia Nacional do Socorrista';
msgData[7.12] = 'Dia do Engenheiro Florestal, Dia Nacional do Funk';
msgData[7.13] = 'Dia do Engenheiro de Saneamento, Dia dos Compositores e Cantores Sertanejos, Dia do Cantor, Dia Mundial do Rock';
msgData[7.14] = 'Dia do Propagandista de Laboratório, Dia da Liberdade de Pensamento, Dia de São Camilo, Dia do Engenheiro de Aquicultura, Dia do Administrador Hospitalar';
msgData[7.15] = 'Dia Nacional dos Clubes, Dia Nacional do Pecuarista, Dia Mundial das Habilidades dos Jovens, Dia do Homem';
msgData[7.16] = 'Dia do Comerciante, Dia de Nossa Senhora do Carmo, Dia Mundial da Cobra';
msgData[7.17] = 'Dia de Proteção às Florestas, Dia Mundial do Emoji, Dia do Curupira';
msgData[7.18] = 'Dia Internacional de Nelson Mandela, Dia de São Francisco Solano, Dia do Trovador, Dia Mundial da Escuta';
msgData[7.19] = 'Dia de Mostrar a Língua, Dia da Caridade, Dia Nacional do Futebol, Dia de São Símaco';
msgData[7.20] = 'Dia Nacional do Biscoito, Dia Pan-americano do Engenheiro, Chegada do Homem à Lua, Dia do Amigo e Internacional da Amizade, Dia Internacional do Xadrez';
msgData[7.21] = 'Dia Nacional do Garimpeiro';
msgData[7.22] = 'Dia de Santa Maria Madalena, Dia Mundial do Cérebro, Dia do Cantor Lírico';
msgData[7.23] = 'Dia do Guarda Rodoviário, Dia de Santa Brígida';
msgData[7.24] = 'Dia de São Charbel Makhlouf, Dia Nacional do Suinocultor, Dia Internacional do Autocuidado, Dia da Tequila';
msgData[7.25] = 'Dia de São Cristóvão, Dia do Colono, Dia do Motorista, Dia de São Tiago Maior, Dia Mundial de Prevenção do Afogamento, Dia da Imigração Alemã no Brasil, Dia da Mulher Negra Latina e Caribenha, Dia do Escritor';
msgData[7.26] = 'Dia Nacional do Arqueólogo, Dia do Recepcionista, Dia Mundial de Proteção aos Manguezais, Dia da Vovó, Dia dos Avós';
msgData[7.27] = 'Dia de Levar suas Plantas para Passear, Dia do Motociclista, Dia Mundial de Conscientização e Combate ao Câncer de Cabeça e Pescoço, Dia de São Pantaleão de Nicomédia, Dia do Pediatra, Dia Nacional da Prevenção de Acidentes do Trabalho';
msgData[7.28] = 'Dia do Agricultor, Dia Mundial de Luta Contra as Hepatites Virais';
msgData[7.29] = 'Dia de Santa Marta, Dia Internacional do Tigre';
msgData[7.30] = 'São Pedro Crisólogo, Dia Mundial contra o Tráfico de Pessoas, Dia Internacional da Amizade, Dia do Cirurgião Geral, Dia Mundial do Bordado';
msgData[7.31] = 'Dia do Orgasmo, Dia de Santo Inácio de Loyola, Dia Mundial do Guarda-Florestal';
msgData[8.1] = 'Dia Nacional do Selo, Dia Nacional dos Portadores de Vitiligo, Dia do Cerealista, Dia Mundial da Amamentação, Dia Mundial do Câncer de Pulmão, Dia Internacional da Cerveja, Início da Semana Mundial da Amamentação (de 1 a 7), Início do Agosto Dourado | Aleitamento Materno (de 1 a 31), Início do Agosto Verde-Claro | Linfoma (de 1 a 31)';
msgData[8.2] = 'Dia de Santo Eusébio de Vercelli';
msgData[8.3] = 'Dia do Capoeirista, Dia do Tintureiro, Dia de Santa Lídia, Dia do Fim da Censura no Brasil';
msgData[8.4] = 'Dia do Sacerdote, Dia de São João Maria Vianney, Dia do Padre';
msgData[8.5] = 'Dia de Nossa Senhora das Neves, Dia de Santo Osvaldo de Nortúmbria, Aniversário de João Pessoa, Aniversário da Fundação da Paraíba, Dia Nacional da Farmácia, Dia Nacional da Saúde, Dia do Médico Patologista, Dia Nacional da Vigilância Sanitária';
msgData[8.6] = 'Dia de São Salvador do Mundo, Dia Nacional dos Profissionais da Educação, Dia Interamericano do Escotista';
msgData[8.7] = 'Dia de São Caetano, Dia Nacional do Documentário Brasileiro, Aniversário do Rio Grande do Norte';
msgData[8.8] = 'Dia de São Domingos de Gusmão, Dia Nacional de Combate ao Colesterol, Dia Interamericano da Qualidade do Ar';
msgData[8.9] = 'Dia Internacional dos Povos Indígenas, Dia Nacional da Equoterapia';
msgData[8.10] = 'Dia dos Pais, Dia de São Lourenço, Dia Internacional do Biodiesel, Dia da Solidariedade Cristã, Dia da Preguiça';
msgData[8.11] = 'Dia da Televisão, Dia do Advogado, Dia Internacional da Logosofia, Dia do Garçom, Dia de Santa Clara de Assis, Dia do Magistrado, Dia do Médico Acupunturista, Dia do Estudante';
msgData[8.12] = 'Dia Internacional da Juventude, Dia Nacional dos Direitos Humanos, Dia Nacional das Artes, Dia Mundial do Elefante';
msgData[8.13] = 'Dia do Canhoto, Dia do Economista, Dia de São Ponciano e Santo Hipólito, Dia do Médico Psiquiatra';
msgData[8.14] = 'Dia do Cardiologista, Dia de São Maximiliano, Dia da Unidade Humana, Dia do Controle da Poluição Industrial';
msgData[8.15] = 'Dia da Informática, Dia de São Tarcísio, Dia Nacional das Santas Casas de Misericórdia, Dia da Assunção de Nossa Senhora, Dia dos Solteiros, Dia do Médico Angiologista e Cirurgião Vascular, Dia da Imigração Chinesa no Brasil';
msgData[8.16] = 'Dia de Contar uma Piada, Dia de São Roque, Aniversário de Teresina, Dia do Auxiliar de Almoxarifado, Dia do Filósofo';
msgData[8.17] = 'Dia de São Jacinto, Dia do Patrimônio Histórico, Dia Nacional da Construção Social, Dia do Pão de Queijo';
msgData[8.18] = 'Dia de Santa Helena, Dia Nacional do Campo Limpo, Dia do Estagiário, Dia Mundial da Libertação Humana, Dia do Nunca Desista';
msgData[8.19] = 'Dia do Historiador, Dia Mundial da Fotografia, Dia do Artista de Teatro, Dia de São João Eudes, Dia Mundial Humanitário, Dia da Integração Jurídica Latino-Americana, Dia Nacional da Aviação Agrícola, Dia Nacional do Ciclista, Dia de Luta da População em Situação de Rua';
msgData[8.20] = 'Dia do Maçom, Dia de São Bernardo, Dia Mundial Contra os Mosquitos';
msgData[8.21] = 'Dia de São Pio X, Dia Internacional de Recordação e Homenagem às Vítimas do Terrorismo, Início da Semana Nacional da Pessoa com Deficiência Intelectual e Múltipla, Dia Nacional da Habitação';
msgData[8.22] = 'Dia de Ser um Anjo, Dia de Nossa Senhora Rainha, Dia do Supervisor Escolar, Dia do Coordenador Pedagógico, Dia do Folclore';
msgData[8.23] = 'Dia de Santa Rosa de Lima, Dia Internacional para Relembrar o Tráfico de Escravos e sua Abolição, Dia do Aviador Naval, Dia da Intendência';
msgData[8.24] = 'Dia da Música Estranha, Dia de São Bartolomeu, Dia Nacional da Comunidade Ucraniana, Dia da Infância, Dia do Artista';
msgData[8.25] = 'Dia do Feirante, Dia Nacional da Educação Infantil, Dia da Legalidade, Dia do Soldado';
msgData[8.26] = 'Dia de São Zeferino, Aniversário de Campo Grande, Dia do Catequista, Dia Internacional da Igualdade Feminina';
msgData[8.27] = 'Dia do Corretor de Imóveis, Dia de São Celestino I, Dia de Santa Mônica, Dia do Psicólogo';
msgData[8.28] = 'Dia dos Bancários, Dia da Avicultura, Dia de Santo Agostinho de Hipona, Dia Nacional de Combate e Prevenção ao Escalpelamento, Dia Nacional do Voluntariado, Dia da Corrida do Mouse';
msgData[8.29] = 'Dia Nacional da Visibilidade Lésbica, Dia Nacional de Combate ao Fumo, Dia de Santa Joana Maria da Cruz, Dia Internacional contra Testes Nucleares, Dia Internacional do Gamer';
msgData[8.30] = 'Dia de São Cesário de Arles, Dia Nacional de Conscientização sobre a Esclerose Múltipla, Dia Internacional das Vítimas de Desaparecimentos Forçados';
msgData[8.31] = 'Dia de São Raimundo Nonato, Dia Internacional do Blog, Dia do Nutricionista';
msgData[9.1] = 'Dia do Profissional de Educação Física, Dia do Corinthians, Dia da Bailarina, Dia de Santa Beatriz da Silva, Dia Mundial de Oração pelo Cuidado da Criação, Dia do Médico Endocrinologista, Início do Setembro Amarelo | Prevenção do Suicídio (de 1 a 30), Início do Setembro Verde| Doação de Órgãos (de 1 a 30)';
msgData[9.2] = 'Dia de Santa Dorotéia, Dia do Florista, Dia do Repórter Fotográfico';
msgData[9.3] = 'Dia do Biólogo, Dia de São Gregório Magno, Dia do Guarda Civil, Dia das Organizações Populares';
msgData[9.4] = 'Dia de Comer uma Sobremesa Extra, Dia de Santa Rosália, Dia Mundial do Taekwondo, Dia Mundial da Saúde Sexual';
msgData[9.5] = 'Dia de se Atrasar para Alguma Coisa, Dia da Amazônia, Dia Nacional de Conscientização e Divulgação da Fibrose Cística, Dia do Oficial de Farmácia do Brasil, Aniversário da Emancipação do Amazonas, Dia Internacional da Caridade, Dia da Raça, Dia do Irmão';
msgData[9.6] = 'Dia do Alfaiate, Dia do Sexo, Dia Mundial da Barba';
msgData[9.7] = 'Dia da Independência do Brasil - 7 de Setembro, Dia de Santa Regina, Dia de São Clodoaldo, Dia Internacional do Ar Limpo para um Céu Azul';
msgData[9.8] = 'Dia Mundial da Alfabetização, Dia de Santo Adriano, Dia de Nossa Senhora da Natividade, Aniversário de Vitória, Dia Nacional de Luta por Medicamento, Aniversário de São Luís, Dia Mundial da Fisioterapia, Dia Mundial da Fibrose Cística';
msgData[9.9] = 'Dia do Administrador, Dia do Cachorro-Quente, Dia da Velocidade, Dia do Médico Veterinário, Dia Internacional para Proteger a Educação de Ataques';
msgData[9.10] = 'Dia do Gordo, Dia Mundial de Prevenção ao Suicídio';
msgData[9.11] = 'Dia Nacional do Cerrado, Dia do Árbitro Esportivo';
msgData[9.12] = 'Dia Nacional da Recreação, Dia do Operador de Rastreamento, Dia do Médico Urologista';
msgData[9.13] = 'Dia Nacional da Cachaça, Dia Mundial da Sepse, Dia Nacional de Luta dos Acidentados por Fontes Radioativas, Dia de São João Crisóstomo, Dia do Programador, Dia do Agrônomo';
msgData[9.14] = 'Dia da Cruz, Dia do Frevo';
msgData[9.15] = 'Dia de Nossa Senhora das Dores, Dia Mundial de Conscientização sobre Linfomas, Dia Internacional da Democracia, Dia do Musicoterapeuta, Dia do Cliente';
msgData[9.16] = 'Dia do Caminhoneiro, Dia Internacional para a Preservação da Camada de Ozônio, Dia de São Cipriano, Dia Nacional de Combate e Prevenção à Trombose, Aniversário da Emancipação de Alagoas';
msgData[9.17] = 'Dia da Compreensão Mundial, Dia Nacional do Transportador Rodoviário de Carga, Dia Mundial da Segurança do Paciente';
msgData[9.18] = 'Dia dos Símbolos Nacionais, Dia Nacional de Conscientização e Incentivo ao Diagnóstico Precoce do Retinoblastoma, Dia Oficial da Televisão, Dia Internacional da Igualdade Salarial';
msgData[9.19] = 'Dia de Falar como um Pirata, Dia Nacional do Teatro, Dia do Ortopedista, Dia do Comprador, Dia Nacional do Educador Social, Dia de São Januário, Dia Internacional de Atenção aos Acidentes Ofídicos, Dia Mundial pela Limpeza da Água';
msgData[9.20] = 'Dia do Engenheiro Químico, Dia Mundial do Doador de Medula Óssea, Dia do Funcionário Municipal, Dia do Baterista, Revolução Farroupilha (Dia do Gaúcho)';
msgData[9.21] = 'Dia do Adolescente, Dia do Fazendeiro, Dia dos Tios: Dia da Tia e Dia do Tio, Dia Internacional da Paz, Dia de São Mateus, Dia Mundial da Doença de Alzheimer, Dia Nacional de Conscientização da Doença de Alzheimer, Dia Nacional de Luta da Pessoa com Deficiência, Dia Mundial da Gratidão, Dia da Árvore';
msgData[9.22] = 'Dia do Contador, Dia da Juventude do Brasil, Dia Mundial Sem Carro, Dia Nacional do Atleta Paralímpico, Dia da Banana, Dia Nacional de Defesa da Fauna, Dia de São Maurício, Dia Nacional da Saúde de Adolescentes e Jovens, Dia Mundial da Leucemia Mieloide Crônica, Início da Primavera';
msgData[9.23] = 'Dia do Sorvete, Dia do Soldador, Dia Nacional dos Profissionais de Nível Técnico, Dia Internacional das Línguas de Sinais, Dia Internacional Contra a Exploração Sexual e o Tráfico de Mulheres e Crianças, Dia de Combate ao Estresse, Dia do Técnico Industrial, Dia do Técnico em Edificações, Dia dos Filhos';
msgData[9.24] = 'Dia do Mototaxista (SP)';
msgData[9.25] = 'Dia Nacional do Trânsito, Dia Internacional do Farmacêutico, Dia do Rádio, Dia da Radiodifusão, Dia Mundial do Sonho, Dia Mundial do Pulmão, Dia Marítimo Mundial';
msgData[9.26] = 'Dia Interamericano das Relações Públicas, Dia dos Primos, Dia Nacional dos Surdos, Dia Internacional para a Eliminação Total das Armas Nucleares, Dia Mundial da Contracepção';
msgData[9.27] = 'Dia Nacional de Doação de Órgãos, Dia Nacional dos Vicentinos, Dia Mundial do Turismo, Dia Nacional do Turismólogo e dos Profissionais do Turismo, Dia do Encanador, Dia de São Cosme e Damião, Dia Internacional do Coelho';
msgData[9.28] = 'Dia de Fazer Perguntas Tontas, Dia do Hidrógrafo, Dia Mundial de Luta contra a Raiva, Dia de São Venceslau, Dia Internacional do Acesso Universal à Informação, Dia Mundial dos Rios';
msgData[9.29] = 'Dia Mundial do Petróleo, Dia do Anunciante, Dia Mundial do Coração, Dia de São Miguel Arcanjo, Dia de São Gabriel Arcanjo, Dia de São Rafael Arcanjo, Dia Internacional de Conscientização sobre Perda e Desperdício de Alimentos';
msgData[9.30] = 'Dia da Bíblia Católica, Dia Nacional do Jornaleiro, Dia Mundial do Tradutor, Dia Internacional da Tradução, Dia da Secretária, Dia Internacional do Podcast';
msgData[10.1] = 'Dia Internacional da Música, Dia do Vereador, Dia de Santa Teresinha, Dia Internacional das Pessoas Idosas, Dia Nacional do Idoso, Dia do Representante Comercial, Dia Mundial do Vegetarianismo, Dia Mundial da Urticária, Dia do Vendedor, Dia Internacional do Café, Início do Outubro Rosa | Câncer de Mama (de 1 a 31), Dia de Yom Kipur';
msgData[10.2] = 'Dia Internacional da Não-Violência, Dia do Anjo da Guarda, Aniversário de Porto Velho, Dia do Quadro Complementar de Oficiais';
msgData[10.3] = 'Dia Mundial do Dentista, Dia das Abelhas, Dia Mundial do Sorriso, Dia do Profissional de Organização, Dia do Engenheiro de Energia, Dia do Petróleo Brasileiro';
msgData[10.4] = 'Dia dos Animais, Dia de São Francisco de Assis, Dia da Natureza, Dia do Cachorro, Dia do Agente Comunitário de Saúde, Dia do Barman, Dia do Médico do Trabalho, Semana Mundial do Espaço (dias 4 a 10), Dia Nacional dos Agentes de Combate às Endemias';
msgData[10.5] = 'Dia de São Benedito, Dia Nacional da Micro e Pequena Empresa, Dia Mundial dos Professores, Dia da Promulgação da Constituição de 1988, Dia da Ave';
msgData[10.6] = 'Dia de São Bruno, Dia Mundial do Habitat, Dia do Tecnólogo, Dia Mundial da Paralisia Cerebral';
msgData[10.7] = 'Dia do Trabalho Decente, Dia de Nossa Senhora do Rosário, Dia do Compositor Brasileiro, Dia Mundial do Algodão';
msgData[10.8] = 'Dia de Levar Seu Ursinho de Pelúcia para o Trabalho ou para a Escola, Dia do Nordestino, Dia Nacional de Doação de Cordão Umbilical';
msgData[10.9] = 'Dia dos Eventos Curiosos, Dia do Atletismo, Dia Mundial dos Correios, Dia do Açougueiro, Dia Mundial da Visão';
msgData[10.10] = 'Dia de São Daniel Comboni, Dia Mundial da Saúde Mental, Dia dos Veteranos da Marinha, Dia Nacional de Luta Contra a Violência à Mulher, Dia Nacional de Segurança e de Saúde nas Escolas, Dia Mundial Contra a Pena de Morte, Dia Mundial do Ovo';
msgData[10.11] = 'Dia Nacional de Prevenção da Obesidade, Dia Internacional das Meninas, Aniversário da Criação do Mato Grosso do Sul, Dia do Deficiente Físico, 2.º Dia Mundial das Aves Migratórias, Dia Mundial de Cuidados Paliativos';
msgData[10.12] = 'Nossa Senhora Aparecida, Dia das Crianças, Dia do Engenheiro Agrônomo, Dia do Corretor de Seguros, Descobrimento da América, Dia do Rio Tietê, Dia do Cirurgião Pediátrico, Dia Mundial da Artrite Reumatoide, Dia Nacional do Lobo-Guará, Dia Nacional da Leitura';
msgData[10.13] = 'Dia Mundial da Trombose, Dia Nacional do Fisioterapeuta e do Terapeuta Ocupacional, Dia Internacional para a Redução de Desastres';
msgData[10.14] = 'Dia do Meteorologista, Dia Mundial da Normalização, Dia Nacional da Pecuária';
msgData[10.15] = 'Dia Mundial da Lavagem das Mãos, Dia Internacional das Mulheres Rurais, Dia do Educador Ambiental, Dia do Consumo Consciente, Dia Internacional da Mulher Rural, Dia do Médico Neurologista, Dia Mundial da Bengala Branca, Dia do Professor';
msgData[10.16] = 'Dia de São Geraldo, Dia do Chefe, Dia do Anestesiologista, Dia Mundial da Alimentação, Dia Mundial do Pão, Dia do Engenheiro de Alimentos, Dia Mundial da Coluna';
msgData[10.17] = 'Dia de Usar Algo Chamativo, Dia da Agricultura, Dia do Eletricista, Dia da Indústria Aeronáutica Brasileira, Dia do Profissional da Propaganda, Dia Nacional da Vacinação, Dia da Música Popular Brasileira, Dia Internacional para a Erradicação da Pobreza';
msgData[10.18] = 'Dia do Pintor, Dia do Estivador, Dia de São Lucas, Dia Nacional de Combate à Sífilis e à Sífilis Congênita, Dia do Médico, Dia Mundial da Menopausa';
msgData[10.19] = 'Dia do Profissional de Informática, Dia do Guarda Noturno, Dia Nacional da Inovação, Dia do Profissional de Tecnologia da Informação, Dia do Piauí, Dia do Operador de Caixa, Dia Mundial das Missões, Dia Internacional de Combate ao Câncer de Mama';
msgData[10.20] = 'Dia do Maquinista, Dia do Arquivista, Dia Mundial do Controlador de Tráfego Aéreo, Dia Mundial da Osteoporose, Dia Mundial da Estatística, Dia do Securitário, Dia do Poeta, Dia Mundial de Combate ao Bullying';
msgData[10.21] = 'Dia Nacional da Alimentação na Escola, Dia do Ecumenismo, Dia do Podcast, Dia do Economista Doméstico, Dia Internacional da Maçã';
msgData[10.22] = 'Dia do Paraquedista, Dia do Enólogo, Dia Internacional de Atenção à Gagueira, Dia de São João Paulo II, Dia do Protesto Mundial contra o Uso do Eletrochoque, Dia Internacional do Caps Lock';
msgData[10.23] = 'Dia da Força Aérea Brasileira, Dia do Aviador, Dia do Aposentado do Banco Central';
msgData[10.24] = 'Aniversário de Manaus, Aniversário de Goiânia, Dia das Nações Unidas, Dia Mundial do Desenvolvimento da Informação, Dia Mundial de Combate à Poliomielite';
msgData[10.25] = 'Dia de São Crispim e São Crispiniano, Dia de São Frei Galvão, Dia do Sapateiro, Dia Nacional da Saúde Bucal, Dia do Engenheiro Civil, Dia Nacional de Combate ao Preconceito contra as Pessoas com Nanismo, Dia da Democracia, Dia do Dentista, Dia Mundial do Macarrão, Dia Mundial da Ópera, Dia de ser Punk por um Dia';
msgData[10.26] = 'Dia do Trabalhador da Construção Civil, Dia do Metroviário';
msgData[10.27] = 'Ponto Facultativo (dia anterior ao Dia do Servidor Público), Dia Mundial do Patrimônio Audiovisual, Dia Nacional de Mobilização Pró-Saúde da População Negra, Dia Nacional de Luta pelos Direitos das Pessoas com Doenças Falciformes, Dia do Engenheiro Agrícola, Dia Mundial da Terapia Ocupacional';
msgData[10.28] = 'Dia do Servidor Público, Dia da Engenharia da Aeronáutica, Dia Internacional da Animação, Dia do Flamenguista, Dia de São Judas Tadeu, Dia Mundial do Judô';
msgData[10.29] = 'Dia Mundial da Psoríase, Dia Mundial do AVC, Dia Nacional da Prevenção da Lavagem de Dinheiro, Dia Nacional do Livro';
msgData[10.30] = 'Noite da Geladeira Assombrada, Dia do Material Bélico, Dia do Ginecologista, Dia do Fisiculturista, Dia do Balconista, Dia da Decoração, Dia da Merendeira Escolar, Dia Nacional de Luta contra o Reumatismo, Dia do Designer de Interiores, Dia do Comerciário';
msgData[10.31] = 'Dia Mundial da Poupança, Dia da Reforma Protestante, Dia da Dona de Casa, Dia Nacional da Proclamação do Evangelho, Dia Mundial das Cidades, Dia Nacional da Poesia, Dia das Bruxas - Halloween, Dia do Saci';
msgData[11.1] = 'Dia de Todos os Santos, Dia Mundial do Veganismo, Início do Novembro Azul | Câncer de Próstata (de 1 a 30), Início do Novembro Azul | Diabetes (de 1 a 30), Início do Novembro Roxo | Prematuridade (de 1 a 30)';
msgData[11.2] = 'Finados, Dia dos Mortos, Dia Internacional pelo Fim da Impunidade dos Crimes contra Jornalistas';
msgData[11.3] = 'Dia Nacional do Quilo, Dia da Instituição do Direito de Voto da Mulher, Dia do Cliché';
msgData[11.4] = 'Dia do Oficial da Reserva (R/2), Dia da Favela, Dia do Inventor';
msgData[11.5] = 'Dia do Designer Gráfico, Dia do Radioamador, Dia do Protético, Dia Nacional da Língua Portuguesa, Dia do Técnico em Eletrônica, Dia de Atenção Mundial para Tsunamis, Dia da Cultura e da Ciência, Dia do Técnico Agrícola, Dia de São Zacarias e Santa Isabel';
msgData[11.6] = 'Dia Internacional para a Prevenção da Exploração do Meio Ambiente em Tempos de Guerra e Conflito Armado, Dia Nacional do Amigo da Marinha do Brasil, Dia da Malária nas Américas, Dia Nacional do Riso';
msgData[11.7] = 'Dia do Radialista';
msgData[11.8] = 'Dia do Radiologista, Dia Mundial do Urbanismo';
msgData[11.9] = 'Dia do Caos Nunca Morre, Dia do Hoteleiro, Dia Nacional dos Clubes Esportivos Sociais, Dia Internacional contra o Fascismo e o Antissemitismo, Dia do Técnico em Eletrotécnica';
msgData[11.10] = 'Dia Mundial da Ciência pela Paz e pelo Desenvolvimento, Dia Nacional do Trigo, Dia Nacional de Prevenção e Combate à Surdez, Dia Mundial do Ceratocone, Dia Nacional do Intensivista';
msgData[11.11] = 'Fim da Primeira Guerra Mundial (1918)';
msgData[11.12] = 'Dia dos Supermercados, Dia Mundial da Pneumonia, Dia Mundial do Hip Hop, Dia Nacional do Inventor, Dia da Indústria Automobilística, Dia do Pantanal, Dia do Diretor Escolar, Dia Nacional de Prevenção das Arritmias Cardíacas e Morte Súbita';
msgData[11.13] = 'Dia Mundial da Qualidade, Dia Mundial da Gentileza, Dia Mundial da Usabilidade';
msgData[11.14] = 'Dia do Bandeirante, Dia Nacional da Alfabetização, Dia Mundial do Diabetes';
msgData[11.15] = 'Proclamação da República, Dia do Esporte Amador, Dia do Joalheiro, Dia Nacional da Umbanda';
msgData[11.16] = 'Dia Internacional da Tolerância, Dia Nacional dos Ostomizados, Dia em Memória das Vítimas de Acidentes de Trânsito e seus Familiares, Dia Nacional de Atenção à Dislexia, Dia Nacional da Amazônia Azul, Dia do Não Fumar';
msgData[11.17] = 'Dia Internacional dos Estudantes, Dia Mundial da Prematuridade, Dia Nacional de Combate à Tuberculose, Dia Mundial de Combate ao Câncer de Próstata, Dia da Criatividade';
msgData[11.18] = 'Dia do Conselheiro Tutelar, Dia Nacional do Notário e do Registrador, Dia Nacional de Combate ao Racismo, Início da Semana Mundial de Conscientização Sobre o Uso de Antimicrobianos (18 a 24)';
msgData[11.19] = 'Dia de Ter Um Dia Ruim, Dia Mundial do Vaso Sanitário, Dia do Empreendedorismo Feminino, Dia Mundial da Doença Pulmonar Obstrutiva Crônica, Dia Internacional do Homem, Dia da Bandeira, Dia do Rei Pelé';
msgData[11.20] = 'Dia Nacional de Zumbi e da Consciência Negra, Dia de Usar Menos Coisas, Dia do Biomédico, Dia do Auditor Interno, Dia Mundial da Filosofia, Dia da Industrialização da África, Dia Universal da Criança, Dia do Técnico em Contabilidade, Dia Internacional de Memória Trans';
msgData[11.21] = 'Dia Nacional da Homeopatia, Dia Mundial da Saudação, Dia Mundial da Televisão, Dia do Médico Homeopata, Dia Nacional do Compromisso com a Criança, o Adolescente e a Educação';
msgData[11.22] = 'Dia de Criar seu Próprio País, Aniversário de Niterói, Dia da Comunidade Libanesa no Brasil, Dia Nacional de Combate ao Dengue, Dia do Músico';
msgData[11.23] = 'Dia do Engenheiro Eletricista, Dia Nacional de Combate ao Câncer Infanto-Juvenil';
msgData[11.24] = 'Dia do Quadro Auxiliar de Oficiais (QAO)';
msgData[11.25] = 'Dia do Doador Voluntário de Sangue, Dia da Baiana de Acarajé, Dia da Madrinha, Dia Internacional para a Eliminação da Violência Contra as Mulheres';
msgData[11.26] = 'Dia Interamericano do Ministério Público';
msgData[11.27] = 'Dia do Técnico de Segurança no Trabalho, Dia Nacional de Combate ao Câncer, Dia Nacional de Luta contra o Câncer de Mama, Dia do Engenheiro de Segurança do Trabalho, Dia de Nossa Senhora das Graças, Dia de Ação de Graças';
msgData[11.28] = 'Dia do Soldado Desconhecido, Black Friday';
msgData[11.29] = 'Dia Internacional de Solidariedade com o Povo da Palestina, Dia Nacional da Onça-Pintada, Dia Internacional da Onça-Pintada';
msgData[11.30] = 'Dia do Evangélico, Dia da Amizade Argentino-Brasileira, Dia de Celebração da Amizade Brasil-Argentina, Dia em Memória de todas as Vítimas de Armas Químicas, Dia do Estatuto da Terra, Dia do Teólogo';
msgData[12.1] = 'Dia Internacional da Luta contra a AIDS, Dia do Numismata, Cyber Monday, Início do Dezembro Vermelho | Aids (de 1 a 31), Início do Dezembro Laranja | Câncer de Pele (de 1 a 31)';
msgData[12.2] = 'Dia Nacional das Relações Públicas, Dia da Astronomia, Dia Pan-americano da Saúde, Dia Internacional para a Abolição da Escravatura, Aniversário de Minas Gerais, Dia Nacional do Samba';
msgData[12.3] = 'Dia Internacional da Pessoa com Deficiência, Dia Internacional do Deficiente Físico, Dia de São Francisco Xavier, Dia do Delegado de Polícia, Dia Nacional de Combate à Pirataria e à Biopirataria';
msgData[12.4] = 'Dia de Usar Sapatos Marrons, Dia Mundial da Propaganda, Dia do Pedicuro, Dia do Perito Criminal Oficial, Dia do Trabalhador nas Minas de Carvão, Dia do Orientador Educacional';
msgData[12.5] = 'Dia Mundial do Solo, Dia Internacional do Voluntário, Aniversário de Maceió, Dia Nacional da Pastoral da Criança, Dia do Médico de Família e Comunidade, Dia da Acessibilidade';
msgData[12.6] = 'Dia Nacional do Extensionista Rural, Dia de São Nicolau, Dia Nacional de Mobilização dos Homens pelo Fim da Violência contra as Mulheres';
msgData[12.7] = 'Dia lnternacional da Aviação Civil, Dia Nacional da Assistência Social, Dia Nacional da Silvicultura, Dia do Médico Cirurgião Plástico';
msgData[12.8] = 'Dia de Fingir ser um Viajante do Tempo, Dia da Justiça, Dia do Colunista Social, Dia da Imaculada Conceição, Dia da Família';
msgData[12.9] = 'Dia do Fonoaudiólogo, Dia do Alcoólico Recuperado, Dia Internacional contra a Corrupção, Dia Internacional de Homenagem e Dignidade das Vítimas do Crime de Genocídio, Dia da Criança Especial';
msgData[12.10] = 'Dia da Declaração Universal dos Direitos Humanos, Dia Universal do Palhaço, Dia da Inclusão Social, Dia de São Melquíades';
msgData[12.11] = 'Dia Internacional das Montanhas, Dia Nacional da Câmara Júnior, Dia Nacional das APAEs, Dia do Tango, Dia de São Dâmaso, Dia do Engenheiro';
msgData[12.12] = 'Dia de Nossa Senhora de Guadalupe, Aniversário de Belo Horizonte, Dia do Plano Nacional de Educação, Dia Internacional da Saúde Universal, Dia Internacional da Neutralidade';
msgData[12.13] = 'Dia de Santa Luzia, Dia Nacional do Cego, Dia do Marinheiro, Dia do Ótico, Dia do Engenheiro Avaliador e Perito de Engenharia, Dia do Pedreiro, Dia Nacional do Forró, Dia do Lapidador';
msgData[12.14] = 'Dia Nacional do Ministério Público, Dia Nacional de Combate à Pobreza, Dia do Engenheiro de Pesca, Dia do Médico Alergista, Dia da Bíblia, Início da Semana de Mobilização Nacional para Doação de Medula Óssea (14 a 21), Hanukkah';
msgData[12.15] = 'Dia do Arquiteto, Dia Nacional da Economia Solidária, Dia do Jardineiro';
msgData[12.16] = 'Dia do Reservista, Dia do Teatro Amador, Dia de Santa Adelaide';
msgData[12.17] = 'Dia de São Lázaro, Dia do Engenheiro de Produção, Dia Nacional do Bioma Pampa, Dia do Pastor Presbiteriano';
msgData[12.18] = 'Dia do Museólogo, Dia de São Zózimo, Dia Internacional dos Migrantes, Dia da Língua Árabe, Dia de Usar um Desentupidor na Cabeça';
msgData[12.19] = 'Dia do Suéter Feio, Aniversário da Emancipação do Paraná';
msgData[12.20] = 'Dia do Mecânico, Dia Internacional da Solidariedade Humana';
msgData[12.21] = 'Dia de Não Arrumar a Cama, Dia do Atleta, Início do Verão';
msgData[12.22] = 'Aniversário da Criação de Rondônia';
msgData[12.23] = 'Dia do Vizinho';
msgData[12.24] = 'Véspera de Natal (Ponto Facultativo após as 13h), Dia do Órfão';
msgData[12.25] = 'Natal, Aniversário da cidade de Natal';
msgData[12.26] = 'Dia de São Estevão, Dia da Lembrança';
msgData[12.27] = 'Dia Internacional de Preparação Epidemiológica';
msgData[12.28] = 'Dia Nacional do Cooperativismo de Crédito, Dia do Salva-vidas, Aniversário de Rio Branco, Dia do Petroquímico, Dia da Marinha Mercante';
msgData[12.30] = 'Festival das Mudanças de Última Hora';
msgData[12.31] = 'Véspera de Ano-Novo (Ponto Facultativo após as 13h), Dia de São Silvestre';

//FIM DAS DATAS

var msgAgora = msgData[month + '.' + today];

const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
        if (typeof msgAgora === 'undefined' || msgAgora === '')
        {
            const speakOutput = ('Hoje não tenho informação de dia comemorativo.');
            return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt(speakOutput)
            .getResponse();
        }
        const speakOutput = ('Hoje é ' + " " + msgAgora);
        //const speakOutput = ('Skill Datas Comemorativas! ' + " " + msgData[9.17]);
        //const speakOutput = ('Skill Datas Comemorativas! ' + " " + msgAgora);
        //const speakOutput = ('Hoje é ' + " " + msgAgora);
        //const speakOutput = (msgData[month,today]);

        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt(speakOutput)
            .getResponse();
    }
};

const HelloWorldIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'HelloWorldIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Hello World!';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};


const HelpIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'You can say hello to me! How can I help?';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && (Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent'
                || Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const speakOutput = 'Goodbye!';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};
/* *
 * FallbackIntent triggers when a customer says something that doesn’t map to any intents in your skill
 * It must also be defined in the language model (if the locale supports it)
 * This handler can be safely added but will be ingnored in locales that do not support it yet 
 * */
const FallbackIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.FallbackIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Sorry, I don\'t know about that. Please try again.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};
/* *
 * SessionEndedRequest notifies that a session was ended. This handler will be triggered when a currently open 
 * session is closed for one of the following reasons: 1) The user says "exit" or "quit". 2) The user does not 
 * respond or says something that does not match an intent defined in your voice model. 3) An error occurs 
 * */
const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        console.log(`~~~~ Session ended: ${JSON.stringify(handlerInput.requestEnvelope)}`);
        // Any cleanup logic goes here.
        return handlerInput.responseBuilder.getResponse(); // notice we send an empty response
    }
};
/* *
 * The intent reflector is used for interaction model testing and debugging.
 * It will simply repeat the intent the user said. You can create custom handlers for your intents 
 * by defining them above, then also adding them to the request handler chain below 
 * */
const IntentReflectorHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest';
    },
    handle(handlerInput) {
        const intentName = Alexa.getIntentName(handlerInput.requestEnvelope);
        const speakOutput = `You just triggered ${intentName}`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
/**
 * Generic error handling to capture any syntax or routing errors. If you receive an error
 * stating the request handler chain is not found, you have not implemented a handler for
 * the intent being invoked or included it in the skill builder below 
 * */
const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        const speakOutput = 'Desculpe, tive problemas para fazer o que você pediu. Por favor, tente novamente.';
        console.log(`~~~~ Error handled: ${JSON.stringify(error)}`);

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

/**
 * This handler acts as the entry point for your skill, routing all request and response
 * payloads to the handlers above. Make sure any new handlers or interceptors you've
 * defined are included below. The order matters - they're processed top to bottom 
 * */
exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        HelloWorldIntentHandler,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        FallbackIntentHandler,
        SessionEndedRequestHandler,
        IntentReflectorHandler)
    .addErrorHandlers(
        ErrorHandler)
    .withCustomUserAgent('sample/hello-world/v1.2')
    .lambda();