CREATE TABLE IF NOT EXISTS cidades(
    id INT unsigned NOT NULL AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    estado_id int unsigned not null,
    area decimal(10,2),
    PRIMARy KEY(id),
    FOREIGN KEY(estado_id) REFERENCES estados (id)
);


-- CREATE TABLE IF NOT EXISTS teste(
--    id INT unsigned NOT NULL AUTO_INCREMENT PRIMARy KEY
-- );

-- DROP TABLE IF EXISTS teste;