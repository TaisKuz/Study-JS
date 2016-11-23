import './../stylus/main.styl';

import { InstallBox } from './installBox.js';
import { ColumnBox } from './columnBox.js';
import { LoginPopup } from './loginPopup/loginPopup.js';

var btns = [
    {
        className: ' btn-app-store',
        href: 'https://itunes.apple.com/ru/app/muzyka-dla-iphone-besplatno/id833449999?mt=8'
    },
    {
        className: ' btn-google-play',
        href: 'https://play.google.com/store/apps/details?id=com.zvooq.openplay&hl=en'
    }
];

var columns = [
    {
        src: '/img/icon-cherry.svg',
        alt: 'icon-cherry',
        title: 'Совершенно бесплатно',
        description: 'Слушайте любую музыку<br/>при наличии интернета!'
    },
    {
        src: '/img/icon-plane.svg',
        alt: 'icon-plane',
        title: 'Любимые треки всегда с&nbsp;вами',
        description: 'Ваша коллекция автоматически сохраняется на&nbsp;компьютере и\&nbsp;на&nbsp;телефоне. Берите её&nbsp;с&nbsp;собой и&nbsp;слушайте где угодно.'
    },
    {
        src: '/img/icon-notes.svg',
        alt: 'icon-notes',
        title: 'Музыка для любой ситуации',
        description: 'Вам не&nbsp;обязательно быть экспертом в&nbsp;музыке. Наши редакторы создали плейлисты на&nbsp;все случаи жизни'
    },
    {
        src: '/img/icon-heart.svg',
        alt: 'icon-heart',
        title: 'Рекомендации по&nbsp;вашему вкусу',
        description: 'Вы&nbsp;легко найдёте свою<br/>любимую музыку и&nbsp;откроете<br/>для себя много нового'
    }
];

var MainPage = React.createClass({

    getInitialState: function() {
        return {
            showLoginPopup: false
        };
    },

    loginPopupHandler: function(){
        this.setState({ showLoginPopup: !this.state.showLoginPopup });
    },

    render() {
        return (
            <div className="main">
                <div className="main-containerWrapper">
                    <div className="main-logos">
                        <div className="main-logos-zvooq">
                            <a className="main-logos-zvooq__link" href="http://zvooq.com" target="_blank" />
                        </div>
                        <div className="main-logos-shazam">
                            <a className="main-logos-shazam__link" href="http://www.shazam.com" target="_blank" />
                        </div>
                    </div>
                    <div className="main-pageTitle">
                        Чтобы попробовать новые возможности,<br/>
                        <div className="main-pageTitle-singIn" onClick={this.loginPopupHandler}>войдите </div>
                        в&nbsp;бесплатное приложение Zvooq
                    </div>

                    <div className="main-phonesGroup">
                        <div className="main-phonesGroup-phones">
                            <div className="iphone-white"/>
                            <div className="iphone-black"/>
                        </div>
                        <div className="main-phonesGroup-install">
                            <div className="title-now">Теперь ваши открытия будут всегда под рукой!</div>
                            <div className="title-shazam">Вы&nbsp;сможете Shazamить треки прямо из&nbsp;Zvooq сразу слушать их&nbsp;и&nbsp;моментально добавлять в&nbsp;свою коллекцию.</div>

                            <InstallBox btns={btns} positionClass="header__"/>
                        </div>
                    </div>
                    <div className="main-zvooq-logo">
                        <a className="main-zvooq-logo__link" href="http://zvooq.com" target="_blank" />
                    </div>
                    <div className="main-title-freeApp">Бесплатное приложение,<br/>с которым слушать музыку легко</div>
                    <div className="main-title-numberOne">Бесплатное музыкальное приложение &#8470;1&nbsp;в AppStore</div>

                    <ColumnBox columns={columns}/>

                </div>
                <div className="main-footer">

                    <InstallBox btns={btns} positionClass="footer__"/>

                </div>
                {this.state.showLoginPopup && <LoginPopup onClickClose={this.loginPopupHandler} />}
            </div>
        );
    }
});

ReactDOM.render(< MainPage />, document.getElementById('page-content') );
