import './../stylus/desktop.styl';

var Desktop = React.createClass({

    render() {
        return (
            <div className="desktop">
                <div className="desktop-containerWrapper">
                    <div className="desktop-arrows">
                        <div className="desktop-content">
                            <div className="item_inline desktop-arrow desktop-arrow_left">
                                <a className="item_inline arrow__title" href="http://zvooq.com/" target="_blank">Вернуться к музыке</a>
                            </div>
                            <div className="item_inline desktop-arrow desktop-arrow_right">
                                <a className="item_inline arrow__title" href="http://zvooq.com/code" target="_blank">У меня есть промокод</a>
                            </div>
                        </div>
                    </div>
                    <div className="desktop-top">
                        <div className="desktop-content">
                            <div className="zvooq-logo" />
                            <div className="title-Zvooq" />
                            <div className="title-number1">Музыкальное приложение &#8470;&nbsp;1</div>

                            <div className="desktop-top__title-music" >
                                Включить музыку<span className="icon-note"/> легко!
                            </div>

                            <form className="desktop-top-getSms_form">
                                <div className="getSms_form__title">Получите СМС со ссылкой для быстрой установки приложения. Это бесплатно.</div>
                                <input type="text" placeholder="+7 910 123-34-56" className="getSms_form_input" />
                                <button type="submit" value="Получить" className="getSms_form_submit" >Получить</button>
                            </form>
                            <div className="desktop-top-phones">
                                <div className="best-stiсker">
                                    <div className="stiсker-text">
                                        Лучшее<br/>
                                        музыкальное<br/>
                                        приложение<br/>
                                        <div className="AppStore" />
                                        2015
                                    </div>
                                </div>
                            </div>
                            <div className="desktop-top__title-listenFree" >Слушайте всё бесплатно<br/>и&nbsp;без регистрации</div>
                            <div className="desktop-top__title-torrents">
                                Больше не&nbsp;нужны торренты, социальные сети или<br />
                                пиратские приложения-однодневки с неполным каталогом.
                            </div>
                            <div className="desktop-top__title-trial">
                                В&nbsp;бесплатном режме можно слушать всю музыку<br/>
                                бесконечно долго и&nbsp;в&nbsp;любом объеме.
                            </div>
                            <div className="desktop-top-group25">
                                <div className="desktop-top-group25__title-25">25,000,000</div>
                                <div className="desktop-top-group25__title-million">треков, включая все горячие новинки, пополярные треки, топы Shazam и ВКонтакте</div>
                            </div>

                            <div className="desktop-top-playGroup" />
                            <div className="desktop-top__title-thousand">Тысячи готовых плейлистов<br />для любого случая в&nbsp;жизни</div>
                            <div className="desktop-top__title-oneClick">
                                Одним нажатием включайте готовые плейлисты: когда весело или грутсно,<br />
                                чтобы не&nbsp;скучать в&nbsp;пробках или метро, выложиться в&nbsp;спортзале или<br />
                                сфокусироваться на&nbsp;работе.
                            </div>
                            <div className="desktop-top-heartWaves" />
                            <div className="desktop-top__title-smart">Умная Коллекция для вашей музыки</div>
                            <div className="desktop-top__title-allULike">
                                Все, что вам понравится, можно сохранять в&nbsp;Коллецию, которая<br />
                                сама превращает свалку из&nbsp;любимой музыки в&nbsp;место, где вы ещё<br />
                                быстрее найдете всё, что нужно.
                            </div>

                            <div className="desktop-premium">
                                <div className="desktop-premium__title">Премиум-возможности:</div>
                                <div className="desktop-premium-functionsGroup">
                                    <div className="premiumGroup__item">
                                        <div className="premiumGroup__item-icon icon-cloud" />
                                        <div className="premiumGroup__item-title ">Скачивание<br/>музыки в&nbsp;телефон</div>
                                    </div>
                                    <div className="premiumGroup__item">
                                        <div className="premiumGroup__item-icon icon-plane" />
                                        <div className="premiumGroup__item-title ">Прослушивание<br/>без интернета</div>
                                    </div>
                                    <div className="premiumGroup__item">
                                        <div className="premiumGroup__item-icon icon-diamond" />
                                        <div className="premiumGroup__item-title">Высокое<br/>качство</div>
                                    </div>
                                    <div className="premiumGroup__item">
                                        <div className="premiumGroup__item-icon icon-rewind"></div>
                                        <div className="premiumGroup__item-title">Безграничная<br/>перемотка</div>
                                    </div>
                                    <div className="premiumGroup__item">
                                        <div className="premiumGroup__item-icon icon-butterfly" />
                                        <div className="premiumGroup__item-title">... и никакой<br/>рекламы!</div>
                                    </div>
                                </div>

                                <button type="submit" value={"Попробовать бесплатно"} className="desktop-premium__button">Попробовать бесплатно</button>
                            </div>

                            <div className="desktop-top-etc">
                                <div className="desktop-top-etc__title">...а также</div>

                                <div className="functionsGroup">
                                    <div className="functionsGroup__item">
                                        <div className="item_inline functionsGroup__item-column column_left">
                                            <div className="item_inline functionsGroup__item-icon item-icon-logos" />
                                            <div className="item_inline functionsGroup__item-icon-title">
                                                Популярное и&nbsp;новинки<br />
                                                собраны в&nbsp;одном месте
                                            </div>
                                        </div>
                                        <div className="item_inline functionsGroup__item-column column_right">
                                            <div className="functionsGroup__item-title item_inline">
                                                Все горячие новинки, популярные треки, чарты UK, Billboard,<br/>
                                                различных стран мира, а также топы Shazam и ВКонтакте<br/>
                                                собраны в одном приложении.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="functionsGroup__item">
                                        <div className="item_inline functionsGroup__item-column column_left">
                                            <div className="item_inline functionsGroup__item-icon item-icon-logos" />
                                            <div className="item_inline functionsGroup__item-icon-title">
                                                Поиск, который вас понимает
                                            </div>
                                        </div>
                                        <div className="item_inline functionsGroup__item-column column_right">
                                            <div className="functionsGroup__item-title item_inline">
                                                Поиск позволяет искать музыку не только когда вы знаете<br/>
                                                конкретных артистов, названия альбомов и треков, но и при<br/>
                                                помощи простых запросов: &laquo;вечеринка&raquo;, &laquo;грустно&raquo;,<br/>
                                                &laquo;спортзал&raquo; и так далее.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="functionsGroup__item">
                                        <div className="item_inline functionsGroup__item-column column_left">
                                            <div className="item_inline functionsGroup__item-icon item-icon-logos" />
                                            <div className="item_inline functionsGroup__item-icon-title">
                                                Удобное прослушивание<br />
                                                своих Shazamов
                                            </div>
                                        </div>
                                        <div className="item_inline functionsGroup__item-column column_right">
                                            <div className="functionsGroup__item-title item_inline">
                                                Легкий способ сохранить ваши Shazamы. Распознавайте<br/>
                                                заинтересовавшие вас треки прямо из Zvooq и моментально<br/>
                                                добавляйте их в Коллекцию.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="functionsGroup__item">
                                        <div className="item_inline functionsGroup__item-column column_left">
                                            <div className="item_inline functionsGroup__item-icon item-icon-logos" />
                                            <div className="item_inline functionsGroup__item-icon-title">
                                                Кэширование для<br/>
                                                прослушивания без помех
                                            </div>
                                        </div>
                                        <div className="item_inline functionsGroup__item-column column_right">
                                            <div className="functionsGroup__item-title item_inline">
                                                Включённый трек продолжает играть, даже если интернет<br/>
                                                нестабилен. В лифте, в тоннеле или в метро &mdash; где бы вы ни<br/>
                                                оказались, музыка не остановится.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="functionsGroup__item">
                                        <div className="item_inline functionsGroup__item-column column_left">
                                            <div className="item_inline functionsGroup__item-icon item-icon-android " />
                                            <div className="item_inline functionsGroup__item-icon-title">
                                                Экономия мобильного<br/>
                                                трафика
                                            </div>
                                        </div>
                                        <div className="item_inline functionsGroup__item-column column_right">
                                            <div className="functionsGroup__item-title item_inline">
                                                Возможность сжимать трафик при прослушивании музыки<br/>
                                                почти вдвое без существенного ущрба для ее качества.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="functionsGroup__item">
                                        <div className="item_inline functionsGroup__item-column column_left">
                                            <div className="item_inline functionsGroup__item-icon item-icon-globe" />
                                            <div className="item_inline functionsGroup__item-icon-title">
                                                Любимые треки всегда с вами
                                            </div>
                                        </div>
                                        <div className="item_inline functionsGroup__item-column column_right">
                                            <div className="functionsGroup__item-title item_inline">
                                                Автоматическая синхронизация в приложении и на сайте:<br/>
                                                вся ваша музыка на любом устройстве.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="desktop-partners">
                    <div className="desktop-containerWrapper">
                        <div className="desktop-content">
                            <div className="desktop-partners__title">
                                Особые условия для клиентов<br />
                                наших партнеров
                            </div>
                            <div className="desktop-partners__table" />
                            <div className="desktop-linksGroupe">
                                <a className="desktop-link" href="http://zvooq.com/code" target="_blank">У&nbsp;меня есть промокод</a>
                                <a className="desktop-link" href="http://zvooq.com" target="_blank">Стать нашим партнером</a>
                                <a className="desktop-link" href="http://dreamindustries.co/wanted/" target="_blank">Работать у&nbsp;нас</a>
                                <a className="desktop-link" href="mailto:saveme@zvooq.com" target="_blank">Пообщаться с&nbsp;нашим support</a>
                                <div className="desktop-copyright">&copy; Zvooq, 2001-2016</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="desktop-footer">
                    <div className="desktop-containerWrapper">
                        <div className="desktop-content">
                            <div className="desktop-footer__icon-logos" />
                            <div className="desktop-footer__title">
                                Получите СМС со ссылкой для быстрой<br />
                                установки приложения. Это бесплатно.
                            </div>
                            <form className="desktop-footer__form">
                                <input className="desktop-footer__form-input"  type="text" placeholder="+7 910 123-34-56" />
                                <button className="desktop-footer__form-submit"  type="submit" value="Получить">Получить</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

ReactDOM.render(< Desktop />, document.getElementById('page-content') );
