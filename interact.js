//let allBooks = false;

$('#GetBooks').on('click',function handleRequest() {

	$.ajax
		({

			url:"https://still-bayou-11686.herokuapp.com/api/books",
			type: 'GET',
			isLocal: true,

			datatype:"json",
			crossDomain:true,
			success: function(JsonData)
				{
					console.log("Request succeed" , JsonData);



				//if(allBooks == false){


					//allBooks = true;

					$('.booklist').empty();

					let displayTable = '';

					displayTable += '<table><thead><th>id</th><th>isbn</th><th>title</th><th>lastname</th><th>firstname</th></thead>';
					

					for(let a in JsonData){
						
						displayTable += '<tr><td>'+ JsonData[a].id + '</td><td>'+ JsonData[a].isbn + '</td><td>'+ JsonData[a].title + '</td><td>'+ JsonData[a].author.lastname + '</td><td>' + JsonData[a].author.firstname +'</td></tr>';
						
					}

					displayTable += '</table>';

					let newDiv = document.createElement('div');
					newDiv.innerHTML = displayTable;
					$(newDiv).addClass('booklist');
					$('#allBooks').append(newDiv);

				


					$('td').css('color','grey');

				//}	


				},
		        error: function(response, ajaxOptions, thrownError) {

           console.log( 'StringError: ' + ajaxOptions + '\n\nthrownError: ' + JSON.stringify(thrownError) + '\n\nResponse: ' + JSON.stringify(response));

        },


		})

})

$('#GetBook').on('click',function handleRequest() {

	let book = $('#bookNumberGet').val();
	console.log("https://still-bayou-11686.herokuapp.com/api/books/"+book);

	$.ajax
		({

			url:"https://still-bayou-11686.herokuapp.com/api/books/"+book,
			type: 'GET',
			isLocal: true,

			datatype:"json",
			crossDomain:true,
			success: function(JsonData)
				{
					console.log("Request succeed" , JsonData);


				let displayTable = '';

				displayTable += '<table><thead><th>id</th><th>isbn</th><th>title</th><th>lastname</th><th>firstname</th></thead>';



				displayTable += '<tr><td>'+ JsonData.id + '</td><td>'+ JsonData.isbn + '</td><td>'+ JsonData.title + '</td><td>'+ JsonData.author.lastname + '</td><td>' + JsonData.author.firstname +'</td></tr>';
					
 				



				displayTable += '</table>';

				let newDiv = document.createElement('div');
				newDiv.innerHTML = displayTable;
				$('#oneBook').after(newDiv);

			


				$('td').css('color','grey');



				},
		        error: function(response, ajaxOptions, thrownError) {

           console.log( 'StringError: ' + ajaxOptions + '\n\nthrownError: ' + JSON.stringify(thrownError) + '\n\nResponse: ' + JSON.stringify(response));

        },


		})

})

$('#deleteBook').on('click',function handleRequest() {

	let book = $('#bookNumberDelete').val();
	console.log("https://still-bayou-11686.herokuapp.com/api/books/"+book);

	$.ajax
		({

			url:"https://still-bayou-11686.herokuapp.com/api/books/"+book,
			type: 'DELETE',
			isLocal: true,

			datatype:"json",
			crossDomain:true,
			success: function(JsonData)
				{
					//console.log("Delete succeed");
					alert('Succesfully deleted');


				},
		        error: function(response, ajaxOptions, thrownError) {

           console.log( 'StringError: ' + ajaxOptions + '\n\nthrownError: ' + JSON.stringify(thrownError) + '\n\nResponse: ' + JSON.stringify(response));

        },


		})

})

// window.onload=function() {
//   document.getElementById("newBook").onsubmit=function() {
//     window.location.replace("file:///Users/jimmy/go/src/github.com/jimmy-wynendaele/restapi2/index.html");
//     return false;
//   }
// }

$('#addNewBook').on('click', function handleRequest(){
	let lastname = $('#addLastName').val();
	let firstname = $('#addFirstName').val();
	let title = $('#addTitle').val();
	let isbn = $('#addIsbn').val();

	console.log(lastname,firstname,title,isbn);

	$.ajax
	({
			url:"https://still-bayou-11686.herokuapp.com/api/books",
			type: 'POST',
			isLocal: true,
			datatype:"json",
			crossDomain:true,
			data: {
				"authorLastName": lastname,
				"authorFirstName": firstname,
				"title": title,
				"isbn": isbn},
			succes:function(){

				alert('book ' + title + ' has been added to database');
			},
			error: function(response, ajaxOptions, thrownError) {


           console.log(response,ajaxOptions,thrownError);

        }
	})
})

$('#updateBook').on('click', function handleRequest(){
	let lastname = $('#authorLastNamePut').val();
	let firstname = $('#authorFirstNamePut').val();
	let title = $('#titlePut').val();
	let isbn = $('#isbnPut').val();

	console.log(lastname,firstname,title,isbn);

	$.ajax
	({
			url:"https://still-bayou-11686.herokuapp.com/api/update",
			type: 'POST',
			isLocal: true,
			datatype:"json",
			crossDomain:true,
			data: {
				"authorLastName": lastname,
				"authorFirstName": firstname,
				"title": title,
				"isbn": isbn},
			succes:function(){

				alert('book ' + title + ' has been added to database');
			},
			error: function(response, ajaxOptions, thrownError) {


           console.log(response,ajaxOptions,thrownError);

        }
	})
})





