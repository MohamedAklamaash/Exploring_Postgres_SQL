CREATE TABLE products(
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    phone VARCHAR(50) UNIQUE 
);

ALTER TABLE products
ADD COLUMN on_sale boolean NOT NULL;

