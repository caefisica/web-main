fetch('/.netlify/functions/instagram')
  .then(function(resp) {
    return resp.json();
  })
  .then(function(data) {
    let insvar = data;

    var feed = new Instafeed({
      accessToken: insvar,
      debug: false,
      limit: 9,
      template: '<div class="col-md"> <div class="card"> <div class="card-img"> <a href="{{image}}" data-fancybox="gallery" data-caption="{{caption}}"> <img src="{{image}}" loading="lazy" width="200" height="200" alt="Descripción: {{caption}}"></img> </a> </div></div></div>',
      transform: function(item) {
        item.caption = item.caption.replace(/\s+/g," ").split(/(?=\s)/gi).slice(0, 50).join('');
        return item;
      },
    });
    
    feed.run();

  })