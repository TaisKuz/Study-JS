"use strict";

window.onload = function() {

  var AppStoreBtn = React.createClass({ 
    render: function() {
      return (
        <div className="btn-app-store">
          <a href="https://itunes.apple.com/ru/app/muzyka-dla-iphone-besplatno/id833449999?mt=8" target="_blank"></a>
        </div>
      );
    }           
  });

  var GooglePlayBtn= React.createClass({ 
    render: function() {
      return (
        <div className="btn-google-play">
          <a href="https://play.google.com/store/apps/details?id=com.zvooq.openplay&hl=en" target="_blank"></a>
        </div>  
      );
    }   
  });

  var InstallBox = React.createClass({ 
    render: function() {
      return (
        <div className="install">
          <p>Установить приложение</p>
          <AppStoreBtn />
          <GooglePlayBtn />
        </div>
      );
    } 
  });

  var FormBox = React.createClass({  
    render: function() {
      return (
        <div className="get-phone-email">                
          <p>Получите ссылку<br/>
          для установки на&nbsp;телефон</p>

          <form className="form-phone-email">
            <input 
              type="text" 
              placeholder="Телефон или Email"
              />
            <input type="submit" value="отправить" />
          </form>  
        </div> 
      );
    } 
  });

  // var columnData = [
  //   {
  //   	id: 0, 
  //     name: "cherry", 
  //     p1: "Совершенно бесплатно", 
  //     p2: "Слушайте любую музыку при наличии интернета!"
  //   },
  //   {
  //     id: 1, 
  //     name: "plane", 
  //     p1: "Любимые треки всегда с\&nbsp;вами", 
  //     p2: "Ваша коллекция автоматически сохраняется на\&nbsp;компьютере и\&nbsp;на&nbsp;телефоне. Берите её\&nbsp;с\&nbsp;собой и\&nbsp;слушайте где угодно."
  //   },
  //   {
  //     id: 2, 
  //     name: "notes", 
  //     p1: "Музыка для любой ситуации", 
  //     p2: "Вам не\&nbsp;обязательно быть экспертом в&nbsp;музыке. Наши редакторы создали плейлисты на\&nbsp;все случаи жизни"
  //   },
  //   {
  //     id: 3, 
  //     name: "heart", 
  //     p1: "Рекомендации по\&nbsp;вашему вкусу", 
  //     p2: "Вы\&nbsp;легко найдёте свою любимую музыку и\&nbsp;откроете для себя много нового"
  //   }, 
  // ];      

  var ColumnBox = React.createClass({ 
    render: function() {

      return (
        <div className="column">
          <div className="icon-wrapper"> 
            <img src={"img/icon-" + columnData.name + ".svg"} alt={"icon-" + columnData.name} /> 
            <p>{columnData.p1}</p> 
            <p>{columnData.p2}</p>  
          </div>    
        </div>
      );
    }           
  });

  var MainPage = React.createClass({ 
    render: function() {
      return (
        <div className="main-container-wrapper">
          <div className="row-1-logos">
            <a href="http://zvooq.com" target="_blank"> <img src="img/Zvooq-logo.svg" alt="Zvooq-logo" /> </a>
            <a href="http://www.shazam.com" target="_blank"> <img src="img/Shazam-logo.png" alt="Shazam-logo" /> </a>     
          </div>
          <p>Чтобы попробовать новые возможности,<br/>
            войдите в&nbsp;бесплатное приложение Zvooq</p>
          <div className="row-2">
            <div className="column column-1">
              <img src="img/iphone-white.png" alt="iphone-white" />
              <img src="img/iphone-black.png" alt="iphone-black" /> 
            </div>
            <div className="column column-2">
              <p>Теперь ваши открытия будут всегда под рукой!</p>
              <p>Вы&nbsp;сможете Shazamить треки прямо из&nbsp;Zvooq сразу слушать 
                их&nbsp;и&nbsp;моментально добавлять 
                в&nbsp;свою коллекцию.</p>



            </div>
          </div>
          <div className="row-3">
            <a href="http://zvooq.com" target="_blank"><img src="img/Zvooq-logo.svg" alt="Zvooq-logo" /></a>
            <p>Бесплатное приложение,<br/>
              с которым слушать музыку легко</p>
            <p>Бесплатное музыкальное приложение &#8470;1&nbsp;в AppStore</p>
          </div>
          <div className="row-4"> 


                      
          </div>
        </div>

        <footer>
          <div className="footer-wrapper">



          </div>
        </footer>
      );
    }   
  });

  ReactDOM.render(
    <MainPage />,
    document.getElementById('content')
  );

}