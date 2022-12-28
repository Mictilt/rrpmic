# rrpmic 
Gera uma equação de segundo grau e introduz-se os dois valores de delta.
Após introduzir os valores corretos surgirá a password.

start server
pm2 --name server start npm -- start

listar server
pm2 ps

parar server
pm2 delete 0
