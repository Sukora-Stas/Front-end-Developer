<!DOCTYPE html>
<html lang="en">

    <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/mocha/3.5.3/mocha.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/mocha/3.5.3/mocha.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/chai/4.0.2/chai.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/sinon.js/1.15.4/sinon.min.js"></script>
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>HT 01</title>
</head>

<body>
<div id="mocha"></div>
    <pre id="log"></pre>
    <script>
    mocha.setup('bdd');
var assert = chai.assert;
</script>
<script src="script.js"></script>
    <script src="tests.js"></script>
    <script src="https://rawgit.com/vvscode/js--base-course/master/.ht/01/script.tests.js"></script>
    <script>
    mocha.run();
</script>
</body>

</html>