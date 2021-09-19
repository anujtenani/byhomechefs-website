import React from 'react';

function FloatingWhatsApp(props) {
    return (
        <div style={{position:'fixed', bottom:25, right:25}}>
            <a href={"https://api.whatsapp.com/send?phone=+919717766402&text=hi"}>
                <img src="/whatsapp-symbol.svg" style={{width:64, height:64}} />
            </a>
        </div>
    );
}

export default FloatingWhatsApp;
