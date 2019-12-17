<script type="text/javascript">
	$(document).ready(function(){
        $('input[type="file"]').change(function(e){
            document.getElementById('fotoProfil').src = window.URL.createObjectURL(e.target.files[0]);
            document.getElementById('namaFile').innerHTML = e.target.files[0].name;
            document.getElementById('ukuranFile').innerHTML = (e.target.files[0].size/1000) +" Kb";
            document.getElementById('tipeFile').innerHTML = e.target.files[0].type;
        })
    });
</script>