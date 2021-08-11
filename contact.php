<?php require_once('view/shared/leftSection.php'); ?>

<!DOCTYPE>
<html>
  <head>
    <?php echo file_get_contents('view/shared/head'); ?>
    <title>DMA - Contact</title>
    <link rel="stylesheet" href="lib/css/contact_style.css" type="text/css">
    <link rel="stylesheet" href="lib/css/shared_style.css" type="text/css">
  </head>
  <body>
    <div id="container">
      <div id="wrap">
        <?=print_leftSection()?>
        <div id="content">
          <div id="contactContentCenter">
            <div id="snsBox_main">
              <div id="instaIcon_main" class="snsIcon_main">
                <a href="https://www.instagram.com/leeseoph/" target="_black">
                  <img src="lib/src/icon/instaIcon.svg" alt="">
                  <div class="snsLink_main">@leeseoph</div>
                </a>
              </div>
              <div id="emailIcon_main" class="snsIcon_main">
                <a href="">
                  <img src="lib/src/icon/emailIcon.svg" alt="">
                  <div class="snsLink_main">leeseoph@gmail.com</div>
                </a>
              </div>
            </div>
            <div id="formWrap">
              <form action="email_process.php" method="post">
                <div id="name_email_inputWrap">
                  <div id="nameInputWrap">
                    <input type="text" name="name" id="nameInput" class="textInput" placeholder="name">
                  </div>
                  <div id="emailInputWrap">
                    <input type="text" name="email" id="emailInput" class="textInput" placeholder="e - mail">
                  </div>
                </div>
                <div id="messageInputWrap">
                  <textarea name="content" id="messageInput" class="textInput" placeholder="message"></textarea>
                </div>
                <div id="submitWrap">
                  <input type="submit" id="submitBtn" value="Submit">
                  <img id="loadingBtn" src="lib/src/icon/loading.gif">
                </div>
              </form>
            </div>
          </div>
        </div>
        <?php echo file_get_contents('view/shared/rightSection')?>
      </div>
    </div>
    <script src="lib/js/contact_script.js" type="text/javascript"></script>
    <script src="lib/js/shared_script.js" type="text/javascript"></script>
    <script src="lib/js/shared_leftSection_script.js" type="text/javascript"></script>
  </body>
</html>