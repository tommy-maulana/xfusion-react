import React, {Component} from 'react';

class Home extends React.Component{
    render(){
        return(
            <div>
                {/* <!-- Start Loading Page --> */}
                {<div class="preloader">
                    <div class="item-list">
                        <div class="item"></div>
                        <div class="item item2"></div>
                    </div>
                </div>}
                {/* <!-- End Loading Page -->

                <!-- Header Section Start --> */}
                        <header class="main-header" >
                        <div class="main_navbar">	
                        {/* <!-- MAIN NAVBAR --> */}
                            <nav class="navbar navbar-expand-lg  navbar-dark">
                                <div class="container">
                                    <a class="navbar-brand logo-sticky" href="index.html">X-Fusion</a>
                                    <button class="navbar-toggler collapsed" data-toggle="collapse" data-target="#navbarNav" aria-expanded="false"><span class="fa fa-bars"></span></button>
                                    <div class="collapse navbar-collapse" id="navbarNav">
                                        <ul class="navbar-nav ml-auto" id="nav">
                                            <li class="nav-item">
                                                <a class="nav-link js-scroll-trigger" href="#header">Home&nbsp;&nbsp;</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link js-scroll-trigger" href="#about">About&nbsp;&nbsp;</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link js-scroll-trigger" href="#Services">Services&nbsp;&nbsp;</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link js-scroll-trigger" href="#how-it-works">How It Works&nbsp;&nbsp;</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link js-scroll-trigger" href="#team">Team&nbsp;&nbsp;</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link js-scroll-trigger" href="#pricing">Pricing&nbsp;&nbsp;</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link js-scroll-trigger" href="#blog">Blog&nbsp;&nbsp;</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link js-scroll-trigger" href="#contact">Contact</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </header>
                    {/* <!-- End of Header Section -->

                    <!-- *****Main banner section***** --> */}
                    <section class="main_banner_area text-white" id="header">
                        <div class="overlay"></div>
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="info text-center">
                                        <h1 class="display-4 bold">Business Mean Marketing</h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
                                        <button type="submit" class="btn">Get Started</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                
                
                {/* <!-- Content Section Start --> */}
                <section id="about">
                    {/* <!-- About Us Section Start --> */}
                    <div class="xf-about-us">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-6 col-sm-12 col-xs-12">
                                        <div class="xf-about-content">
                                            <h4>Creative,Modern & Unique <br />Marketing Agency.</h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis</p>
                                            <a href="#">more about us</a>
                                        </div>
                                </div>
                                <div class="col-md-6 col-sm-12 col-xs-12">
                                    <div class="about-image">
                                        <img src="assets/images/about/about.png" alt="about image" class="img-fluid" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- End of About Us Section -->
                    
                    <!-- Process Section Start --> */}
                    <div class="process">
                        <div class="container">
                            <div class="row">
                                {/* <!-- Single Process 1 Start --> */}
                                <div class="col-md-4 col-sm-4 col-xs-12">
                                    <div class="xf-single-process">
                                        <span>01.</span>
                                        <h5>Planning & Strategy</h5>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo conseq eloverty.</p>
                                    </div>
                                </div> {/* <!-- End of Single Process 1 --> */}
                                {/* <!-- Single Process 2 Start --> */}
                                <div class="col-md-4 col-sm-4 col-xs-12">
                                    <div class="xf-single-process">
                                        <span>02.</span>
                                        <h5>Design & Develope</h5>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo conseq eloverty.</p>
                                    </div>
                                </div> {/* <!-- End of Single Process 2 --> */}
                                {/* <!-- Single Process 3 Start --> */}
                                <div class="col-md-4 col-sm-4 col-xs-12">
                                    <div class="xf-single-process">
                                        <span>03.</span>
                                        <h5>Test & Deliver</h5>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo conseq eloverty.</p>
                                    </div>
                                </div> {/* <!-- End of Single Process 3 --> */}
                            </div>
                        </div>
                    </div>
                    {/* <!-- End of Process Section -->
                    
                    <!-- Feature Section Start --> */}
                    <div class="feature">
                        {/* <!-- Feature Container Start --> */}
                        <div class="container">
                            {/* <!-- Section Title Row Start --> */}
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="section-title">
                                        <span>why choose x-fusion</span>
                                        <h4>We provide marketing services</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt esse cillum.</p>
                                        <div class="separator"></div>
                                    </div>
                                </div>
                            </div> {/* <!-- End of Section Title Row --> */}
                            {/* <!-- Feature Group Row Start --> */}
                            <div class="row">
                                   {/*  <!-- Single Feature Column Start --> */}
                                    <div class="col-md-3 col-sm-6 col-xs-12">
                                        {/* <!-- Single Feature Start --> */}
                                        <div class="xf-single-feature text-center">
                                            <i class="ti-desktop"></i>
                                            <h5>full marketing solutions</h5>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis exercitationem quisquam.</p>
                                        </div> {/* <!-- End of Single Feature --> */}
                                    </div> {/* <!-- End of Single Feature Column --> */}
                                    <div class="col-md-3 col-sm-6 col-xs-12">
                                        {/* <!-- Single Feature Start --> */}
                                        <div class="xf-single-feature text-center">
                                            <i class="ti-paint-bucket"></i>
                                            <h5>unique design</h5>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis exercitationem quisquam.</p>
                                        </div> {/* <!-- End of Single Feature --> */}
                                    </div> {/* <!-- End of Single Feature Column --> */}
                                    <div class="col-md-3 col-sm-6 col-xs-12">
                                        {/* <!-- Single Feature Start --> */}
                                        <div class="xf-single-feature text-center">
                                            <i class="ti-layers"></i>
                                            <h5>different layout</h5>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis exercitationem quisquam.</p>
                                        </div> {/* <!-- End of Single Feature --> */}
                                    </div> {/* <!-- End of Single Feature Column --> */}
                                    <div class="col-md-3 col-sm-6 col-xs-12">
                                        {/* <!-- Single Feature Start --> */}
                                        <div class="xf-single-feature text-center">
                                            <i class="ti-ruler-pencil"></i>
                                            <h5>perfection pixel</h5>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis exercitationem quisquam.</p>
                                        </div> {/* <!-- End of Single Feature --> */}
                                    </div> {/* <!-- End of Single Feature Column --> */}
                            </div> {/* <!-- End of Feature Group Row --> */}
                        </div> {/* <!-- End of Feature Container --> */}
                    </div> {/* <!-- End of Feature Section --> */}
                    
                    {/* <!-- Video-bg Section Start --> */}
                    <div class="video-bg parallax" id="video-bg">
                        <div class="overlay"></div>
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-md-6">
                                    <div class="video-content text-center">
                                        <a href="https://www.youtube.com/watch?v=nrJtHemSPW4" class="popup-video"><i class="ti-control-play"></i></a>
                                        <h4>High Quality Business Marketing Startup</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> {/* <!-- End of Video-bg Section -->
                    
                    <!-- Services Section Start --> */}
                    <div class="services"  id="Services">
                        {/* <!-- Services Container Start --> */}
                        <div class="container">
                            {/* <!-- Section Title Row Start --> */}
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="section-title">
                                        <span>what i do</span>
                                        <h4>our services</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt esse cillum.</p>
                                        <div class="separator"></div>
                                    </div>
                                </div>
                            </div> {/* <!-- End of Section Title Row -->
                            <!-- Services Group Row Start --> */}
                            <div class="row">
                                    {/* <!-- Single Service Column Start --> */}
                                    <div class="col-md-4 col-sm-6 col-xs-12">
                                        {/* <!-- Single Service Start --> */}
                                        <div class="single-service text-center">
                                            <div class="icon">
                                                <i class="ti-tablet"></i>
                                            </div>
                                            <h5>web design</h5>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis lorem text eius, exercitationem quisquam.</p>
                                        </div> {/* <!-- End of Single Service --> */}
                                    </div> {/* <!-- End of Single Service Column -->
                                    <!-- Single Service Column Start --> */}
                                    <div class="col-md-4 col-sm-6 col-xs-12">
                                        {/* <!-- Single Service Start --> */}
                                        <div class="single-service text-center">
                                            <div class="icon">
                                                <i class="ti-write"></i>
                                            </div>
                                            <h5>branding</h5>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis lorem text eius, exercitationem quisquam.</p>
                                        </div> {/* <!-- End of Single Service --> */}
                                    </div> {/* <!-- End of Single Service Column -->
                                    <!-- Single Service Column Start --> */}
                                    <div class="col-md-4 col-sm-6 col-xs-12">
                                        {/* <!-- Single Service Start --> */}
                                        <div class="single-service text-center">
                                            <div class="icon">
                                                <i class="ti-desktop"></i>
                                            </div>
                                            <h5>development</h5>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis lorem text eius, exercitationem quisquam.</p>
                                        </div> {/* <!-- End of Single Service --> */}
                                    </div> {/* <!-- End of Single Service Column -->
                                    <!-- Single Service Column Start --> */}
                                    <div class="col-md-4 col-sm-6 col-xs-12">
                                        {/* <!-- Single Service Start --> */}
                                        <div class="single-service text-center">
                                            <div class="icon">
                                                <i class="ti-stats-up"></i>
                                            </div>
                                            <h5>info graphics</h5>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis lorem text eius, exercitationem quisquam.</p>
                                        </div> {/* <!-- End of Single Service --> */}
                                    </div> {/* <!-- End of Single Service Column -->
                                    <!-- Single Service Column Start --> */}
                                    <div class="col-md-4 col-sm-6 col-xs-12">
                                        {/* <!-- Single Service Start --> */}
                                        <div class="single-service text-center">
                                            <div class="icon">
                                                <i class="ti-gallery"></i>
                                            </div>
                                            <h5>photography</h5>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis lorem text eius, exercitationem quisquam.</p>
                                        </div> {/* <!-- End of Single Service --> */}
                                    </div> {/* <!-- End of Single Service Column --> */}
                                    {/* <!-- Single Service Column Start --> */}
                                    <div class="col-md-4 col-sm-6 col-xs-12">
                                        {/* <!-- Single Service Start --> */}
                                        <div class="single-service text-center">
                                            <div class="icon">
                                                <i class="ti-bolt"></i>
                                            </div>
                                            <h5>animation</h5>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis lorem text eius, exercitationem quisquam.</p>
                                        </div> {/* <!-- End of Single Service --> */}
                                    </div> {/* <!-- End of Single Service Column --> */}
                            </div> {/* <!-- End of Services Group Row --> */}
                        </div> {/* <!-- End of Services Container --> */}
                    </div> {/* <!-- End of Services Section --> */}

                    {/* <!-- Start how it works --> */}
                
                <section id="how-it-works" class="section">
                            <div class="container">
                                <div class="row justify-content-center text-center wow fadeInUp">
                                    <div class="col-lg-12 fun-fact-text text-center ">
                                        <div class="section-title">
                                            <span>Way To Success</span>
                                            <h4>How It Works</h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt esse cillum.</p>
                                            <div class="separator"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="timeline-page">
                                    <div class="timeline-item">
                                        <div class="row">
                                            <div class="col-lg-6">
                                                <div class="duration date-label-left wow fadeInLeft">
                                                <img src="assets/images/roadmap/how-it-1.png" alt="" class="img-fluid" />
                                                </div>
                                            </div>
                                            <div class="col-lg-6">
                                                <div class="works works-description-right wow fadeInRight">
                                                    <h4>Tell us your idea</h4>
                                                    <p class="timeline-subtitle">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="timeline-item">
                                        <div class="row">
                                            <div class="col-lg-6">
                                                <div class="works works-description-left wow fadeInLeft">
                                                    <h4>Debut with users</h4>
                                                    <p class="timeline-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lacinia magna vel molestie faucibus. Donec auctor et urnaLorem ipsum dolor sit amet.</p>
                                                </div>
                                            </div>
                                            <div class="col-lg-6">
                                                <div class="duration duration-right wow fadeInRight ">
                                                <img src="assets/images/roadmap/how-it-2.png" alt="" class="img-fluid" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="timeline-item">
                                        <div class="row">
                                            <div class="col-lg-6">
                                                <div class="duration date-label-left wow fadeInLeft">
                                                <img src="assets/images/roadmap/how-it-3.png" alt="" class="img-fluid" />
                                                </div>
                                            </div>
                                            <div class="col-lg-6">
                                                <div class="works works-description-right wow fadeInRight">
                                                    <h4>Research and Develop</h4>
                                                    <p class="timeline-subtitle">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                {/* <!-- end how it works -->

                <!-- Portfolio --> */}
                <section class="section-padding">
                    <div class="container">

                    <div class="row justify-content-center text-center wow fadeInUp">
                        <div class="col-lg-12 fun-fact-text text-center ">
                            <div class="section-title">
                                <span>What We Do</span>
                                <h4>Our Portfolio</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt esse cillum.</p>
                                <div class="separator"></div>
                            </div>
                        </div>
                        <div class="col-12">
                            <ul id="filters" class="clearfix">
                                <li><span class="filter active" data-filter=".app, .card, .logo, .web">All</span></li>
                                <li><span class="filter " data-filter=".app">App</span></li>
                                <li><span class="filter" data-filter=".card">Card</span></li>
                                <li><span class="filter" data-filter=".logo">Logo</span></li>
                                <li><span class="filter" data-filter=".web">Web</span></li>
                            </ul>
                        </div>
                    </div>

                    

                    <div id="portfoliolist1">
                        
                        <div class="portfolio1 logo" data-cat="logo">
                            <div class="portfolio-wrapper1">             
                                <img src="assets/images/portfolios/logo/5.jpg" alt="" />
                                <div class="label">
                                    <div class="label-text">
                                        <a class="text-title">Bird Document</a>
                                        <span class="text-category">Logo</span>
                                    </div>
                                    <div class="label-bg"></div>
                                </div>
                            </div>
                        </div>              

                        <div class="portfolio1 app" data-cat="app">
                            <div class="portfolio-wrapper1">         
                                <img src="assets/images/portfolios/app/1.jpg" alt="" />
                                <div class="label">
                                    <div class="label-text">
                                        <a class="text-title">Visual Infography</a>
                                        <span class="text-category">APP</span>
                                    </div>
                                    <div class="label-bg"></div>
                                </div>
                            </div>
                        </div>      
                        
                        <div class="portfolio1 web" data-cat="web">
                            <div class="portfolio-wrapper1">                     
                                <img src="assets/images/portfolios/web/4.jpg" alt="" />
                                <div class="label">
                                    <div class="label-text">
                                        <a class="text-title">Sonor's Design</a>
                                        <span class="text-category">Web design</span>
                                    </div>
                                    <div class="label-bg"></div>
                                </div>
                            </div>
                        </div>                   
                        
                        <div class="portfolio1 card" data-cat="card">
                            <div class="portfolio-wrapper1">         
                                <img src="assets/images/portfolios/card/1.jpg" alt="" />
                                <div class="label">
                                    <div class="label-text">
                                        <a class="text-title">Typography Company</a>
                                        <span class="text-category">Business card</span>
                                    </div>
                                    <div class="label-bg"></div>
                                </div>
                            </div>
                        </div>  
                                    
                        <div class="portfolio1 app" data-cat="app">
                            <div class="portfolio-wrapper1">
                                <img src="assets/images/portfolios/app/3.jpg" alt="" />
                                <div class="label">
                                    <div class="label-text">
                                        <a class="text-title">Weatherette</a>
                                        <span class="text-category">APP</span>
                                    </div>
                                    <div class="label-bg"></div>
                                </div>
                            </div>
                        </div>          
                        
                        <div class="portfolio1 card" data-cat="card">
                            <div class="portfolio-wrapper1">         
                                <img src="assets/images/portfolios/card/4.jpg" alt="" />
                                <div class="label">
                                    <div class="label-text">
                                        <a class="text-title">BMF</a>
                                        <span class="text-category">Business card</span>
                                    </div>
                                    <div class="label-bg"></div>
                                </div>
                            </div>
                        </div>  

                        {/* <!-- mix it up js --> */}
                    
                                
                        </div>                          
                        
                    </div>
                    
                    
                </section>

                {/* <!-- end portfolio -->

                
                    <!-- Fun-facts Section Start --> */}
                    <section id="fun-facts" class="fun-facts text-center parallax">
                        <div class="overlay"></div>
                        <div class="container">
                            <div class="row">
                                {/* <!-- Fact No. ( 1 ) --> */}
                                <div class="fact col-md-3 col-sm-6 col-xs-12 text-center">
                                    <i class="ti-pencil-alt"></i>
                                    <span class="timer" data-from="0" data-to="27" data-speed="3000" data-refresh-interval="50">124</span>
                                    <p>project complete</p>
                                </div>
                                {/* <!-- Fact No. ( 2 ) --> */}
                                <div class="fact col-md-3 col-sm-6  col-xs-12 text-center">
                                    <i class="ti-timer"></i>
                                    <span class="timer" data-from="0" data-to="17329" data-speed="3000" data-refresh-interval="50">9348</span>
                                    <p>working hour</p>                        
                                </div>
                                {/* <!-- Fact No. ( 3 ) --> */}
                                <div class="fact col-md-3 col-sm-6 col-xs-12 text-center">
                                    <i class="ti-face-smile"></i>
                                    <span class="timer" data-from="0" data-to="17" data-speed="3000" data-refresh-interval="50">93</span>
                                    <p>happy clients</p>                        
                                </div>
                                {/* <!-- Fact No. ( 4 ) --> */}
                                <div class="fact col-md-3 col-sm-6 col-xs-12 text-center">
                                    <i class="ti-cup"></i>
                                    <span class="timer" data-from="0" data-to="47" data-speed="3000" data-refresh-interval="50">82</span>
                                    <p>award winning</p>                        
                                </div>
                            </div>
                        </div> {/* <!-- End of Container --> */}
                    </section> {/* <!-- End of Fun Facts Section --> */}
                    
                    
                    {/* <!-- Team Section Start --> */}
                    <div class="team" id="team">
                        {/* <!-- Team Container Start --> */}
                        <div class="container">
                            {/* <!-- Section Title Row Start --> */}
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="section-title">
                                        <span>creative avengers</span>
                                        <h4>professional team</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt esse cillum.</p>
                                        <div class="separator"></div>
                                    </div>
                                </div>
                            </div> {/* <!-- End of Section Title Row -->
                            <!-- Price Items Row Start --> */}
                            <div class="row">
                                   {/*  <!-- Single Team Column Start --> */}
                                    <div class="col-md-3">
                                        {/* <!-- Single Team 1 Start --> */}
                                        <div class="single-team text-center">
                                            <img src="assets/images/team/team1.jpg" class="img-fluid p-rel" alt="team image" />
                                            <div class="overlay">
                                                <div class="text">
                                                    <h5>Aymaan zafir</h5>
                                                    <p>developer</p>
                                                </div>
                                            </div>
                                        </div> {/* <!-- End of Single Team 1 --> */}
                                    </div> {/* <!-- End of Single Team Column --> */}
                                    {/* <!-- Single Team Column Start --> */}
                                    <div class="col-md-3">
                                        {/* <!-- Single Team 1 Start --> */}
                                        <div class="single-team text-center">
                                            <img src="assets/images/team/team2.jpg" class="img-fluid p-rel" alt="team image" />
                                            <div class="overlay">
                                                <div class="text">
                                                    <h5>Nafisa farn</h5>
                                                    <p>seo expert</p>
                                                </div>
                                            </div>
                                        </div> {/* <!-- End of Single Team 1 --> */}
                                    </div> {/* <!-- End of Single Team Column -->
                                    <!-- Single Team Column Start --> */}
                                    <div class="col-md-3">
                                        {/* <!-- Single Team 1 Start --> */}
                                        <div class="single-team text-center">
                                            <img src="assets/images/team/team3.jpg" class="img-fluid p-rel" alt="team image" />
                                            <div class="overlay">
                                                <div class="text">
                                                    <h5>Rufaida tasn</h5>
                                                    <p>designer</p>
                                                </div>
                                            </div>
                                        </div> {/* <!-- End of Single Team 1 --> */}
                                    </div> {/* <!-- End of Single Team Column --> */}
                                    {/* <!-- Single Team Column Start --> */}
                                    <div class="col-md-3">
                                        {/* <!-- Single Team 1 Start --> */}
                                        <div class="single-team text-center">
                                            <img src="assets/images/team/team4.jpg" class="img-fluid p-rel" alt="team image" />
                                            <div class="overlay">
                                                <div class="text">
                                                    <h5>Mahmud</h5>
                                                    <p>photographer</p>
                                                </div>
                                            </div>
                                        </div> {/* <!-- End of Single Team 1 --> */}
                                    </div> {/* <!-- End of Single Team Column --> */}
                            </div> {/* <!-- End of Team Group Row --> */}
                        </div> {/* <!-- End of Team Container --> */}
                    </div> {/* <!-- End of Team Section --> */}
                    
                    {/* <!-- Price Section Start --> */}
                    <div class="price" id="pricing">
                        {/* <!-- Price Container Start --> */}
                        <div class="container">
                            {/* <!-- Section Title Row Start --> */}
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="section-title">
                                        <span>our packages</span>
                                        <h4>pricing plan</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt esse cillum.</p>
                                        <div class="separator"></div>
                                    </div>
                                </div>
                            </div> {/* <!-- End of Section Title Row -->
                            <!-- Price Items Row Start --> */}
                            <div class="row">
                                    {/* <!-- Single Price Column Start --> */}
                                    <div class="col-md-4 col-sm-6 col-xs-12">
                                        {/* <!-- Single Price 1 Start --> */}
                                        <div class="single-price text-center">
                                            <div class="price-content">
                                                <h4>20$</h4>
                                                <p>STARTER</p>
                                                <ul>
                                                    <li>40+ Total Pages</li>
                                                    <li>10+ Home Pages</li>
                                                    <li>Responsive Design</li>
                                                    <li>Retina Ready</li>
                                                    <li>Pixel Perfect Design</li>
                                                    <li>Dedicated Support</li>
                                                </ul>
                                                <a href="#">purchase</a>
                                            </div>
                                        </div> {/* <!-- End of Single Price 1 --> */}
                                    </div> {/* <!-- End of Single Price Column -->
                                    <!-- Single Price Column Start --> */}
                                    <div class="col-md-4 col-sm-6 col-xs-12">
                                        {/* <!-- Single Price 1 Start --> */}
                                        <div class="single-price text-center">
                                            <div class="price-content">
                                                <h4>40$</h4>
                                                <p>BASIC</p>
                                                <ul>
                                                    <li>120+ Total Pages</li>
                                                    <li>Multipurpose Template</li>
                                                    <li>Responsive Design</li>
                                                    <li>Retina Ready</li>
                                                    <li>Revolution Slider</li>
                                                    <li>Dedicated Support</li>
                                                </ul>
                                                <a href="#">purchase</a>
                                            </div>
                                        </div> {/* <!-- End of Single Price 1 --> */}
                                    </div> {/* <!-- End of Single Price Column -->
                                    <!-- Single Price Column Start --> */}
                                    <div class="col-md-4 col-sm-6 col-xs-12">
                                        {/* <!-- Single Price 1 Start --> */}
                                        <div class="single-price text-center">
                                            <div class="price-content">
                                                <h4>90$</h4>
                                                <p>PREMIEUM</p>
                                                <ul>
                                                    <li>Redux Framework</li>
                                                    <li>Contact Form 7</li>
                                                    <li>Woocommerce Support</li>
                                                    <li>Retina Ready</li>
                                                    <li>Revolution Slider</li>
                                                    <li>Dedicated Support</li>
                                                </ul>
                                                <a href="#">purchase</a>
                                            </div>
                                        </div> {/* <!-- End of Single Price 1 --> */}
                                    </div> {/* <!-- End of Single Price Column --> */}
                            </div> {/* <!-- End of Price Items Row --> */}
                        </div> {/* <!-- End of Price Container --> */}
                    </div> {/* <!-- End of Price Section -->
                    
                    <!-- Blog Section Start --> */}
                    <div class="blog" id="blog">
                        {/* <!-- Portfolio Container Start --> */}
                        <div class="container">
                            {/* <!-- Section Title Row Start --> */}
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="section-title">
                                        <span>blog post</span>
                                        <h4>latest news</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt esse cillum.</p>
                                        <div class="separator"></div>
                                    </div>
                                </div>
                            </div> {/* <!-- End of Section Title Row -->
                            <!-- Blog Items Row Start --> */}
                            <div class="row">
                                    {/* <!-- Single Blog Column Start --> */}
                                    <div class="col-md-4 col-sm-6 col-xs-12">
                                        {/* <!-- Single Blog 1 Start --> */}
                                        <div class="single-blog">
                                            <div class="img">
                                                <img src="assets/images/blog/blog_1.jpg" alt="blog image" class="img-responsive" />
                                            </div>
                                            <div class="blog-content">
                                                <a class="author">by: shahina islam</a><a class="date">03 aug 2018</a><a class="category">John</a>
                                                <a href="#"><h4>bootstrap admin dashboard tutorial</h4></a>
                                                <p>Lorem ipsum dolor sit amet, conctetur adicing elit, sed do eiusmod tempor lorem text incididunt labore et dolore magna aqua.</p>
                                            </div>
                                        </div> {/* <!-- End of Single Blog 1 --> */}
                                    </div> {/* <!-- End of Single Blog Column -->
                                    <!-- Single Blog Column Start --> */}
                                    <div class="col-md-4 col-sm-6 col-xs-12">
                                        {/* <!-- Single Blog 1 Start --> */}
                                        <div class="single-blog">
                                            <div class="img">
                                                <img src="assets/images/blog/blog_2.jpg" alt="blog image" class="img-responsive" />
                                            </div>
                                            <div class="blog-content">
                                                <a class="author">by: mahadi hasan</a><a class="date">27 jul 2018</a><a class="category">John</a>
                                                <a href="#"><h4>magento theme development tutorial</h4></a>
                                                <p>Lorem ipsum dolor sit amet, conctetur adicing elit, sed do eiusmod tempor lorem text incididunt labore et dolore magna aqua.</p>
                                            </div>
                                        </div> {/* <!-- End of Single Blog 1 --> */}
                                    </div> {/* <!-- End of Single Blog Column -->
                                    <!-- Single Blog Column Start --> */}
                                    <div class="col-md-4 col-sm-6 col-xs-12">
                                        {/* <!-- Single Blog 1 Start --> */}
                                        <div class="single-blog">
                                            <div class="img">
                                                <img src="assets/images/blog/blog_3.jpg" alt="blog image" class="img-responsive" />
                                            </div>
                                            <div class="blog-content">
                                                <a class="author">by: al sharif</a><a class="date">13 jul 2018</a><a class="category">John</a>
                                                <a href="#"><h4>wordpress development tutorial</h4></a>
                                                <p>Lorem ipsum dolor sit amet, conctetur adicing elit, sed do eiusmod tempor lorem text incididunt labore et dolore magna aqua.</p>
                                            </div>
                                        </div> {/* <!-- End of Single Blog 1 --> */}
                                    </div> {/* <!-- End of Single Blog Column --> */}
                            </div> {/* <!-- End of Blog Items Row --> */}
                        </div> {/* <!-- End of Blog Container --> */}
                    </div> {/* <!-- End of Blog Section -->
                    
                    <!-- Client Section Start --> */}
                    <div class="client parallax" id="client">
                        <div class="client-overly"></div>
                        <div class="container">
                            <div class="row">
                                {/* <!-- Client Group Start --> */}
                                <div class="col-md-12">
                                    {/* <!-- Client Group Column Start --> */}
                                    <div class="client-group owl-pagination">
                                        {/* <!-- Single Client 1 Start --> */}
                                        <div class="single-client text-center">
                                            <i class="fa fa-quote-right"></i>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero quibusdam facere <br /> molestias aperiam libero, dignissimos consectetur, asper nostrum.</p>
                                            <img src="assets/images/client/client_1.jpg" alt="client image" />
                                            <h4>hina islam</h4>
                                            <span>ceo, themezaa</span>
                                        </div> {/* <!-- End of Single Client 1 -->
                                        <!-- Single Client 1 Start --> */}
                                        <div class="single-client text-center">
                                            <i class="fa fa-quote-right"></i>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero quibusdam facere <br /> molestias aperiam libero, dignissimos consectetur, asper nostrum.</p>
                                            <img src="assets/images/client/client_2.jpg" alt="client image" />
                                            <h4>sad farhan</h4>
                                            <span>ceo, x-fusion</span>
                                        </div> {/* <!-- End of Single Client 1 -->
                                        <!-- Single Client 1 Start --> */}
                                        <div class="single-client text-center">
                                            <i class="fa fa-quote-right"></i>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero quibusdam facere <br /> molestias aperiam libero, dignissimos consectetur, asper nostrum.</p>
                                            <img src="assets/images/client/client_3.jpg" alt="client image" />
                                            <h4>sam khan</h4>
                                            <span>ceo, hastech</span>
                                        </div> {/* <!-- End of Single Client 1 --> */}
                                    </div> {/* <!-- End of Client Group Column --> */}
                                </div> {/* <!-- End of Client Group --> */}
                            </div> {/* <!-- End of Row --> */}
                        </div> {/* <!-- End of Container --> */}
                    </div>
                    {/* <!-- End of Client Section -->
                    
                    <!-- Contact Section Start --> */}
                    <div class="contact" id="contact">
                        {/* <!-- Contact Container Start --> */}
                        <div class="container">
                            {/* <!-- Section Title Row Start --> */}
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="section-title">
                                        <span>get in touch</span>
                                        <h4>contact us</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt esse cillum.</p>
                                        <div class="separator"></div>
                                    </div>
                                </div>
                            </div> {/* <!-- End of Section Title Row -->
                            <!-- Contact Group Row Start --> */}
                            <div class="row">
                                    {/* <!-- Address Column Start --> */}
                                    <div class="col-md-5 col-sm-6 col-xs-12">
                                        {/* <!-- Address Group Start --> */}
                                        <div class="address-group">
                                            <h4>feel free to contact with us !</h4>
                                            {/* <!-- Start Address --> */}
                                            <div class="address">
                                                <p><i class="fa fa-phone"></i> +880 1680 597617</p>
                                                <p><i class="fa fa-envelope"></i> contact@yourdomain.net</p>
                                                <p><i class="fa fa-map-marker"></i> 327 Collins Street Melbourne, Australia</p>
                                                <p><i class="fa fa-globe"></i> www.yourdomain.net</p>
                                            </div> {/* <!-- End of Address --> */}
                                        </div> {/* <!-- End of Address Group --> */}
                                    </div> {/* <!-- End of Address Column -->
                                    <!-- Contact Widgets Column Start --> */}
                                    <div class="col-md-7 col-sm-6 col-xs-12">
                                        {/* <!-- Contact Form Start --> */}
                                        <div class="form">
                                            <h4>we are available for freelance</h4>
                                            {/* <!-- Start Contact Form --> */}
                                            <div class="contact-form">
                                                <form action="#" method="post">
                                                    <ul>
                                                        <li>
                                                            <input type="text" placeholder="full name" />
                                                        </li>
                                                        <li>
                                                            <input type="email" placeholder="email" />
                                                        </li>
                                                        <li>
                                                            <textarea cols="20" rows="5" placeholder="message ..."></textarea>
                                                        </li>
                                                        <li>
                                                            <input type="submit" value="send message" />
                                                        </li>
                                                    </ul>
                                                </form>
                                            </div> {/* <!-- End of Contact Form --> */}
                                        </div> {/* <!-- End of Contact Form --> */}
                                    </div> {/* <!-- End of Contact Widgets Column --> */}
                            </div> {/* <!-- End of Contact Group Row --> */}
                        </div> {/* <!-- End of Contact Container --> */}
                    </div> {/* <!-- End of Contact Section --> */}
                </section>
                {/* <!-- End of Content Section -->
                
                <!-- Footer Section Start --> */}
                <footer id="footer">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12 text-center">
                                <div class="footer-logo">
                                    <h4><span>X</span>-Fusion</h4>
                                    <p class="text-white">Lorem ipsum dolor sit consectetur amet</p>
                                </div>
                            </div>
                        </div>
                        <div class="row justify-content-center">
                            <div class="col-md-4">
                                <div class="footer_subscribe">
                                    <div class="input-group">
                                        <input type="text" class="form-control" placeholder="subscribe now with email" />
                                        <span class="input-group-btn">
                                            <button type="submit"><i class="fa fa-paper-plane"></i></button>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row justify-content-center">
                            <div class="col-md-4 text-center">
                                <div class="social-link">
                                    <a href="#"><i class="fa fa-facebook"></i></a>
                                    <a href="#"><i class="fa fa-twitter"></i></a>
                                    <a href="#"><i class="fa fa-linkedin"></i></a>
                                    <a href="#"><i class="fa fa-google-plus"></i></a>
                                    <a href="#"><i class="fa fa-tumblr"></i></a>
                                </div> {/* <!-- End of Social Link --> */}
                            </div>
                        </div>
                    </div> {/* <!-- End of Container --> */}
                </footer>
                {/* <!-- End of Footer Section --> */}
                <div class="copyright1">
                    <div class="container">
                        <div class="row"> 
                            <div class="col-md-6 col-12">
                                <div class="bottom_footer_info">
                                    <p>Copyright &copy; 2018 X-Fusion, All Rights Reserved</p>
                                </div>
                            </div>
                            <div class="col-md-6 col-12">
                                <div class="bottom_footer_logo text-right">
                                    <ul class="list-inline">
                                        <li class="list-inline-item"><a href="#" class="text-white">Privacy&nbsp;&nbsp;&nbsp; |</a></li>
                                        <li class="list-inline-item"><a href="#" class="text-white">Terms&nbsp;&nbsp;&nbsp; |</a></li>
                                        <li class="list-inline-item"><a href="#" class="text-white">Contact Us</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a href="#header" class="back-to-top js-scroll-trigger">
                <i class="fa fa-long-arrow-up"></i>
                </a>
            </div>
        )
    }
}

export default Home