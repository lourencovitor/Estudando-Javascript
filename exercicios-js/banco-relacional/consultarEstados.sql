-- Utilizando select

SELECT * FROM estados;

select nome,sigla from estados;

select nome,sigla as 'Nome do Estado' from estados;

select nome,sigla from estados where regiao = 'Sul'

select nome,regiao from estados where populacao >= 10;

select nome,regiao from estados 
where populacao >= 10
order by populacao;

select 
    nome,
    regiao,
    populacao
from estados 
where populacao >= 10
order by populacao desc;