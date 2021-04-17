function loadDoc() {
    $.ajax({
  
           url: "movies.xml",
           dataType: "xml",
           success: function(data) {
              $("table").append('<tr><td>Title</td><td>Genre</td><td>Director</td><td>Cast</td><td>Short Description</td><td>IMDB rating</td></tr>');
              $(data).find('movie').each(function(){
                  var title = $(this).find('title').text();
                  
                  var genre=[];
                  $(this).find('genre').each(function(){
                      genre.push($(this).text());
                  });
                  var director = $(this).find('director').text();
                  var person=[];
                  $(this).find('cast').each(function findcast(){
                      $(this).find('person').each(function(){
                          person.push($(this).attr('name'));
                      });
                  });
                  var description = $(this).find('synopsis').text();
                  var rating = $(this).find('score').text();
                  var info = '<tr><td>' + title +'</td><td>' + genre.join() +'</td><td>' +  director + '</td><td>' + person.join() +'</td><td>' +  description + '</td><td>' +  rating + '</td></tr>';
                  $("table").append(info);
              });
              
  
           },
           error: function() { alert("error loading file");  }
       });
  
  
  }