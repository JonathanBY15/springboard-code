-- write your queries here

--1
SELECT *
FROM owners AS o 
FULL OUTER JOIN vehicles AS v 
ON o.id=v.owner_id;

--2
SELECT first_name, last_name, COUNT(owner_id)
FROM owners AS o 
JOIN vehicles AS v on o.id=v.owner_id 
GROUP BY (first_name, last_name) 
ORDER BY first_name;


--3
SELECT first_name, last_name, ROUND(AVG(price)) as average_price, COUNT(owner_id) 
FROM owners AS o 
JOIN vehicles AS v on o.id=v.owner_id 
GROUP BY (first_name, last_name) 
HAVING COUNT(owner_id) > 1 AND ROUND(AVG(price)) > 10000 
ORDER BY first_name DESC;