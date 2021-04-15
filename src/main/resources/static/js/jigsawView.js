$.ajax({
    type: 'GET',
    url: 'api/player',
    success: function(players){
        console.log('success', players);
    },
    error: function(){
        alert('Couldnt find any players');
    }
})