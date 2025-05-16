<template>
    <div>
      <Header />
      <Landing />
      <Footer />
    </div>
  </template>
  <script setup>
useHead({
  title: 'Kiko Undefiled Burger | Granada',
  meta: [
    {
      name: 'description',
      content: 'Kiko Undefiled Burger es tu local de hamburguesas con productos frescos y seleccionados especialmente para ti. En el centro de Granada, Kiko Undefiled Burger ofrece una experiencia única y agradable para disfrutar de nuestras hamburguesas gourmet.',
    },
    { name: 'author', content: 'Kiko Undefined Burger' },
    { name: 'robots', content: 'index, follow' },
    {
      name: 'keywords',
      content: 'burger, hamburguesa, kiko, kiko burger, kiko burgers, burger kiko, burger kiko, burger kiko burger, burger kiko burgers, burger kiko burger, burger kiko burgers, burger kiko burger, burger kiko burgers, burger kiko burger, burger kiko burgers, burger kiko burger, burger kiko burgers, burger kiko burger, burger kiko burgers',
    },
  ],
  script: [
    {
      children: `// Hotjar Tracking Code for https://localhost:3000
(function(h,o,t,j,a,r){
    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
    h._hjSettings={hjid:6406059,hjsv:6};
    a=o.getElementsByTagName('head')[0];
    r=o.createElement('script');r.async=1;
    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
    a.appendChild(r);
})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`,
      type: 'text/javascript'
    },
  ]
});

  </script>
  <style>
  *{
    margin: 0;
  }
  </style>
  