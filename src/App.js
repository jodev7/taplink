import React from 'react'
import donate from './img/donate.png'
import youtube from './img/youtube.png'
import tiktok from './img/tik-tok.png'
import instagram from './img/instagram.png'
import discord from './img/discord.png'
import telegram from './img/telegram.png'

function App() {
  return (  //
    <div className="container">
        <div className='row'>
        <div className='col'>
        <a className='aaa' href="https://www.donationalerts.com/c/davronno1" style={{ textDecoration: 'none' }}>
        <img src={donate} alt=""/>
        {/* <h3>ДОНАТ</h3> */}
        </a>
        </div>
        <div className='col'>
        <a className='aaa' href="https://www.youtube.com/channel/UC5r7DW3zTlzU9mfqhZVKSKw" style={{ textDecoration: 'none' }}>
        <img src={youtube} alt=""/>
        {/* <h3>Youtube</h3> */}
        </a>
        </div>
        <div className='col'>
        <a className='aaa' href="https://www.tiktok.com/@davronno1?lang=ru-RU" style={{ textDecoration: 'none' }}>
        <img src={tiktok} alt=""/>
        {/* <h3>Tik Tok</h3> */}
        </a>
        </div>
        <div className='col'>
        <a className='aaa' href="https://www.instagram.com/davron.no1/" style={{ textDecoration: 'none' }}>
        <img src={instagram} alt=""/>
        {/* <h3>Instagram</h3> */}
        </a>
        </div>
        <div className='col'>
        <a className='aaa' href="https://discord.gg/YPjw3RZjQd" style={{ textDecoration: 'none' }}>
        <img src={discord} alt=""/>
        {/* <h3>Discord</h3> */}
        </a>
        </div>
        <div className='col'>
        <a className='aaa' href="https://t.me/DavronNo1" style={{ textDecoration: 'none' }}>
        <img src={telegram} alt=""/>
        {/* <h3>Telegram</h3> */}
        </a>
        </div>
            {/* <h1 className='text-center'>DavronNo1</h1> */}
        </div>
    </div>
  );
}

export default App;