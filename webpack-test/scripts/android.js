import './../stylus/android.styl';

// href="https://play.google.com/store/apps/details?id=com.zvooq.openplay&hl=en"
//переименовать в андройд и ios сделать отдельными компонентами
// импорт стиля только один, все шрифты и остальное импортить внутри css
var MainAndroid = React.createClass({

    render() {
        return (
            <div className="main">
                <div className="main-containerWrapper">
                    <div className="main__mini-phones main__mini-phones_android"></div>

                    <div className="main-top">
                        <div className="main-top_gradient"></div>
                        <div className="main-content">

                            <img className="zvooq-logo" src="/img/android/zvooq-logo_android.png" alt="Zvooq-logo" />
                            <div className="main-top__title-Zvooq"></div>

                            <div className="installBtn installBtn_top googlePlayBtn">
                                <a href="https://play.google.com/store/apps/details?id=com.zvooq.openplay&hl=en" target="_blank" />
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
                                    <div className="functionsGroup__item-icon icon-star_color"></div>
                                    <div className="functionsGroup__item-title">Популярная музыка и&nbsp;новинки в&nbsp;одном месте</div>
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

                                <div className="functionsGroup__item android">
                                    <div className="functionsGroup__item-icon icon-lightning_color"></div>
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
                                    {/*// эконки разные*/}
                                    <div className="functionsGroup__item-icon icon-download_black"></div>
                                    <div className="functionsGroup__item-title">Скачивание музыки в&nbsp;телефон</div>
                                </div>
                                <div className="functionsGroup__item">
                                    <div className="functionsGroup__item-icon icon-plane_black"></div>
                                    <div className="functionsGroup__item-title">Прослушивание без интернета</div>
                                </div>
                                <div className="functionsGroup__item">
                                    <div className="functionsGroup__item-icon icon-rewind_black"></div>
                                    <div className="functionsGroup__item-title">Безлимитная перемотка</div>
                                </div>
                                <div className="functionsGroup__item">
                                    <div className="functionsGroup__item-icon icon-diamond_black"></div>
                                    <div className="functionsGroup__item-title">Музыка в&nbsp;высоком качстве</div>
                                </div>
                                <div className="functionsGroup__item">
                                    <div className="functionsGroup__item-icon icon-butterfly_black"></div>
                                    <div className="functionsGroup__item-title">Никакой рекламы</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="main-tryIt">
                        <div className="main-content">
                            <div className="main-tryIt__title-try">Попробуйте!</div>
                            <div className="main-tryIt__title-free">Это бесплатно</div>

                            <div className="installBtn installBtn_tryIt googlePlayBtn">
                                <a href="https://play.google.com/store/apps/details?id=com.zvooq.openplay&hl=en" target="_blank" />
                            </div>

                        </div>
                    </div>
                    <div className="main-partners">
                        <div className="main-content">
                            <div className="main-partners__title">Особые условия для клиентов наших партнеров</div>
                            <div className="main-partners-table">
                                {/*// заменить все вектором*/}
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
                                {/*//  -------------------*/}
                            </div>
                            <div className="main-links">
                                <a className="main-links_bold" href="http://zvooq.com/code" target="_blank">У&nbsp;меня есть промокод</a>
                                <a className="main-links_normal" href="http://zvooq.com" target="_blank">Стать нашим партнером</a>
                                <a className="main-links_normal" href="http://dreamindustries.co/wanted/" target="_blank">Работать у&nbsp;нас</a>
                                <a className="main-links_normal" href="http://zvooq.com" target="_blank">Пообщаться с&nbsp;нашим support</a>

                                <a className="main-links_normal android" href="mailto:saveme@zvooq.com" target="_blank">Zvooq для <em>Android</em></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

ReactDOM.render(< MainAndroid />, document.getElementById('page-content') );
