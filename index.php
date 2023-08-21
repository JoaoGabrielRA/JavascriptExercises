<?php 
require_once '../vendor/autoload.php';
$form = new Formr\Formr('bootstrap5');
?>

<!doctype html>
<html lang="pt-br">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Teste Form</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">
        <link rel="stylesheet" href="mycss.css">
        <link rel="stylesheet" href="floating-label.css">
    </head>
    <body>
    <div class="mb-3">
        <div class="d-flex justify-content-center">
            <div class="card container">
                <div class="mb-3">
                    <input type="text" name="arquivo" id="arquivo" class=" form-control" />
                    <label for="arquivo" class="form-label"> Arquivo</label>
                </div>
            <?=  
                $data = [
                    'nome' => 'food,text,,food, onChange="myFunction()"'
                    ];
                    $form->fastform($data);
            ?>
            </div>
        </div>

    <script src="myjs.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm" crossorigin="anonymous"></script>
    </body>
</html>