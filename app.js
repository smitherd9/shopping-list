$(document).ready(function() {

    $('#js-shopping-list-form').submit(function(event) {
        //alert('Handler for .submit() called.');
        event.preventDefault();
        // var food = $('#shopping-list-entry').val();
        // val() is for inputs
        /// text() is for elements other than inputs.
        $('.shopping-list').prepend('<li><span class="shopping-item">' + $('#shopping-list-entry').val() + '</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>')
        $('#shopping-list-entry').val("");
    });

	// $('.shopping-item-delete').on('click', function(){})
	// Syntax alert :-)
    $('body').on('click', '.shopping-item-delete', function() {
        $(this).closest('li').remove();
    });

    $('body').on('click', '.shopping-item-toggle', function(){
    	// keyword: this is a button
    	$(this).parent().siblings('span').toggleClass('shopping-item__checked');
    });


    //Binding the event listener '.on' to 'body' instead of the class name 
    //allows dynamically created items to have the same functionality.
    //Refer to article .on('click') vs. .click()


    //$('.shopping-item-toggle').click(function() {
    	// this ??
      //  $(this).parent().siblings('span').toggleClass('shopping-item__checked');
    //});




});
