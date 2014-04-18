/* ================================= $Accordion Script============================ */

(function($){

//   var allPanels = $('.accordion > dd').hide();

// $('.accordion > dt > a').click(function(){
//     allPanels.slideUp();
//   $(this).parent().next().slideDown();
//   return false;

// }); 




/* ================================= $Community Projects Slider ============================ */


//   $('#checkbox').change(function(){
//     setInterval(function () {
//         moveRight();
//     }, 3000);
//   });
  
// 	var slideCount = $('#myslider ul li').length;
// 	var slideWidth = $('#myslider ul li').width();
// 	var slideHeight = $('#myslider ul li').height();
// 	var sliderUlWidth = slideCount * slideWidth;
	
// 	$('#myslider').css({ width: slideWidth, height: slideHeight });
// 	$('#myslider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
// 	$('#myslider ul li:last-child').prependTo('#myslider ul');

//     function moveLeft() {
//         $('#myslider ul').animate({
//             left: + slideWidth
//         }, 200, function () {
//             $('#myslider ul li:last-child').prependTo('#slider ul');
//             $('#myslider ul').css('left', '');
//         });
//     };

//     function moveRight() {
//         $('#myslider ul').animate({
//             left: - slideWidth
//         }, 200, function () {
//             $('#myslider ul li:first-child').appendTo('#myslider ul');
//             $('#myslider ul').css('left', '');
//         });
//     };

//     $('a.control_prev').click(function () {
//         moveLeft();
//     });

//     $('a.control_next').click(function () {
//         moveRight();
//     });

// });  

// /* ================================== $Remove Paragraph ================================== */

// $( "button" ).click(function() {
//   $( "p" ).remove( ":contains('Spare ribs meatloaf filet mignon, sausage flank leberkas tri-tip tail shank prosciutto ham hock.')" );
// });


//  ==================================== $FADE / SHOW Paragraph =========================== 

// $( "button:first" ).click(function() {
//   $( ".community_info" ).fadeToggle( "slow", "linear" );
// });
// $( "button:last" ).click(function() {
//   $( "p:last" ).fadeToggle( "fast", function() {
//     $( "#log" ).append( "<div>finished</div>" );
//   });
// });


// /* ======================================== $TABS ======================================== */

// $('.tabgroup > div').hide();
// $('.tabgroup > div:first-of-type').show();
// $('.tabs a').click(function(e){
//   e.preventDefault();
//     var $this = $(this),
//         tabgroup = '#'+$this.parents('.tabs').data('tabgroup'),
//         others = $this.closest('li').siblings().children('a'),
//         target = $this.attr('href');
//     others.removeClass('active');
//     $this.addClass('active');
//     $(tabgroup).children('div').hide();
//     $(target).show();
  
// });


// /* ======================================== $Log In ======================================== */

//   $('#btn').click(function(e){
//     e.preventDefault();
//     var user =$('#user').val();
//     var pass =$('#pass').val();
//     console.log(user + " " + pass);
    
//     $.ajax({
//       url:'xhr/login.php',
//       type:'post',
//       dataType:'json',
//       data:{
//         username:user,
//         password:pass
//       },
//       success:function(response){
//         console.log("Test User");
//         if(response.error){
//           alert(response.error);
//         } else{

//           window.location.assign('profile.html')
//         };
//       }
//     });
//   });





/* =================================== $Go To Projects ====================================== */

// $('.projectsbtn').on('click',function(e){
//   e.preventDefault();
//   window.location.assign('projects.html');
// });


// $('.addbtn').on('click',function(e){
//   e.preventDefault();
//   window.location.assign('add.html');
// });



// /* =================================== $Register ====================================== */

// $('#submit').on('click', function(){
//   var fisrtname= $('#first').val(),
//       lastname= $('#last').val(),
//       username= $('#userName').val(),
//       emailname= $('#email').val(),
//       password= $('#password').val();
//       console.log(firstmae+' '+lastname+' '+username+' '+email+' '+passowrd);


//   $.ajax({
//     url:'xhr/register.php',
//     type:'post',
//     dataType: 'json',
//     data: {
//       fistname: firstname,
//       lastname: lastnme,
//       username: username,
//       email: email,
//       password: password
//     },

//     success: function (response){
//       if(response.error){
//         alert(response.error)
//       }else{
//         window.location.assign('profile.html')
//       }
//     }
//   });
// });

/* ======================================== $New Projects ======================================== */

// $('.addButton').on('click'), function(e){
//   e.preventDefault();
//   var projName = $('#projectName').val(),
//   projDesc = $('#projectDescription').val(),
//   projDue=  $('#projectDueDate').val(),
//   status=  $('#projectStatus').val();

//   $.ajax({
//     url: 'xhr/new_project.php',
//     type:'post',
//     dataType: 'json',
//     data: {
//       projectName: projName,
//       projectDescription: projDesc,
//       dueDate: projDue,
//       status: status
//     },
//      success: function(response){
//       console.log('Testing for Success');

//       if(response.error){
//         alert(response.error);
//       }else {
//         window.location.assign("projects.html")
//     };

//   }
// });

/* ======================================== $Add Project ======================================== */


var projects = function(){

  $.ajax({
    url: 'xhr/get_projects.php',
    type: 'get',
    dataType: 'json',
    success: function(response){
      if(response.error){
        console.log(response.error);
      }else{

        for(var i=0, j=response.projects.length; i < j; i++){
          var result = response.projects[i];

          $(".projects").append(
            '<div style="border:1px solid black">' +
            "Project ID: "+ result.id + "</br>" + 
            "Project Name: "+ result.projectName + "</br>" + 
            "Project Description: "+ result.projectDescription + "</br>" 
            + '<button class="deletebtn">Delete</button>'
            + ' </div><br>'
 
            );

        };

        $('.deletebtn').on('click', function(e){
          console.log('test delete');

          $.ajax({
            url: 'xhr/delete_project.php',
            data: {
              projectID: result.id
            },

            type:'POST',
            dataType: 'json',
            success: function(response){
              console.log('Testing for Success');


              if(response.error){
                alert(response.error);

              }else {
                window.location.assign("projects.html")
              };

            }

          });
        });
/* ======================================== $Log In ======================================== */

// $('#logOut').click(function(e){
//   e.preventDefault;
//   $.get('xhr/logout.php', function(){
//     window.location.assign('index.html')
//   })
// });


})(jQuery)



