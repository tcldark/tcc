CREATE DATABASE adocao /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;


CREATE TABLE cliente (
  Id_Cliente int NOT NULL AUTO_INCREMENT,
  Senha varchar(12) NOT NULL,
  Endereco_id int NOT NULL,
  Apelido varchar(12) not null,
  Email varchar(40) NOT NULL,
  Nome varchar(40) NOT NULL,
  Idade int(11) NOT NULL,
  Sexo enum('M','F') NOT NULL,
  Telefone int(11) NOT NULL,
  PRIMARY KEY (Id_Cliente),
  FOREIGN KEY (Endereco_id) references endereco (Endereco_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE endereco(	
	Endereco_id int not null AUTO_INCREMENT,
	endereco varchar(40) NOT NULL,
	cep varchar(12) not null,
	cidade varchar(12) not null,
	estado varchar (12) not null,
	primary key (Endereco_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE cliente_cadastra_pet (
  Id_Cadastro int(11) NOT NULL AUTO_INCREMENT,
  Id_Cliente int(11) NOT NULL,
  Id_Pet int(11) NOT NULL,
  PRIMARY KEY (Id_Cadastro),
  CONSTRAINT cliente_cadastra_pet_ibfk_1 FOREIGN KEY (Id_Cliente) REFERENCES cliente (Id_Cliente),
  CONSTRAINT cliente_cadastra_pet_ibfk_2 FOREIGN KEY (Id_Pet) REFERENCES pets (Id_Pet)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE solicitacao_de_adocaoa (
  Id_Adocao int(11) NOT NULL AUTO_INCREMENT,
  Id_Cliente int(11) NOT NULL,
  Id_Pet int(11) NOT NULL,
  Id_Ong int(11) NOT NULL,
  PRIMARY KEY (Id_Adocao),
  CONSTRAINT solicitacao_de_adocao_ibfk_1 FOREIGN KEY (Id_Cliente) REFERENCES cliente (Id_Cliente),
  CONSTRAINT solicitacao_de_adocao_ibfk_2 FOREIGN KEY (Id_Pet) REFERENCES pets (Id_Pet),
  CONSTRAINT solicitacao_de_adocao_ibfk_3 FOREIGN KEY (Id_Ong) REFERENCES ongs (Id_Ong)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE pets (
  Id_Pet int(11) NOT NULL AUTO_INCREMENT,
  Nome varchar(40) NOT NULL,
  Raça varchar(40) NOT NULL,
  Idade int(11) NOT NULL,
  PRIMARY KEY (Id_Pet)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;