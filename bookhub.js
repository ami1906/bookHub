// ajax call to get the books list from server
var books = [{
	"id": "1",
	"name": "Manorama Yearbook 2015 (English) 50th Edition",
	"image": "http://hackerearth.0x10.info/api/img?img=http://img6a.flixcart.com/image/book/8/0/3/manorama-yearbook-2015-400x400-imaeyy4ugkqfhwhf.jpeg",
	"author": "Mammen Mathew",
	"price": "188 ₹",
	"rating": "5",
	"details": {
		"Publisher": "Malayala Manorama Co. Ltd",
		"ISBN": "9770542577803",
		"Binding": "Paperback"
	},
	"description": "Manorama Yearbook is celebrating its 50thyear of publication. The largest-selling General Knowledge Compendium is one of the most comprehensive books used by students, teachers, researchers, media persons, planners, lay-people alike, covers a wide-spectrum of topics from Science, Medicine, Environment, IT, Literature, Entertainment, History, Geography, Polity, Ethics, Social Justice, International Relations, Current Affairs and Sports."
	}, {
	"id": "2",
	"name": "Quantitative Aptitude For Competitive Examinations 19th Edition",
	"image": "http://hackerearth.0x10.info/api/img?img=http://img2.smartprix.com/books/q2/2l/3gwln/s.jpg",
	"author": "R S Aggarwal",
	"price": "342 ₹",
	"rating": "4",
	"details": {
		"Publisher": "S.Chand Publishing",
		"ISBN": "8121924987",
		"Binding": "Paperback"
	},
	"description": "Quantitative Aptitude is a book that's popular among every student who's registered for competitive exams or job interviews. It remains a bestseller till date, mainly because of its comprehensive nature. "
	}, {
	"id": "3",
	"name": "Steve Jobs: The Exclusive Biography",
	"image": "http://hackerearth.0x10.info/api/img?img=http://management.ind.in/img/b/SBI-Bank-Quantitative-Aptitude-books-2.jpeg",
	"author": "Walter Isaacson",
	"price": "719 ₹",
	"rating": "5",
	"details": {
		"Publisher": "Little, Brown",
		"ISBN": "9781408703748",
		"Binding": "Hardcover"
	},
	"description": "'Steve Jobs: The Exclusive Biography' was one of the most eagerly awaited books of the year 2011. The book is a journey into the life of a legend who revolutionized the way people saw technology. Walter Issacson brings to life, the innovator, the dreamer and the devil within Steve Jobs. An absolutely must read! \r\n"
	}, {
	"id": "4",
	"name": "Transcendence",
	"image": "http://hackerearth.0x10.info/api/img?img=http://ecx.images-amazon.com/images/I/5122ukK8z2L._SX311_BO1,204,203,200_.jpg",
	"author": "Dr. A P J Abdul Kalam, Arun Tiwari",
	"price": "435 ₹",
	"rating": "5",
	"details": {
		"Publisher": "HarperCollins",
		"ISBN": "9351774058",
		"Binding": "Paperback"
	},
	"description": "Transcendence is published by Harper Publication in 2015. The author of this book is A P J Abdul Kalam and Arun Tiwari. The Author Dr Kalam and Arun Tiwari map a journey of self realization reflected in the eyes of Pramukh Swamiji painting a delightful fusion of spirituality. \n"
	}, {	
	"id": "5",
	"name": "The Immortals of Meluha",
	"image": "http://hackerearth.0x10.info/api/img?img=http://www.exoticindia.com/books/nac216.jpg",
	"author": "Amish",
	"price": "119 ₹",
	"rating": "4.2",
	"details": {
		"Publisher": "Westland",
		"ISBN": "9789380658742",
		"Binding": "Paperback"
	},
	"description": "Shiva, one of the chief Hindu deities, is portrayed in an entirely different light in Amish Tripathi's debut novel, The Immortals of Meluha. The first book of The Shiva Trilogy, The Immortals of Meluha charts Shiva's journey from the mountains with his Tibetan tribesmen to the kingdom of Meluha, which is occupied by the Suryavanshis, a race of people who are descendants of Lord Ram and live along the banks of the River Saraswati."
	}, {
	"id": "6",
	"name": "The Monk Who Sold His Ferrari 1st Editiona",
	"image": "http://hackerearth.0x10.info/api/img?img=http://ecx.images-amazon.com/images/I/51j3ISgpR6L._SX319_BO1,204,203,200_.jpg",
	"author": "Robin Sharma",
	"price": "099 ₹",
	"rating": "4.3",
	"details": {
		"Publisher": "Jaico Publishing House",
		"ISBN": "9788179921623",
		"Binding": "Paperback"
	},
	"description": "The Monk Who Sold His Ferrari is an interesting book, which is penned down by Robin Sharma. The book makes you delve deeper into yourself and think about your life from a different perspective. It educates you about how your daily habits can help you reach your dreams."
	}, {
	"id": "7",
	"name": "Wings of Fire: An Autobiography 1st Edition",
	"image": "http://hackerearth.0x10.info/api/img?img=http://imshopping.rediff.com/imgchkbooks/400-400/books/pixs/66/9788173711466.jpg",
	"author": "Apj Abdul Kalam, Arun Tiwari",
	"price": "162 ₹",
	"rating": "4.8",
	"details": {
		"Publisher": "Universities Press",
		"ISBN": "9788173711466",
		"Binding": "Paperback"
	},
	"description": "Wings of Fire traces the life and times of India’s former president APJ Abdul Kalam. It gives a glimpse of his childhood as well as his growth as India’s missile man."
	}, {
	"id": "8",
	"name": "Angel of the Dark",
	"image": "http://hackerearth.0x10.info/api/img?img=http://covers.booktopia.com.au/big/9780007442829/sidney-sheldon-s-angel-of-the-dark.jpg",
	"author": "Sidney Sheldon, Tilly Bagshawe",
	"price": "210 ₹",
	"rating": "3.4",
	"details": {
		"Publisher": "HarperCollins Publishers",
		"ISBN": "9780007490622",
		"Binding": "Paperback"
	},
	"description": "The master storyteller’s legacy continues.\r\nAn elusive and shadowy killer is on the prowl, codenamed the Angel of Death.\r\nWhen an elderly multimillionaire is found brutally murdered in Hollywood, and his young wife raped and beaten, the police assume the motive is robbery. Unable to find the perpetrators, the case is eventually closed."
	}, {
	"id": "9",
	"name": "The Perks of Being a Wallflower",
	"image": "http://hackerearth.0x10.info/api/img?img=https://upload.wikimedia.org/wikipedia/en/0/0b/The_Perks_of_Being_a_Wallflower_Poster.jpg",
	"author": "Stephen Chbosky",
	"price": "179 ₹",
	"rating": "4.4",
	"details": {
		"Publisher": "MTV Books",
		"ISBN": "9781451696196",
		"Binding": "Paperback"
	},
	"description": "A powerful and perceptive coming-of-age story, in the tradition of The Catcher in the Rye, from a talented young filmmaker, screenwriter and novelist. \r\n"
	}, {
	"id": "10",
	"name": "Rich Dad Poor Dad",
	"image": "http://hackerearth.0x10.info/api/img?img=http://ecx.images-amazon.com/images/I/61-a%2BUFo9iL._SL1164_.jpg",
	"author": "Robert T Kiyosaki",
	"price": "189 ₹",
	"rating": "4.7",
	"details": {
		"Publisher": "Plata Publishing",
		"ISBN": "9781612680019",
		"Binding": "Paperback"
	},
	"description": "In Rich Dad Poor Dad, Robert Kiyosaki goes back to his childhood in Hawaii to explain his philosophy on wealth creation and being successful. The book is written in a very conversational manner and most of the snippets are based on the author’s budding years and his experiences regarding money management."
	}, {
	"id": "11",
	"name": "Jugaad Innovation: A Frugal and Flexible Approach to Innovation For The 21st Century",
	"image": "http://hackerearth.0x10.info/api/img?img=http://d.gr-assets.com/books/1370774652l/18040673.jpg",
	"author": "Jaideep Prabhu, Navi Radjou, Simone Ahuja",
	"price": "394 ₹",
	"rating": "4.2",
	"details": {
		"Publisher": "Random House India",
		"ISBN": "9788184002058",
		"Binding": "Hardcover"
	},
	"description": "Jugaad is a word often heard in general conversation in India. Whether to find ingenious solutions to problems or turn adversity into opportunity Indians swear by it. In this seminal book, Navi Radjou, Jaideep Prabhu, and Simone Ahuja challenge the very way a traditional organization thinks and acts"
	}, {
	"id": "12",
	"name": "The Good, The Bad and The Ridiculous",
	"image": "http://hackerearth.0x10.info/api/img?img=http://ecx.images-amazon.com/images/I/51qF%2B7yfDdL._SX323_BO1,204,203,200_.jpg",
	"author": "Humra Quraishi, Khushwant Singh",
	"price": "299 ₹",
	"rating": "5",
	"details": {
		"Publisher": "Rupa Publications",
		"ISBN": "9788129124432",
		"Binding": "Paperback"
	},
	"description": "In the course of almost a century of living, Khushwant Singh has been witness to the making of more public and private histories than most of us have read about. He has encountered, and frequently crossed swords with, many of the men and women who have been central to these historiesand he has written about them with glorious candour. "
	}, {
	"id": "13",
	"name": "The Good Book",
	"image": "http://hackerearth.0x10.info/api/img?img=http://ecx.images-amazon.com/images/I/41z2Kmjf%2BdL._SX332_BO1,204,203,200_.jpg",
	"author": "A C Grayling",
	"price": "127 ₹",
	"rating": "4.9",
	"details": {
		"Publisher": "Bloomsbury",
		"ISBN": "9780747599609",
		"Binding": "Hardcover"
	},
	"description": "Drawing on the wisdom of 2,500 years of contemplative non-religious writing on all that it means to be human – from the origins of the universe to small matters of courtesy and kindness in everyday life – A. C. Grayling, Britain's most popular and widely read philosopher, has created a secular bible."
}];
$( document ).ready(function(){
	m.mount(document.getElementById('book_hub'),BookHubComponent);	
})


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
