$(document).ready(Ready);

function Ready()
{
	var header = ''+
		'<div class="top-bar">'+
		'	<div class="container">'+
		'		<div class="row">'+
		'			<div class="col-sm-6 col-xs-4">'+
		'			</div>'+
		'			<div class="col-sm-6 col-xs-8">'+
		'			   <div class="social">'+
		'				   <div class="search">'+
		'						<form role="form">'+
		'							<input type="text" class="search-form" autocomplete="off" placeholder="Search">'+
		'							<i class="fa fa-search"></i>'+
		'						</form>'+
		'				   </div>'+
		'			   </div>'+
		'			</div>'+
		'		</div>'+
		'	</div><!--/.container-->'+
		'</div><!--/.top-bar-->'+
		'<nav class="navbar navbar-inverse" role="banner">'+
		'	<div class="container">'+
		'		<div class="col-xs-2">'+
		'			<a href="index.html"><img class="logo" src="./img/logo.svg" alt="logo"></a>'+
		'		</div>'+
		'		<div id="page-title" class="col-sm-8 col-xs-10">'+
		'			<h1>Globo-Gym</h1>'+
		'			<h3>The Gym for all your fitness needs</h3>'+
		'		</div>'+
		'		<div id="register" class="col-sm-2 col-xs-7">'+
		'				<h3>Hello Visitor! <a href="404.html">Register </a><img src="./img/avatar.svg"></h3>'+
		'		</div>'+
		'		<div class="navbar-header">'+
		'			<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">'+
		'				<span class="sr-only">Menu</span>'+
		'				<span class="icon-bar"></span>'+
		'				<span class="icon-bar"></span>'+
		'				<span class="icon-bar"></span>'+
		'			</button>'+
		'		</div>'+
		'		<div class="collapse navbar-collapse navbar-left">'+
		'			<ul class="nav navbar-nav">'+
		'				<li class="dropdown">'+
		'					<a href="#" class="dropdown-toggle" data-toggle="dropdown">Globo-Gym <i class="fa fa-angle-down"></i></a>'+
		'					<ul class="dropdown-menu">'+
		'						<li><a href="404.html">Our Gym</a></li>'+
		'						<li><a href="404.html">Fees &amp; Registration</a></li>'+
		'						<li><a href="404.html">Schedule</a></li>'+
		'						<li><a href="404.html">Our Equipment</a></li>'+
		'						<li><a href="404.html">Testimonials</a></li>'+
		'						<li><a href="where.html">Where are we</a></li>'+
		'					</ul>'+
		'				</li>'+
		'				 <li class="dropdown">'+
		'					<a href="#" class="dropdown-toggle" data-toggle="dropdown">Courses <i class="fa fa-angle-down"></i></a>'+
		'					<ul class="dropdown-menu">'+
		'						<li><a href="404.html">List of All Courses</a></li>'+
		'						<li><a href="allCourseCategories.html">All Course Categories</a></li>'+
		'					</ul>'+
		'				</li>'+
		'				<li><a href="404.html">Instructors</a></li>'+
		'				<li><a href="contactus.html">Contact Us</a></li>'+
		'			</ul>'+
		'		</div>'+
		'	</div><!--/.container-->'+
		'</nav>';


	var footer = ''+
		'<div class="container">'+
			'<div class="row">'+
				'<div class="col-sm-7">'+
					'<p>Check us out on these social sites!</p>'+
					'<ul>'+
						'<li><a href="#"><img src="./img/social/facebook.png" onmouseover="this.src=\'./img/social/facebooka.png\';" onmouseout="this.src=\'./img/social/facebook.png\';" /></a></li>'+
						'<li><a href="#"><img src="./img/social/Instagram.png" onmouseover="this.src=\'./img/social/Instagrama.png\';" onmouseout="this.src=\'./img/social/Instagram.png\';" /></a></li>'+
						'<li><a href="#"><img src="./img/social/Twitter.png" onmouseover="this.src=\'./img/social/Twittera.png\';" onmouseout="this.src=\'./img/social/Twitter.png\';" /></a></li>'+
						'<li><a href="#"><img src="./img/social/youtube.png" onmouseover="this.src=\'./img/social/youtubea.png\';" onmouseout="this.src=\'./img/social/youtube.png\';" /></a></li>'+
						'<li><a href="#"><img src="./img/social/google+.png" onmouseover="this.src=\'./img/social/google+a.png\';" onmouseout="this.src=\'./img/social/google+.png\';" /></a></li>'+
					'</ul>'+
				'</div>'+
				'<div class="col-sm-5">'+
					'<p class="pull-right">24 West Pico Boulevard, Los Angeles, California, USA</p>'+
					'<p class="pull-right"><i class="fa fa-phone-square"></i>  +0123 456 70 90</p>'+
				'</div>'+
			'</div>'+
			'<div class="row">'+
				'<p class="pull-right">&copy; 2015 Freda-Galluzzi-Portolan. All Rights Reserved.</p>'+
			'</div>'+
		'</div>';
	
	$('#header').html(header);
	$('#footer').html(footer);
	$('#footer').addClass('midnight-blue');
};