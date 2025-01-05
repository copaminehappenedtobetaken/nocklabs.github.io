document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Hardcoded credentials for demonstration purposes
    const correctUsername = 'xZyk03';
    const correctPassword = 'mom3nts_passiNG';

    const errorMessage = document.getElementById('error-message');
    const loadingMessage = document.getElementById('loading-message');
    const loginContainer = document.getElementById('login-container');
    const mainMenu = document.getElementById('main-menu');

    if (username === correctUsername && password === correctPassword) {
        errorMessage.style.display = 'none';
        loginContainer.classList.add('fade-out');

        setTimeout(function() {
            loginContainer.style.display = 'none';
            loadingMessage.style.display = 'block';
            loadingMessage.classList.add('fade-in');

            setTimeout(function() {
                loadingMessage.classList.remove('fade-in');
                loadingMessage.classList.add('fade-out');

                setTimeout(function() {
                    loadingMessage.style.display = 'none';
                    mainMenu.style.display = 'block';
                    mainMenu.classList.add('fade-in');
                    document.getElementById('input1').focus();
                }, 1000);
            }, 1500);
        }, 1000);
    } else {
        errorMessage.style.display = 'block';
    }
});

function handleInput(currentInput, nextInputId, prevInputId) {
    if (currentInput.value.length === 1 && nextInputId) {
        document.getElementById(nextInputId).focus();
    }
}

function handleBackspace(event, prevInputId) {
    if (event.key === 'Backspace' && event.target.value.length === 0) {
        event.preventDefault();
        if (prevInputId) {
            document.getElementById(prevInputId).focus();
        }
    }
}

document.getElementById('submit-button').addEventListener('click', function() {
    const code = [
        document.getElementById('input1').value,
        document.getElementById('input2').value,
        document.getElementById('input3').value,
        document.getElementById('input4').value,
        document.getElementById('input5').value
    ].join('');

    const mainMenu = document.getElementById('main-menu');
    const manywPage = document.getElementById('manyw-page');
    const nlabsPage = document.getElementById('nlabs-page');
    const pronePage = document.getElementById('prone-page');
    const nwdwnPage = document.getElementById('nwdwn-page');
    const liliaPage = document.getElementById('lilia-page');
    const aubrnPage = document.getElementById('aubrn-page');
    const whitePage = document.getElementById('white-page');
    const evrlyPage = document.getElementById('evrly-page');
    const lstarPage = document.getElementById('lstar-page');
    const simx2Page = document.getElementById('simx2-page');
    const marinPage = document.getElementById('marin-page');
    const nikogPage = document.getElementById('nikog-page');
    const aubrnPage1 = document.getElementById('aubrn-page1');
    const blankPage = document.getElementById('blank-page');
    const caelaPage = document.getElementById('caela-page');
    const mayagPage = document.getElementById('mayag-page');

    if (code === 'aubrn') {
        setTimeout(() => {
            
            setTimeout(() => {
                mainMenu.style.display = 'none';
                aubrnPage1.style.display = 'block';
                

                setTimeout(() => {
                    

                    setTimeout(() => {
                        aubrnPage1.style.display = 'none';
                        aubrnPage.style.display = 'block';
                        

                        setTimeout(() => {
                            alert('040825: continuity error!')
                            window.location.href = "about:blank";
                        }, 4000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    } else if (code === 'manyw') {
        mainMenu.classList.add('fade-out');
        setTimeout(() => {
            mainMenu.style.display = 'none';
            manywPage.style.display = 'block';
            manywPage.classList.add('fade-in');
            mainMenu.classList.remove('fade-out');
        }, 1000);
    } else if (code === 'nlabs') {
        mainMenu.classList.add('fade-out');
        setTimeout(() => {
            mainMenu.style.display = 'none';
            nlabsPage.style.display = 'block';
            nlabsPage.classList.add('fade-in');
            mainMenu.classList.remove('fade-out');
        }, 1000);
    } else if (code === 'prone') {
        mainMenu.classList.add('fade-out');
        setTimeout(() => {
            mainMenu.style.display = 'none';
            pronePage.style.display = 'block';
            pronePage.classList.add('fade-in');
            mainMenu.classList.remove('fade-out');
        }, 1000);
    } else if (code === 'nwdwn') {
        mainMenu.classList.add('fade-out');
        setTimeout(() => {
            mainMenu.style.display = 'none';
            nwdwnPage.style.display = 'block';
            nwdwnPage.classList.add('fade-in');
            mainMenu.classList.remove('fade-out');
        }, 1000);
     } else if (code === 'virus') {
        mainMenu.classList.add('fade-out');
        setTimeout(() => {
            mainMenu.style.display = 'none';
            nwdwnPage.style.display = 'block';
            nwdwnPage.classList.add('fade-in');
            mainMenu.classList.remove('fade-out');
        }, 1000);
    } else if (code === 'lilia') {
        mainMenu.classList.add('fade-out');
        setTimeout(() => {
            mainMenu.style.display = 'none';
            liliaPage.style.display = 'block';
            liliaPage.classList.add('fade-in');
            mainMenu.classList.remove('fade-out');
        }, 1000);
    } else if (code === 'mwp02') {
        mainMenu.classList.add('fade-out');
        setTimeout(() => {
            mainMenu.style.display = 'none';
            liliaPage.style.display = 'block';
            liliaPage.classList.add('fade-in');
            mainMenu.classList.remove('fade-out');
        }, 1000);
    } else if (code === 'white') {
        mainMenu.classList.add('fade-out');
        setTimeout(() => {
            mainMenu.style.display = 'none';
            whitePage.style.display = 'block';
            whitePage.classList.add('fade-in');
            mainMenu.classList.remove('fade-out');
        }, 1000);
    } else if (code === 'mwp04') {
        mainMenu.classList.add('fade-out');
        setTimeout(() => {
            mainMenu.style.display = 'none';
            whitePage.style.display = 'block';
            whitePage.classList.add('fade-in');
            mainMenu.classList.remove('fade-out');
        }, 1000);
    } else if (code === 'evrly') {
        mainMenu.classList.add('fade-out');
        setTimeout(() => {
            mainMenu.style.display = 'none';
            evrlyPage.style.display = 'block';
            evrlyPage.classList.add('fade-in');
            mainMenu.classList.remove('fade-out');
        }, 1000);
    } else if (code === 'mwp01') {
        mainMenu.classList.add('fade-out');
        setTimeout(() => {
            mainMenu.style.display = 'none';
            evrlyPage.style.display = 'block';
            evrlyPage.classList.add('fade-in');
            mainMenu.classList.remove('fade-out');
        }, 1000);
    } else if (code === 'beta4') {
        mainMenu.classList.add('fade-out');
        setTimeout(() => {
            mainMenu.style.display = 'none';
            whitePage.style.display = 'block';
            whitePage.classList.add('fade-in');
            mainMenu.classList.remove('fade-out');
        }, 1000);
    } else if (code === 'lstar') {
        mainMenu.classList.add('fade-out');
        setTimeout(() => {
            mainMenu.style.display = 'none';
            lstarPage.style.display = 'block';
            lstarPage.classList.add('fade-in');
            mainMenu.classList.remove('fade-out');
        }, 1000);
    } else if (code === 'mwp03') {
        mainMenu.classList.add('fade-out');
        setTimeout(() => {
            mainMenu.style.display = 'none';
            lstarPage.style.display = 'block';
            lstarPage.classList.add('fade-in');
            mainMenu.classList.remove('fade-out');
        }, 1000);
    } else if (code === 'chloe') {
        mainMenu.classList.add('fade-out');
        setTimeout(() => {
            mainMenu.style.display = 'none';
            lstarPage.style.display = 'block';
            lstarPage.classList.add('fade-in');
            mainMenu.classList.remove('fade-out');
        }, 1000);
    } else if (code === 'jhnsn') {
        mainMenu.classList.add('fade-out');
        setTimeout(() => {
            mainMenu.style.display = 'none';
            lstarPage.style.display = 'block';
            lstarPage.classList.add('fade-in');
            mainMenu.classList.remove('fade-out');
        }, 1000);
    } else if (code === 'simx2') {
        mainMenu.classList.add('fade-out');
        setTimeout(() => {
            mainMenu.style.display = 'none';
            simx2Page.style.display = 'block';
            simx2Page.classList.add('fade-in');
            mainMenu.classList.remove('fade-out');
        }, 1000);
    } else if (code === 'jonas') {
        mainMenu.classList.add('fade-out');
        setTimeout(() => {
            mainMenu.style.display = 'none';
            simx2Page.style.display = 'block';
            simx2Page.classList.add('fade-in');
            mainMenu.classList.remove('fade-out');
        }, 1000);
    } else if (code === 'marin') {
        mainMenu.classList.add('fade-out');
        setTimeout(() => {
            mainMenu.style.display = 'none';
            marinPage.style.display = 'block';
            marinPage.classList.add('fade-in');
            mainMenu.classList.remove('fade-out');
        }, 1000);
    } else if (code === 'ctrlz') {
        mainMenu.classList.add('fade-out');
        setTimeout(() => {
            mainMenu.style.display = 'none';
            marinPage.style.display = 'block';
            marinPage.classList.add('fade-in');
            mainMenu.classList.remove('fade-out');
        }, 1000);
    } else if (code === 'nikog') {
        mainMenu.classList.add('fade-out');
        setTimeout(() => {
            mainMenu.style.display = 'none';
            nikogPage.style.display = 'block';
            nikogPage.classList.add('fade-in');
            mainMenu.classList.remove('fade-out');
        }, 1000);
    }  else if (code === 'kaela') {
        mainMenu.classList.add('fade-out');
        setTimeout(() => {
            mainMenu.style.display = 'none';
            caelaPage.style.display = 'block';
            caelaPage.classList.add('fade-in');
            mainMenu.classList.remove('fade-out');
        }, 1000);
    } else if (code === 'blank') {
        mainMenu.classList.add('fade-out');
        setTimeout(() => {
            mainMenu.style.display = 'none';
            blankPage.style.display = 'block';
            blankPage.classList.add('fade-in');
            mainMenu.classList.remove('fade-out');
        }, 1000);
    } else if (code === 'mwp00') {
        mainMenu.classList.add('fade-out');
        setTimeout(() => {
            mainMenu.style.display = 'none';
            blankPage.style.display = 'block';
            blankPage.classList.add('fade-in');
            mainMenu.classList.remove('fade-out');
        }, 1000);
    } else if (code === 'mayag') {
        mainMenu.classList.add('fade-out');
        setTimeout(() => {
            mainMenu.style.display = 'none';
            mayagPage.style.display = 'block';
            mayagPage.classList.add('fade-in');
            mainMenu.classList.remove('fade-out');
        }, 1000);
    } 
    
});
    
document.getElementById('back-button1').addEventListener('click', function() {
    const mainMenu = document.getElementById('main-menu');
    const manywPage = document.getElementById('manyw-page');

    manywPage.classList.add('fade-out');
    setTimeout(() => {
        manywPage.style.display = 'none';
        mainMenu.style.display = 'block';
        mainMenu.classList.add('fade-in');
        manywPage.classList.remove('fade-out');
    }, 1000);
});

document.addEventListener('DOMContentLoaded', (event) => {
    const inputField = document.getElementById('input1');

    inputField.addEventListener('input', (event) => {
        event.target.value = event.target.value.toLowerCase();
    });

    inputField.addEventListener('keydown', (event) => {
        if (event.key.length === 1 && event.key === event.key.toUpperCase() && event.key !== event.key.toLowerCase()) {
            event.preventDefault();
        }
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    const inputField = document.getElementById('input2');

    inputField.addEventListener('input', (event) => {
        event.target.value = event.target.value.toLowerCase();
    });

    inputField.addEventListener('keydown', (event) => {
        if (event.key.length === 1 && event.key === event.key.toUpperCase() && event.key !== event.key.toLowerCase()) {
            event.preventDefault();
        }
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    const inputField = document.getElementById('input3');

    inputField.addEventListener('input', (event) => {
        event.target.value = event.target.value.toLowerCase();
    });

    inputField.addEventListener('keydown', (event) => {
        if (event.key.length === 1 && event.key === event.key.toUpperCase() && event.key !== event.key.toLowerCase()) {
            event.preventDefault();
        }
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    const inputField = document.getElementById('input4');

    inputField.addEventListener('input', (event) => {
        event.target.value = event.target.value.toLowerCase();
    });

    inputField.addEventListener('keydown', (event) => {
        if (event.key.length === 1 && event.key === event.key.toUpperCase() && event.key !== event.key.toLowerCase()) {
            event.preventDefault();
        }
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    const inputField = document.getElementById('input5');

    inputField.addEventListener('input', (event) => {
        event.target.value = event.target.value.toLowerCase();
    });

    inputField.addEventListener('keydown', (event) => {
        if (event.key.length === 1 && event.key === event.key.toUpperCase() && event.key !== event.key.toLowerCase()) {
            event.preventDefault();
        }
    });
});


document.getElementById('back-button2').addEventListener('click', function() {
    const mainMenu = document.getElementById('main-menu');
    const nlabsPage = document.getElementById('nlabs-page');

    nlabsPage.classList.add('fade-out');
    setTimeout(() => {
        nlabsPage.style.display = 'none';
        mainMenu.style.display = 'block';
        mainMenu.classList.add('fade-in');
        nlabsPage.classList.remove('fade-out');
    }, 1000);
});

document.getElementById('back-button3').addEventListener('click', function() {
    const mainMenu = document.getElementById('main-menu');
    const pronePage = document.getElementById('prone-page');

    pronePage.classList.add('fade-out');
    setTimeout(() => {
        pronePage.style.display = 'none';
        mainMenu.style.display = 'block';
        mainMenu.classList.add('fade-in');
        pronePage.classList.remove('fade-out');
    }, 1000);
});

document.getElementById('back-button4').addEventListener('click', function() {
    const mainMenu = document.getElementById('main-menu');
    const nwdwnPage = document.getElementById('nwdwn-page');

    nwdwnPage.classList.add('fade-out');
    setTimeout(() => {
        nwdwnPage.style.display = 'none';
        mainMenu.style.display = 'block';
        mainMenu.classList.add('fade-in');
        nwdwnPage.classList.remove('fade-out');
    }, 1000);
});

document.getElementById('back-button5').addEventListener('click', function() {
    const mainMenu = document.getElementById('main-menu');
    const liliaPage = document.getElementById('lilia-page');

    liliaPage.classList.add('fade-out');
    setTimeout(() => {
        liliaPage.style.display = 'none';
        mainMenu.style.display = 'block';
        mainMenu.classList.add('fade-in');
        liliaPage.classList.remove('fade-out');
    }, 1000);
});

document.getElementById('back-button6').addEventListener('click', function() {
    const mainMenu = document.getElementById('main-menu');
    const whitePage = document.getElementById('white-page');

    whitePage.classList.add('fade-out');
    setTimeout(() => {
        whitePage.style.display = 'none';
        mainMenu.style.display = 'block';
        mainMenu.classList.add('fade-in');
        whitePage.classList.remove('fade-out');
    }, 1000);
});

document.getElementById('back-button7').addEventListener('click', function() {
    const mainMenu = document.getElementById('main-menu');
    const evrlyPage = document.getElementById('evrly-page');

    evrlyPage.classList.add('fade-out');
    setTimeout(() => {
        evrlyPage.style.display = 'none';
        mainMenu.style.display = 'block';
        mainMenu.classList.add('fade-in');
        evrlyPage.classList.remove('fade-out');
    }, 1000);
});

document.getElementById('back-button8').addEventListener('click', function() {
    const mainMenu = document.getElementById('main-menu');
    const lstarPage = document.getElementById('lstar-page');

    lstarPage.classList.add('fade-out');
    setTimeout(() => {
        lstarPage.style.display = 'none';
        mainMenu.style.display = 'block';
        mainMenu.classList.add('fade-in');
        lstarPage.classList.remove('fade-out');
    }, 1000);
});

document.getElementById('back-button9').addEventListener('click', function() {
    const mainMenu = document.getElementById('main-menu');
    const simx2Page = document.getElementById('simx2-page');

    simx2Page.classList.add('fade-out');
    setTimeout(() => {
        simx2Page.style.display = 'none';
        mainMenu.style.display = 'block';
        mainMenu.classList.add('fade-in');
        simx2Page.classList.remove('fade-out');
    }, 1000);
});

document.getElementById('back-button10').addEventListener('click', function() {
    const mainMenu = document.getElementById('main-menu');
    const marinPage = document.getElementById('marin-page');

    marinPage.classList.add('fade-out');
    setTimeout(() => {
        marinPage.style.display = 'none';
        mainMenu.style.display = 'block';
        mainMenu.classList.add('fade-in');
        marinPage.classList.remove('fade-out');
    }, 1000);
});

document.getElementById('back-button11').addEventListener('click', function() {
    const mainMenu = document.getElementById('main-menu');
    const nikogPage = document.getElementById('nikog-page');

    nikogPage.classList.add('fade-out');
    setTimeout(() => {
        nikogPage.style.display = 'none';
        mainMenu.style.display = 'block';
        mainMenu.classList.add('fade-in');
        nikogPage.classList.remove('fade-out');
    }, 1000);
});

document.getElementById('back-button12').addEventListener('click', function() {
    const mainMenu = document.getElementById('main-menu');
    const blankPage = document.getElementById('blank-page');

    blankPage.classList.add('fade-out');
    setTimeout(() => {
        blankPage.style.display = 'none';
        mainMenu.style.display = 'block';
        mainMenu.classList.add('fade-in');
        blankPage.classList.remove('fade-out');
    }, 1000);
});

document.getElementById('back-button13').addEventListener('click', function() {
    const mainMenu = document.getElementById('main-menu');
    const caelaPage = document.getElementById('caela-page');

    caelaPage.classList.add('fade-out');
    setTimeout(() => {
        caelaPage.style.display = 'none';
        mainMenu.style.display = 'block';
        mainMenu.classList.add('fade-in');
        caelaPage.classList.remove('fade-out');
    }, 1000);
});

document.getElementById('back-button14').addEventListener('click', function() {
    const mainMenu = document.getElementById('main-menu');
    const mayagPage = document.getElementById('mayag-page');

    mayagPage.classList.add('fade-out');
    setTimeout(() => {
        mayagPage.style.display = 'none';
        mainMenu.style.display = 'block';
        mainMenu.classList.add('fade-in');
        mayagPage.classList.remove('fade-out');
    }, 1000);
});
