CREATE DATABASE IF NOT EXISTS rosalyjewelry
DEFAULT CHARACTER SET utf8mb4
DEFAULT COLLATE utf8mb4_general_ci;

USE rosalyjewelry;

CREATE TABLE produtos (
idproduto INT NOT NULL AUTO_INCREMENT,
categoria VARCHAR(25) NOT NULL,
nome VARCHAR(40) NOT NULL,
preco DECIMAL(6,2) NOT NULL,
novopreco DECIMAL (6,2) NOT NULL,
imagem VARCHAR(150),
PRIMARY KEY (idproduto)
) DEFAULT CHARSET = utf8;

INSERT INTO produtos (idproduto, categoria, nome, preco, novopreco, imagem) VALUES 
(DEFAULT, 'Aliança', 'Aliança em ouro cravejada', '2500.00', '1900.00', 'images/alianca1.png'),
(DEFAULT, 'Aliança', 'Aliança em Ouro Rose', '2499.90', '1899.90', 'images/alianca2.png'),
(DEFAULT, 'Aliança', 'Aliança em Ouro Tradicional', '1500.00', '1290.00', 'images/alianca3.png'),
(DEFAULT, 'Anel', 'Anel em Prata Cravejado', '1200.00', '1000.99', 'images/anel1.png'),
(DEFAULT, 'Anel', 'Anel em Prata Realeza', '1500.90', '1399.99', 'images/anel2.jpg'),
(DEFAULT, 'Anel', 'Anel em Prata Esmeralda', '1790.00', '1590.99', 'images/anel3.png'),
(DEFAULT, 'Colar', 'Colar em Ouro Lua e Estrelas', '1050.00', '899.99', 'images/colar1.png'),
(DEFAULT, 'Colar', 'Colar em Prata Girassol', '1000.00', '799.99', 'images/colar2.png'),
(DEFAULT, 'Colar', 'Colar em Ouro Cravejado Coração', '1700.00', '1499.90', 'images/colar3.png'),
(DEFAULT, 'Brinco', 'Brinco em Ouro e Prata Rosas', '560.00', '399.99', 'images/brinco1.jpg'),
(DEFAULT, 'Brinco', 'Brinco em Ouro branco com pedra Corações', '1200.00', '900.90', 'images/brinco2.png'),
(DEFAULT, 'Brinco', 'Brinco em Prata Cascata', '900.00', '700.99', 'images/brinco3.jpeg'),
(DEFAULT, 'Pulseira', 'Pulseira em Ouro com pingente', '850.99', '650.99', 'images/pulseira1.png'),
(DEFAULT, 'Pulseira', 'Pulseira em Ouro Branco com Rubi', '1799.00', '1590.99', 'images/pulseira2.png'),
(DEFAULT, 'Pulseira', 'Pulseira em Ouro Folhas', '1200.00', '900.99', 'images/pulseira3.png');


CREATE TABLE pedidos (
idpedido INT NOT NULL AUTO_INCREMENT,
nomecliente VARCHAR(60) NOT NULL,
endereco VARCHAR(200) NOT NULL,
telefone VARCHAR(20) NOT NULL,
nomeproduto VARCHAR(35) NOT NULL,
valorunitario DECIMAL(6,2) NOT NULL,
quantidade INT,
valortotal DECIMAL(7,2),
PRIMARY KEY (idpedido)
);


INSERT INTO pedidos (idpedido, nomecliente, endereco, telefone, nomeproduto, valorunitario, quantidade, valortotal) VALUES
('1', 'Elizabeth Dutra', 'Rua AB, Nº 4675, SP', '1245-7654', 'Colar em Ouro Lua e Estrelas', '899.99', '1', (valorunitario * quantidade)),
(DEFAULT, 'Luciano Alves', 'Rua B, Nº 678, BH', '5343-7864', 'Pulseira em Ouro Branco com Rubi', '1590.99', '2', (valorunitario * quantidade)),
(DEFAULT, 'Andréa Sousa', 'Rua A, Nº 35, SP', '4358-6132', 'Anel em Prata Esmeralda', '1590.99', '1', (valorunitario * quantidade)),
(DEFAULT, 'James Carvalho', 'Rua CD, Nº 343, SC', '8654-3231', 'Aliança em ouro cravejada', '1900.00', '2', (valorunitario * quantidade)),
(DEFAULT, 'Patricia Furtado', 'Rua D, Nº 1432, RJ', '6556-8732', 'Colar em Ouro Cravejado Coração', '1499.90', '1', (valorunitario * quantidade)),
(DEFAULT, 'Marina Teixeira', 'Rua E, Nº 778, SP', '7667-9809', 'Brinco em Ouro e Prata Rosas', '399.99', '3', (valorunitario * quantidade)),
(DEFAULT, 'Felipe Magalhães', 'Rua EF, Nº 1098, AM', '3234-4231', 'Aliança em Ouro Rose', '1899.90', '2', (valorunitario * quantidade)),
(DEFAULT, 'Gabriel Fonseca', 'Rua G, Nº 6122, SP', '6243-1341', 'Aliança em ouro cravejada', '1900.00', '2', (valorunitario * quantidade)),
(DEFAULT, 'Maria da Silva', 'Rua FG, Nº 3322, RJ', '8735-9123', 'Pulseira em Ouro Folhas', '900.99', '1', (valorunitario * quantidade)),
(DEFAULT, 'Carmen Bittencourt', 'Rua H, Nº 788, PR', '2141-5364', 'Anel em Prata Realeza', '1399.99', '1', (valorunitario * quantidade)),
(DEFAULT, 'Lana Grant', 'Rua IJ, Nº 556, ES', '3532-9665', 'Brinco em Prata Cascata', '700.9', '1', (valorunitario * quantidade)),
(DEFAULT, 'Roberto Gonçalves', 'Rua KL, Nº 6010, MT', '7656-9236', 'Aliança em Ouro Tradicional', '1290.00', '2', (valorunitario * quantidade));


CREATE TABLE mensagens (
id_msg INT NOT NULL auto_increment,
id_cliente INT NOT NULL,
mensagem VARCHAR(300),
PRIMARY KEY (id_msg),
FOREIGN KEY (id_cliente) REFERENCES clientes (id_cliente)
);


CREATE TABLE clientes (
id_cliente INT NOT NULL auto_increment,
nome_cliente VARCHAR(50),
email VARCHAR(70),
PRIMARY KEY (id_cliente)
);


INSERT INTO clientes (id_cliente, nome_cliente, email) VALUES
(1, 'Heitor Bernardes', 'cliente3@gmail.com'),
(2, 'Carlos Emanuel da Fonseca', 'cliente2@gmail.com'),
(3, 'Elizabeth Margarida Silva', 'cliente1@gmail.com'),
(4, 'Gabriella Daniella Tantarella', 'cliente4@hotmail.com'),
(5, 'Rosemeyre Rosane', 'cliente5@hotmail.com'),
(6, 'Sandro Malabarison', 'asasas@gmail.com');

INSERT INTO mensagens (id_msg, id_cliente, mensagem) VALUES
(1, 1, 'Amooo essa loja, tenho todos os brincos e sou apaixonada por eles!! Lindooos!'),
(2, 2, 'Comprei as alianças do meu casamento pela Rosaly Jewelry e foi a melhor escolha que fiz! (depois de casar, é claro)'),
(3, 3, 'Sempre dou de presente as jóias pra minha esposa e filha e elas amam demais. 10/10'),
(4, 4, 'EU TENHO TODOS OS COLARESSS, QUERO QUE LANCEM MAISS!!!'),
(5, 5, 'Atendimento maravilhosooo por parte da loja, tudo chegou certinho e eu estou amando os anéis novos ❤'),
(6, 6, 'Vim comprar miçanga, mas me encantei com as jóias. A Rosaly é top');
