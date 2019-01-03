$.getJSON('http://sejivva.com/apikomunitas/api/komunitas', function (json) {

console.log(json);
    $.each(json, function (i,data) {
        console.log(json);
      document.getElementById('card').innerHTML +='<div class="card demo-card-header-pic"><div style="background-image:url(http://sejivva.com/'+data.image_komunitas+')" class="card-header align-items-flex-end">'+data.slug_komunitas+'</div><div class="card-content card-content-padding"><p class="date">'+data.nama_komunitas+'</p><p>'+data.deskripsi_komunitas+'</p></div><div class="card-footer"><a href="/lihat/" class="link">Like</a><a href="/lihat/'+data.id_komunitas+'/" class="link">Read more</a></div></div>';
    });
});
