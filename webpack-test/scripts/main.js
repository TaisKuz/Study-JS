import './../stylus/fonts/MuseoSansCyrl-normal.styl';
import './../stylus/fonts/MuseoSansCyrl-thin.styl';
import './../stylus/reset.styl';
import './../stylus/variables.styl';

import './../stylus/ios.styl';
import './../stylus/android.styl';

//import './../stylus/main.styl';

// href="https://play.google.com/store/apps/details?id=com.zvooq.openplay&hl=en"

var MainPage = React.createClass({

    render() {
        return (
            <div className="main">
                <div className="main-containerWrapper">
                    <div className="main__mini-phones main__mini-phones_ios">
                        <img src="/img/miniPhone1.svg" alt="" ></img>
                        <img src="/img/miniPhone2.svg" alt="" ></img>
                        <img src="/img/miniPhone3.svg" alt="" ></img>
                        <img src="/img/miniPhone4.svg" alt="" ></img>
                        <img src="/img/miniPhone5.svg" alt="" ></img>
                    </div>
                    <div className="main__mini-phones main__mini-phones_android">
                        <img src="/img/miniPhone6.svg" alt="" ></img>
                        <img src="/img/miniPhone7.svg" alt="" ></img>
                        <img src="/img/miniPhone8.svg" alt="" ></img>
                        <img src="/img/miniPhone9.svg" alt="" ></img>
                    </div>
                    <div className="main__best-stiсker main__best-stiсker_up">
                        Лучшее<br/>
                        музыкальное<br/>
                        приложение<br/><br/>
                        <p className="AppStore">App Store</p>
                        2015
                    </div>
                    <div className="main-top">
                        <div className="main-content">
                            <a href="http://zvooq.com" target="_blank"> <img src="/img/Zvooq-logo.svg" alt="Zvooq-logo" /> </a>
                            <div className="main-top__title-Zvooq">Zvooq</div>
                            <div className="main-top__title-number1">музыкальное приложение №1</div>

                            <div className="installBtn installBtn_top">
                                <a href="https://itunes.apple.com/ru/app/muzyka-dla-iphone-besplatno/id833449999?mt=8" target="_blank"></a>
                            </div>

                            <div className="main__title-music" >Включить<br/>музыку<br/>легко!</div>
                            <img src="/img/icon-notes.svg" alt="icon-notes"></img>
                            <div className="main-top__title-listenFree" >Слушайте всё бесплатно и без регистрации</div>
                            <div className="main-top__title-torrents">Больше не нужны торренты, социальные сети или пиратские приложения-однодневки.</div>
                            <div className="main-top__title-trial">В бесплатном режме можно слушать всю музыку бесконечно долго и в любом объеме.</div>
                            <div className="main-group25">
                                <div className="main-top-group25__title-25">25</div>
                                <div className="main-top-group25__title-million">миллионов треков</div>
                            </div>
                            <div className="main-top-playGroup">
                                <div className="play-home"></div>
                                <div className="play-vk"></div>
                                <div className="play-training"></div>
                            </div>
                            <div className="main-top__title-thousand">Тысячи готовых плейлистов для любого случая в жизни</div>
                            <div className="main-top__title-oneClick">Одним нажатием включайте готовые плейлисты: когда весело или грутсно, чтобы не скучать в пробках или метро, выложиться в спортзале или сфокусироваться на работе.</div>
                            <div className="main-top-heartWaves"></div>
                            <div className="main-top__title-smart">Умная Коллекция для вашей музыки</div>
                            <div className="main-top__title-allULike">Все, что вам понравится, можно сохранять в Коллецию, которая сама превращает свалку из любимой музыки в место, где вы ещё быстрее найдете всё, что нужно.</div>
                            <div className="main-top__title-etc">...а также</div>
                            <div className="main-top-functionsGroup">
                                <div className="functionsGroup__item">
                                    <div className="functionsGroup__item-icon icon-star_color"></div>
                                    <div className="functionsGroup__item-title">Популярная музыка и новинки в одном месте</div>
                                </div>
                                <div className="functionsGroup__item">
                                    <div className="functionsGroup__item-icon icon-butterfly_color"></div>
                                    <div className="functionsGroup__item-title">Поиск, который вас понимает</div>
                                </div>
                                <div className="functionsGroup__item">
                                    <div className="functionsGroup__item-icon icon-shazam_color"></div>
                                    <div className="functionsGroup__item-title">Удобное прослушивание своих Shazamов</div>
                                </div>
                                <div className="functionsGroup__item">
                                    <div className="functionsGroup__item-icon icon-cloud_color"></div>
                                    <div className="functionsGroup__item-title">Кэширование, чтобы слушать музыку без помех</div>
                                </div>
                                <div className="functionsGroup__item">
                                    <div className="functionsGroup__item-icon icon-lightning"></div>
                                    <div className="functionsGroup__item-title">Сжатие мобиьного трафика</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="main-premium">
                        <div className="main-content">
                            <div className="icon-cherry"></div>
                            <div className="main-premium__title">Премиум- возможности:</div>
                            <div className="main-premium-functionsGroup">
                                <div className="functionsGroup__item">
                                    <div className="functionsGroup__item-icon icon-download_black"></div>
                                    <div className="functionsGroup__item-title"></div>
                                </div>
                                <div className="functionsGroup__item">
                                    <div className="functionsGroup__item-icon icon-plane_black"></div>
                                    <div className="functionsGroup__item-title"></div>
                                </div>
                                <div className="functionsGroup__item">
                                    <div className="functionsGroup__item-icon icon-rewind_black"></div>
                                    <div className="functionsGroup__item-title"></div>
                                </div>
                                <div className="functionsGroup__item">
                                    <div className="functionsGroup__item-icon icon-diamond_black"></div>
                                    <div className="functionsGroup__item-title"></div>
                                </div>
                                <div className="functionsGroup__item">
                                    <div className="functionsGroup__item-icon icon-butterfly_black"></div>
                                    <div className="functionsGroup__item-title"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="main-tryIt">
                        <div className="main-content">
                            <div className="main-tryIt__title-try">Попробуйте!</div>
                            <div className="main-tryIt__title-free">Это бесплатно</div>

                            <div className="installBtn installBtn_tryIt">
                                <a href="https://itunes.apple.com/ru/app/muzyka-dla-iphone-besplatno/id833449999?mt=8" target="_blank"></a>
                            </div>

                        </div>
                    </div>
                    <div className="main-partners">
                        <div className="main-content">
                            <div className="main-partners__title">Особые условия для клиентов наших партнеров</div>
                            <div className="main-partners-table">
                                <div className="partners__row partners__row_1">
                                    <div className="partners__item icon-beeline"></div>
                                    <div className="partners__item icon-tele2"></div>
                                    <div className="partners__item icon-kiivstar"></div>
                                </div>
                                <div className="partners__row partners__row_2 partners__row_android">
                                    <div className="partners__item icon-leEco"></div>
                                    <div className="partners__item icon-julmart"></div>
                                    <div className="partners__item icon-huawel"></div>
                                </div>
                                <div className="partners__row partners__row_3">
                                    <div className="partners__item icon-kitKat"></div>
                                    <div className="partners__item icon-deliveryClub"></div>
                                    <div className="partners__item icon-bud"></div>
                                </div>
                            </div>
                            <div className="main-links">
                                <a className="main-links_bold" href="http://zvooq.com" target="_blank">У меня есть промокод</a>
                                <a className="main-links_normal" herf="http://zvooq.com" target="_blank">Стать нашим партнером</a>
                                <a className="main-links_normal" herf="http://zvooq.com" target="_blank">Работать у нас</a>
                                <a className="main-links_normal" herf="http://zvooq.com" target="_blank">Пообщаться с нашим support</a>

                                <a className="main-links_normal ios" herf="http://zvooq.com" target="_blank">Zvooq для <em>ios</em></a>
                                <a className="main-links_normal android" herf="http://zvooq.com" target="_blank">Zvooq для <em>Android</em></a>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

ReactDOM.render(< MainPage />, document.getElementById('page-content') );
