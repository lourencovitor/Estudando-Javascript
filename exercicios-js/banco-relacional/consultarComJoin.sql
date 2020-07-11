SELECT * FROM estados e, cidades c;


SELECT * FROM estados e, cidades c ]
where e.id = c.estado_id;

SELECT e.nome as Estado,
     c.nome as Cidade, 
     regiao as Região
    FROM estados e, cidades c 
where e.id = c.estado_id;


-- Inner join 
SELECT 
    c.nome as Cidade,
    e.nome as Estado,
    regiao as Região
from estados e
INNER JOIN cidades c 
    on e.id = c.estado_id;
