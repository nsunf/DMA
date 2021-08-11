<?php
  
  

  function print_leftSection() {
    $basename=basename($_SERVER["PHP_SELF"]);
    $a = '<div id="leftSection">
        <div id="header">
          <h1><a href="index.php">DMA</a></h1>
        </div>
        <div id="nav">
          <ul>';
    $b = '</ul>
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
      </div>';

    $arr = array('works.php', 'about.php', 'contact.php');
    $list;
    
    foreach ($arr as $i) {

      $name = str_replace('.php', '', $i);
      if ($basename == $i) {
        $list = $list.'<li class="selected">
          <a href="/'.$i.'">
            <span class="selectedPage"></span>
            '.$name.'
          </a>
        </li>';
      } else {
        $list = $list.'<li>
            <a href="/'.$i.'">
              <span class="hoverE"></span>
              '.$name.'
            </a>
          </li>';
      }
    
    }
    
    return $a.$list.$b;
  }

?>

      
    