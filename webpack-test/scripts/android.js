import './../stylus/android.styl';

var MainAndroid = React.createClass({

    render() {
        return (
            <div className="main">
                <div className="main-containerWrapper">
                    <div className="main-top">
                        <div className="main-top__mini-phones"></div>
                        <div className="main-top_gradient"></div>

                        <div className="main-content">
                            <img className="zvooq-logo" src="/img/android/zvooq-logo_android.png" alt="Zvooq-logo" />
                            <div className="main-top__title-Zvooq"></div>

                            <div className="installBtn installBtn_top googlePlayBtn">
                                <a href="https://play.google.com/store/apps/details?id=com.zvooq.openplay&hl=en" target="_blank" />
                            </div>

                            <div className="main-top__title-music" >
                                Включить<br/>музыку<span className="icon-note"/><br/>легко!

                            </div>

                            <div className="main-top__title-listenFree" >Слушайте всё бесплатно и&nbsp;без регистрации</div>
                            <div className="main-top__title-torrents">Больше не&nbsp;нужны торренты,<br />
                                социальные сети или пиратские<br />
                                приложения-однодневки.
                            </div>
                            <div className="main-top__title-trial">В&nbsp;бесплатном режме можно слушать<br />
                                всю музыку бесконечно долго и&nbsp;в<br />
                                любом объеме.
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
                            <div className="main-top__title-thousand">Тысячи готовых<br />плейлистов для любого<br />случая в&nbsp;жизни</div>
                            <div className="main-top__title-oneClick">Одним нажатием включайте готовые<br />плейлисты: когда весело или грутсно,<br />
                                чтобы не&nbsp;скучать в&nbsp;пробках или метро,<br />выложиться в&nbsp;спортзале или<br />сфокусироваться на&nbsp;работе.</div>
                            <div className="main-top-heartWaves"></div>
                            <div className="main-top__title-smart">Умная Коллекция<br />для вашей музыки</div>
                            <div className="main-top__title-allULike">Все, что вам понравится, можно сохранять<br />в&nbsp;Коллецию,
                                которая сама превращает<br />свалку из&nbsp;любимой музыки в&nbsp;место, где вы<br />ещё быстрее найдете всё, что нужно.</div>
                            <div className="main-top__title-etc">...а также</div>

                            <div className="main-top-functionsGroup">
                                <div className="functionsGroup__item">
                                    <div className="functionsGroup__item-icon icon-star_color item_inline"></div>
                                    <div className="functionsGroup__item-title item_inline">Популярная музыка и&nbsp;новинки<br />в&nbsp;одном месте</div>
                                </div>
                                <div className="functionsGroup__item">
                                    <div className="functionsGroup__item-icon icon-butterfly_color item_inline"></div>
                                    <div className="functionsGroup__item-title item_inline">Поиск, который вас понимает</div>
                                </div>
                                <div className="functionsGroup__item">
                                    <div className="functionsGroup__item-icon icon-shazam_color item_inline"></div>
                                    <div className="functionsGroup__item-title item_inline">Удобное прослушивание своих<br />Shazamов</div>
                                </div>
                                <div className="functionsGroup__item">
                                    <div className="functionsGroup__item-icon icon-cloud_color item_inline"></div>
                                    <div className="functionsGroup__item-title item_inline">Кэширование, чтобы слушать музыку<br />без помех</div>
                                </div>

                                <div className="functionsGroup__item android">
                                    <div className="functionsGroup__item-icon icon-lightning_color item_inline"></div>
                                    <div className="functionsGroup__item-title item_inline">Сжатие мобиьного трафика</div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="main-premium">
                        <div className="main-content">
                            <div className="icon-cherry"></div>
                            <div className="main-premium__title">Премиум-<br />возможности:</div>
                            <div className="main-premium-functionsGroup">
                                <div className="functionsGroup__item">

                                    <div className="functionsGroup__item-icon icon-download_black item_inline"></div>
                                    <div className="functionsGroup__item-title item_inline">Скачивание музыки в&nbsp;телефон</div>
                                </div>
                                <div className="functionsGroup__item">
                                    <div className="functionsGroup__item-icon icon-plane_black item_inline"></div>
                                    <div className="functionsGroup__item-title item_inline">Прослушивание без интернета</div>
                                </div>
                                <div className="functionsGroup__item">
                                    <div className="functionsGroup__item-icon icon-rewind_black item_inline"></div>
                                    <div className="functionsGroup__item-title item_inline">Безлимитная перемотка</div>
                                </div>
                                <div className="functionsGroup__item">
                                    <div className="functionsGroup__item-icon icon-diamond_black item_inline"></div>
                                    <div className="functionsGroup__item-title item_inline">Музыка в&nbsp;высоком качстве</div>
                                </div>
                                <div className="functionsGroup__item">
                                    <div className="functionsGroup__item-icon icon-butterfly_black item_inline"></div>
                                    <div className="functionsGroup__item-title item_inline">Никакой рекламы</div>
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
                            <div className="main-partners__title">Особые условия<br />для клиентов наших<br />партнеров</div>
                            <div className="main-partners__table"></div>
                            <div className="main-links">
                                <a className="main-links_bold" href="http://zvooq.com/code" target="_blank">У&nbsp;меня есть промокод</a>
                                <a className="main-links_normal" href="http://zvooq.com" target="_blank">Стать нашим партнером</a>
                                <a className="main-links_normal" href="http://dreamindustries.co/wanted/" target="_blank">Работать у&nbsp;нас</a>
                                <a className="main-links_normal" href="mailto:saveme@zvooq.com" target="_blank">Пообщаться с&nbsp;нашим support</a>

                                <a className="main-links__normal" href="https://itunes.apple.com/ru/app/muzyka-dla-iphone-besplatno/id833449999?mt=8" target="_blank">Zvooq для iOS</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

ReactDOM.render(< MainAndroid />, document.getElementById('page-content') );
