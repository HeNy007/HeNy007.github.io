$.ajax({
                type: "GET",
                url: '.m3u',
                success: function(message, text, response) {
                    let str = message
                    let array = str.split(" ")
                    let links = array.filter(x => /[^h]+.m3u8/.test(x)).map(x => x.split("\n")).flat().filter(x => /[^h]+.m3u8/.test(x))
                    for (let i of links) {
                        $("#container").append("<li>" + i + "</li>")
                    }
                }
            })
            //Click channel to play it
        $("#container").on('click', 'li', function() {
            var player = videojs(document.querySelector('.video-js'));
            player.src({
                src: $(this).text(),
                type: 'application/x-mpegURL' /*video type*/
            });

            player.play();
        });
       
