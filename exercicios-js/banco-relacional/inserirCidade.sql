SELECT * from estados where id = 25;

INSERT INTO cidades(nome, area,estado_id)
values('Campinas', 795, 25)

INSERT INTO cidades(nome, area,estado_id)
values('Niterói', 133.9, 25);

INSERT INTO cidades(nome, area,estado_id)
VALUES (
    'Caruaru', 
    920.6, 
    (SELECT id from estados WHERE sigla = 'PE')
);

INSERT INTO cidades(nome, area,estado_id)
VALUES (
    'Juazeiro do Norte', 
    248.2, 
    (SELECT id from estados WHERE sigla = 'CE')
);

SELECT * from cidades;