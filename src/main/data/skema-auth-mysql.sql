drob table if exist;

create table s_users (
    id INTEGER(40) PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(30) NOT NULL,
    password VARCHAR(255) NOT NULL,
    active BOOLEAN
);

insert into s_users (username,password,active) 
values ('agung','123',true)
,('beni','321',true);

create table s_role(
    id INTEGER(40)PRIMARY KEY AUTO_INCREMENT,
    nama_role VARCHAR(100) NOT NULL,
    id_user INTEGER(40) REFERENCES s_users(id)
);

insert into s_role(nama_role,id_user) values ('ROLE_SUPERVISOR',1);
insert into s_role(nama_role,id_user) values ('ROLE_ADMIN',1);
insert into s_role(nama_role,id_user) values ('ROLE_USER',2);