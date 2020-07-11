
SELECT e.nome, c.nome 
from empresas e, empresas_unidades eu,
cidades c
WHERE e.id = eu.empresa_id
and c.id = eu.cidade_id
and sede;

SELECT e.nome Empresa, c.nome Cidade 
from empresas e, empresas_unidades eu,
cidades c
WHERE e.id = eu.empresa_id
and c.id = eu.cidade_id
and sede;

SELECT e.nome as Empresa, c.nome as Cidade 
from empresas e, empresas_unidades eu,
cidades c
WHERE e.id = eu.empresa_id
and c.id = eu.cidade_id
and sede;