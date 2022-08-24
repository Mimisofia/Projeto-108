function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/mdPnWTu2z/model.json', modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}

function gotResults(error, results)
{
    if(error)
    {
        console.error(error);
    } else
    {
        console.log(results);

        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'Posso ouvir - '+ results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Precisão - '+ (results[0].confidence*100).toFixed(2)+" %";

        document.getElementById ("result_label").style.color = "rgb("+random_number_r+", "+random_number_g+", "+random_number_b+")";
        document.getElementById ("result_confidence").style.color = "rgb("+random_number_r+", "+random_number_g+", "+random_number_b+")";

        img = document.getElementById('personagem1')
        img1 = document.getElementById('personagem2')
        img2 = document.getElementById('personagem3')
        img3 = document.getElementById('personagem4')

        if(results[0].label == "latidos")
        {
            img.src = 'cachorro_latido.webp';
            img1.src = 'gato_miado.png';
            img2.src = 'leao-rugido.webp';
            img3.src = 'vaca-mugido.jpg';
        }
        else if(result[0].label == "Miados")
        {
            img.src = 'gato_miado.png';
            img1.src = 'cachorro_latido.webp';
            img2.src = 'leao-rugido.webp';
            img3.src = 'vaca-mugido.jpg';
        }
        else if(result[0].label == "Rugidos")
        {
            img.src = 'leao-rugido.webp';
            img1.src = 'gato_miado.png';
            img2.src = 'cachorro_latido.webp';
            img3.src = 'vaca-mugido.jpg';
        }
        else
        {
            img.src = 'vaca-mugido.jpg';
            img1.src = 'gato_miado.png';
            img2.src = 'leao-rugido.webp';
            img3.src = 'cachorro_latido.webp';
        
        }
    }
}