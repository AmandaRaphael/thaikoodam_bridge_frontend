import YouTubeEmbed from "../components/YoutubeEmbed/YouTubeEmbed";
import LogoLink from '../components/navigation/LogoLink';

const AboutPage = () => {

    
    return (
      <div className="about">

        <LogoLink/>
        <main className="aboutMain">
          <h2>About the Bridge </h2>
          <p>
            Thaikkudam Bridge is a Kerala-based music band, founded and formed
            in 2013 by Govind Vasantha and Siddharth Menon.The band first
            became famous through the musical show Music Mojo, which is telecast
            on Kappa TV and their own composition "Fish Rock", which became
            popular through social networking sites and YouTube. The band does
            not focus on any specific genre and has composed in many different
            genres. According to sources within the band, the band literally had
            its inception near Thaikkudam Bridge at Thaikkudam, Kochi, in early
            2013. Since then, the band has gone on to win numerous awards,
            perform at over 400 venues and released their own album.
                </p>
               
          <YouTubeEmbed embedId="nZsMJgWXb6M" />
        </main>
      </div>
    );
}

export default AboutPage
