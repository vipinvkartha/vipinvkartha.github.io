

$(document).ready(function () {
    let selectedChoice = true;
    $("#movie_title").prop("disabled", false);
    $("#movie_year").prop("disabled", false);
    $("#movie_id").prop("disabled", true);

    $('input:radio[name="optradio"]').change(
        function () {
            if (this.checked && this.value == 'title') {
                // note that, as per comments, the 'changed'
                // <input> will *always* be checked, as the change
                // event only fires on checking an <input>, not
                // on un-checking it.
                // append goes here
                $("#movie_title").prop("disabled", false);
                $("#movie_year").prop("disabled", false);
                $("#movie_id").prop("disabled", true);
                selectedChoice = true;

            }
            else if (this.checked && this.value == 'id') {
                $("#movie_title").prop("disabled", true);
                $("#movie_year").prop("disabled", true);
                $("#movie_id").prop("disabled", false);
                selectedChoice = false;
            }
        });

    $('#SearchBtn').click(function () {
        DisplayData(selectedChoice);
    });
});

function DisplayData(selectedChoice) {

    console.log(selectedChoice);
    let movieTitle = "";
    let movieYear = "";
    let movieID = "";
    let temp = "";
    let urlVal= `http://www.omdbapi.com/?`;
    let key = `&apikey=7487c337`
    if (selectedChoice) 
    {
        temp = $('#movie_title').val();
        console.log(temp);
        if (temp != '' && temp != 'undefined' && temp != null) 
        {
            movieTitle = movieTitle.concat(temp);
            console.log(movieTitle);
            urlVal = urlVal.concat(`t=${movieTitle}`);
            console.log(urlVal);
        }

        temp = $('#movie_year').val();
        if (temp != '' && temp != 'undefined' && temp != null) 
        {
            movieYear = movieYear.concat(temp);
            urlVal = urlVal.concat(`&y=${movieYear}`);
        }
    }
    else
    {
        temp = $('#movie_id').val();
        if (temp != '' && temp != 'undefined' && temp != null) 
        {
            movieID = movieID.concat(temp);
            urlVal = urlVal.concat(`i=${movieID}`);
        }
    }
    urlVal = urlVal.concat(key);
        console.log(urlVal);
        ClearData();

        $.ajax({
            type: 'GET',
            datatype: 'JSON',
            url: urlVal,
            success: (data) => {
                //console.log(data);
                let response = data.Response;
                //console.log(response);
                if (response == "True") {
                    $('#movie').show();
                    $('titleHead').text(`${data.Title}`);
                    $('#poster').attr('src', `${data.Poster}`);
                    $('#title').append(`<span class="tab">   TITLE   :</span>${data.Title}`);
                    $('#actors').append(`<span class="tab">  ACTORS  :</span>${data.Actors}`);
                    $('#director').append(`<span class="tab">DIRECTOR:</span>${data.Director}`);
                    $('#genre').append(`<span class="tab">   GENRE   :</span>${data.Genre}`);
                    $('#lang').append(`<span class="tab">    LANUAGE :</span>${data.Language}`);
                    $('#plot').append(`<span class="tab">    PLOT    :</span>${data.Plot}`);
                    $('#release').append(`<span class="tab"> RELEASE :</span>${data.Released}`);
                    $('#runtime').append(`<span class="tab"> RUNTIME :</span>${data.Runtime}`);
                    $('#imdbid').append(`<span class="tab">  IMDB ID :</span>${data.imdbID}`);
                    $('#rating').append(`<span class="tab">  RATING  :</span>${data.imdbRating}`);
                }
                else {
                    console.log("some error occured");
                    $('#movie').hide();
                }

            },
            error: (data) => { // in case of error response


            }

        });
    }
    function ClearData() {
        $('#title').text('');
        $('#actors').text('');
        $('#director').text('');
        $('#genre').text('');
        $('#lang').text('');
        $('#plot').text('');
        $('#release').text('');
        $('#runtime').text('');
        $('#imdbid').text('');
        $('#rating').text('');
    }
