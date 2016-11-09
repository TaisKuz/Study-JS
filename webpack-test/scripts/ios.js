import './../stylus/ios.styl';

// href="https://play.google.com/store/apps/details?id=com.zvooq.openplay&hl=en"
//переименовать в андройд и ios сделать отдельными компонентами
// импорт стиля только один, все шрифты и остальное импортить внутри css
var MainIos = React.createClass({

    render() {
        return (
            <div className="main">
                <div className="main-containerWrapper">

                    <div className="main-top">
                        <div className="main__mini-phones main__mini-phones_ios"></div>

                        <div className="main__best-stiсker main__best-stiсker_up">
                            Лучшее<br/>
                            музыкальное<br/>
                            приложение<br/><br/>
                            <p className="AppStore">App Store</p>
                            2015
                        </div>
                        <div className="main-top_gradient"></div>
                        <div className="main-content">
                            <img className="zvooq-logo" src="/img/ios/zvooq-logo_ios.svg" alt="Zvooq-logo" />
                            <div className="main-top__title-Zvooq">Zvooq</div>
                            <div className="main-top__title-number1">музыкальное приложение &#8470;&nbsp;1</div>

                            <div className="installBtn installBtn_top appStoreBtn">
                                <a href="https://itunes.apple.com/ru/app/muzyka-dla-iphone-besplatno/id833449999?mt=8" target="_blank" />
                            </div>

                            <div className="main-top__title-music" >
                                Включить<br/>музыку<br/>легко!
                                <div className="icon-note"></div>
                            </div>

                            <div className="main-top__title-listenFree" >Слушайте всё бесплатно и&nbsp;без регистрации</div>
                            <div className="main-top__title-torrents">Больше не&nbsp;нужны торренты, социальные сети или пиратские приложения-однодневки.</div>
                            <div className="main-top__title-trial">В&nbsp;бесплатном режме можно слушать всю музыку бесконечно долго и&nbsp;в&nbsp;любом объеме.</div>
                            <div className="main-top-group25">
                                <div className="main-top-group25__title-25">25</div>
                                <div className="main-top-group25__title-million">миллионов треков</div>
                            </div>

                            <div className="main-top-playGroup">
                                <div className="play-home"></div>
                                <div className="play-vk"></div>
                                <div className="play-training"></div>
                            </div>
                            <div className="main-top__title-thousand">Тысячи готовых плейлистов для любого случая в&nbsp;жизни</div>
                            <div className="main-top__title-oneClick">Одним нажатием включайте готовые плейлисты: когда весело или грутсно,
                                чтобы не&nbsp;скучать в&nbsp;пробках или метро, выложиться в&nbsp;спортзале или сфокусироваться на&nbsp;работе.</div>
                            <div className="main-top-heartWaves"></div>
                            <div className="main-top__title-smart">Умная Коллекция для вашей музыки</div>
                            <div className="main-top__title-allULike">Все, что вам понравится, можно сохранять в&nbsp;Коллецию,
                                которая сама превращает свалку из&nbsp;любимой музыки в&nbsp;место, где вы&nbsp;ещё быстрее найдете всё, что нужно.</div>
                            <div className="main-top__title-etc">...а также</div>
                            <div className="main-top-functionsGroup">
                                <div className="functionsGroup__item">
                                    <div className="item_inline functionsGroup__item-icon icon-star_color"></div>
                                    <div className="item_inline functionsGroup__item-title">Популярная музыка и&nbsp;новинки в&nbsp;одном месте</div>
                                </div>
                                <div className="functionsGroup__item">
                                    <div className="item_inline functionsGroup__item-icon icon-butterfly_color"></div>
                                    <div className="item_inline functionsGroup__item-title">Поиск, который вас понимает</div>
                                </div>
                                <div className="functionsGroup__item">
                                    <div className="item_inline functionsGroup__item-icon icon-shazam_color"></div>
                                    <div className="item_inline functionsGroup__item-title">Удобное прослушивание своих Shazamов</div>
                                </div>
                                <div className="functionsGroup__item">
                                    <div className="item_inline functionsGroup__item-icon icon-cloud_color"></div>
                                    <div className="item_inline functionsGroup__item-title">Кэширование, чтобы слушать музыку без помех</div>
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
                                    <div className="item_inline functionsGroup__item-icon icon-download_black"></div>
                                    <div className="functionsGroup__item-title">Скачивание музыки в&nbsp;телефон</div>
                                </div>
                                <div className="functionsGroup__item">
                                    <div className="item_inline functionsGroup__item-icon icon-plane_black"></div>
                                    <div className="item_inline functionsGroup__item-title">Прослушивание без интернета</div>
                                </div>
                                <div className="functionsGroup__item">
                                    <div className="item_inline functionsGroup__item-icon icon-diamond_black"></div>
                                    <div className="item_inline functionsGroup__item-title">Музыка в&nbsp;высоком качстве</div>
                                </div>
                                <div className="functionsGroup__item">
                                    <div className="item_inline functionsGroup__item-icon icon-rewind_black"></div>
                                    <div className="item_inline functionsGroup__item-title">Безлимитная перемотка</div>
                                </div>
                                <div className="functionsGroup__item">
                                    <div className="item_inline functionsGroup__item-icon icon-butterfly_black"></div>
                                    <div className="item_inline functionsGroup__item-title">Никакой рекламы</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="main-tryIt">
                        <div className="main-content">
                            <div className="main-tryIt__title-try">Попробуйте!</div>
                            <div className="main-tryIt__title-free">Это бесплатно</div>

                            <div className="installBtn installBtn_tryIt appStoreBtn">
                                <a href="https://itunes.apple.com/ru/app/muzyka-dla-iphone-besplatno/id833449999?mt=8" target="_blank" />
                            </div>

                        </div>
                    </div>
                    <div className="main-partners">
                        <div className="main-content">
                            <div className="main-partners__title">Особые условия для клиентов наших партнеров</div>

                            <div className="main-partners__table"></div>

                            <div className="main-links">
                                <a className="main-links_bold" href="http://zvooq.com/code" target="_blank">У&nbsp;меня есть промокод</a>
                                <a className="main-links_normal" href="http://zvooq.com" target="_blank">Стать нашим партнером</a>
                                <a className="main-links_normal" href="http://dreamindustries.co/wanted/" target="_blank">Работать у&nbsp;нас</a>
                                <a className="main-links_normal" href="mailto:helpme@zvooq.com" target="_blank">Пообщаться с&nbsp;нашим support</a>

                                <a className="main-links__normal android" href="https://play.google.com/store/apps/details?id=com.zvooq.openplay&hl=en" target="_blank">Zvooq для Android</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

ReactDOM.render(< MainIos />, document.getElementById('page-content') );
