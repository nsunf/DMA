<?php require_once('view/shared/leftSection.php'); ?>
<!DOCTYPE>
<html>
  <head>
    <?php echo file_get_contents('view/shared/head'); ?>
    <title>DMA - About</title>
    <link rel="stylesheet" href="lib/css/about_style.css" type="text/css">
    <link rel="stylesheet" href="lib/css/shared_style.css" type="text/css">
  </head>
  <body>
    <div id="container">
      <div id="wrap">
        <?=print_leftSection()?>
        <div id="content">
          <!-- <div id="scrollBar">
            <div id="scrollBarThumb"></div>
          </div> -->
          <div id="scrollView">
            <div id="aboutContentCenter">
              <div id="about_main">
                <!-- <img src="/src/img/about/dog_M.jpg" alt=""> -->
                <div id="aboutDes">
                  <p style="font-size:14px">
                    <?php 
                      echo nl2br(file_get_contents('lib/data/about/description.txt'));
                      $year = date('Y', time());
                      echo '<span style="font-size:11px">© '.$year.' DMA.</span>';
                    ?>
                  </p>
                </div>
              </div>
              <!-- <div id="divider"></div> -->
              <!-- <div id="career">
                <div id="car1" class="cars">
                  <img src="/src/img/about/careerImg/poster1.jpg" alt="">
                  <div><span>dicta earum</span></div>
                </div>
                <div id="car2" class="cars">
                  <img src="/src/img/about/careerImg/poster2.jpg" alt="">
                  <div><span>odio ratione</span></div>
                </div>
                <div id="car3" class="cars">
                  <img src="/src/img/about/careerImg/poster3.jpg" alt="">
                  <div><span>sequi nesciunt</span></div>
                </div>
                <div id="car4" class="cars">
                  <img src="/src/img/about/careerImg/poster4.jpg" alt="">
                  <div><span>vel non</span></div>
                </div>
                <div id="car5" class="cars">
                  <img src="/src/img/about/careerImg/poster5.jpg" alt="">
                  <div><span>enim nisi</span></div>
                </div>
                <div id="car6" class="cars">
                  <img src="/src/img/about/careerImg/poster6.jpg" alt="">
                  <div><span>nemo rem</span></div>
                </div>
              </div> -->
            </div>
          </div>
        </div>
        <?php echo file_get_contents('view/shared/rightSection')?>
      </div>
    </div>
    <script src="lib/js/shared_script.js" type="text/javascript"></script>
    <script src="lib/js/shared_scroll_script.js" type="text/javascript"></script>
    <script src="lib/js/shared_leftSection_script.js" type="text/javascript"></script>
  </body>
</html>