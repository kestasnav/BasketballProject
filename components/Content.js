import Image from 'next/image';
import MJ from './MJ.jpg'
import LBJ from './LBJ.jpg'
import AI3 from './AI3.jpg'
import DR from './Rodman.jpg'

const Content = () => {
    return (
        <div className="content">
            <div className="newsContent">


                <Image max-width="100%" className='MJ' alt="img" src={MJ} />
                <h1 className='title'>M. Jordan pasirase sutarti su Kauno Zalgiriu.</h1>
                <p className='para'>Graikų žiniasklaida skelbia, kad Tel Avivo Maccabi praėjusį sezoną atstovavęs Keenanas Evansas priėmė Kauno Žalgirio pasiūlymą.</p>
                <a href="/" className='readMore'>Skaityti daugiau</a>

            </div>
            <div className="newsContent">

                <Image max-width="100%" className='MJ' alt="img" src={LBJ} />
                <h1 className='title'>L. James pasirase sutarti su Kauno Zalgiriu.</h1>
                <p className='para'>Graikų žiniasklaida skelbia, kad Tel Avivo Maccabi praėjusį sezoną atstovavęs Keenanas Evansas priėmė Kauno Žalgirio pasiūlymą.</p>
                <a href="/" className='readMore'>Skaityti daugiau</a>

            </div>

            <div className="newsContent">


                <Image max-width="100%" height="850px" className='MJ' alt="img" src={DR} />
                <h1 className='title'>D. Rodman pasirase sutarti su Kauno Zalgiriu.</h1>
                <p className='para'>Graikų žiniasklaida skelbia, kad Tel Avivo Maccabi praėjusį sezoną atstovavęs Keenanas Evansas priėmė Kauno Žalgirio pasiūlymą.</p>
                <a href="/" className='readMore'>Skaityti daugiau</a>

            </div>
            <div className="newsContent">

                <Image max-width="100%" className='MJ' alt="img" src={AI3} />
                <h1 className='title'>A. Iverson pasirase sutarti su Kauno Zalgiriu.</h1>
                <p className='para'>Graikų žiniasklaida skelbia, kad Tel Avivo Maccabi praėjusį sezoną atstovavęs Keenanas Evansas priėmė Kauno Žalgirio pasiūlymą.</p>
                <a href="/" className='readMore'>Skaityti daugiau</a>

            </div>
        </div>

    )
}

export default Content