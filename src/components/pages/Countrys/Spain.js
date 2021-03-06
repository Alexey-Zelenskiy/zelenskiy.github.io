import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withAuth } from '@okta/okta-react'
import Country_Europa from '../Country'
import { Button, Icon } from 'semantic-ui-react'
import left from '../../../imagesSrc/left.png'
import img from '../../../imagesSrc/norveg.jpg'
import lion1 from '../../../imagesSrc/Вид_на_вечернюю_Плаза-Майор,_Мадрид.jpg'
import lion2 from '../../../imagesSrc/Королевский_дворец_в_Мадриде,_сад_Jardines_de_Sabatini.jpg'
import prazdn from '../../../imagesSrc/Вечерний_концерт_фестиваля_Сонар.jpg'
import prazdn2 from '../../../imagesSrc/Праздник_Сан-Фермин.jpg'
import cityPhoto from '../../../imagesSrc/Памятник_Филиппу_III_на_Пласа_Майор,_Мадрид_.jpg'
import prazdn3 from '../../../imagesSrc/Живая_пирамида_в_Барселоне.jpg'
import pointer from '../../../imagesSrc/pointer.png'
import right from '../../../imagesSrc/right.png'
import down from '../../../imagesSrc/douwn.png'
import ReactWeather from 'react-open-weather'
import 'react-open-weather/lib/css/ReactWeather.css'
import WeatherIcons from 'react-weathericons'
import { Slide } from 'react-slideshow-image'
import 'react-image-gallery/styles/css/image-gallery.css'
import Navbar from '../../layout/Navbar'
import 'react-perfect-scrollbar/dist/css/styles.css'
import { YMaps, Map, GeoObject, Placemark } from 'react-yandex-maps'
import Modal from 'react-responsive-modal'
import { Dropdown, Menu } from 'semantic-ui-react'
import Slider from '../../Slider'
import Template from '../../Template'
import Citys from '../../Citys'
import { connect } from 'react-redux'
import cityPhoto1 from '../../../imagesSrc/Символ_Мадрида.jpg'
import cityPhoto2 from '../../../imagesSrc/Фонтан_Сибелес,_Мадрид.jpg'
import cityPhoto3 from '../../../imagesSrc/Фонтан_Сибелес_в_Мадриде.jpg'
import cityPhoto4 from '../../../imagesSrc/Эскориал,_Испания.jpg'
import prir1 from '../../../imagesSrc/Austria/PRIR1.jpg'
import prir2 from '../../../imagesSrc/Austria/PRIR2.jpg'
import prir3 from '../../../imagesSrc/Austria/PRIR3.jpg'

class Spain extends Component {
  state = {
    showWeather: false,
    showSlide: true,
    showMap: false,
    width: 1500,
    width1: 750,
    height: 500,
    small: true,
  }


  weatherMap() {
    const apikey = '597bea37916f4ffbb6c172914192501'
    const { showWeather, show, showText } = this.state
    this.setState({ showWeather: !showWeather, show: !show, showText: false })
  }


  async componentDidMount() {
  }

  async componentDidUpdate() {
  }


  render() {

    const properties = {
      duration: 5000,
      transitionDuration: 500,
      infinite: true,
      indicators: true,
      arrows: true,
    }

    const apikey = '597bea37916f4ffbb6c172914192501'
    const ReactWeather = require('react-open-weather').default
//Optional include of the default css styles
    require('react-open-weather/lib/css/ReactWeather.css')
    const { width, height } = this.state
    const mapState = {
      center: [40.4165000, -3.7025600], zoom: 10,
      bounds: undefined,
    }
    const mapState_city = {
      center: [50.5101, 4.2055], zoom: 10,
      bounds: undefined,
    }
    const weather = [
      <div>
        <ReactWeather
          forecast="5days"
          apikey="597bea37916f4ffbb6c172914192501"
          type="city"
          city="Madrid"
          lang="ru"/>
        <ReactWeather
          forecast="5days"
          apikey="597bea37916f4ffbb6c172914192501"
          type="city"
          city="Barcelona"
          lang="ru"/>
      </div>,
    ]
    const esdi = {
      coordinates: [50.50, 4.00],
    }


    const mainContent = (
      <Template
        photoCountry={img}
        countryInfo={'Солнечная и жизнерадостная Испания ждет туристов на пляжи Средиземного моря, горнолыжные курорты и зимний отдых на Тенерифе. Развлечения и достопримечательности от Мадрида до Канар, от Дали до Гауди, от Реала до Барсы.\n'}
        imgsrc={pointer}
        intro={<p>I need Spain — слоган Национального офиса по туризму Испании, и с этим утверждением не
          согласится разве что только закоренелый эгоист. Обоснуем: в прекрасных песчаных пляжах лучшего
          курорта Испании Канар мы нуждаемся — это раз. В самой вкусной в мире ветчине и райской амброзии —
          сангрии (как еще славить Испанию, если не с бокалом в руке!) — очень даже, это два. В дроби
          кастаньет и каблуков, вихре оборок в горошек и страстных вскриках кантаоров фламенко, которых
          Испания подарила миру, — бесспорно — это три. Во всех этих фантасмагориях, типа текущих часов и
          чешуйчатых водосточных труб (о, Испания — большая выдумщица) — еще как! — это четыре. Присовокупим
          сюда всякие приятные мелочи, как-то: недорогую и при этом вполне серьезную «горнолыжку», по которой
          Испания не глядя «делает» раскрученные Альпы, разнообразную ночную жизнь и возможность закупиться
          вещами с подиума по аутлетной цене — Испания небезосновательно гордится самыми большими и дешевыми
          шоппинг-деревнями. Дополнительный бонус, который Испания предусмотрительно подготовила для туристов,
          — виза сюда нужна «общественная» шенгенская, что позволяет без лишних хлопот заглянуть на
          денек-другой к соседям по Европе.</p>}
        countryName={'Испания'}
        mapState={mapState}
        weather={weather}
        esdi={esdi}
        countryNames={'Испании'}
        countryNames1={'Мадрида'}
        //География
        infoGeograf={<p>Испания — государство на крайнем юго-западе Европы, занимающее бо́льшую часть
          Пиренейского полуострова, Балеарские острова в Средиземном море, Канарские острова в Атлантическом
          океане. Испания — мост между двумя частями света — Европой и Африкой — и барьер, разделяющий
          Средиземное море и Атлантический океан.
        </p>}
        //Горыне лыжи
        info_block={<nav><p>Испания — это не только море и солнце, но также горы и снег. В стране есть места с
          разнообразными условиями для горнолыжного отдыха. Самые именитые курорты для горнолыжников
          расположены на границе с Францией в Пиренеях. Они делятся на Каталонские и Арагонские Пиренеи.
          Каталонские курорты славятся впечатляющими пейзажами с горными реками и озерами. Самые известные из
          них Ла-Молина, Порт-дель-Комте и Бакейра-Берет. Последний знаменит тем, что именно здесь катаются
          члены королевской семьи и испанский президент. Арагонская часть — самая высокогорная область
          Пиренеев, край национальных парков с обилием термальных источников. Это Астун, Канданча и
          Бои-Тауль.</p>
          <ul>
            <li><p>Самый высокий в Испании горнолыжный курорт — Сьерра-Невада. Он расположен на юге страны
              всего в часе езды от Средиземного моря. Здесь проходил Чемпионат мира по горным лыжам и
              условия катания соответствуют высшему международному уровню. Зимние курорты есть и в
              окрестностях Мадрида и Барселоны. Они не отличаются продолжительным сезоном и большими
              перепадами высот, зато могут похвастаться дополнительными возможностями для отдыха — там
              широкий выбор развлечений и вариантов проживания, предлагаются гастрономические и винные
              туры. Рядом с Барселоной находятся Эспот-Эски и тот же Бакейра-Берет, а с Мадридом —
              Центральная горная система: Ла-Пинилла, Навасеррада, Вальдески.</p></li>
            <li><p>Иберийская горная система располагается в провинции Сарагоса. В этом районе неглубокий
              снежный покров, но интересные высокогорные маршруты проложены среди живописных хвойных
              лесов. Здесь же располагается крупнейший горнолыжный курорт Испании — Формигал. Горная
              система Кантабрийских Кордильер охватывает Астурию, Кантабрию и северную часть Леона. Здесь
              выпадает много снега, но период катания короткий. Лучшие курорты региона — Альто-Кампо,
              Вальгранде-Пахарес, Сан-Исидро и Мансанеда.</p></li>

          </ul>
        </nav>
        }
        //Язык
        info_block_1={'Государственный язык: французский, нидерландский (фламандский) и немецкий\n' +
        '\n' +
        'Согласно конституции, население Бельгии разделено на 3 лингвистических сообщества: французское, фламандское и германоязычное. Район распространения нидерландского языка (Фландрия) расположен на севере страны и насчитывает 5,86 млн жит. (58%), французского (Валлония) - 3,29 млн (32,2%), население Брюсселя - ок. 80%, франкофонов и 20% фламандцев. На востоке Валлонии район распространения немецкого языка, где проживает 67 тыс. чел.\n' +
        '\n' +
        '\n'
        }
        //Исторя
        info_block_2={<p>Примерно 35 тысяч лет назад на территории, известной сегодня как Пиренейский
          полуостров, впервые появились людские поселения. Это были иберы, которые, согласно предположениям
          современной науки, приходятся предками басков. В период с пятого по третий века до нашей эры
          Пиренейский полуостров начали заселять кельты, смешавшиеся со временем с местными жителями. В
          сравнении с иберами, они отличались высоким культурным развитием.

          Кроме кельтов, начиная примерно со второго тысячелетия до нашей эры, территорию полуострова активно
          осваивали финикийцы и греки. Он селились в основном вдоль средиземноморского побережья. Здесь же был
          основан в качестве главного форпоста город Гадес. Ближе к 600 году до нашей эры греки начали
          переселяться на восточные земли современной Испании, где активно внедряли свою самобытную
          культуру.</p>}
        info_block_2_1={<nav>
          <li><h3 className="h3">История 5-15 веков</h3><p>Вестготы правили Пиренейским полуостровом в течение
            примерно двух столетий: с 5-го по 8-й
            века. Им пришлось оставить свою территорию, когда в 717 году сюда пришли берберы и арабы,
            приникнувшие из Северной Африки.</p>
            <p>Именно новые хозяева Испании придали стране мощный толчок к развитию. В частности, началось
              активное орошение полей, чего ранее не проводилось. В стране принялись выращивать рис,
              финики и другие культуры. Развивались винодельческая, ткацкая сферы, добыча и обработка
              металлов. Активный рост затронул и несколько городов, среди которых выделялись Валенсия
              (основанная римлянами), Толедо, Кордова, Севилья. На Пиренейском полуострове было основано
              несколько мусульманских государств, которые находились под покровительством Дамасского
              халифата.</p>
            <p>8-й век закрепился в истории как начало Реконкисты, представляющей собой освободительное
              движение христиан. Длительные и очень кровопролитные года привели к тому, что только к концу
              15 столетия католицизм победил мусульманство.

              Участие в этом движении принимали все слои населения: ремесленники, торговцы, рыцари и
              другие. Реконкиста принесла вместе с собой образование первого испанского государства,
              получившего название Астурия. Даже сегодня каждый сын короля Испании носит титул принца
              Астурийского.</p>
            <p>10-й век ознаменовался тем, что на Пиренейском полуострове появилось множество мелких
              мусульманских государств, благодаря чему христиане смогли освободить от мавров больше
              крупных городов, включая Толедо и Валенсию. Когда последний эмир передал ключи от страны
              королеве Изабелле, началась новая история Испании, в течение которой страна обзавелась
              огромным количеством колоний по всему миру. Страна стала одной из самых могущественных
              морских держав той эпохи.</p>
          </li>
          <h3 className="h3">История наших дней</h3>
          <li><p>В течение одного 19-го века в стране произошло сразу 5 буржуазных революций. Восставшие
            хотели, чтобы влияние церкви было снижено. Также они намеревались избавиться от остатков
            феодализма, мешавшего развитию капиталистических отношений. Однако из-за несогласованности
            многих действий, слабой поддержки среди населения и низкого уровня организации ни одна из
            революций не добилась поставленных целей.</p>
            <p>Королева Изабелла ll изменила устройство Испании, введя конституционную монархию. На рубеже
              веков страна начала войну против США и проиграла. Это привело к тому, что Испанская империя
              перестала существовать. Ее колонии, расположенные в Северной Америки, перешли под
              протекторат США.</p>
            <p>В течение 1920-1930 годов страну раздирали внутренние противоречия. В это время Испания
              успела пройти период диктатуры, после которой появилась республика. К 1936 году в стране
              вели борьбу между собой националисты и приверженцы католицизма. В результате убийства одного
              из оппозиционных лидеров в Испании разразилась гражданская война, завершившаяся лишь через 3
              года, когда к власти пришел диктатор Франко. Тот оставался во главе страны вплоть до 1975
              года. 35 лет прошли для Испании очень сложно: экономический спад, исключение из множества
              международных организаций. Только активное развитие туризма позволило государству
              существовать это время.</p>
            <p>Сегодня Испания – это пятая страна Европы по уровню промышленного развития. Здесь ведется
              производство автомобилей, электротехники, текстильных изделий. Также в Испании развита
              химическая промышленность. Приход мавров подтолкнул к активному росту сельского хозяйства,
              который не завершился до сих пор. Благодаря этому Испания известна сегодня как производитель
              качественного табака, пшеницы, цитрусовых и многого другого.</p>
          </li>
        </nav>}
        //Регионы и курорты
        info_block_3={<nav>
          <p>Испания — страна разнообразная и многогранная, даже официально она разделена на автономные
            регионы. Каталония, которая уже много лет не теряет надежды отделиться от страны, знаменита
            своей столицей Барселоной с ее городскими пляжами и архитектурой Гауди.

            Южный регион — Андалусия — считается самой «испанской» Испанией. Здесь можно увидеть запрещенную
            в Каталонии корриду, фламенко и древние самобытные испанские города с историей: Севилью, Гранаду
            и родину Антонио Бандераса — Малагу.

            Валенсия знаменита своими самыми широкими в стране песчаными пляжами, а также аутентичной
            паэльей, куда добавляют фасоль. Ну, а в Стране Басков непременно стоит посетить Бильбао с его
            музеями и ресторанами, пляжно-серферский Сан-Себастьян и маленькие портовые городки на
            побережье, куда редко добираются другие туристы.</p>
        </nav>}
        // info_block_3_1={'Второй по популярности после столицы — Брюгге, где можно не только «залечь на дно», как утверждают создатели знаменитого фильма, но и совершить настоящее путешествие в прошлое. Этот город будто застыл в Средневековье: его исторический центр — полноценный музей под открытым небом. Известнейшие достопримечательности — площадь Гроте Маркт, где до сих пор кипит торговля, и нарядная башня Белфорт высотой 83 м.'}
        // info_block_3_2={'Поклонникам искусства стоит увидеть Антверпен, переполненный музеями, галереями, арт-салонами и антикварными лавками. В многоликом городе есть место и старинной архитектуре, и люксовым бутикам (именно здесь нужно покупать бриллианты), и модным ночным клубам. Шарлеруа знаменит ежегодным фестивалем современного танца, Гент — разудалой студенческой атмосферой, Остенде — фешенебельными пляжами, а Льеж — очаровательными соборами и церквями. Все подробности о городах и курортах Бельгии — на странице «Тонкостей туризма».'}
        // //Климат
        info_block_4={<nav>
          <p>Наметанный взгляд метеоролога делит материковую Испанию сразу на три выраженные климатические
            зоны. Север страны (от Галисии до Каталонии) подвержен влиянию Атлантического океана: там мягкая
            влажная зима и умеренно теплое лето. Юго-восточное побережье (Андалусия и Эстремадура) — это,
            понятно, средиземноморский климат с очень мягкой короткой зимой и сухим жарким летом. Осадков
            мало, выпадают они главным образом осенью и зимой. Летом в приморской Испании обычно в районе
            +25...+32 °С, купальный сезон длится с июня по октябрь. Наконец, на центральном плато страны
            климат резко-континентальный, с заметной разницей (порой до 15 °C) между дневной и ночной
            температурой. Лето жаркое и сухое, зима сухая и холодная.</p>
        </nav>}
        actual={'прогноз погоды на основных курортах Бельгии на ближайшие дни.'}
        //Деньги
        info_block_5={<nav>
          <p>В Испании настоящий культ еды — множество ресторанов и закусочных-таверн предлагают приобщиться к
            кухне и винам Испании. Некоторые кафе помимо национальных блюд располагают итальянским,
            мексиканским и азиатским меню. Кроме того в стране существует огромное количество заметно
            отличающихся друг от друга региональных кухонь.</p>
          <p>В стране работают закусочные международной сети — «Макдоналдс», KFS, WOK TO WOLK. За умеренную
            цену перекусить национальными бутербродами можно в заведениях быстрого питания 100 montaditos.
            Хороший способ сэкономить на еде — воспользоваться бизнес-ланчем. На испанском он называется
            «Мenu del dia» и предлагается с 12:00 до 16:00 практически в каждом ресторане. За такую же цену
            в 10-15 EUR можно пообедать и в китайских ресторанах, в которых готовят не только азиатские
            блюда, но и обычную европейскую еду — свежую и хорошего качества. Многие кафе работают по
            принципу буфета без ограничения количества подходов.</p>
          <p>Особого внимания заслуживает национальная гастрономическая культура тапео и ее оплоты —
            тапас-бары. Для испанцев — это не только способ перекусить и выпить, а стиль жизни и процесс
            общения с друзьями. Перед основным блюдом в ресторанах также подают тапас — разнообразные
            закуски, которые нередко сами по себе тянут на сытную трапезу. Традиционные супы не слишком
            распространены, зато гаспаччо можно найти почти повсеместно.</p>
          <p>Самое известное испанское блюдо — паэлья (плов с морепродуктами), также стоит попробовать «хамон»
            — сыровяленую свинину. Весьма распространены блюда из рыбы и морепродуктов. Из алкоголя
            популярны каталонские белые вина «Пенедес» и «Ампурдан», херес из города Херес-де-ла-Фронтера на
            юго-западе Андалусии считается гордостью страны, а на Канарах из лансаротского винограда делают
            отменное полусладкое вино «Мальвазия».

          </p>

        </nav>}
        info_block_5_1={'Банки в Бельгии открыты лишь в будние дни (с 9:30 до 16:00), отделения почты работают дольше: с понедельника по пятницу с 9:00 до 17:45-18:00, по субботам — до полудня. Карты Visa и MasterCard принимают к оплате в больших ресторанах и магазинах, тогда как в такси и мелких лавках расплачиваться ими нельзя. Банкоматы есть в шоппинг-моллах, аэропортах, на ж/д и автовокзалах, а вот на улицах встречаются редко. Чаевые в заведениях общепита (до 10 % от чека) включают в счет автоматически.'}

        //Праздники
        info_block_6={<nav><p>В переводе с испанского fiesta означает праздник и испанцев часто называют «homo
          fiesta». Сложно найти еще одну нацию, которая с таким энтузиазмом и ответственностью относилась бы к
          праздникам. К официально установленным 9 общегосударственным датам в каждом регионе добавляют еще по
          5 выходных дней. Кроме того, в Испании множество тематических фестивалей, привлекающих как своих,
          так и иностранных туристов. Вот только некоторые из них. В Мадриде отмечают Праздник огня
          LUMINARIUS, в Малаге — Праздник гаспачо, Ночь вина и Фестиваль трех культур, в Гранаде — фестиваль
          «Джаз на побережье», в Барселоне — гастрономический фестиваль DEGGUSTO и фестиваль «Ночи Гауди», в
          Каталонии — Фестиваль ренессанса. В Аликанте проводят уличную битву яйцами и мукой, а на Канарах
          стартует Фестиваль воздушных змеев.

          В конце июля в Ас-Невесе проходит праздник Св. Марты. Отмечают его своеобразно: всех желающих их
          друзья и родственники проносят в гробах вокруг церкви Св. Марты.</p><p>Некоторые праздники в Испании
          готовы отмечать неделями. Так, к примеру, в Наварре, празднуют день своего покровителя — Св.
          Фермина. В Памплоне в его честь уже 8 веков подряд проводят фестиваль Сан-Фермин. Это событие, на
          которое съезжаются гости из разных стран, описал Хемингуэй в романе «И восходит солнце». Участники
          фестиваля надевают белые одежды и повязывают красный шейный платок или пояс, поэтому от наплыва
          людей все улицы становятся бело-красными. Кульминацией праздника считается энсьерро — прогон
          быков.</p></nav>
        }
        //City
        img1={prazdn}
        information={<p>Фестиваль Сонар</p>}
        img2={prazdn2}
        information1={<p>Сан-Фермин</p>}
        img3={prazdn3}
        information2={<p>День Каталонии </p>}
        img4={cityPhoto}
        information4={<p>Символ Мадрида</p>}
        img5={cityPhoto1}
        information5={<p>Фонтан Сибелес</p>}
        img6={cityPhoto2}
        information6={<p>Фонтан Сибелес в Мадриде</p>}
        img7={prir1}
        img8={prir2}
        img9={prir3}



        cityName={'Мадрид'}
        info_city={<nav><p>Мадрид, один из самых красивых городов мира, столица, обладающая колоссальным
          культурным и художественным наследием. Здесь так органично сочетаются современные бизнес-центры и
          средневековая архитектура, лучшие ночные клубы Европы, крупнейшие аутлеты, прекрасные парки и,
          конечно же, множество музеев. </p>
          <p>Культура и облик Мадрида отражают его историю как королевского города, центра Испанской империи.
            Королевский дворец, широкие площади и монументальные здания, которые строились монархами,
            ненормально огромные соборы и церкви — всего этого полным-полно в Мадриде. Так же, как и
            средневековых построек. Хотя сегодня город столь же космополитичен, как Берлин или Лондон, и
            настолько же полон энергии.
          </p>
          <p>Мадридцы («мадрильенос») в прежние времена называли себя «гатос» — «коты». Дневная рутина в этом
            городе тянулась медленно и вяло из-за жары; и по сей день в летнем расписании многих мадридских
            контор есть длинный дневной перерыв. Зато вечером... В Мадриде подавляющее число баров на душу
            населения по сравнению с другими европейскими городами и сверхактивная ночная жизнь.
            «Мадрильенос» — точно не жаворонки и привыкли гудеть до 5-7 утра. Так что смело отправляйтесь на
            ночную прогулку по Гран-Виа в выходной день. Но проследите, чтобы ваш отель не оказался рядом с
            каким-нибудь центром клубной жизни.</p></nav>}
        info_city1={<nav><p>Условно Мадрид можно разделить на две основных туристических зоны. Первая — это
          старый традиционный центр, где находится сердце города — старинная площадь Пуэрта-дель-Соль и улица
          Гран-Виа, а также окружающие их районы 17 столетия — Австрийский (построенный во время царствования
          Габсбургов), Аргуэльес, Чуэка, Маласанья и Чамбери.</p>
          <p>Вторая зона — новые кварталы Мадрида: космополитичный Кастельяна с его бизнес-офисами и
            высококлассными гостиницами, строго спланированный и заполненный особняками в стиле баррио район
            Саламанка — вотчина лучших магазинов и ресторанов города, северный район Чамартин с чарующей
            атмосферой жизни богемы и сильных мира сего.</p></nav>}
        // Object1={}
        // Object2={}
        info_city2={'Два главных города России — Петербург и Москва — связаны с Мадридом прямыми рейсами, поэтому попасть в испанскую столицу можно относительно быстро (от 5 часов в воздухе до аэропорта Барахас). Кроме того, в расположенный практически посередине Иберийского полуострова город легко добраться на поезде или автобусе. Из Барселоны курсируют скоростные составы, из Лиссабона или даже Парижа — целые поезда-отели. '}
        lionName={'Плаза-Майор'}
        lionInfo={<p>Своим нынешним обликом Плаза-Майор обязана архитектору Хуану де Вильянуэва, в 1790 году начавшем
          работы по реконструкции площади после серии огромных пожаров. Со времени своего основания Плаза-Майор была
          сценой для многих событий — боев быков, футбольных матчей и даже публичных казней.

          В центре площади возвышается бронзовая статуя Филиппа III (1616 г.), а самым известным зданием является
          Каса-де-ла-Панадерия (булочная), строительство которой началось во время закладки площади.</p>}
        info_city3={<nav><p>Центром Мадрида и всей Испании считается площадь Пуэрта-дель-Соль с тремя статуями и
          старинным Домом почты. Сам факт того, что «Ворота солнца» (как переводится название площади с Испании)
          считаются «пупом» всего Иберийского полуострова — уже достаточный повод для посещения. Однако здесь, помимо
          нулевого километра, находится еще и символ Мадрида — мишка, уже более 40 лет устремляющий тоскливый взгляд на
          земляничное дерево.</p>
          <p>Обрамленная колоннадами центральная площадь Плаза-Майор служила в Средние века в качестве рыночной
            площадки, места проведения корриды и сожжения на костре. Сейчас наиболее примечательные здания на ней — Дом
            булочника, фасад которого украшен фресками, и Дом мясника, где в настоящее время расположены муниципальные
            службы. В центре площади возвышается конная статуя Филиппа III. С восточной стороны Плаза-Майор находится
            площадь Плаза-де-ла-Провинсия, где расположен дворец Санта-Крус, в котором сейчас располагается МИД Испании.
            Поблизости лежит живописная площадь Вилья с красивым зданием муниципалитета, где заседала Консистория и
            находилась тюрьма Ла-Вилья.
          </p>
        </nav>}
        photoLion={lion1}
        lionName1={'Королевский дворец'}
        lionInfo1={<p>Официальная резиденция испанских монархов, Королевский дворец в Мадриде расположен в западной
          части города на месте древней мавританской крепости. Его строительство началось в 1738 г. и было завершено в
          1764 г., в период правления Карла III. Сегодня это одна из главных достопримечательностей испанской столицы:
          фасад дворца — виртуозное смешение архитектурных черт барокко, рококо и Востока, в интерьерах можно
          полюбоваться на полотна Караваджо, Гойи, Тьеполо, Веласкеса и восхититься коллекцией старинного оружия и
          скрипок Страдивари, а затем погулять по великолепным садам — Кампо-дель-Моро и Сабатини, спускающимся к самой
          реке Мансанарес.</p>}
        photoLion1={lion2}
        //Фото города
        Cityimg1={cityPhoto}
        Cityimg2={cityPhoto1}
        Cityimg3={cityPhoto2}
        Cityimg4={cityPhoto3}
        Cityimg5={cityPhoto4}
        informationPhotoCity={'Памятник Филиппу III на Пласа Майор'}
        informationPhotoCity1={'Символ Мадрида'}
        informationPhotoCity3={'Фонтан Сибелес'}
        informationPhotoCity2={'Фонтан Сибелес в Мадриде'}
        informationPhotoCity4={'Эскориал'}
      />
    )

    return (
      <div>
        {/*<div id="main" className="wrapper style3">*/}
        {/*<div className="container">*/}
        {/*<header className="major">*/}
        {/*<h2 id="countryName">Франция</h2>*/}
        {/*</header>*/}
        {/*<div className="row 150%">*/}
        {/*<div className="8u 12u$(medium)">*/}
        {/*<section id="content">*/}
        {/*<a href="#" className="image fit"><img src={img} alt=""/></a>*/}
        {/*</section>*/}
        {/*</div>*/}
        {/*<div className="4u$ 12u$(medium)">*/}

        {/*<section id="sidebar">*/}
        {/*<section>*/}
        {/*<h3 id="countryName">Франция</h3>*/}
        {/*<p id="countryInfo">Элегантная красавица-Франция — это отдых с шармом:*/}
        {/*насыщенная «экскурсионка», отдых на утонченном Лазурном Берегу, знаменитые*/}
        {/*музеи, гастрономические провинции и замки Луары. Кухня, вино и горнолыжные*/}
        {/*курорты — все о Франции: туры, цены, отели и достопримечательности.</p>*/}
        {/*</section>*/}
        {/*<hr/>*/}
        {/*</section>*/}

        {/*</div>*/}
        {/*</div>*/}
        {/*</div>*/}

        {/*</div>*/}
        <section id="HotTurs1">
          <Navbar/>
          {mainContent}
          {/*<Template toggleMap={this.toggleMap} content={mainContent}/>*/}
        </section>
      </div>


    )
  }
}

export default Spain
