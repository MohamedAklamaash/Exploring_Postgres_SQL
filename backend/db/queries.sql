
CREATE TABLE restaurants(
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    location VARCHAR(50) NOT NULL,
    price_range BIGINT NOT NULL CHECK(price_range >= 10)
);

INSERT INTO restaurants (name,location,price_range)
VALUES
('Burmy Food','Peelamedu',1000),
('Starr Grill','Peelamedu',100),
('KFC','Fun Mall',2000);
