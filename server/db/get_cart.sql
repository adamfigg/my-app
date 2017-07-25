-- select *,cart.id as cart_id from paintings join cart on cart.painting_id = paintings.id where cart.users_id = $1



select *,cart.id as cart_id from paintings join cart on cart.painting_id = paintings.id where cart.users_id = $1
-- this is the new logic that will hopfully fix the issue I am having with ids and removing the right thing from the cart