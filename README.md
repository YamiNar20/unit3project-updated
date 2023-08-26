Written Homework Assignments

Explain in your own words: Where did you register your domain and what your domain name is? How did you transfer DNS to Digital Ocean from that domain registrar? In Digital Ocean how did you create the A Record for the subdomain you deployed to? In your Virtual Machine what program did you use to setup your reverse proxy? How did you create your SSL Certificate?

To begin, log in to Digital Ocean and navigate to your domain. We will deploy my application on it. We need to access our SSH using root@------.

Create a subdomain and point it to your personal server. Clone your Git repository in the terminal using git clone (GitHub link). Navigate to seipets.yamilethnarvaez.me.

Run npm i to install the dependencies.

Start the server using PM2: pm2 start server.js --name "pets". Make sure to configure a different port in the .env file (don't modify it directly).

Address any vulnerabilities by running:

npm audit fix
npm audit fix --force
Edit the .env file using nvim .env.

Restart the PM2 server with the updated configuration:

Check the logs for any errors: pm2 logs. Use Ctrl + C to exit.

To configure Nginx, open the terminal and type ranger.

Navigate to the /etc/nginx/sites-available directory.

Update the configuration by adding a server block for seipets:

server {
    server_name seipets.yamilethnarvaez.me;

    location / {
        proxy_pass http://localhost:8003;
    }
}
Save the configuration changes by pressing Esc, then Shift + Semicolon, and finally Enter after typing wq!.

Verify the configuration syntax using nginx -t to ensure there are no errors (it should show a successful test).

For the final step, run certbot --nginx. Choose the option to expand, as we want all aspects to be covered.

Once the deployment is successful, you will receive a confirmation message.


