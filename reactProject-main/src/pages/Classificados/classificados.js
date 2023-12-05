import { Link } from 'react-router-dom';

/* Styles and Bootstrap */
import 'bootstrap/dist/css/bootstrap.min.css';
import './classificados.css';
import '../../assets/stylesFull.css';

/* Importing images */
import imgPorsche from '../../assets/imgs/porscheSVG.svg'
import imgOldMercedes from '../../assets/imgs/oldMercedesSVGReduced.svg'
import imgSilvia from '../../assets/imgs/silviaSVGReduced.svg'
import imgBmwRoadTrip from '../../assets/imgs/bmwRoadTripSVGReduced.svg'
import imgUser from '../../assets/imgs/userSVGReduced.svg'

function Classificados() {
    return(
        <>
        <section className="fullAlignFlex espacoTopo espacoLateral">
            <div className="align-self-center">

                <div className="row newsBorder">
                    <div className="col-12 col-lg-6"> 
                    <Link to="/classificados">
                        <img src={imgPorsche} alt="Porsche supera record!" className="widthFull newsImgStyle"></img>
                    </Link>
                    </div>
                    <div className="col-12 col-lg-6">
                        <p className="newsParagraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porta mi eu nisi pharetra suscipit. Donec ferme
                        ntum sapien leo, fermentum interdum dolor fringilla et. Donec vulputate velit vitae sem venenatis, eu consequat neque pharetra. Maecenas 
                        porttitor egestas risus ac ultrices. Suspendisse gravida libero arcu, eu gravida massa maximus a. Aliquam faucibus rhoncus vestibulum. Donec e
                        get venenatis lacus, eu bibendum lacus. Cur</p>
                    </div>
                </div>     

                <div className="row newsBorder espacoTopo">
                        <div className="col-12 col-lg-6">
                            <p className="newsParagraph">Fusce id elit lorem. Proin volutpat tincidunt scelerisque. Aliquam erat volutpat. Aenean ultrices quam eu congue volutpat. Maecen
                            as pretium nisl eros. Cras mattis justo nec rhoncus sollicitudin. Pellentesque volutpat eu risus vitae aliquam. Donec facilisis quis ipsum sed laoreet. Nullam luctus
                             sit amet massa ut suscipit. Etiam blandit nisl libero, eleifend faucibus tortor ultricies non. Quisque nec velit et diam faucibus volutpat. Suspendisse lacinia augue orci, 
                            eu finibus diam venenatis fringilla. Quisque at nisl semper, venenatis justo eget, dapibus ipsum. Fusce a metus nec enim pellentesque porttitor sit amet ut magna.
                            Fusce id elit lorem. Proin volutpat tincidunt scelerisque. Aliquam erat volutpat. Aenean ultrices quam eu congue volutpat. Maecen
                            as pretium nisl eros. Cras mattis justo nec rhoncus sollicitudin. Pellentesque volutpat eu risus vitae aliquam. Donec facilisis quis ipsum sed laoreet. Nullam luctus
                             sit amet massa ut suscipit. Etiam blandit nisl libero, eleifend faucibus tortor ultricies non. Quisque nec velit et diam faucibus volutpat. Suspendisse lacinia augue orci, 
                            eu finibus diam venenatis fringilla. Quisque at nisl semper, venenatis justo eget, dapibus ipsum. Fusce a metus nec enim pellentesque porttitor sit amet ut magna
                            mper, venenatis justo eget, dapibuin. Pellentesque volutpat eu risus vitae aliquam. Donec facilisis quis ipsum sed laoreet. Nullam luctus
                             sit amet massa ut suser</p>   
                        </div>   
                        <div className="col-12 col-lg-6">
                            <Link to="/classificados">
                                <img src={imgOldMercedes} alt="Mercedes Antiga" className="newsImgStyle"></img>
                            </Link>                          
                        </div>  
                </div>


                <div className="row newsBorder espacoTopo">
                        <div className="col-12 col-lg-6">
                            <Link to="/classificados">
                                <img src={imgSilvia} alt="Silvia JDM" className="newsImgStyle"></img>
                            </Link>                          
                            </div>  
                            <div className="col-12 col-lg-6">
                                <p className="newsParagraph">Fusce id elit lorem. Proin volutpat tincidunt scelerisque. Aliquam erat volutpat. Aenean ultrices quam eu congue volutpat. Maecen
                                as pretium nisl eros. Cras mattis justo nec rhoncus sollicitudin. Pellentesque volutpat eu risus vitae aliquam. Donec facilisis quis ipsum sed laoreet. Nullam luctus
                                sit amet massa ut suscipit. Etiam blandit nisl libero, eleifend faucibus tortor ultricies non. Quisque nec velit et diam faucibus volutpat. Suspendisse lacinia augue orci, 
                                eu finibus diam venenatis fringilla. Quisque at nisl semper, venenatis justo eget, dapibus ipsum. Fusce a metus nec enim pellentesque porttitor sit amet ut magna.
                                Fusce id elit lorem. Proin volutpat tincidunt scelerisque. Aliquam erat volutpat. Aenean ultrices quam eu congue volutpat. Maecen
                                as pretium nisl eros. Cras mattis justo nec rhoncus sollicitudin. Pellentesque volutpat eu risus vitae aliquam. Donec facilisis quis ipsum sed laoreet. Nullam luctus
                                sit amet massa ut suscipit.</p>   
                        </div>   
                </div>



                <div className="row newsBorder espacoTopo">
                    <div className="col-12">
                    <Link to="/classificados">
                        <img src={imgBmwRoadTrip} alt="Viagem de BMW" className="widthFull newsImgStyle"></img>
                    </Link>
                    </div>
                    <div className="col-12">
                        <p className="newsParagraph">Confira as imagens da nossa Road Trip !!</p>     
                    </div>
                </div>  
                </div>
        </section>
        </>
        
    );
}

export default Classificados;