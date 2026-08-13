create database achados_perdidos;
use achados_perdidos;
create table `objeto`(
	id int auto_increment primary key,
    nome varchar(200) not null,
    descricao varchar(300) not null,
    local_encontrado varchar(200) not null,
    data_encontrado date not null,
    status_objeto varchar(20) not null
)