require("./../css/style.css");


var InstallBox = require('./installBox.js');
var ColumnBox = require('./columnBox.js');

var btns = [
    {
        className: "btn-app-store",
        href: "https://itunes.apple.com/ru/app/muzyka-dla-iphone-besplatno/id833449999?mt=8"
    },
    {
        className: "btn-google-play",
        href: "https://play.google.com/store/apps/details?id=com.zvooq.openplay&hl=en"
    }
];

var columns = [
    {
        src: "/img/icon-cherry.svg",
        alt: "icon-cherry",
        title: 'Совершенно бесплатно',
        description: 'Слушайте любую музыку при наличии интернета!'
    },
    {
        src: "/img/icon-plane.svg",
        alt: "icon-plane",
        title: 'Любимые треки всегда с&nbsp;вами',
        description: 'Ваша коллекция автоматически сохраняется на&nbsp;компьютере и\&nbsp;на&nbsp;телефоне. Берите её&nbsp;с&nbsp;собой и&nbsp;слушайте где угодно.'
    },
    {
        src: "/img/icon-notes.svg",
        alt: "icon-notes",
        title: "Музыка для любой ситуации",
        description: "Вам не&nbsp;обязательно быть экспертом в&nbsp;музыке. Наши редакторы создали плейлисты на&nbsp;все случаи жизни"
    },
    {
        src: "/img/icon-heart.svg",
        alt: "icon-heart",
        title: "Рекомендации по&nbsp;вашему вкусу",
        description: "Вы&nbsp;легко найдёте свою<br/>любимую музыку и&nbsp;откроете<br/>для себя много нового"
    }
];

var MainPage = React.createClass({

    render: function() {
        return (
            <div className="mainPage">
                <div className="main-container-wrapper">
                    <div className="row-1-logos">
                        <a href="http://zvooq.com" target="_blank"> <img src="/img/Zvooq-logo.svg" alt="Zvooq-logo" /> </a>
                        <a href="http://www.shazam.com" target="_blank"> <img src="/img/Shazam-logo.png" alt="Shazam-logo" /> </a>
                    </div>
                    <p>Чтобы попробовать новые возможности,<br/>войдите в&nbsp;бесплатное приложение Zvooq</p>

                    <div className="row-2">
                        <div className="column column-1">
                            <img src="/img/iphone-white.png" alt="iphone-white" />
                            <img src="/img/iphone-black.png" alt="iphone-black" />
                        </div>
                        <div className="column column-2">
                            <p>Теперь ваши открытия будут всегда под рукой!</p>
                            <p>Вы&nbsp;сможете Shazamить треки прямо из&nbsp;Zvooq сразу слушать их&nbsp;и&nbsp;моментально добавлять в&nbsp;свою коллекцию.</p>

                            <InstallBox btns={btns}/>
                        </div>
                    </div>
                    <div className="row-3">
                        <a href="http://zvooq.com" target="_blank"><img src="/img/Zvooq-logo.svg" alt="Zvooq-logo" /></a>
                        <p>Бесплатное приложение,<br/>с которым слушать музыку легко</p>
                        <p>Бесплатное музыкальное приложение &#8470;1&nbsp;в AppStore</p>
                    </div>

                    <ColumnBox columns={columns}/>
                </div>
                <div className="footer">
                    <InstallBox btns={btns}/>
                </div>
            </div>
        );
    }
});

ReactDOM.render(
<MainPage />,
    document.getElementById('content')
);