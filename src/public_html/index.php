<!DOCTYPE html>
<html lang="en" class="h-100">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="theme-color" content="#2196f3">
    <link rel="icon" href="/img/headshot_180x180.png?<?= time() ?>">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.2/css/all.min.css">
    <link rel="stylesheet" href="/css/style.min.css">
    <title>Oliver Booth</title>
</head>

<body class="h-100">
    <div class="bg-ramp"></div>
    <div class="row h-100" style="margin-left:0;margin-right:0;">
        <div class="col-sm-12 my-auto">
            <div class="container">
                <div id="profile-card" class="card w-512 mg-0-auto z-depth-3" data-tilt data-tilt-max="2" data-tilt-speed="400" data-tilt-perspective="500">
                    <div class="card-body text-center">
                        <p><img id="profile-headshot" src="/img/headshot_180x180.png" alt="It's me." class="z-depth-2" width="180"></p>
                        
                        <hr>

                        <h5 class="card-title">Oliver Booth</h5>

                        <div class="card-text">
                            <p class="bio-line">Coffee enthusiast with a love for all things tech. Tech enthusiast with a love for all things coffee.</p>
                        </div>

                        <p>
                            <a href="https://github.com/oliverbooth" title="GitHub" class="btn btn-outline-dark"><i class="fab fa-github"></i></a>
                            <a href="https://oliverbooth.itch.io/" title="Itch.io" class="btn btn-outline-danger"><i class="fab fa-itch-io"></i></a>
                            <a href="https://play.google.com/store/apps/developer?id=Oliver+Booth" title="Google Play" class="btn btn-outline-success"><i class="fab fa-google-play"></i></a>
                            <a href="https://twitter.com/oliverlukebooth" title="Twitter" class="btn btn-outline-info"><i class="fab fa-twitter"></i></a>
                            <a href="mailto:me@olivr.me" title="Email" class="btn btn-outline-primary"><i class="fas fa-envelope"></i></a>
                        </p>
                        
                        <span class="small text-muted">&copy; <?= date("Y") ?></span>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/vanilla-tilt/1.7.0/vanilla-tilt.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/cheet.js/0.3.3/cheet.min.js"></script>
    <script src="/js/main.min.js"></script>
</body>

</html>