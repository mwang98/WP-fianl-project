import React, { Component } from 'react';
import './assets/css/main.css'

const data = {
  user: {
    bookmarks: [{
      id: 1,
      title: 'Machine Learning',
      description: 'ML',
      url: 'https://zh-tw.coursera.org/learn/machine-learning',
      image: 'https://d3njjcbhbojbot.cloudfront.net/web/images/favicons/apple-touch-icon-120x120.png',
    },
    {

    },
    {

    }]
  }
}

 class App extends Component{
   render(){
    return (
      <div className="App">

      <body class="is-preload">

    
        <div id="header">

          <div class="top">

              <nav id="nav">
                <ul>
                  <li><a href="#top" id="top-link"><span class="icon solid fa-home">Intro</span></a></li>
                  <li><a href="#portfolio" id="portfolio-link"><span class="icon solid fa-th">Portfolio</span></a></li>
                  <li><a href="#about" id="about-link"><span class="icon solid fa-user">About Me</span></a></li>
                  <li><a href="#contact" id="contact-link"><span class="icon solid fa-envelope">Contact</span></a></li>
                </ul>
              </nav>

          </div>

          <div class="bottom">

              <ul class="icons">
                <li><a href="#" class="icon brands fa-twitter"><span class="label">Twitter</span></a></li>
                <li><a href="#" class="icon brands fa-facebook-f"><span class="label">Facebook</span></a></li>
                <li><a href="#" class="icon brands fa-github"><span class="label">Github</span></a></li>
                <li><a href="#" class="icon brands fa-dribbble"><span class="label">Dribbble</span></a></li>
                <li><a href="#" class="icon solid fa-envelope"><span class="label">Email</span></a></li>
              </ul>

          </div>

        </div>

        <div id="main">

            <section id="top" class="one dark cover">
              <div class="container">

                <header>
                  <h2 class="alt">Hi! I'm <strong>Prologue</strong>, a <a href="http://html5up.net/license">free</a> responsive<br />
                  site template designed by <a href="http://html5up.net">HTML5 UP</a>.</h2>
                  <p>Ligula scelerisque justo sem accumsan diam quis<br />
                  vitae natoque dictum sollicitudin elementum.</p>
                </header>

                <footer>
                  <a href="#portfolio" class="button scrolly">Magna Aliquam</a>
                </footer>

              </div>
            </section>

            <section id="portfolio" class="two">
              <div class="container">

                <header>
                  <h2>Portfolio</h2>
                </header>

                <p>Vitae natoque dictum etiam semper magnis enim feugiat convallis convallis
                egestas rhoncus ridiculus in quis risus amet curabitur tempor orci penatibus.
                Tellus erat mauris ipsum fermentum etiam vivamus eget. Nunc nibh morbi quis
                fusce hendrerit lacus ridiculus.</p>

                <div class="row">
                  <div class="col-4 col-12-mobile">
                    <article class="item">
                      <a href="#" class="image fit"><img src="images/pic02.jpg" alt="" /></a>
                      <header>
                        <h3>Ipsum Feugiat</h3>
                      </header>
                    </article>
                    <article class="item">
                      <a href="#" class="image fit"><img src="images/pic03.jpg" alt="" /></a>
                      <header>
                        <h3>Rhoncus Semper</h3>
                      </header>
                    </article>
                  </div>
                  <div class="col-4 col-12-mobile">
                    <article class="item">
                      <a href="#" class="image fit"><img src="images/pic04.jpg" alt="" /></a>
                      <header>
                        <h3>Magna Nullam</h3>
                      </header>
                    </article>
                    <article class="item">
                      <a href="#" class="image fit"><img src="images/pic05.jpg" alt="" /></a>
                      <header>
                        <h3>Natoque Vitae</h3>
                      </header>
                    </article>
                  </div>
                  <div class="col-4 col-12-mobile">
                    <article class="item">
                      <a href="#" class="image fit"><img src="images/pic06.jpg" alt="" /></a>
                      <header>
                        <h3>Dolor Penatibus</h3>
                      </header>
                    </article>
                    <article class="item">
                      <a href="#" class="image fit"><img src="images/pic07.jpg" alt="" /></a>
                      <header>
                        <h3>Orci Convallis</h3>
                      </header>
                    </article>
                  </div>
                </div>

              </div>
            </section>

            <section id="about" class="three">
              <div class="container">

                <header>
                  <h2>About Me</h2>
                </header>

                <a href="#" class="image featured"><img src="images/pic08.jpg" alt="" /></a>

                <p>Tincidunt eu elit diam magnis pretium accumsan etiam id urna. Ridiculus
                ultricies curae quis et rhoncus velit. Lobortis elementum aliquet nec vitae
                laoreet eget cubilia quam non etiam odio tincidunt montes. Elementum sem
                parturient nulla quam placerat viverra mauris non cum elit tempus ullamcorper
                dolor. Libero rutrum ut lacinia donec curae mus vel quisque sociis nec
                ornare iaculis.</p>

              </div>
            </section>

            <section id="contact" class="four">
              <div class="container">

                <header>
                  <h2>Contact</h2>
                </header>

                <p>Elementum sem parturient nulla quam placerat viverra
                mauris non cum elit tempus ullamcorper dolor. Libero rutrum ut lacinia
                donec curae mus. Eleifend id porttitor ac ultricies lobortis sem nunc
                orci ridiculus faucibus a consectetur. Porttitor curae mauris urna mi dolor.</p>

                <form method="post" action="#">
                  <div class="row">
                    <div class="col-6 col-12-mobile"><input type="text" name="name" placeholder="Name" /></div>
                    <div class="col-6 col-12-mobile"><input type="text" name="email" placeholder="Email" /></div>
                    <div class="col-12">
                      <textarea name="message" placeholder="Message"></textarea>
                    </div>
                    <div class="col-12">
                      <input type="submit" value="Send Message" />
                    </div>
                  </div>
                </form>

              </div>
            </section>

        </div>

        <div id="footer">

            <ul class="copyright">
              <li>&copy; Untitled. All rights reserved.</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
            </ul>

        </div>

        <script src="assets/js/jquery.min.js"></script>
        <script src="assets/js/jquery.scrolly.min.js"></script>
        <script src="assets/js/jquery.scrollex.min.js"></script>
        <script src="assets/js/browser.min.js"></script>
        <script src="assets/js/breakpoints.min.js"></script>
        <script src="assets/js/util.js"></script>
        <script src="assets/js/main.js"></script>

        </body>
      </div>
    );
   }
}

export default App;
