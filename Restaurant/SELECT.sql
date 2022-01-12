SELECT 
    Title,
    Name
FROM 
    MENU
INNER JOIN restaurant
    ON restaurant.id = MENU.restaurant_id;