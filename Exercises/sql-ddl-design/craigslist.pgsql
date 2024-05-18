DROP DATABASE IF EXISTS craigslist_db;
CREATE DATABASE craigslist_db;

\c craigslist_db;


-- regions
CREATE TABLE Regions (
    region_id SERIAL PRIMARY KEY,
    region_name VARCHAR(30) UNIQUE NOT NULL
);

-- users
CREATE TABLE Users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(30) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    pass VARCHAR(255) NOT NULL,
    preferred_region_id INT REFERENCES Regions(region_id)
);

-- categories
CREATE TABLE Categories (
    category_id SERIAL PRIMARY KEY,
    category_name VARCHAR(100) UNIQUE NOT NULL
);

-- posts
CREATE TABLE Posts (
    post_id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    post_text TEXT NOT NULL,
    user_id INT REFERENCES Users(user_id),
    region_id INT REFERENCES Regions(region_id),
    category_id INT REFERENCES Categories(category_id)
);
