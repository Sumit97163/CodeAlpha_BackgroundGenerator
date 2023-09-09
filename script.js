const myBgGenerator = () => {
    const firstColor = document.getElementById('color1');
    const secondColor = document.getElementById('color2');
    const backgroundGenerate = document.querySelector('.backgroundGenerate');
    const body = document.getElementById('gradient');
    const randomButton = document.querySelector('.random');
    const firstRandomBtn = document.querySelector('.firstRandomBtn');
    const secondRandomBtn = document.querySelector('.secondRandomBtn');
    const gradientDirection = document.querySelector('.toDirection');
    const randomDirection = document.querySelector('.randomDirection');

    const changeBackground = () => {
        if (gradientDirection.value === 'radial') {
            body.style.background = `radial-background(${firstColor.value}, 
            ${secondColor.value})`;
            backgroundGenerator.textContent = `${body.style.background};`;
        } else {
            body.style.background = `linear-gradient(${backgroundDirection.value},
            ${firstColor.value}, ${secondColor.value})`;
            backgroundGenerate.textContent = `${body.style.background};`;
        }
    };

    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    const setRandomGradient = () => {
        firstColor.value = getRandomColor();
        secondColor.value = getRandomColor();
        changeBackground();
        const setRandomDirection = () => {
            const randomNum = Math.floor(
                Math.random() * backgroundDirection.options.length
            );
            backgroundDirection.value = backgroundDirection.options[randomNum].value;
            changeBackground();
        };
    
        const loadFunctions = () => {
            getRandomColor();
            setRandomGradient();
            setOnlyFirstRandomGradient();
            setOnlySecondRandomGradient();
            changeBackground();
            setRandomDirection();
        };
    
        window.addEventListener('load', loadFunctions);
    
        firstColor.addEventListener('input', changeBackground);
        secondColor.addEventListener('input', changeBackground);
        randomButton.addEventListener('click', setRandomGradient);
        firstRandomBtn.addEventListener('click', setOnlyFirstRandomGradient);
        secondRandomBtn.addEventListener('click', setOnlySecondRandomGradient);
        gradientDirection.addEventListener('click', changeBackground);
        randomDirection.addEventListener('click', setRandomDirection);
    };
    
    myBgGenerator();
}