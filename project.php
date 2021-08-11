<?php
  $fileList = scandir('lib/data/project/'.basename($_GET['id']));
  array_splice($fileList, 0, 2);
  // var_dump($fileList);
  $des = json_decode(file_get_contents('lib/data/project/'.basename($_GET['id']).'/description.json'));
  $desArr = $des->description;

  $projectList = scandir('lib/data/project');
  array_splice($projectList, 0, 2);
  $projectIndex = array_search(basename($_GET['id']), $projectList);
  $preProject = $projectList[$projectIndex - 1];
  $postProject = $projectList[$projectIndex + 1];


  function print_arrow($direction, $nextProject) {
    $style;
    $id;

    if ($nextProject == null) {
      $style = 'style="visibility: hidden"';
    }

    switch ($direction) {
      case 'left':
        $id = 'leftArrow';
      break;
      case 'right':
        $id = 'rightArrow';
      break;
      default: ;
    }
    
    return '<div id="'.$id.'" class="arrowBtn" '.$style.' onclick="location.href=\'project.php?id='.$nextProject.'\'">
    <img src="lib/src/icon/arrow_right.svg">
    </div>';

  }
?>
<!DOCTYPE>
<html>
  <head>
    <?php echo file_get_contents('view/shared/head'); ?>
    <link rel="shortcut icon" type="image/x-icon" href="dmaFavicon.ico"/>
    <title><?= substr(basename($_GET['id']), 2) ?></title>
    <link href="lib/css/shared_style.css" rel="stylesheet" type="text/css" />
    <link href="lib/css/worksDetail_style.css" rel="stylesheet" type="text/css" />
  </head>
  <body>
  
    <div id="container">
      <div id="wrap">
        <div id="leftSection">
          <div id="header">
            <h1><a href="index.php">DMA</a></h1>
          </div>
          <div id="nav">
            <a href="works.php">
              <img src="lib/src/icon/backIcon.svg" alt="">
            </a>
          </div>
          <div id="descriptionWrap">
            <div id="descriptionList">

              <?php
                for ($i = 0; $i < count($desArr); $i++) {
                  $title = "  ";
                  if ($i == 0) {
                    $title = $des->title;
                  }
                  echo '
                    <div id="des'.($i + 1).'" class="des">
                      <h2>'.$title.'</h2>
                      <div>
                        <p>'.$desArr[$i].'</p>
                      </div>
                    </div>';
                }
              ?>
              
            </div>
          </div>
          <div id="snsBox">
            <div id="instaIcon" class="snsIcon">
                <a href="https://www.instagram.com/leeseoph/" target="_black">
                <img src="lib/src/icon/instaIcon.svg" alt="">
              <div class="snsLink">@leeseoph</div>
              </a>
            </div>
            <div id="emailIcon" class="snsIcon">
              <a href="mailto:leeseoph@gmail.com">
                <img src="lib/src/icon/emailIcon.svg" alt="">
                <div class="snsLink">leeseoph@gmail.com</div>
              </a>
            </div>
          </div>
        </div>

        <div id="content">
        
          <?= print_arrow('left', $preProject) ?>
          <div id="detailFlex">
            <?php
              for ($i = 0; $i < count($fileList); $i++) {
                $file = $fileList[$i];
                if ($file == 'thumbnail.jpg' || $file == 'description.json') {
                  continue;
                }

                $media = 'lib/data/project/'.basename($_GET['id']).'/'.$file;
                $title = "  ";
                if ($i == 0) {
                  $title = $des->title;
                }
                echo '<div class="detailCell" id="detailCell'.($i + 1).'">';
                echo '<div class="des_Mobile">
                      <h2>'.$title.'</h2>
                      <div>
                        <p>'.$desArr[$i].'</p>
                      </div>
                    </div><div class="flexWrap">';

                if (substr($file, -3) == 'mp4') {
                  echo '<video controls width="250">
                      <source src="'.$media.'">
                      Sorry, your browser doesn\'t support embedded videos.
                    </video>
                    
                  ';
                } else if (substr($file, -3) == 'jpg') {
                  echo '<img src="'.$media.'" alt="img">';
                } else if (substr($file, -3) == 'txt') {
                  echo '
                  <iframe src="'.file_get_contents('lib/data/project/'.basename($_GET['id']).'/'.$file).'" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>';
                }

                echo '<div id="duration"><span>'.$des->duration.'</span></div></div></div>';
                
              }
            ?>
            
          </div>
          <?= print_arrow('right', $postProject) ?>
        </div>
        <div id="rightSection">
          <ul>
            <li>D</li>
            <li>M</li>
            <li>A</li>
          </ul>
        </div>
        
      </div>
    </div>
    <script src="lib/js/worksDetail_script.js" type="text/javascript"></script>
    <script src="lib/js/shared_script.js" type="text/javascript"></script>
    <script src="lib/js/shared_leftSection_script.js" type="text/javascript"></script>
  </body>
</html>