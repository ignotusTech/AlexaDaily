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
msgData[1.1] = 'Confraternização Universal e Dia Mundial da Paz. Feliz Ano Novo!';
msgData[1.2] = 'Dia Mundial dos Introvertidos';
msgData[1.3] = 'Dia do Juiz de Menores';
msgData[1.4] = 'Dia da Abreugrafia e Dia Mundial do Braille';
msgData[1.5] = 'Criação da 1ª Tipografia no Brasil';
msgData[1.6] = 'Dia da Gratidão e Dia de Reis';
msgData[1.7] = 'Dia da Liberdade de Cultos';
msgData[1.8] = 'Dia do Fotógrafo';
msgData[1.9] = 'Dia do Astronauta e Dia do Fico (1822)';
msgData[1.10] = 'Festa de São Gonçalo do Amarante';
msgData[1.11] = 'Dia do Controle da Poluição por Agrotóxicos e Dia Internacional do Obrigado';
msgData[1.12] = 'Dia do Empresário Contábil';
msgData[1.13] = 'Dia Internacional do Leonismo. Amanha entramos em férias.';
msgData[1.14] = 'Dia Internacional da Pipa e Dia do Enfermo. Hoje entramos em férias, Bora Cruzeiro. MSC Seashore.';
msgData[1.15] = 'Dia dos Adultos e Dia Mundial do Compositor';
msgData[1.16] = 'Dia dos Cortadores de Cana-de-açúcar';
msgData[1.17] = 'Dia dos Tribunais de Contas do Brasil';
msgData[1.18] = 'Dia de Santo Irmão Jaime Hilário (mártir de Turón)';
msgData[1.19] = 'Dia Internacional do Queijo Quark e Dia de São Mário';
msgData[1.20] = 'Dia do Farmacêutico e Inauguração da Primeira Exposição do Museu de Arte Moderna do RJ (1949)';
msgData[1.21] = 'Dia Internacional do Moletom e Dia Mundial da Religião';
msgData[1.22] = 'Dia de Santo André. Esse é nosso último dia de férias. Amanha voltamos a trabalhar. Bora vender...';
msgData[1.23] = 'Dia Internacional da Medicina Integrativa';
msgData[1.24] = 'Dia Internacional da Educação,Dia da Constituição,Dia da Previdência Social,Dia Nacional dos Aposentados e Instituição do Casamento Civil no Brasil';
msgData[1.25] = 'Criação dos Correios e Telégrafos no Brasil (1663),Dia do Carteiro e Fundação de São Paulo (1554)';
msgData[1.26] = 'Dia da Gula';
msgData[1.27] = 'Dia Internacional em Memória às Vítimas do Holocausto e Dia da Elevação do Brasil Vice-Reinado (1763)';
msgData[1.28] = 'Dia Internacional da Privacidade de Dados, Dia Internacional do Lego e Dia da Abertura dos Portos (1808)';
msgData[1.29] = 'Dia Internacional do Hanseniano';
msgData[1.30] = 'Dia da Saudade, Dia do Portuário e Dia Nacional das Histórias em Quadrinhos';
msgData[1.31] = 'Dia do Lançamento do 1º Satélite (EUA) e Dia Mundial do Mágico';
msgData[2.1] = 'Dia do Publicitário';
msgData[2.2] = 'Dia de Iemanjá e Dia do Agente Fiscal';
msgData[2.3] = 'Dia da Navegação no Rio São Francisco';
msgData[2.4] = 'Dia Mundial contra o Câncer';
msgData[2.5] = 'Dia do Datiloscopista';
msgData[2.6] = 'Dia Internacional da Tolerância Zero à Mutilação Vaginal, Dia do Agente de Defesa Ambiental e Dia Internacional da Internet Segura';
msgData[2.7] = 'Dia do Gráfico. E Béla hoje será seu primeiro dia de escola. Divirta-se';
msgData[2.8] = 'Dia do Quadro do Magistério do Exército';
msgData[2.9] = '';
msgData[2.10] = 'Dia Mundial das Leguminosas e Dia do Atleta Profissional';
msgData[2.11] = 'Dia Internacional das Mulheres e Meninas na Ciência, Dia do Zelador e Dia Mundial do Enfermo';
msgData[2.12] = 'Dia de Darwin';
msgData[2.13] = 'Dia Mundial do Rádio';
msgData[2.14] = 'Dia Internacional da Doação de Livros e Dia da Amizade';
msgData[2.15] = 'Dia Internacional de Luta contra o Câncer na Infância';
msgData[2.16] = 'Dia do Repórter';
msgData[2.17] = 'Dia do Aniversário da Casa do Marinheiro e Fim da Semana da Arte Moderna (1922)';
msgData[2.18] = 'Dia Nacional de Combate ao Alcoolismo';
msgData[2.19] = 'Dia do Esportista';
msgData[2.20] = 'Dia Mundial da Justiça Social';
msgData[2.21] = 'Dia Internacional da Baleia, Dia Internacional da Língua Materna, Data Festiva do Exército e Dia da Conquista do Monte Castelo (1945)';
msgData[2.22] = 'Dia do Auxiliar de Serviços Gerais';
msgData[2.23] = 'Dia do Rotaryano';
msgData[2.24] = 'Promulgação da 1ª Constituição Republicana (1891)';
msgData[2.25] = 'Dia da Criação do Ministério das Comunicações';
msgData[2.26] = 'Dia do Comediante';
msgData[2.27] = 'Dia do Agente Fiscal da Receita Federal e Dia Nacional do Livro Didático';
msgData[2.28] = 'Dia da Ressaca';
msgData[3.1] = 'Dia da Discriminação Zero e Dia Internacional da Proteção Civil';
msgData[3.2] = 'Dia da Oração e Dia Nacional do Turismo';
msgData[3.3] = 'Dia Mundial da Vida Selvagem';
msgData[3.4] = 'Dia Mundial da Oração';
msgData[3.5] = 'Dia do Filatelista Brasileiro';
msgData[3.6] = 'Dia Internacional do Optometrista';
msgData[3.7] = 'Dia dos Fuzileiros Navais';
msgData[3.8] = 'Dia Internacional da Mulher e Dia da Criação da Casa da Moeda';
msgData[3.9] = 'Dia Internacional do DJ';
msgData[3.10] = 'Dia Internacional da Gaita de Foles, Dia Internacional da Peruca, Dia do Sogro e Dia do Telefone';
msgData[3.11] = 'Dia Internacional do Encanamento e Dia Internacional das Vítimas do Terrorismo';
msgData[3.12] = 'Dia Internacional da Pochete e Dia do Bibliotecário';
msgData[3.13] = 'Dia do Conservacionismo';
msgData[3.14] = 'Dia do Vendedor de Livros, Dia dos Animais e Dia Nacional da Poesia';
msgData[3.15] = 'Dia Mundial do Consumidor e Dia da Escola';
msgData[3.16] = 'Dia Nacional de Conscientização sobre as Mudanças Climáticas e Dia Nacional do Ouvido';
msgData[3.17] = '';
msgData[3.18] = 'Dia Nacional da Imigração Judaica e Dia do DeMolay';
msgData[3.19] = 'Dia de São José, Dia do Carpinteiro e Dia do Marceneiro';
msgData[3.20] = 'Dia Internacional da Felicidade e Dia do Contador de Histórias';
msgData[3.21] = 'Dia Mundial da Poesia, Dia Internacional Contra a Discriminação Racial, Dia internacional da Síndrome de Down e Dia Universal do Teatro';
msgData[3.22] = 'Dia Mundial da Água';
msgData[3.23] = 'Dia Mundial da Meteorologia';
msgData[3.24] = 'Dia Internacional para o Direito à Verdade sobre Graves Violações dos Direitos Humanos e pela Dignidade das Vítimas e Dia Mundial da Tuberculose';
msgData[3.25] = 'Dia Internacional em Memória das Vítimas da Escravatura e do Comércio Transatlântico de Escravos, Dia internacional da Solidariedade da Pessoa Detenta ou Desaparecida e Dia Nacional do Oficial de Justiça';
msgData[3.26] = 'Dia do Cacau';
msgData[3.27] = 'Dia do Circo';
msgData[3.28] = 'Dia do Diagramador e Dia do Revisor';
msgData[3.29] = 'Primeiro voo no Rio de Janeiro de um balão dirigível, Le Victoria (1882)';
msgData[3.30] = 'Dia Mundial da Juventude';
msgData[3.31] = 'Aniversário do Golpe Militar (1964), Dia da Integração Nacional e Dia da Saúde e Nutrição';
msgData[4.1] = '';
msgData[4.2] = '';
msgData[4.3] = '';
msgData[4.4] = '';
msgData[4.5] = '';
msgData[4.6] = '';
msgData[4.7] = '';
msgData[4.8] = '';
msgData[4.9] = '';
msgData[4.10] = '';
msgData[4.11] = '';
msgData[4.12] = '';
msgData[4.13] = '';
msgData[4.14] = '';
msgData[4.15] = '';
msgData[4.16] = '';
msgData[4.17] = '';
msgData[4.18] = '';
msgData[4.19] = '';
msgData[4.20] = '';
msgData[4.21] = '';
msgData[4.22] = '';
msgData[4.23] = '';
msgData[4.24] = '';
msgData[4.25] = '';
msgData[4.26] = '';
msgData[4.27] = '';
msgData[4.28] = '';
msgData[4.29] = '';
msgData[4.30] = '';
msgData[5.1] = '';
msgData[5.2] = '';
msgData[5.3] = '';
msgData[5.4] = '';
msgData[5.5] = '';
msgData[5.6] = '';
msgData[5.7] = '';
msgData[5.8] = '';
msgData[5.9] = '';
msgData[5.10] = '';
msgData[5.11] = '';
msgData[5.12] = '';
msgData[5.13] = '';
msgData[5.14] = '';
msgData[5.15] = '';
msgData[5.16] = '';
msgData[5.17] = '';
msgData[5.18] = '';
msgData[5.19] = '';
msgData[5.20] = '';
msgData[5.21] = '';
msgData[5.22] = '';
msgData[5.23] = '';
msgData[5.24] = '';
msgData[5.25] = '';
msgData[5.26] = '';
msgData[5.27] = '';
msgData[5.28] = '';
msgData[5.29] = '';
msgData[5.30] = '';
msgData[5.31] = '';
msgData[6.1] = '';
msgData[6.2] = '';
msgData[6.3] = '';
msgData[6.4] = '';
msgData[6.5] = '';
msgData[6.6] = '';
msgData[6.7] = '';
msgData[6.8] = '';
msgData[6.9] = '';
msgData[6.10] = '';
msgData[6.11] = '';
msgData[6.12] = '';
msgData[6.13] = '';
msgData[6.14] = '';
msgData[6.15] = '';
msgData[6.16] = '';
msgData[6.17] = '';
msgData[6.18] = '';
msgData[6.19] = '';
msgData[6.20] = '';
msgData[6.21] = '';
msgData[6.22] = '';
msgData[6.23] = '';
msgData[6.24] = '';
msgData[6.25] = '';
msgData[6.26] = '';
msgData[6.27] = '';
msgData[6.28] = '';
msgData[6.29] = '';
msgData[6.30] = '';
msgData[7.1] = '';
msgData[7.2] = '';
msgData[7.3] = '';
msgData[7.4] = '';
msgData[7.5] = '';
msgData[7.6] = '';
msgData[7.7] = '';
msgData[7.8] = '';
msgData[7.9] = '';
msgData[7.10] = '';
msgData[7.11] = '';
msgData[7.12] = '';
msgData[7.13] = '';
msgData[7.14] = '';
msgData[7.15] = '';
msgData[7.16] = '';
msgData[7.17] = '';
msgData[7.18] = '';
msgData[7.19] = '';
msgData[7.20] = '';
msgData[7.21] = '';
msgData[7.22] = '';
msgData[7.23] = '';
msgData[7.24] = '';
msgData[7.25] = '';
msgData[7.26] = '';
msgData[7.27] = '';
msgData[7.28] = '';
msgData[7.29] = '';
msgData[7.30] = '';
msgData[7.31] = '';
msgData[8.1] = 'Dia Nacional do Selo';
msgData[8.2] = 'Dia do início da Semana da Cultura Nordestina';
msgData[8.3] = 'Dia do Capoeirista e Dia do Tintureiro';
msgData[8.4] = 'Dia da Campanha Educativa de Combate ao Câncer';
msgData[8.5] = 'Dia Nacional da Saúde';
msgData[8.6] = 'Dia Interamericano do Escotista e Dia Nacional dos Profissionais da Educação';
msgData[8.7] = 'Dia Estadual da "Lei Maria da Penha" e Dia Nacional do Documentário Brasileiro';
msgData[8.8] = 'Dia do Pároco';
msgData[8.9] = 'Dia Internacional dos Povos Indígenas';
msgData[8.10] = 'Dia da Solidariedade Cristã e Dia Internacional do Biodiesel';
msgData[8.11] = 'Dia da Televisão, Dia do Advogado, Dia do Estudante, Dia do Garçom e Dia Internacional da Logosofia';
msgData[8.12] = 'Dia Internacional da Juventude e Dia Nacional das Artes';
msgData[8.13] = 'Dia do Economista e Dia do Psiquiatra';
msgData[8.14] = 'Dia do Cardiologista';
msgData[8.15] = 'Assunção de Nossa Senhora, Dia da Informática, e Dia dos Solteiros';
msgData[8.16] = 'Dia do Filósofo';
msgData[8.17] = 'Dia do Patrimônio Histórico Nacional e Dia Nacional da Construção Social';
msgData[8.18] = 'Dia da Revolução Cultural, Dia do Estagiário, e Dia Mundial da Libertação Humana';
msgData[8.19] = 'Dia Mundial Humanitário, Dia Mundial da Fotografia, Dia do Artista de Teatro, e Dia Nacional do Ciclista';
msgData[8.20] = 'Dia dos Maçons';
msgData[8.21] = 'Dia Internacional de Lembrança e Tributo às Vítimas do Terrorismo, Dia do Início da Semana Nacional da Criança Excepcional, Dia Nacional da Habitação';
msgData[8.22] = 'Dia do Folclore e Dia do Supervisor Escolar';
msgData[8.23] = 'Dia Internacional em Memória do Tráfico de Escravos e a sua Abolição e Dia da Injustiça';
msgData[8.24] = 'Dia da Infância, Dia de São Bartolomeu e Dia dos Artistas';
msgData[8.25] = 'Dia do Feirante e Dia do Soldado';
msgData[8.26] = 'Dia Internacional da Declaração dos Direitos do Homem e do Cidadão e Dia Internacional da Igualdade da Mulher';
msgData[8.27] = 'Dia do Corretor de Imóveis e Dia do Psicólogo';
msgData[8.28] = 'Dia da Avicultura e Dia dos Bancários';
msgData[8.29] = 'Dia Internacional contra Testes Nucleares e Dia Nacional do Combate do Fumo';
msgData[8.30] = 'Dia Internacional das Vítimas de Desaparecimentos Forçados e Dia Nacional de Conscientização sobre a Esclerose Múltipla';
msgData[8.31] = 'Dia da Nutricionista';
msgData[9.1] = 'Dia do Profissional de Educação Física';
msgData[9.2] = 'Dia do Repórter Fotográfico';
msgData[9.3] = 'Dia do Biólogo e Dia do Guarda Civil';
msgData[9.4] = 'Dia da Lei Eusébio de Queirós';
msgData[9.5] = 'Dia Internacional da Caridade, Dia da Amazônia, Dia Oficial da Farmácia e Dia da Raça Brasileira';
msgData[9.6] = 'Dia do Alfaiate e Oficialização da Letra do Hino Nacional';
msgData[9.7] = 'Independência do Brasil (1822)';
msgData[9.8] = 'Dia Internacional da Alfabetização';
msgData[9.9] = 'Dia da Velocidade, Dia do Administrador e Dia do Médico Veterinário';
msgData[9.10] = 'Dia Mundial de Prevenção do Suicídio, Dia do Gordo e Fundação do 1º Jornal do Brasil';
msgData[9.11] = 'o Dia que Sancionada Lei de Defesa do Direito do Consumidor em 1990';
msgData[9.12] = 'Dia do Operador de Rastreamento';
msgData[9.13] = 'Dia do Programador e Dia do Agrônomo';
msgData[9.14] = 'Dia da Cruz e Dia do Frevo';
msgData[9.15] = 'Dia do Cliente e Dia Nacional do Musicoterapeuta';
msgData[9.16] = 'Dia Internacional para a Preservação da Camada de Ozônio';
msgData[9.17] = 'Dia da Compreensão Mundial';
msgData[9.18] = 'Dia dos Símbolos Nacionais. Quem que vai fazer aniversário amanhã?';
msgData[9.19] = 'Dia de São Geraldo e Dia do Teatro. Ahhhhh, quase esqueci, hoje é dia do aniversário da Bela, meus parabéns e hoje você faz 4 anos!!!';
msgData[9.20] = 'Dia do Baterista, Dia do Funcionário Municipal e Dia do Gaúcho';
msgData[9.21] = 'Dia Internacional da Paz, Dia da Árvore, Dia da Luta Nacional das Pessoas com Deficiências e Dia do Fazendeiro';
msgData[9.22] = 'Dia da Juventude do Brasil e Dia do Contador';
msgData[9.23] = 'Dia Mundial das Línguas Gestuais,Dia do Soldador,Dia do Sorvete,Dia do Técnico em Edificações e Dia do Técnico Industrial';
msgData[9.24] = 'Dia do Mototaxista';
msgData[9.25] = 'Dia Nacional do Rádio e Dia Nacional do Trânsito';
msgData[9.26] = 'Dia Internacional para a Eliminação Total das Armas Nucleares, Dia Mundial do Mar, Dia Interamericano das Relações Públicas e Dia Nacional do Surdo';
msgData[9.27] = 'Dia de Cosme e Damião, Dia do Encanador, Dia Mundial de Turismo e Dia Nacional do Idoso. E lembrando que hoje é aniversário da Suellen. Meus parabéns.';
msgData[9.28] = 'Dia Internacional do Acesso Universal à Informação e Dia da Lei do Ventre Livre';
msgData[9.29] = 'Dia do Anunciante e Dia do Petróleo';
msgData[9.30] = 'Dia da Secretária, Dia da Navegação, Dia Mundial do Tradutor e Dia Nacional do Jornaleiro';
msgData[10.1] = 'Dia de Santa Terezinha, Dia do Vendedor, Dia Nacional do Idoso e Dia Internacional da Terceira Idade e Dia Nacional do Vereador';
msgData[10.2] = 'Dia do Anjo da Guarda e Dia Internacional da Não Violência';
msgData[10.3] = 'Dia do Petróleo Brasileiro, Dia Mundial do Dentista, Dia Nacional das Abelhas e Dia do Profissional de Organização';
msgData[10.4] = 'Dia da Natureza, Dia de São Francisco de Assis, Dia do Barman, Dia do Cão e Dia Mundial dos Animais';
msgData[10.5] = 'Dia Mundial dos Professores e Dia das Aves';
msgData[10.6] = 'Dia do Prefeito, Dia do Tecnólogo e Dia Nacional do Circulista';
msgData[10.7] = 'Dia Mundial do Habitat e Dia do Compositor';
msgData[10.8] = 'Dia do Nordestino';
msgData[10.9] = 'Dia Mundial dos Correios, Dia do Açougueiro e Profissionais do Setor e Dia do Atletismo';
msgData[10.10] = 'Dia Mundial da Saúde Mental, Dia Mundial do Lions Clube e Semana da Ciência e Tecnologia';
msgData[10.11] = 'Dia do Deficiente Físico, Dia do Teatro Municipal e Dia Internacional da Menina';
msgData[10.12] = 'Dia de Nossa Senhora Aparecida, Dia da Criança, Dia do Corretor de Seguros, Dia do Descobrimento da América (1492), Dia do Engenheiro Agrônomo, Dia Nacional da Leitura e Dia Nacional do Mar';
msgData[10.13] = 'Dia Internacional para a Redução de Desastres Naturais, Dia do Fisioterapeuta e Dia do Terapeuta Ocupacional';
msgData[10.14] = 'Dia Nacional da Pecuária';
msgData[10.15] = 'Dia Internacional da Mulher Rural, Dia do Normalista e Dia do Professor';
msgData[10.16] = 'Dia da Ciência e Tecnologia, Dia do Anestesiologista, Dia Estadual do Neuropsicopedagogo e Dia Mundial da Alimentação';
msgData[10.17] = 'Dia da Valorização do Queijo de Leite Cru, Dia Internacional para a Erradicação da Pobreza, Dia da Indústria Aeronáutica Brasileira, Dia do Eletricista e Dia do Profissional de Propaganda';
msgData[10.18] = 'Dia do Estivador, Dia do Médico, Dia do Pintor e Dia do Securitário';
msgData[10.19] = 'Dia do Profissional da Informática';
msgData[10.20] = 'Dia Internacional do Bicho Preguiça, Dia Mundial das Estatística, Dia do Arquivista, Dia do Poeta e Dia Internacional do Controlador de Tráfego Aéreo';
msgData[10.21] = 'Dia do Contato e Dia Nacional do Economista Doméstico';
msgData[10.22] = 'Dia Internacional da Consciência da Gagueira, Dia do Enólogo, Dia do Paraquedista, Dia do Protesto Mundial contra o Uso do Eletrochoque, Dia Internacional de Atenção à Gagueira e Dia Internacional do Radioamador';
msgData[10.23] = 'Dia da Força Aérea Brasileira e Dia do Aviador';
msgData[10.24] = 'Dia Internacional do Bucho e Dia das Nações Unidas (ONU)';
msgData[10.25] = 'Dia Internacional das Artistas, Dia da Democracia, Dia do Dentista Brasileiro e Dia do Sapateiro';
msgData[10.26] = 'Dia da Cruz Vermelha e Dia do Trabalhador da Construção Civil';
msgData[10.27] = 'Dia Mundial do Patrimônio Audiovisual';
msgData[10.28] = 'Dia de São Judas Tadeu e Dia do Funcionário Público';
msgData[10.29] = 'Dia do Cerimonialista e Dia Nacional do Livro';
msgData[10.30] = 'Dia do Balconista, Dia do Comerciário e Dia do Fisiculturista';
msgData[10.31] = 'Dia Mundial das Cidades, Dia da Reforma Luterana, Dia das Bruxas (Halloween) e Dia Mundial do Comissário de Voo';
msgData[11.1] = 'Dia Mundial do Veganismo e Dia de Todos os Santos';
msgData[11.2] = 'Dia de Finados';
msgData[11.3] = 'Dia do Cabeleireiro e Instituição do Direito e Voto da Mulher (1930)';
msgData[11.4] = 'Dia do Inventor';
msgData[11.5] = 'Dia da Ciência e Cultura, Dia do Cinema Brasileiro, Dia do Radioamador e Técnico em Eletrônica e Dia Nacional do Designer';
msgData[11.6] = 'Dia Nacional do Amigo da Marinha do Brasil e Dia Nacional do Riso';
msgData[11.7] = 'Dia do Radialista';
msgData[11.8] = 'Dia do Radiologista e Dia Mundial do Urbanismo';
msgData[11.9] = 'Dia Mundial da Liberdade, Dia do Técnico em Eletrotécnica e Dia do Hoteleiro';
msgData[11.10] = 'Dia do Trigo';
msgData[11.11] = '';
msgData[11.12] = 'Dia do Diretor de Escola e Dia do Supermercado';
msgData[11.13] = 'Dia Mundial da Gentileza';
msgData[11.14] = 'Dia Mundial do Combate a Diabetes e Dia Nacional da Alfabetização';
msgData[11.15] = 'Proclamação da República (1889)';
msgData[11.16] = '';
msgData[11.17] = 'Dia da Criatividade e Dia Internacional do Estudante';
msgData[11.18] = 'Dia do Conselheiro Tutelar';
msgData[11.19] = 'Dia Mundial do Toalete, Dia da Bandeira e Dia Internacional do Homem';
msgData[11.20] = 'Dia do Auditor Interno, Dia do Biomédico, Dia do Esteticista, Dia do Técnico em Contabilidade e Dia Nacional da Consciência Negra';
msgData[11.21] = 'Dia Mundial da Filosofia, Dia Mundial da Televisão, Dia Mundial da Televisão, Dia da Homeopatia e Dia das Saudações';
msgData[11.22] = 'Dia do Músico';
msgData[11.23] = 'Dia do Engenheiro Eletricista e Dia Mundial de Ação de Graças';
msgData[11.24] = 'Dia do Quadro Auxiliar de Oficiais';
msgData[11.25] = 'Dia Nacional do Doador de Sangue e Dia Internacional de Não Violência contra as Mulheres';
msgData[11.26] = 'Dia do Corpo Auxiliar da Marinha e Dia Interamericano do Ministério Público';
msgData[11.27] = 'Dia do Técnico da Segurança do Trabalho';
msgData[11.28] = 'Dia do Soldado Desconhecido';
msgData[11.29] = 'Dia Nacional da Onça-Pintada e Dia Internacional de Solidariedade com o Povo Palestino';
msgData[11.30] = 'Dia da Amizade Brasil-Argentina, Dia do Estatuto da Terra, Dia do Síndico, Dia do Teólogo e Dia Nacional do Evangélico';
msgData[12.1] = 'Dia do Numismata e Dia Internacional da Luta contra a AIDS';
msgData[12.2] = 'Dia Internacional para a Abolição da Escravatura, Dia da Astronomia, Dia Nacional das Relações Públicas, Dia Nacional do Samba e Dia Pan-americano da Saúde';
msgData[12.3] = 'Dia Internacional do Portador de Deficiência';
msgData[12.4] = 'Dia da Propaganda, Dia do Orientador Educacional e Dia do Pedicuro';
msgData[12.5] = 'Dia Internacional dos Voluntários para o Desenvolvimento Econômico e Social';
msgData[12.6] = 'Dia do Neuropsicopedagogo e Dia da Extensão Rural no Brasil';
msgData[12.7] = 'Dia do Médico Cirurgião Plástico, Dia Internacional da Aviação Civil e Dia Internacional da Aviação Civil';
msgData[12.8] = 'Dia da Família, Dia da Justiça e Dia Mundial da Imaculada Conceição';
msgData[12.9] = 'Dia Internacional contra a Corrupção, Dia Internacional da Comemoração e Dignidade das Vítimas de Genocídio, Dia Internacional da Medicina Veterinária, Dia da Criança Especial, Dia do Alcoólico Recuperado e Dia do Fonoaudiólogo';
msgData[12.10] = 'Declaração Universal Direitos Humanos, Dia do Sociólogo e Dia Universal do Palhaço';
msgData[12.11] = 'Dia do Engenheiro';
msgData[12.12] = 'Dia Mundial da Cobertura Universal de Saúde e Dia Internacional da Criança na Mídia';
msgData[12.13] = 'Dia Mundial da Iluminação por Velas, Dia de Santa Luzia, Dia do Cego,Dia do Engenheiro Avaliador,Dia do Marinheiro,Dia do Ótico e Dia do Perito de Engenharia';
msgData[12.14] = 'Dia Nacional do Ministério Público';
msgData[12.15] = 'Dia do Arquiteto, Dia da Mulher Operadora do Direito (Dia da Advogada) e Dia do Jardineiro';
msgData[12.16] = 'Dia do Reservista';
msgData[12.17] = 'Dia do Pastor Presbiteriano';
msgData[12.18] = 'Dia Internacional dos Migrantes e Dia do Museólogo';
msgData[12.19] = 'Dia Estadual da Poesia (Mato Grosso)';
msgData[12.20] = 'Dia do Mecânico';
msgData[12.21] = 'Dia do Atleta';
msgData[12.22] = '';
msgData[12.23] = 'Dia do Vizinho';
msgData[12.24] = 'Dia do Órfão';
msgData[12.25] = 'Dia de Natal, ho ho ho';
msgData[12.26] = 'Dia da Lembrança';
msgData[12.27] = 'Criado o Departamento de Imprensa e Propaganda (DIP - 1939)';
msgData[12.28] = 'Dia do Salva-vidas e Dia da Marinha Mercante';
msgData[12.29] = '';
msgData[12.30] = 'Criação do Vale do Aço (1998)';
msgData[12.31] = 'Dia de São Silvestre e Claro, Reveillon';
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