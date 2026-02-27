import "../styles/Body.css"
import "../styles/naturalEtape.css"
import "../styles/miniNavEtape.css"


import { useRef, useEffect } from "react"
import { useBodyAnimations } from "../animations/useBodyAnimations"
import { useEtapeAnimations } from "../animations/useEtapeAnimations"


function Title() {
    return <h1 className="title">Vanille de Madagascar</h1>
}

function Description() {
    return (
        <div>
            <h3 className="description">
                Les bourbons de Madagascar cultivés en zone cotière
            </h3>
            <h3>prélevés par des producteurs locaux</h3>
            <h3>et 100% naturels</h3>
        </div>
    )
}

function NavBarEtape({ navRef }) {
    return (
        <div ref={navRef} className="nav-etape">
            <span>Echaudage</span>
            <span>Sechage</span>
            <span>Affinage</span>
        </div>
    )
}

function NaturalEtapeLiane() {
    return (
        <section className="natural-etape" data-image="/vanilla-liane.jpg">
            <h4>Vanille en liane</h4>
            <p>Explicationssssssss</p>
            <p>Explicationssssssss</p>
            <p>Explicationssssssss</p>
        </section>
    )
}

function NaturalEtapePollen()
{
    return (
        <section className="natural-etape" data-image="/vanilla-liane.jpg">
            
            <div className="natural-text">
                <h4>Pollenisation </h4>
                <p>Manuel</p>
                <p>Explicationssssssss</p>
                <p>Explicationssssssss</p>
            </div>
        </section>
    )
}
function NaturalEtapeGousse()
{
    return (
        <section className="natural-etape" data-image="/vanilla-liane.jpg">
            
            <div className="natural-text">
                <h4>Gousse </h4>
                <p>Manuel</p>
                <p>Explicationssssssss</p>
                <p>Explicationssssssss</p>
            </div>

        </section>
    )
}

function EtapeSectionNatural() 
    {
    const imageRef = useRef(null)

    return (
        <section className="etape-layout">

            <div className="etape-progress">
                <span className="dot active"></span>
                <span className="dot"></span>
                <span className="dot"></span>
            </div>

            <div className="etape-content">
                <NaturalEtapeLiane />
                <NaturalEtapePollen />
                <NaturalEtapeGousse />
            </div>

            <div className="etape-image" ref={imageRef}>
                <img src="/vanilla-liane.jpg" alt="" />
            </div>

        </section>
    )
}

function ArtisanalEtapeEchaudage() 
{
    return(
        <section className="artisanal-etape" data-image="">
            <h4>1-Echaudage</h4>
            <p>Explicationssssssss</p>
            <p>Explicationssssssss</p>
            <p>Explicationssssssss</p>
        </section>
    )
}

function ArtisanalEtapeSechage() 
{
    return(
        <section className="artisanal-etape" data-image="">
            <h4>2-Sechage</h4>
            <p>Explicationssssssss</p>
            <p>Explicationssssssss</p>
            <p>Explicationssssssss</p>
        </section>
    )
}

function ArtisanalEtapeAffinage() 
{
    return(
        <section className="artisanal-etape" data-image="">
            <h4>3-Affinage</h4>
            <p>Explicationssssssss</p>
            <p>Explicationssssssss</p>
            <p>Explicationssssssss</p>
        </section>
    )
}

function EtapeSectionArtisanal()
{
    const imageRef = useRef(null)

    return (
        <section className="etape-layout">

            <div className="etape-progress">
                <span className="dot active"></span>
                <span className="dot"></span>
                <span className="dot"></span>
            </div>

            <div className="etape-content">
                <ArtisanalEtapeEchaudage />
                <ArtisanalEtapeSechage />
                <ArtisanalEtapeAffinage />
            </div>

            <div className="etape-image" ref={imageRef}>
                <img src="/vanilla-liane.jpg" alt="" />
            </div>

        </section>
    )

}

function Items() {
    return (
        <>
            <div>
                <h2>Grade A (Première qualité)</h2>        
                <h3>Gourmet</h3>
                <p>Explicationsss</p>
                <p>Nos tarifs pour les produits Gourmet :</p>
                    <div>
                        <p> 12-17 cm : 100$ FOB</p>
                        <p> 17-18cm : 150$ FOB</p>
                    </div>
            </div>

            <div>
                <h2>Grade B (Deuxième qualité)</h2>        
                <h3>TK noir</h3>
                <p>Explicationsss</p>
                <p>Nos tarifs pour les produits TK noir :</p>
                    <div>
                        <p> 80$ </p>
                       
                    </div>
            </div>
        </>
    )
}


function Body() {

    const heroRef = useRef(null)
    const navRef = useRef(null)
    const etapeZoneRef = useRef(null)

    useBodyAnimations(heroRef, navRef, etapeZoneRef)

    return (
        <>
            <NavBarEtape navRef={navRef} />

            <section ref={heroRef} className="body">
                <Title />
                <Description />
            </section>

            <section ref={etapeZoneRef} className="etape-zone">
                <h2>Étapes de préparation</h2>
                <EtapeSectionNatural />
                <EtapeSectionArtisanal />
            </section>

            <section className="resultat-vanille">
                <img src="" alt="" />
                <h2>Tout ces étapes résulte à l'obtention des produits vendus sur notre site</h2>
                <h3>Vanille noire et aromatique 100% naturel ayant un taux de vanilline de 31% à 35%</h3>
            </section>

            <section className="items">
                <Items />
            </section>
        </>
    )
}

export default Body