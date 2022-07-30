var feed = new Instafeed({
    accessToken: InstagramToken, 
    debug: false,

    transform: function(item) {
      item.caption = item.caption.replace(/\s+/g," ").split(/(?=\s)/gi).slice(0, 40).join('');
      return item;
    },

});
feed.run();