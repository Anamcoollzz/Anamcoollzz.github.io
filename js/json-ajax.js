$(document).ready(function(){
	console.log('document loaded');

	$('.halaman').on('click', function(ev){
		console.log('tombol halaman diklik', ev);
		ev.preventDefault();

		var btn = $(ev.target);

		var page = btn.attr('name');

		page = Number(page);
		console.log(page);

		if (page == undefined || page == null || isNaN(page)) {
			page = 1;
		}

		if (page < 1) {
			page = 1;
			page++;
		}

		if (page > 3) {
			page = 3;
			page--;
		}

		btn.attr('name', page);

		var doc = 'json/dataProduk'+page+'.json';

		$.ajax({
			url: doc,
			data: {},
			method: 'get',
			success: function(resp) {
				var items = resp;
				for (var i = 0, i2 = items.length; i < i2; i++) {
					$(".img-"+i).attr("src",items[i].img);
					$(".harga-"+i).html(items[i].harga);
					$(".judul-"+i).html(items[i].name);
				}
			},
			error: function(code, reason){

			}
		});

	});
});


