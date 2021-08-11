<?php require_once('view/shared/leftSection.php'); ?>
<!DOCTYPE>
<html>
  <head>
    <?php echo file_get_contents('view/shared/head'); ?>
    <link rel="shortcut icon" type="image/x-icon" href="dmaFavicon.ico"/>
    <title>DMA - Works</title>
    <link rel="stylesheet" href="lib/css/shared_style.css" type="text/css">
    <link rel="stylesheet" href="lib/css/works_style.css" type="text/css">
  </head>
  <body>
    <div id="container">
      <div id="wrap">
        
        <?=print_leftSection()?>
        <!-- <div id="content"> -->
        
          
        <div id="content">
          <div id="scrollBar">
            <div id="scrollBarThumb"></div>
          </div>
          <div id="scrollView">
            <?php 
              $projectList = scandir('lib/data/project');
              $dummyprojectList = scandir('lib/data/dummy');
              array_splice($projectList, 0, 2);
              array_splice($dummyprojectList, 0, 2);

              $result;

              for ($i=0;$i<3;$i++) {
                $result = $result.'<div class="columnWrap">'."\n".'<div id="column'.($i + 1).'" class="worksColumn">'."\n";
                for ($j=0;$j<3;$j++) {
                  $cellNum = $i * 3 + $j + 1;

                  if ($cellNum <= count($projectList)) {
                    $des = file_get_contents('lib/data/project/'.$projectList[$cellNum - 1].'/description.json');
                    $thumbnailURL = 'lib/data/project/'.$projectList[$cellNum - 1].'/thumbnail.jpg';
                    $decodeDes = json_decode($des);

                    $cell = '
                      <div id="cell'.$cellNum.'" class="cells">
                        <a href="project.php?id='.$projectList[$cellNum - 1].'">
                          <input id="category" type="hidden" value="'.$decodeDes->category.'">
                          <img src="'.$thumbnailURL.'" alt="">
                          <div class="cellDescription">'.$decodeDes->title.'</div>
                        </a>
                      </div>';

                    $result = $result.$cell;
                  } else {
                    $thumbnailURL = 'lib/data/dummy/'.$dummyprojectList[$cellNum - 1];
                    $cell = '
                      <div id="cell'.$cellNum.'" class="cells preparing">
                        <a href="'.'/'.'" class="blur">
                          <img src="'.$thumbnailURL.'" alt="">
                          <div class="cellDescription">This project is in comming.</div>
                        </a>
                      </div>';

                    $result = $result.$cell;
                  }
                  
                }
                $result = $result."</div>\n</div>";
              }

              echo $result;

              
            ?>
          </div>
        </div>
        <!-- </div> -->
        <?php echo file_get_contents('view/shared/rightSection')?>
      </div>
      
    </div>
    <script src="lib/js/works_script.js" type="text/javascript"></script>
    <script src="lib/js/shared_script.js" type="text/javascript"></script>
    <script src="lib/js/shared_scroll_script.js" type="text/javascript"></script>
    <script src="lib/js/shared_leftSection_script.js" type="text/javascript"></script>
  </body>
</html>