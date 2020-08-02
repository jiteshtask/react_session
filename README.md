# git clone https://github.com/jiteshtask/react_session.git


# npm i
# npm run dev 

# npm start



# SQL Assignment ---
SELECT first_name, last_name, COUNT(*)
FROM customers
GROUP BY first_name, last_name
HAVING COUNT(*) > 1