# PruebaGrafico


<VirtualHost *:80>
  ServerName pruebaGrafico.test
  ServerAlias www.pruebaGrafico.test
  DocumentRoot "${INSTALL_DIR}/www/PruebaGrafico"
  <Directory "${INSTALL_DIR}/www/PruebaGrafico">
    Options +Indexes +Includes +FollowSymLinks +MultiViews
    AllowOverride All
    Require local
  </Directory>
</VirtualHost>