INSERT into empresas
    (nome, cnpj)
VALUES
    ('Bradesco', 79193884000106),
    ('Vale', 34373358000181),
    ('Cielo', 30499409000165);


alter table empresas modify cnpj varchar(14);

desc empresas;
desc prefeitos;

SELECT * from empresas;
SELECT * from cidades;

INSERT into empresas_unidades
    (empresa_id, cidade_id, sede)
VALUES
    (1,1,1),
    (1,2,0),
    (2,1,0),
    (2,2,1);