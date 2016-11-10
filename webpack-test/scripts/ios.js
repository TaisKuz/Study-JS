import './../stylus/ios.styl';

var MainIos = React.createClass({

    render() {
        return (
            <div className="main">
                <div className="main-containerWrapper">

                    <div className="main-top">
                        <div className="main-top__mini-phones"></div>
                        <div className="main-top_gradient"></div>
                        <div className="main-top__best-stiсker main-top__best-stiсker_up">
                            <div className="stiсker-text">
                                Лучшее<br/>
                                музыкальное<br/>
                                приложение<br/>
                                <img className="AppStore" src="/img/ios/AppStore.png" alt="AppStore" /><br/>
                                2015
                            </div>
                        </div>

                        <div className="main-content">
                            <img className="zvooq-logo" src="/img/ios/zvooq-logo_ios.svg" alt="Zvooq-logo" />
                            <div className="main-top__title-Zvooq"></div>

                            <div className="installBtn installBtn_top appStoreBtn">
                                <a href="https://itunes.apple.com/ru/app/muzyka-dla-iphone-besplatno/id833449999?mt=8" target="_blank" />
                            </div>

                            <div className="main-top__title-music" >
                                Включить<br/>музыку<span className="icon-note"/><br/>легко!
                            </div>

                            <div className="main-top__title-listenFree" >Слушайте всё<br/>бесплатно<br/>и&nbsp;без регистрации</div>
                            <div className="main-top__title-torrents">Больше не&nbsp;нужны торренты,<br/>
                                социальные сети или пиратские<br/>приложения-однодневки.
                            </div>
                            <div className="main-top__title-trial">В&nbsp;бесплатном режме можно<br/>
                                слушать всю музыку бесконечно<br/>
                                долго и&nbsp;в&nbsp;любом объеме.
                            </div>
                            <div className="main-top-group25">
                                <div className="main-top-group25__title-25">25</div>
                                <div className="main-top-group25__title-million">миллионов треков</div>
                            </div>

                            <div className="main-top-playGroup">
                                <div className="play-home"></div>
                                <div className="play-vk"></div>
                                <div className="play-training"></div>
                            </div>
                            <div className="main-top__title-thousand">Тысячи готовых<br/>плейлистов для<br/>любого случая<br/>в&nbsp;жизни</div>
                            <div className="main-top__title-oneClick">
                                Одним нажатием включайте<br/>
                                готовые плейлисты: когда весело<br/>
                                или грутсно, чтобы не&nbsp;скучать в<br/>
                                пробках или метро, выложиться в<br/>
                                спортзале или сфокусироваться<br/>
                                на&nbsp;работе.
                            </div>
                            <div className="main-top-heartWaves"></div>
                            <div className="main-top__title-smart">Умная Коллекция<br/>для вашей музыки</div>
                            <div className="main-top__title-allULike">
                                Все, что вам понравится, можно<br/>
                                сохранять в&nbsp;Коллецию, которая сама<br/>
                                превращает свалку из&nbsp;любимой музыки<br/>
                                в&nbsp;место, где вы&nbsp;ещё быстрее найдете<br/>
                                всё, что нужно.
                            </div>
                            <div className="main-top__title-etc">...а также</div>
                            <div className="main-top-functionsGroup">
                                <div className="functionsGroup__item">
                                    <div className="item_inline functionsGroup__item-icon icon-star_color"></div>
                                    <div className="item_inline functionsGroup__item-title">Популярная музыка и&nbsp;новинки<br/>в&nbsp;одном месте</div>
                                </div>
                                <div className="functionsGroup__item">
                                    <div className="item_inline functionsGroup__item-icon icon-butterfly_color"></div>
                                    <div className="item_inline functionsGroup__item-title">Поиск, который вас понимает</div>
                                </div>
                                <div className="functionsGroup__item">
                                    <div className="item_inline functionsGroup__item-icon icon-shazam_color"></div>
                                    <div className="item_inline functionsGroup__item-title">Удобное прослушивание<br/>своих Shazamов</div>
                                </div>
                                <div className="functionsGroup__item">
                                    <div className="item_inline functionsGroup__item-icon icon-cloud_color"></div>
                                    <div className="item_inline functionsGroup__item-title">Кэширование, чтобы слушать<br/>музыку без помех</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="main-premium">
                        <div className="main-content">
                            <div className="icon-cherry"></div>
                            <div className="main-premium__title">Премиум-<br/>возможности:</div>
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
                            <div className="main-partners__title">Особые условия<br/>для клиентов<br/>наших партнеров</div>

                            <div className="main-partners__table"></div>

                            <div className="main-links">
                                <a className="main-links_bold" href="http://zvooq.com/code" target="_blank">У&nbsp;меня есть промокод</a>
                                <a className="main-links_normal" href="http://zvooq.com" target="_blank">Стать нашим партнером</a>
                                <a className="main-links_normal" href="http://dreamindustries.co/wanted/" target="_blank">Работать у&nbsp;нас</a>
                                <a className="main-links_normal" href="mailto:helpme@zvooq.com" target="_blank">Пообщаться с&nbsp;нашим support</a>

                                <a className="main-links__normal" href="https://play.google.com/store/apps/details?id=com.zvooq.openplay&hl=en" target="_blank">Zvooq для Android</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

ReactDOM.render(< MainIos />, document.getElementById('page-content') );
