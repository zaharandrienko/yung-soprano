import React from 'react';
import './Info.css';


function Info() {
  return (
    <div className='Info' id="prices">
      <div className='one'>
        <h2>BASIC LEASE</h2>
        <h2>$30</h2>
        <div className='first'>
          <h2>Аренда - MP3</h2>
          <ul>
            <li>Бит можно использовать для выступлений, микстейпов, баттлов, некомерческих треков, клипов и тд.</li>
            <li>После оплаты деньги не возращаются.</li>
            <li>Бит можно брать в аренду (лизинг) до тех пор, пока не будут выкуплены эксклюзивные права на инструментал.</li>
          </ul>
        </div>
        <div className='second'>
          <h2>Lease - MP3</h2>
          <ul>
            <li>The beat can be used for performances, mixtapes, battles, non-commercial tracks, clips, etc.</li>
            <li>After payment, the money is not refunded.</li>
            <li>Beat can be leased until exclusive rights to the instrument are purchased.</li>
          </ul>
        </div>
      </div>
      <div className='hr'></div>
      <div className='one'>
        <h2>PLATINUM LEASE</h2>
        <h2>$60</h2>
        <div className='first'>
          <h2>Аренда - WAV </h2>
          <ul>
            <li>Неограниченное коммерческое использование, съемка клипов на YouTube и продажи произведения на различных платных площадках (AppleMusic, YouTube Music, Spotify и тд.)</li>
            <li>Аренда в WAV формате значительно повышает качество звучания. </li>
            <li>После оплаты деньги не возращаются.</li>
            <li>Бит можно брать в аренду (лизинг) до тех пор, пока не будут выкуплены эксклюзивные права на инструментал.</li>
          </ul>
        </div>
        <div className='second'>
          <h2>Lease - WAV </h2>
          <ul>
            <li>You get all the rights to the track.</li>
            <li>Unlimited commercial use, shooting videos on YouTube and selling the work on various paid platforms (AppleMusic, YouTube Music, Spotify, etc.)</li>
            <li>Lease in WAV significantly improves sound quality.</li>
            <li>After payment, the money is not refunded.</li>
            <li>Beat can be leased until exclusive rights to the instrumental are purchased.</li>
          </ul>
        </div>
      </div>
      <div className='hr'></div>
      <div className='one'>
        <h2>EXCLUSIVE RIGHTS</h2>
        <h2>$100</h2>
        <div className='first'>
          <h2>Премиум качество <br></br>WAV, MP3</h2>
          <ul className='act'>
            <li>Вы получаете все права на использование бита.</li>
            <li>Бит снимается с продажи.</li>
            <li>Предоставляется файл формата WAV и TRACK OUT (бит по дорожкам)</li>
            <li>Разрешается любое коммерческое использование в любых целях и на любых цифровых площадках..</li>
          </ul>
        </div>
        <div className='second'>
          <h2>Premium Quality <br></br>WAV, MP3</h2>
          <ul className='act'>
            <li>You get full ownership of the beat.</li>
            <li>The beat will be removed from sale.</li>
            <li>Provides a WAV and TRACK OUT file (stems/beat by track)</li>
            <li>Any commercial use for any purpose and on any digital sites is permitted.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Info;