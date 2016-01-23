// ajax call to get the books list from server
var url = "https://capillary.0x10.info/api/books?type=json&query=list_books";
var books = [];
$.get(url,function(data){
	// assigning the books object to books variable
	books = data['books'];
	// mounting mithril component
	m.mount(document.getElementById('book_hub'),BookHubComponent);
});

// defining BookHubComponent  
var BookHubComponent = {};

// controller of BookHubComponent
BookHubComponent.controller = (function()
{
	// initialize the default component data
    BookHubComponent.vm.init();

    // click handler to show the book details in RHS 
    this.showBookDetails =function(index)
    {
    	BookHubComponent.vm.selectedBook = BookHubComponent.vm.books[parseInt(index)];
    }

    // filter data on search action and return the filtered data
    this.filterData = function(value)
    {
    	console.log("search data:"+value.length);
    	BookHubComponent.vm.books = books.filter(function(book)
    	{
    		// check whether search key is in book name 
    		if(book.name.toLowerCase().indexOf(value.toLowerCase()) != -1)
    			return true;
    		// check whether search key is in book author name
    		else if(book.author.toLowerCase().indexOf(value.toLowerCase()) != -1)
    			return true;
    		// check whether search key is in rating
    		else if(book.rating.toLowerCase().indexOf(value.toLowerCase()) != -1)
    			return true;
    		else return false;
    	})
    	// If no books found found with the search criteria then show all books
    	if(BookHubComponent.vm.books.length == 0 || value.length == 0)
    	{
    		// default to 8 items when search key is empty or search result is empty
    		BookHubComponent.vm.booksListed = 8;
    		BookHubComponent.vm.books = books.slice(0,BookHubComponent.vm.booksListed);
    	}
    	// change the selected book and listed book length
    	BookHubComponent.vm.booksListed = BookHubComponent.vm.books.length;
    	BookHubComponent.vm.selectedBook = BookHubComponent.vm.books[0];
    }

	// sort by price and list the book details
    this.sortByPrice = function()
    {
    	BookHubComponent.vm.books = books.sort(function(a, b){
 			return  parseFloat(b.price.split(" ")[0]) - parseFloat(a.price.split(" ")[0]);
		}).slice(0,BookHubComponent.vm.booksListed);
		// changed the default selected book to the first filtered book
		BookHubComponent.vm.selectedBook = BookHubComponent.vm.books[0];
		$('.listing_container_header input').val('');
    }

	// sort by rating and list the book details
    this.sortByRating = function()
    {
    	
    	BookHubComponent.vm.books = books.sort(function(a, b){
 			return parseFloat(b.rating) - parseFloat(a.rating) ;
		}).slice(0,BookHubComponent.vm.booksListed);
		// changed the default selected book to the first filtered book
		BookHubComponent.vm.selectedBook = BookHubComponent.vm.books[0];
		$('.listing_container_header input').val('');

    }
    // load double the product if available when load more is clicked
    this.loadMore = function(){
    	var doubleList = (2 * BookHubComponent.vm.booksListed);
    	if( doubleList > BookHubComponent.vm.totalBooks)
    		BookHubComponent.vm.booksListed = BookHubComponent.vm.totalBooks;
    	else
    		BookHubComponent.vm.booksListed = doubleList;
    	BookHubComponent.vm.books = books.slice(0,BookHubComponent.vm.booksListed);	
    }
    
});

// Define view modal for the BookHubComponent
BookHubComponent.vm = {
  //initialize default values 
  init: function(){    
  	//  total books length recieved from server api
    BookHubComponent.vm.totalBooks = books.length;
    // no of books to be listed on page load
    BookHubComponent.vm.booksListed = 8;
    // book objexts whose details need to be listed on page load
    BookHubComponent.vm.books = books.slice(0,BookHubComponent.vm.booksListed);
    // default any book as a selected book
    BookHubComponent.vm.selectedBook = books[3];

  }
};

// definition of the BookHubComponent view
BookHubComponent.view=function(ctrl_res)
{
	return [
		m("#header",[
			m(".row",[
				m(".col-md-6 .col-xs-12 .text_align_center",[
					m("span.glyphicon glyphicon-book .logo", ' Search Books Made Easy')
				]),
				m(".col-md-6 .col-xs-12 .stats_container",[
					m("span.stats",[
						m("span",'Total Books: '+BookHubComponent.vm.totalBooks),
						' | ',
						m("span",'Total Listed Books: '+BookHubComponent.vm.booksListed),
					])

				]),
			])
		]), // end of header
		m(".row #product_container",[
			m(".col-md-7 .col-xs-12 #listing_container",[
				m(".row .listing_container_header",[
					m(".col-md-6 .col-xs-12",[
						m("input.form-control",{type:"text",placeholder:"Search (by name, author, rating)",
							onkeyup: m.withAttr("value",ctrl_res.filterData)})
					]),
					m(".col-md-6 .col-xs-12 .text_align_center",[
						m('span.glyphicon glyphicon-bookmark .listing_container_bookmark',' List Bookmarks')
					]),

				]), // end of listing_container_header
				m(".listing_container_body",[
				BookHubComponent.vm.books.map(function(book,index){
				return [
							m('.list',[
								m("div",{class: (BookHubComponent.vm.selectedBook.id == book.id) ? "row book_details dark_green" : "row book_details",onclick:ctrl_res.showBookDetails.bind(this,index)},[
									m(".col-xs-9 ",[
										m("span",{class:"glyphicon glyphicon-book book_icon","aria-hidden":"true"}),
										book.name.length > 65 ?
											m("span",book.name.substring(0,65)+' ...') :
											m("span",book.name)
									]),
									m(".col-xs-2 book_price",m("span",book.price)),
									m(".col-xs-1",
										m("span",{class:"glyphicon glyphicon glyphicon-circle-arrow-right book_icon_right","aria-hidden":"true"})
									)
								])
							])
						]
				})
				]), // end of listing_container_body
				m("div.load_more",[
					m("span",{class:"glyphicon glyphicon-circle-arrow-down","aria-hidden":"true",
					onclick:ctrl_res.loadMore.bind(this)})
				]), // end of load_more
				m(".sort_section",[
				m(".row .sort_section",[
					m(".col-xs-6 .text_align_center",[
						m('span.glyphicon glyphicon-sort .sort_label',' Sortby')
						
					]),
					m(".col-xs-6",[
						m(".row .sort_options",[
							m(".col-xs-6",[
								m("input",{type:"radio",name:"sort",value:"Price",onclick:ctrl_res.sortByPrice.bind(this)}),' Price'
							]),
							m(".col-xs-6",[
								m("input",{type:"radio",name:"sort",value:"Rating",onclick:ctrl_res.sortByRating.bind(this)}),' Rating'
							])
						])
					])

				])
				]) // end of sort section
			]), // end of listing_container
			m(".col-md-5 .col-xs-12 #detail_container",[
				m(".row .product_meta_data",[
					m(".col-xs-5.product_image",[
						m("img",{src:BookHubComponent.vm.selectedBook.image,width:"200px",height:"270px"})
					]),
					m(".col-xs-7 ",[
						m(".product_details",[
							m(".dark_green .product_details_heading",'Details'),
							m(".product_details_body",[
								m("span",[
									m("span.display_block",'Author : '),
									m("span.pad_left",BookHubComponent.vm.selectedBook.author.substring(0,28))
								]),
								m("span",[
									m("span.display_block",'Publisher : '),
									m("span.pad_left",BookHubComponent.vm.selectedBook.details.Publisher)
								]),
								m("span",[
									m("span.display_block",'ISBN : '),
									m("span.pad_left",BookHubComponent.vm.selectedBook.details.ISBN)
								]),
								m("span",[
									m("span.display_block",'Binding : '),
									m("span.pad_left",BookHubComponent.vm.selectedBook.details.Binding)
								]),
								m("span",[
									m("span.display_block",'Rating : '),
									m("span.pad_left",BookHubComponent.vm.selectedBook.rating)

								])
								
							])
						]) // end of product_details
					]) // end of col-xs-7

				]),
				m(".row product_description",[
					m(".dark_green .product_details_heading",'Description'),
					m('span',BookHubComponent.vm.selectedBook.description)
				]), // end of product_description
				m(".row .share_bookmark",[
					m(".col-xs-6 .text_align_center",[
						m('span.glyphicon glyphicon-share .share',' Share')
					]),
					m(".col-xs-6 .text_align_center",[
						m('span.glyphicon glyphicon-bookmark .book_mark',' Bookmark')
					])
				]) // end of share_bookmark
			]), // end of detail_container
		]), // end of product container

	];
}
