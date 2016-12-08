import './../stylus/main.styl';

import { InstallBox } from './installBox.js';
import { ColumnBox } from './columnBox.js';
import { LoginPopup } from './loginPopup/loginPopup.js';

let btns = [
    {
        buttonClass: '-apple',
        href: 'https://itunes.apple.com/ru/app/muzyka-dla-iphone-besplatno/id833449999?mt=8'
    },
    {
        buttonClass: '-google',
        href: 'https://play.google.com/store/apps/details?id=com.zvooq.openplay&hl=en'
    }
];

let columns = [
    {
        iconClass: 'cherry',
        title: 'Совершенно бесплатно',
        description: 'Слушайте любую музыку<br/>при наличии интернета!'
    },
    {
        iconClass: 'plane',
        title: 'Любимые треки всегда с&nbsp;вами',
        description: 'Ваша коллекция автоматически сохраняется на&nbsp;компьютере и\&nbsp;на&nbsp;телефоне. Берите её&nbsp;с&nbsp;собой и&nbsp;слушайте где угодно.'
    },
    {
        iconClass: 'notes',
        title: 'Музыка для любой ситуации',
        description: 'Вам не&nbsp;обязательно быть экспертом в&nbsp;музыке. Наши редакторы создали плейлисты на&nbsp;все случаи жизни'
    },
    {
        iconClass: 'heart',
        title: 'Рекомендации по&nbsp;вашему вкусу',
        description: 'Вы&nbsp;легко найдёте свою<br/>любимую музыку и&nbsp;откроете<br/>для себя много нового'
    }
];

let MainPage = React.createClass({

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
                <div className="main-contentWrapper">
                    <div className="main-topLogos">
                        <div className="main-zvooqLogo main-zvooqLogo_topLogos">
                            <a className="main-zvooqLogoLink" href="http://zvooq.com" target="_blank" />
                        </div>
                        <div className="main-shazamLogo">
                            <a className="main-shazamLogoLink" href="http://www.shazam.com" target="_blank" />
                        </div>
                    </div>
                    <div className="main-pageTitle">
                        Чтобы попробовать новые возможности,<br/>
                        <div className="main-singIn" onClick={this.loginPopupHandler}>войдите </div>
                        в&nbsp;бесплатное приложение Zvooq
                    </div>

                    <div className="main-phonesGroupWrapper">
                        <div className="main-phonesGroup">
                            <div className="main-iphone main-iphone_white" />
                            <div className="main-iphone main-iphone_black" />
                        </div>
                        <div className="main-installGroup">
                            <div className="main-installGroupTitle">Теперь ваши открытия будут всегда под рукой!</div>
                            <div className="main-installGroupDescription">Вы&nbsp;сможете Shazamить треки прямо из&nbsp;Zvooq сразу слушать их&nbsp;и&nbsp;моментально добавлять в&nbsp;свою коллекцию.</div>

                            <InstallBox btns={btns} positionClass="_installGroup" />
                            {/*<InstallBox btns={btns} positionClass="header__" />*/}
                        </div>
                    </div>
                    <div className="main-zvooqLogoWrapper">
                        <div className="main-zvooqLogo main-zvooqLogo_middle">
                            <a className="main-zvooqLogoLink" href="http://zvooq.com" target="_blank" />
                        </div>
                    </div>
                    <div className="main-freeAppTitle">Бесплатное приложение, с&nbsp;которым слушать музыку легко</div>
                    <div className="main-freeAppDescription">Бесплатное музыкальное приложение &#8470;1&nbsp;в AppStore</div>

                    <ColumnBox columns={columns}/>

                </div>
                <div className="main-footer">
                    <InstallBox btns={btns} positionClass="_footer"/>

                    {/*<InstallBox btns={btns} positionClass="footer__"/>*/}

                </div>
                {this.state.showLoginPopup && <LoginPopup onClickClose={this.loginPopupHandler} />}
            </div>
        );
    }
});

ReactDOM.render( <MainPage />, document.getElementById('pageContent') );
