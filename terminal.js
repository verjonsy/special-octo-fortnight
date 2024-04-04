<!DOCTYPE html>
<html>
<head>
    <script src="https://cdn.jsdelivr.net/npm/jquery"></script>
    <script src="https://cdn.jsdelivr.net/npm/jquery.terminal/js/jquery.terminal.min.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/jquery.terminal/css/jquery.terminal.min.css"/>
</head>
<body>
    <script>
        $('body').terminal({
            hello: function(what) {
                this.echo('Hello, ' + what + '. Welcome to this terminal.');
            }
        }, {
            greetings: 'My First Web Terminal'
        });
    </script>
</body>
</html>